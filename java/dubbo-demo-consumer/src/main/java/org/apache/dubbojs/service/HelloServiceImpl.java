package org.apache.dubbojs.service;

import org.apache.dubbojs.service.model.User;

import java.util.Arrays;

public class HelloServiceImpl implements HelloService{
    @Override
    public String sayHello() {
        return "hello world";
    }

    @Override
    public User getUser() {
        User user = new User();
        user.setId(1);
        user.setName("dubbojs");
        user.setLikes(Arrays.asList("js", "java", "go"));
        return user;
    }
}
