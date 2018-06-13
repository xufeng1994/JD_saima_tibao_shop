# -*- coding:utf-8 -*-

from uiautomator import device as d 
def up_keybroad():
    d.click(500,500) #点击当前输入法框空白位置调起键盘
    time.sleep(1)
    d.click(1000,1140) #收起键盘
    time.sleep(1)

def change():
    d.press().menu()# 点击菜单切换键
    time.sleep(1)
    d.click(500.1000)#点击切换到另一个页面
    time.sleep(2)

def set_date():
    d(text="设置日期").click()#点击设置日期
    time.sleep(1)
    d.swipe(890,1440,890,1280,step = 10)#向上滚动一天
    time.sleep(1)
    d.click(800,1800)#确定
    time.sleep(1)

    up_keybroad()