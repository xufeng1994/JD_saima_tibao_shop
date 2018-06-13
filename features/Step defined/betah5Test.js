let { defineSupportCode } = require('cucumber')
const { driver } = require('../surpport/web_driver');
let { assert } = require('assert')
let { loginPage } = require('../../compants/loginPage')
defineSupportCode(function ({ Given, Then, When }) {
    Given('登陆赛马', async function () {
        await driver.get("http://swifthorse.jd.com/")
        
    });

    When('点击登录按钮，跳转到登录页面', async function () {
        
        return driver.findElement({css: ".login"}).click()

    });
    Then('输入帐号', async function () {
        await driver.findElement({id: "username"}).sendKeys("xufeng9")
    });
    Then('输入密码', async function () {
        await driver.findElement({ id: "password"}).sendKeys("fengzi@1994O4O4")
    });
    Then('点击登陆', async function () {
        return driver.findElement({className: "formsubmit_btn"}).click()
    });
})
