//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banners: ['http://img5.imgtn.bdimg.com/it/u=4054007864,2464688467&fm=27&gp=0.jpg', 'http://news.cnhubei.com/ctjb/ctjbsgk/ctjb40/200808/W020080822221006461534.jpg','http://img5.imgtn.bdimg.com/it/u=4054007864,2464688467&fm=27&gp=0.jpg'],
    list:['1','2','3'],
    title:'测试测试',
    categories:[],
    headboardList:[],
  },

  tapBanner:function(e){
    wx.navigateTo({

      url: '../detail/detail?list=' + JSON.stringify(this.data.categories[1]),
    })
        },
 
  onLoad: function () {
    var that = this;
    wx.request({
      // url: 'https://api.qingclass.cc/content/v1/index/qingclass/english',
      url: 'https://api-jupiter.qingclass.cc/content/v1/index/qingclass/english',

      // api-jupiter.qingclass.cc
      // api.qcmercury.com
      header:{
        'x-version-key': '28aa7288-964e-42e8-a59f-7e70aa087200' // 默认值
      },
      success:function(res){
        if (res.data.code == 404) {
          wx.showModal({
            title: '提示',
            content: '请在后台添加 banner 轮播图片',
            showCancel: false
          })
        } else {
          var categories = [];
          var course = { title: '', imageURL: '' };

          var headboardList = [];
        
          for (var i = 0; i < res.data.categories.length; i++) {
            categories.push(res.data.categories[i]);

            // console.log('course==>' + res.data.categories.length);
            for (var j = 0; j < res.data.categories[i]['courses'].length;j++){
              let assorted = res.data.categories[i]['courses'][j];
              if (assorted['assorted'] == 'headboard'){
                headboardList.push(assorted);
                console.log('success');
              }
            }
          }

          console.log(headboardList[0]);
          that.setData({
            categories: categories,
            headboardList: headboardList,
          });

          console.log('111' + headboardList[0]['course_images']);



          // console.log(categories);
          // wx.showToast({
            // title: '获取成功',

          // })
        }
      }
    })
  },
})
