const scroller = require('./utils/refreshLoadRegister.js');

Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['scroller-class'],
  properties: {
    options: {
      type: Object,
      value: {
        showToast: false,
        contentHeight: 200,

        beginRefreshText: '下拉刷新',
        freedRefreshText: '释放立即刷新',
        refreshingText: '正在刷新',
        refreshSuccessText: '刷新成功',
        refreshErrorText: '刷新失败',
        beginRefreshImg: './images/icon_arrow.png',
        refreshingImg: './images/icon_loading.png',
        refreshBackground: '#fff',

        beginLoadText: '上拉加载',
        freedLoadText: '释放立即加载',
        loadingText: '正在加载',
        loadSuccessText: '加载成功',
        loadErrorText: '加载失败',
        beginLoading: './images/icon_arrow.png',
        loadingImg: './images/icon_loading.png',
        loadBackground: '#fff',
        loadEndText: '没有更多数据',
        distance: 60,
        pullFactor: 0.6,
      }
    },
  },
  data: {
    currentSize: 0,
    loadEnd: true,
    loadEndText: ''
  },
  ready() {
    scroller.register(this, this.data.options);
    this.setData({
      loadEndText: this.data.options.loadEndText
    });
    // console.log(this.data.loadEndText)
  },
  methods: {
    done(n) {
      scroller.loadFinish(this, n);
      if (this.data.options.showToast === true) {
        wx.hideLoading();
      }
    },
    doLoadEnd() {
      this.setData({
        loadEnd: true
      });
      this.done(1)
      scroller.setOptions(this, {
        loadEnd: this.data.loadEnd,
        loadEndText: this.data.loadEndText
      });
    },
    //模拟刷新数据
    refresh() {
      this.setData({
        currentSize: 0
      });
      if (this.data.options.showToast === true) {
        wx.showLoading({
          title: 'loading...',
        });
      }
      if (this.data.loadEnd === true) {
        this.setData({
          loadEnd: false
        });
      }
      console.log('下拉刷新')
      this.triggerEvent("refresh", scroller)
    },
    //模拟加载更多数据
    loadMore() {
      if (this.data.loadEnd !== true) {
        this.updateRefreshIcon()
        if (this.data.options.showToast === true) {
          wx.showLoading({
            title: 'loading...',
          });
        }
        let currentSize = this.data.currentSize + 1
        this.setData({
          currentSize: currentSize
        });
        console.log('上拉加载')
        this.triggerEvent("loadMore", scroller)
      }
    },

    /** 
     * 旋转上拉加载图标 
     */
    updateRefreshIcon() {
      var deg = 0;
      var _this = this;
      // console.log('旋转开始了.....')
      var animation = wx.createAnimation({
        duration: 1000
      });

      var timer = setInterval(function () {
        if (!_this.data.refreshing)
          clearInterval(timer);
        animation.rotateZ(deg).step(); //在Z轴旋转一个deg角度  
        deg += 360;
        _this.setData({
          refreshAnimation: animation.export()
        })
      }, 1000);
    }
  }
})