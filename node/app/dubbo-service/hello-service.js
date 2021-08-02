"use strict";
const java = require("js-to-java");

module.exports = {
  dubboInterface: "org.apache.dubbojs.service.HelloService",
  methods: {
    sayHello() {
      return "hello world";
    },
    getUser() {
      return java.combine("org.apache.dubbojs.service.model.User", {
        id: java.Integer(1),
        name: java.String("dubbojs"),
        likes: java.List([
          java.String("js"),
          java.String("java"),
          java.String("go"),
        ]),
      });
    },
  },
};
