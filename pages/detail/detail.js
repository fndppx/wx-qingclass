// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: ['http://img5.imgtn.bdimg.com/it/u=4054007864,2464688467&fm=27&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=4054007864,2464688467&fm=27&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=4054007864,2464688467&fm=27&gp=0.jpg'],
    test: { qq: 'qqq' },
    categories: {},
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var categories = {};
    categories = JSON.parse(options.list);
    console.log('=====' + options.list);
    this.setData({
      categories: categories,
    });
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
  
  }
})