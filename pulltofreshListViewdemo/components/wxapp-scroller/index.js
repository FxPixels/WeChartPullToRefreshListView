const scroller = require('./utils/refreshLoadRegister.js');

Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['wxapp-scroller'],
  properties: {
    options: {
      type: Object,
      value: {
        beginRefreshText: '下拉刷新',
        freedRefreshText: '释放立即刷新',
        refreshingText: '正在刷新',
        refreshSuccessText: '刷新成功',
        refreshErrorText: '刷新失败',

        beginLoadText: '上拉加载',
        freedLoadText: '释放立即加载',
        loadingText: '正在加载',
        loadSuccessText: '加载成功',
        loadErrorText: '加载失败',

        pullFactor: 0.6,
      }
    }
  },
  data: {
    currentSize: 0,
    end: false
  },
  ready() {
    scroller.register(this, this.data.options);
  },
  methods: {
    done(n) {
      scroller.loadFinish(this, n);

      if (this.data.options.showToast === true) {
        wx.hideLoading();
      }
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
      console.log('下拉刷新')
      this.triggerEvent("refresh", scroller)
    },
    //模拟加载更多数据
    loadMore() {
      this.updateRefreshIcon()
      let currentSize = this.data.currentSize + 1
      this.setData({
        currentSize: currentSize
      });
      console.log('上拉加载')
      this.triggerEvent("loadMore", scroller)
    },

    /** 
     * 旋转上拉加载图标 
     */
    updateRefreshIcon() {
      var deg = 0;
      var _this = this;
      console.log('旋转开始了.....')
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