package org.apache.dubbojs.service;

public class HelloServiceImpl implements HelloService{
    @Override
    public String sayHello() {
        return "hello world";
    }
}
