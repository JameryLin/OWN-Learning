// pages/learnUser/learnUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'小草',      //用户昵称
    integral:'50',       //用户当前所有积分值

    recommendCourses:[
      { courseId: "1", recommendTitle: "课程名称1", recommendIntro: "课程简介1" },
      { courseId: "2", recommendTitle: "课程名称2", recommendIntro: "课程简介2" },
      { courseId: "3", recommendTitle: "课程名称3", recommendIntro: "课程简介3" },
      { courseId: "4", recommendTitle: "课程名称4", recommendIntro: "课程简介4" },
      { courseId: "5", recommendTitle: "课程名称5", recommendIntro: "课程简介5" },
    ],

    searchcoursename:'课程名称'   //查找结果的课程名称
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    ///////////////Jamery say--------
    //在这里读数据库的数据，随机获取五个数，分别作为courseId，读取对应的名称和简介
    //recommendCourses数组赋值
    var recommendCoursesRe=this.data.recommendCourses;
    for(var i=0;i<5;i++){
      recommendCoursesRe[i].courseId=i;
      recommendCoursesRe[i].recommendTitle=i;
      recommendCoursesRe[i].recommendIntro=i;
    }
    this.setData({
      recommendCourses:recommendCoursesRe
    })

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

  uToClass:function(e){
    var joinButton="加入学习";
    var id = e.currentTarget.id;
    console.log(id);
    wx.navigateTo({
      url: '../courseInfo/courseInfo?joinButton=' + joinButton+'&id='+id,
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