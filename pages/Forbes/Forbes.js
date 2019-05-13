// pages/Forbes/Forbes.js

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        top: app.globalData.StatusBar,
        height: app.globalData.CustomBar,
        forbesInfo: [{
                src: "cloud://start-project-8582df.7374-start-project-8582df/Jeff Bezos.png",
                backTxt: "亚马逊CEO\n身家净值：1310(亿美元)",
                nameTxt: "Jeff Bzeos",
                revolve: false,
                spread: false,
            },
            {
                src: "cloud://start-project-8582df.7374-start-project-8582df/Jeff Bezos.png",
                backTxt: "亚马逊CEO\n身家净值：1310(亿美元)",
                nameTxt: "Jeff Bzeos",
                revolve: false,
                spread: false,
            },
            {
                src: "cloud://start-project-8582df.7374-start-project-8582df/Jeff Bezos.png",
                backTxt: "亚马逊CEO\n身家净值：1310(亿美元)",
                nameTxt: "Jeff Bzeos",
                revolve: false,
                spread: false,
            },
            {
                src: "cloud://start-project-8582df.7374-start-project-8582df/Jeff Bezos.png",
                backTxt: "亚马逊CEO\n身家净值：1310(亿美元)",
                nameTxt: "Jeff Bzeos",
                revolve: false,
                spread: false,
            },
            {
                src: "cloud://start-project-8582df.7374-start-project-8582df/Jeff Bezos.png",
                backTxt: "亚马逊CEO\n身家净值：1310(亿美元)",
                nameTxt: "Jeff Bzeos",
                revolve: false,
                spread: false,
            },
            {
                src: "cloud://start-project-8582df.7374-start-project-8582df/Jeff Bezos.png",
                backTxt: "亚马逊CEO\n身家净值：1310(亿美元)",
                nameTxt: "Jeff Bzeos",
                revolve: false,
                spread: false,
            },
            {
                src: "cloud://start-project-8582df.7374-start-project-8582df/Jeff Bezos.png",
                backTxt: "亚马逊CEO\n身家净值：1310(亿美元)",
                nameTxt: "Jeff Bzeos",
                revolve: false,
                spread: false,
            },
        ],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    //
    animation(e) {
        var that = this;
        var bool = this.data.forbesInfo[e.currentTarget.dataset.index]
        if (!bool.revolve) {
            this.data.forbesInfo[e.currentTarget.dataset.index].revolve = !bool.revolve
            this.setData({
                forbesInfo: this.data.forbesInfo
            })
            setTimeout(function() {
                that.data.forbesInfo[e.currentTarget.dataset.index].spread = !bool.spread;
                that.setData({
                    forbesInfo: that.data.forbesInfo
                })
            }, 500, bool)
        } else {
            that.data.forbesInfo[e.currentTarget.dataset.index].spread = !bool.spread;
            that.setData({
                forbesInfo: that.data.forbesInfo
            })
            setTimeout(function() {
                that.data.forbesInfo[e.currentTarget.dataset.index].revolve = !bool.revolve
                that.setData({
                    forbesInfo: that.data.forbesInfo
                })
            }, 500, bool)
        }
    },
    //
    detail() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})