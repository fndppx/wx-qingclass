var wilddog = require('../../utils/wilddog-weapp-all')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '直播间',
    })

    var config = {
      syncURL: 'https://qingclassdraw.wilddogio.com/',
      authDomain: 'qingclassdraw.wilddog.com'
    }
    wilddog.initializeApp(config)

    wilddog.auth().signInWeapp(function (err, user) {
      // do your logic
      console.log('success');

    })

/*
    //或者使用Promise

    wilddog.auth().signInWeapp().then(function (user) {

    }).catch(function (err) {

    })
    */

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },


  bindConfirm: function (e) {
    var that = this;
   
  },




})