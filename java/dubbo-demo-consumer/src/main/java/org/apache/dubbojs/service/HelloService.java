package org.apache.dubbojs.service;

import org.apache.dubbojs.service.model.User;

public interface HelloService {
    String sayHello();

    User getUser();
}
