// pages/courseReBasic/courseReBasic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_name:"",
    course_category:"",
    course_intro:"",
    course_teacher:"",
    course_source:"",
    course_search: "",
    course_integral:"",
  },

  course_nameInput:function(e){
    this.data.course_name=e.detail.value;
  },
  course_categoryInput:function(e){
    this.data.course_category=e.detail.value;
  },
  course_introInput:function(e){
    this.data.course_intro=e.detail.value;
  },
  course_teacherInput:function(e){
    this.data.course_teacher=e.detail.value;
  },
  course_sourceInput:function(e){
    this.data.course_source=e.detail.value;
  },
  course_searchInput:function(e){
    this.data.course_search=e.detail.value;
  },
  course_integralInput:function(e){
    this.data.course_integral=e.detail.value;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toReDetail:function(){

    var name=this.data.course_name;
    var category=this.data.course_category;
    var intro=this.data.course_intro;
    var teacher=this.data.course_teacher;
    var source=this.data.course_source;
    var search=this.data.course_search;
    var integral=this.data.course_integral;

    if (name == "" || category == "" || intro == "" || teacher == "" || source == "" || search == "" || integral==""){
      wx.showToast({
        title: '请补全信息',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }else{
      /*//////////////Jamery say--------
      //数据先保留，暂时不写入数据库，等用户最后确认发布课程时再写入
      */
      wx.navigateTo({
        url: '../courseReDetail/courseReDetail',
      })
    }
    
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