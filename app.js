//app.js

wx.cloud.init()
const db = wx.cloud.database()

App({
    onLaunch: function() {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        //获取用户手机信息
        wx.getSystemInfo({
            success: e => {
                this.globalData.StatusBar = e.statusBarHeight;
                this.globalData.screenWidth = e.screenWidth;
                this.globalData.screenHeight = e.screenHeight;
                let custom = wx.getMenuButtonBoundingClientRect();
                this.globalData.Custom = custom;
                this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
            }
        })

    },
    globalData: {
        userInfo: null
    },

    //封装获取数据函数
    cloudGet(collection, doc) {
        return new Promise((res, rej) => {
            db.collection(collection).doc(doc).get({
                success(msg){
                    res(msg)
                },
                fail(err) {
                    rej(err)
                }
            })
        })
    },
})