// pages/courseInfo/courseInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integral:'50',
    courseCategory:'计算机',
    courseTeacher:'某某某',
    courseSource:'某某教材',
    courseIntegral:'20',
    courseIntro:'课程简介',

    /**
     * 按钮joinButton文案：
     * 学习用户：一开始文案为“加入学习”，点击后(需积分则弹出积分兑换弹窗，免费则加入成功)，加入成功后按钮文案变为“开始学习”
     * 系统管理员：文案为“查看内容”
     */
    joinButton:'加入学习',

    dialogShow: false,
    buttons: [{ text: '取消' }, { text: '兑换' }],
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
    this.setData({
      dialogShow: false   //true
    })
  },

  tapDialogButton(e) {
    console.log('dialog', e.detail)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
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