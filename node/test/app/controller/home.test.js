'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const { Dubbo } = require('apache-dubbo-consumer');
const { Zk } = require('apache-dubbo-registry');

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

  });


  it('test dubbo invoke', async () => {
    const dubbo = new Dubbo({
      application: { name: 'dubbo-test' },
      registry: Zk({ connect: 'localhost:2181' }),
      services: {
        HelloService: dubbo => dubbo.proxyService({
          dubboInterface: 'org.apache.dubbojs.service.HelloService',
          methods: {
            sayHello() {
              return [];
            },
          },
        }),
      },
    });
    await dubbo.ready();
    const { res, err } = await dubbo.service.HelloService.sayHello();
    assert(res === 'hello world');
    assert(err === null);
  });
});
