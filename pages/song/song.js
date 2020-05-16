// pages/song/song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songs:[{
      id:'1',
      name:'撒野',
      author:'凯瑟喵'
    },
    {
      id:'2',
      name:'再也没有',
      author:'永彬Ryan.B'
    },
    {
      id:'3',
      name:'BINGBIAN病变（原版）',
      author:'Fi9江澈'
    },
    {
      id:'4',
      name:'形容',
      author:'沈以诚'
    },
    {
      id:'5',
      name:'一点点喜欢',
      author:'匠音夫妇'
    },
    {
      id:'6',
      name:'果汁分你一半',
      author:'一只怪兽叭'
    },
    {
      id:'7',
      name:'喜欢',
      author:'阿肆'
    },
    {
      id:'8',
      name:'不妙',
      author:'陈粒'
    },
    {
      id:'9',
      name:'吵',
      author:'苏打绿'
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onMyEvent: function(e){
    console.log("歌曲是"+JSON.stringify(e.currentTarget.dataset.item))
    wx.navigateTo({ url: '../../pages/detail/detail?item='+JSON.stringify(e.currentTarget.dataset.item) })
  }
})