@login
Feature: login
mock测试
author：徐枫
date：2018-3-20

    Background: 登陆赛马
        Given 登陆赛马
    Scenario: 点击登陆进入登陆页面
        Then 点击登录按钮，跳转到登录页面
        Then 输入帐号
        Then 输入密码
        Then 点击登陆
        