// pages/Forbes/Forbes.js

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        top: app.globalData.StatusBar,
        height: app.globalData.CustomBar,
        title: '',
        forbesList: null

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.showLoading({
            title: '加载中...',
        })
        if (options.index) {
            app.cloudGet(options.index, options.index)
                .then(res => {
                    wx.hideLoading()
                    that.setData({
                        forbesList: res.data.list
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }

        if (options.title) {
            this.setData({
                title: options.title
            })
        }

    },
    //
    animation(e) {
        var that = this;
        var bool = this.data.forbesList[e.currentTarget.dataset.index]
        if (!bool.revolve) {
            this.data.forbesList[e.currentTarget.dataset.index].revolve = !bool.revolve
            this.setData({
                forbesList: this.data.forbesList
            })
            setTimeout(function() {
                that.data.forbesList[e.currentTarget.dataset.index].spread = !bool.spread;
                that.setData({
                    forbesList: that.data.forbesList
                })
            }, 500, bool)
        } else {
            that.data.forbesList[e.currentTarget.dataset.index].spread = !bool.spread;
            that.setData({
                forbesList: that.data.forbesList
            })
            setTimeout(function() {
                that.data.forbesList[e.currentTarget.dataset.index].revolve = !bool.revolve
                that.setData({
                    forbesList: that.data.forbesList
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