// pages/courseLearn/courseLearn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName:'课程名称XX',
    sectionNumber:'一',
    sectionName:'本节名称',
    sectionContent:'本节课程的具体内容，本节主要围绕XXX展开阐述，首先，我们来看一个案例。XXXX....'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = this.data.courseName;
    wx.setNavigationBarTitle({
      title: name,
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