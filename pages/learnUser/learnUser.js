// pages/learnUser/learnUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'小草',
    integral:'50',

    recommendTitle1:'课程名称1',
    recommendIntro1:'课程简介1',

    recommendTitle2: '课程名称2',
    recommendIntro2: '课程简介2',

    recommendTitle3: '课程名称3',
    recommendIntro3: '课程简介3',

    recommendTitle4: '课程名称4',
    recommendIntro4: '课程简介4',

    recommendTitle5: '课程名称5',
    recommendIntro5: '课程简介5',

    searchcoursename:'课程名称'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  uToLearnPage:function(){
    wx.navigateTo({
      url: '../learnSpace/learnSpace',
    })
  },

  uToCollectPage:function(){
    wx.navigateTo({
      url: '../learnCollect/learnCollect',
    })
  },

  uQuit:function(){
    wx.showModal({
      title: '退出提醒',
      content: '确认退出当前账号？',
      success:function(res){
        if(res.confirm){
          wx.reLaunch({
            url: '../login/login',
          })
        }
      }
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
    wx.hideHomeButton();
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