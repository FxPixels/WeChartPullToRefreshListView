//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  refresh(){
    let that = this
    setTimeout(() => {
      that.selectComponent('#wxapp-scroller').done(true)
    }, 2000);
  },
  loadMore(){
    let that = this
    setTimeout(() => {
      that.selectComponent('#wxapp-scroller').doLoadEnd(true)
    }, 2000);
  }
})
