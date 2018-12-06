# wxapp-scroller

## 使用方法

把 项目 components 下的 wxapp-scroller 放到你自己的项目目录下，然后在 json 文件中：
```
{
  "usingComponents": {
    "wxapp-scroller": "/your-path/components/wxapp-scroller/index"
  }
}

```

另外可下载项目，打开 /page/index/index，即可查看demo。
属性方法一览表：

| 属性参数（props） |                                        |          |          |
| ------------------ | -------------------------------------- | -------- | -------- |
| 属性名          | 描述                                 | 参数类型 | 是否必填 |
| showToast          | 是否显示提示                     | Boolean  | 否      |
| contentHeight      | 内容高度                           | Number   | 是      |
| beginRefreshText   | 开始刷新时文字                  | String   | 否      |
| freedRefreshText   | 释放刷新时文字                  | String   | 否      |
| refreshingText     | 刷新中文字                        | String   | 否      |
| refreshSuccessText | 刷新成功文字                     | String   | 否      |
| refreshErrorText   | 刷新失败文字                     | String   | 否      |
| beginRefreshImg    | 开始刷新时图片                  | String   | 否      |
| refreshingImg      | 刷新中图片                        | String   | 否      |
| refreshBackground  | 刷新背景颜色                     | String   | 否      |
| beginLoadText      | 开始加载时文字                  | String   | 否      |
| freedLoadText      | 释放加载时文字                  | String   | 否      |
| loadingText        | 加载中文字                        | String   | 否      |
| loadSuccessText    | 加载成功文字                     | String   | 否      |
| loadErrorText      | 加载失败文字                     | String   | 否      |
| beginLoading       | 开始加载时图片                  | String   | 否      |
| loadingImg         | 加载中图片                        | String   | 否      |
| loadBackground     | 加载背景颜色                     | String   | 否      |
| loadEndText        | 没有数据加载时文字            | String   | 否      |
| distance           | 刷新和加载区域高度            | Number   | 否      |
| pullFactor         | 阻塞系数，0到1之间，数值越大越容易拖动 | Float    | 否      |
|                    |                                        |          |          |
| 事件（bind）   |                                        |          |          |
| 方法             | 描述                                 | 类型   |          |
| bind:refresh       | 下拉刷新触发事件               | Function |          |
| bind:loadmore      | 上拉加载触发事件               | Function |          |
|                    |                                        |          |          |
| （结束刷新事件） |                                        |          |          |
| done               | 下拉刷新和上拉加载结束事件 |          |          |
| doLoadEnd          | 没有加载更多数据               |          |          |

## 下面是原 Readme 
## WeChartPullToRefreshListView
微信小程序实现类似android下拉刷新上拉加载更多ListView
## 下拉刷新
![](https://github.com/congxc/WeChartPullToRefreshListView/raw/master/images/下拉刷新.png)  
![](https://github.com/congxc/WeChartPullToRefreshListView/raw/master/images/释放立即刷新.png)  
![](https://github.com/congxc/WeChartPullToRefreshListView/raw/master/images/正在刷新.png)  
## 上拉加载更多
![](https://github.com/congxc/WeChartPullToRefreshListView/raw/master/images/释放加载更多.png)  
![](https://github.com/congxc/WeChartPullToRefreshListView/raw/master/images/正在加载更多.png)  
