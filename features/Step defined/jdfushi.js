const { defineSupportCode } = require("cucumber");
const { assert } = require("assert");
defineSupportCode(function ({ Given, When, Then }) {

    Given('打开京东首页', async function () {
        await this.web.get("http://www.jd.com")
        await this.web.sleep(3000)
    });
    When('点击京东服饰点击位', async function () {
        await this.web.findElement({ css: '#navitems-group2 > li.fore2>a' }).click()
    });
    Then('打开新的标签页，跳转到京东服饰内页', async function () {
        this.web.getAllWindowHandles().then(async function (handles) {
            await this.web.window().switchTo(handles[1]).then(function () {
                let test = this.web.findElement({ id: "channel" }).getText()
                return assert.deepEqual(test, "京东服饰")
            })
        })
       
    });
})