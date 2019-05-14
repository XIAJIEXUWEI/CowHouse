//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        toggleDelay: false,
        list: [
            {
                index: "forbesList",
                title: "Forbes lists the top 100"
            },
            {
                index: "richestWomenCn",
                title: "The Top25 richest women in China"
            }
        ],
        animation: false
    },
    //事件处理函数

    onLoad: function() {

    },
    //
    forbes(e) {
        var that = this;
        var title = that.data.list[e.currentTarget.dataset.index].title
        var index = that.data.list[e.currentTarget.dataset.index].index
        wx.navigateTo({
            url: '/pages/Forbes/Forbes?title=' + title + '&index=' + index,
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