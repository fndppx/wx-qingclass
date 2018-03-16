//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
     banners: ['http://img5.imgtn.bdimg.com/it/u=4054007864,2464688467&fm=27&gp=0.jpg', 'http://news.cnhubei.com/ctjb/ctjbsgk/ctjb40/200808/W020080822221006461534.jpg', 'http://img5.imgtn.bdimg.com/it/u=4054007864,2464688467&fm=27&gp=0.jpg'],
    title: '测试测试',
    categories: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onload');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }



    console.log('onload');

    var that = this;
    wx.request({
      url: 'https://api.qingclass.cc/content/v1/index/qingclass/english',
      header: {
        'x-version-key': '28aa7288-964e-42e8-a59f-7e70aa087200' // 默认值
      },
      data: {
      },
      success: function (res) {

        if (res.data.code == 404) {
          wx.showModal({
            title: '提示',
            content: '请在后台添加 banner 轮播图片',
            showCancel: false
          })
        } else {
          var categories = [];

          var course = { title: '', imageURL: '' };

          for (var i = 0; i < res.data.categories.length; i++) {
            categories.push(res.data.categories[i]);
          }

          for (var i = 0; i < categories.length; i++) {
            // if (categories[i]["courses"].length>0){
            //   var imageUrl = categories[i]["courses"]
            // }

            for (var i = 0; i < categories[i]["courses"].length; i++) {

            }
            // course.imageURL = categories[i]["courses"][0]
          }
          that.setData({
            categories: categories,
          });

          console.log(categories);
          wx.showToast({
            title: '获取成功',

          })
        }
      }
    })




  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
