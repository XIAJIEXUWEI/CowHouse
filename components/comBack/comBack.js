// components/Forbes/Fornes.js
const app = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        top: app.globalData.StatusBar,
        height: app.globalData.CustomBar
    },

    /**
     * 组件的方法列表
     */
    methods: {
        comBack() {
            wx.navigateBack({
                delta: 1,
            })
        }
    }
})
