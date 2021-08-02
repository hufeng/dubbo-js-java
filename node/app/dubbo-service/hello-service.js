'use strict';

module.exports = {
  dubboInterface: 'org.apache.dubbojs.service.HelloService',
  methods: {
    sayHello() {
      return 'hello world';
    },
  },
};
