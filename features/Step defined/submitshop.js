var { Given, When, Then } = require('cucumber')

const { defineSupportCode } = require("cucumber");
const { driver } = require('../surpport/web_driver');
defineSupportCode(function ({ Given,When,Then }) {
    When('点击我的活动，进入我的活动界面', async function () {
        await driver.sleep(2000)
        await driver.findElement({ css: "div#app>div>div>button.el-button.float-right.el-button--primary" }).click()

    });
    When('点击进入活动，进入活动内页', async function () {
        await driver.sleep(3000)
        await driver.findElement({ xpath: '//*[@id="app"]/div/div[2]/div[3]/table/tbody/tr[1]/td[6]/div/button[1]' }).click()
    });
    When('点击去提报，进入提报跳转到提报页', async function () {
        await driver.sleep(5000)
        await driver.findElement({ xpath: '//*[@id="app"]/div/div[2]/div[3]/table/tbody/tr[1]/td[5]/div/div/button[5]' }).click()
    });
    When('点击去报名，跳转到新标签报名页', async function () {
        await driver.sleep(5000)
        let handle = await driver.getAllWindowHandles()
        // console.log("all_handles" + handles)
        // let current_handles = driver.getWindowHandle()
        // for handle in all_handles:
        //     if current_handles ==handle:
        //         continue;
        //     else:
        //      await driver = driver.switchTo()window(handle)
        // console.log("111111"+handle)
        // console.log("hendles length " + handle.length)

        await driver.switchTo().window(handle[1])
        await driver.findElement({ css: "div.act-item-rt.clear-fix>ul:nth-child(4)>li:nth-child(1)" }).click()

        // await driver.sleep(1000)
        // driver.getAllWindowHandles().then(async function(handles){
        //     console.log("111111"+handles)
        // })
        // driver.getAllWindowHandles().then(async function (handles) {

        //     console.log("handles"+handles)
        //     await driver.switchTo().window(handles[1]).then(async function () {

        //         await driver.findElement({ css: "div.act-item-rt.clear-fix>ul:nth-child(4)>li:nth-child(1)" }).click()
        //     })
        // })
    });
    When('点击上传广告图片-{string}', async function (string) {
        // driver.getAllWindowHandles().then(async function (handles) {
        //     await driver.switchTo().window(handles[2]).then(async function () {
        //         await driver.sleep(1000)
        //         await driver.actions().mouseMove(driver.findElement({ css: "div:nth-child(1)>div>div>div.ivu-col.ivu-col-span-12>div>div.upload-img.ivu-upload" })).click().perform();
        //         await driver.findElement({ css:"div:nth-child(1)>div>div>div.ivu-col.ivu-col-span-12>div>div.upload-img.ivu-upload>div>input" }).sendKeys(string)
        //         // driver.findElement({ css:"div:nth-child(1)>div>div>div.ivu-col.ivu-col-span-12>div>div.upload-img.ivu-upload" }).click()
        //     })
        // })

        await driver.sleep(5000)
        let handles = await driver.getAllWindowHandles()
        // console.log("111111"+handles)
        // console.log("hendles length " + handles.length)
        await driver.switchTo().window(handles[2])
        await driver.sleep(5000)
        // await driver.actions().mouseMove(driver.findElement({ css: "div:nth-child(1)>div>div>div.ivu-col.ivu-col-span-12>div>div.upload-img.ivu-upload" })).click().perform();
        await driver.findElement({ css:"div:nth-child(1)>div>div>div.ivu-col.ivu-col-span-12>div>div.upload-img.ivu-upload>div>input" }).sendKeys(string)
        
    });
    When('输入店铺id-{string}', async function (string) {
        await driver.sleep(1000)
        await driver.findElement({ css: "div.form-item-13.ivu-form-item.ivu-form-item-required>div>div>div.ivu-col.ivu-col-span-12>div>input" }).sendKeys(string)
    });                                  
    When('输入利益点-{string}', async function (string) {
        await driver.sleep(1000)

        await driver.findElement({ css: "div.form-item-1.ivu-form-item.ivu-form-item-required>div>div>div.ivu-col.ivu-col-span-12>div>input" }).sendKeys(string)

    });
    When('上传兜底图-{string}', async function (string) {
        await driver.sleep(1000)
        await driver.findElement({ css:"div:nth-child(4)>div>div>div.ivu-col.ivu-col-span-12>div>div.upload-img.ivu-upload>div>input"}).sendKeys(string)
    });
    When('点击立即报名', async function () {
        await driver.sleep(1000)
        await driver.findElement({ css:"div.enroll-submit>button" }).click()
    });
    When('点击再报名', async function () {
        await driver.sleep(1000)
        await driver.findElement({ css:"button.qr.ivu-btn.ivu-btn-primary.ivu-btn-large" }).click() 
        await driver.quit()
    });
})
