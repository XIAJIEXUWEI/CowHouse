//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        isContent: true,
        list: [{
            title: "Forbes lists the top 100"
        }, ]
    },
    //事件处理函数

    onLoad: function() {

    },
    //
    Forbes(){
        wx.navigateTo({
            url: '/pages/Forbes/Forbes',
        })
    },

    goContent() {
        this.setData({
            isContent: false
        })
    }
})