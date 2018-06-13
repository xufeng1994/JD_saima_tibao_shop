@jdfushi
Feature: 京东服饰pc端
author:徐枫
date:2018-4-29


    Background: 打开京东首页

        Given 打开京东首页
    Scenario: 京东服饰PC-首页入口

        When 点击京东服饰点击位
        Then 打开新的标签页，跳转到京东服饰内页
        Then 鼠标移动到风格尚选，自动展示下列楼层：热门穿搭，秋冬美裙，良品衬衫，达人精选

