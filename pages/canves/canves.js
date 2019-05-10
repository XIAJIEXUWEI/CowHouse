// pages/canves/canves.js

const ctx = wx.createCanvasContext('canves')

let position = {
    x: 0,
    y: 0,
    vx: 2,
    vy: 2
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.interval = setInterval(this.canvas, 18)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },
    canvas: function () {
        var p = position
        p.x += p.vx
        if (p.x >= 150) {
            p.vx = -2
        }
        if (p.x <= 0) {
            p.vx = 2
        }
        /**
     * 画布封装
     */

        //贝塞尔曲线
        function bezierCurve(mx, my, bx, by, cx, cy, tx, ty, bodSty, backSty) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(mx + p.x, my)
            ctx.bezierCurveTo(bx + p.x, by, cx + p.x, cy, tx + p.x, ty)
            ctx.setStrokeStyle(bodSty)
            ctx.setFillStyle(backSty)
            ctx.fill()
            ctx.stroke()
            ctx.restore()
        }

        //圆
        function arc(ax, ay, r, start, end, bodSty, backSty) {
            ctx.save()
            ctx.beginPath()
            ctx.arc(ax + p.x, ay, r, start, end * Math.PI)
            ctx.setStrokeStyle(bodSty)
            ctx.setFillStyle(backSty)
            ctx.fill()
            ctx.stroke()
            ctx.restore()
        }
        //直线
        function moveTo(sx, sy, ex, ey, bodSty) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(sx + p.x, sy)
            ctx.lineTo(ex + p.x, ey)
            ctx.setStrokeStyle(bodSty)
            ctx.stroke()
            ctx.restore()
        }
        //左手
        function head(mx, my, lx, ly, tx, ty, ox, oy, bx, by, cx, cy, ex, ey, backSty, bodSty) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(mx + p.x, my)
            ctx.lineTo(lx + p.x, ly)
            ctx.lineTo(tx + p.x, ty)
            ctx.lineTo(ox + p.x, oy)
            ctx.bezierCurveTo(bx + p.x, by, cx + p.x, cy, ex + p.x, ey)
            ctx.setFillStyle(backSty)
            ctx.setStrokeStyle(bodSty)
            ctx.fill()
            ctx.stroke()
            ctx.restore()
        }
        //矩形
        function rect(x, y, dx, dy, bodSty, backSty) {
            ctx.save()
            ctx.beginPath()
            ctx.rect(x + p.x, y, dx, dy)
            ctx.setStrokeStyle(bodSty)
            ctx.setFillStyle(backSty)
            ctx.fill()
            ctx.stroke()
            ctx.restore()
        }
        //脚
        function footer(sx, sy, lx, ly, tx, ty, bx, by, cx, cy, ex, ey, backSty, bodSty) {
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(sx + p.x, sy)
            ctx.lineTo(lx + p.x, ly)
            ctx.lineTo(tx + p.x, ty)
            ctx.bezierCurveTo(bx + p.x, by, cx + p.x, cy, ex + p.x, ey)
            ctx.setFillStyle(backSty)
            ctx.setStrokeStyle(bodSty)
            ctx.fill()
            ctx.stroke()
            ctx.restore()
        }

        /**
         * 
         */
        
        //左手
        head(40, 260, 70, 245, 90, 280, 80, 310, 70, 310, 40, 275, 40, 260, 'rgb(2,155,225)', '#000')
        arc(40, 240, 25, 0, 2, '#000', '#fff')
        //头
        arc(150, 200, 100, 0, 2, '#000', 'rgb(2,155,225)')

        bezierCurve(150, 135, 300, 135, 250, 300, 150, 295, '#000', '#fff')
        bezierCurve(150, 135, 0, 135, 50, 300, 150, 295, '#000', '#fff')

        bezierCurve(150, 265, 170, 265, 230, 240, 230, 205, '#000', '#fff')
        bezierCurve(150, 265, 130, 265, 70, 240, 70, 205, '#000', '#fff')

        //眼睛
        arc(125, 135, 25, 0, 2, '#000', '#fff')

        arc(175, 135, 25, 0, 2, '#000', '#fff')

        bezierCurve(130, 140, 135, 128, 140, 128, 145, 140, '#000', '#fff')
        bezierCurve(155, 140, 160, 128, 165, 128, 170, 140, '#000', '#fff')
        //鼻子
        arc(150, 170, 20, 0, 2, '#000', 'rgb(220,0,38)')

        arc(143, 163, 5, 0, 2, 'rgb(220,0,38)', '#fff')
        //胡须
        moveTo(70, 185, 120, 195, '#000')
        moveTo(65, 210, 120, 210, '#000')
        moveTo(70, 235, 120, 225, '#000')
        moveTo(180, 195, 230, 185, '#000')
        moveTo(180, 210, 230, 210, '#000')
        moveTo(180, 225, 215, 235, '#000')

        moveTo(150, 190, 150, 265, '#000')

        //舌头
        bezierCurve(195, 249, 160, 200, 220, 180, 225, 220, '#000', 'rgb(234,119,26)')
        bezierCurve(195, 248, 205, 245, 225, 230, 225, 219, '#000', 'rgb(234,119,26)')
        moveTo(208, 220, 215, 236, '#000')

        //身体
        rect(85, 285, 130, 120, '#000', 'rgb(2,155,225)')
        bezierCurve(214, 275, 230, 300, 230, 350, 214, 405, '#000', 'rgb(2,155,225)')
        bezierCurve(86, 275, 70, 300, 70, 350, 86, 405, '#000', 'rgb(2,155,225)')
        //肚子
        bezierCurve(151, 275, 230, 280, 240, 390, 151, 390, '#000', '#fff')
        bezierCurve(151, 275, 70, 280, 60, 390, 151, 390, '#000', '#fff')
        //右手
        footer(215, 315, 200, 330, 160, 330, 160, 310, 180, 295, 192, 288, 'rgb(2,155,225)', '#000')

        //口袋
        bezierCurve(100, 330, 110, 390, 190, 390, 200, 330, '#000', '#fff')
        moveTo(100, 330, 200, 330, '#000')
        //领带
        rect(80, 275, 140, 10, '#000', 'rgb(220,0,38)')
        bezierCurve(81, 275, 78, 279, 78, 282, 81, 285, '#000', 'rgb(220,0,38)')
        bezierCurve(219, 275, 222, 279, 222, 282, 219, 285, '#000', 'rgb(220,0,38)')
        bezierCurve(80, 284, 110, 288, 200, 288, 220, 284, '#000', 'rgb(220,0,38)')
        bezierCurve(80, 274, 110, 278, 200, 278, 220, 274, '#000', '#fff')

        //铃铛
        arc(150, 298, 18, 0, 2, '#000', 'rgb(254,223,55)')
        rect(133, 290, 34, 3, '#000', 'rgb(254,223,55)')
        arc(150, 305, 3, 0, 2, '#000', 'rgb(122,103,86)')
        moveTo(150, 308, 150, 316, '#000')
        //脚
        moveTo(150, 405, 150, 395, '#000')
        moveTo(145, 395, 155, 395, '#000')
        footer(85, 405, 150, 405, 150, 435, 60, 450, 50, 415, 85, 405, '#fff', '#000')
        footer(215, 405, 150, 405, 150, 435, 230, 450, 250, 415, 215, 405, '#fff', '#000')

        ctx.draw()
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