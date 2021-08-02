'use strict';
const startDubboService = require('./app/dubbo-service');

class AppHook {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    const dubbo = startDubboService();
    await dubbo.ready();
    console.log('dubbo service ready....');
  }
}

module.exports = AppHook;
