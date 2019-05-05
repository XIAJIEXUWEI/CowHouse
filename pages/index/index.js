//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        toggleDelay: false,
        list: [
            {
                title: "Forbes lists the top 100"
            },
            {
                title: "The Top25 richest women in China"
            }
        ],
        animation: false
    },
    //事件处理函数

    onLoad: function() {

    },
    //
    forbes() {
        wx.navigateTo({
            url: '/pages/Forbes/Forbes',
        })
    },

    toggleDelay() {
        var that = this;
        that.setData({
            toggleDelay: true
        })
        setTimeout(function () {
            that.setData({
                animation: true
            })
        }, 1000)
    }
})