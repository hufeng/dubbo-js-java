'use strict';

const { DubboService } = require('apache-dubbo-service');
const { Zk } = require('apache-dubbo-registry');
const HelloService = require('./hello-service');

module.exports = function startDubboService() {
  return new DubboService({
    registry: Zk({ connect: 'localhost:2181' }),
    services: {
      HelloService,
    },
  });
};
