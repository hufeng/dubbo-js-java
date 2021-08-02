"use strict";

const { DubboService, s } = require("apache-dubbo-service");
const { Zk } = require("apache-dubbo-registry");
const HelloService = require("./hello-service");

console.log(s);

module.exports = function startDubboService() {
  return new DubboService({
    registry: Zk({ connect: "localhost:2181" }),
    services: {
      HelloService,
    },
    dubboSetting: s.Setting(s.group("a"), s.version("1.0.0")),
  });
};
