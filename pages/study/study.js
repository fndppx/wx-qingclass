
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:['学习','全部直播','全部私教'],
    selectIndx:0,

    cards: [],
  },

  selectCard:function(index){
    let urls = ['study/card/list', 'livecast/card/list', 'vip/card/list'];
    var that = this;

    wx.request({

      url: 'https://api-jupiter.qingclass.cc/studycenter/v1/' + urls[index],

      header: {
        'content-type': 'application/json', // 默认值
        'x-session-token': '6f8b95bd-19b8-4698-88fa-d3884e364030',
        'x-version-key': '28aa7288-964e-42e8-a59f-7e70aa087200',
      },

      success: function (res) {
        // console.log('ssss'+res.data.cards[0])
        var cards = [];
        cards = res.data.cards;
        that.setData({
          cards: cards,
        });
      },
    })
  },

  tabClick:function(e){
    console.log(e.currentTarget.id);
    this.setData({
      selectIndx: e.currentTarget.id
    });
    
    this.selectCard(e.currentTarget.id);

    
  },
  cellTap:function(e){
    wx.navigateTo({
     url: '../room/room',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '学习中课程',
    }) 

    this.selectCard(0);

  },

  cellTap:function(e){
    wx.navigateTo({
      url: '../room/room',
    })
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