// pages/courseInfo/courseInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integral:"",            //用户所拥有的积分
    courseCategory:"",      //课程分类
    courseTeacher:"",       //讲师
    courseSource:"",        //课程来源
    courseIntegral:"",      //加入课程需要消耗的积分
    courseIntro:"",         //课程简介

    /**
     * 按钮joinButton文案：
     * 学习用户：一开始文案为“加入学习”，点击后(需积分则弹出积分兑换弹窗，免费则加入成功)，加入成功后按钮文案变为“开始学习”
     * 系统管理员：文案为“查看内容”
     */
    joinButton:"",

    dialogShow: false,
    buttons: [{ text: '取消' }, { text: '兑换' }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var joinButtonText=options.joinButton;

    /////////////////Jamery say--------

    //id是轮播中的排位，一共有五个课程轮播，从1-5，对应五个课程
    var id=options.id; 
    //读取数据库中的对应数据
    var integralRe ="50";
    var courseCategoryRe ="";
    var courseTeacherRe ="";
    var courseSourceRe ="";
    var courseIntegralRe ="";
    var courseIntroRe ="";
    
    //根据id值读取并赋予对应的数据
    courseCategoryRe = "计算机";
    courseTeacherRe = "某某某";
    courseSourceRe = "某某教材";
    courseIntegralRe = "20";
    courseIntroRe = "课程简介";
    

    this.setData({
      joinButton:joinButtonText,
      
      integral: integralRe,
      courseCategory: courseCategoryRe,
      courseTeacher: courseTeacherRe,
      courseSource: courseSourceRe,
      courseIntegral: courseIntegralRe,
      courseIntro: courseIntroRe,
    })
  },

  joinButtonClick:function(){
    var that=this;
    if (this.data.joinButton == "加入学习"){
      if (this.data.courseIntegral != 0){
        wx.showModal({
          title: '加入课程',
          content: '使用' + this.data.courseIntegral + '积分兑换课程?',
          confirmText: '兑换',
          success: function (res) {
            if (res.confirm) {              
              //减积分，换文案
              var newintegral = that.data.integral - that.data.courseIntegral;
              that.setData({
                integral: newintegral
              }),
              wx.showToast({
                title: '加入成功',
                icon: 'success',
                duration: 1000,
                mask: true,
                success: function () {
                  setTimeout(function () {
                    that.setData({
                      joinButton:"开始学习"
                    })
                  }, 1000);
                }
              })
            }
          }
        })
      }else{
        wx.showToast({
          title: '加入成功',
          icon: 'success',
          duration: 1000,
          mask: true,
          success: function () {
            setTimeout(function () {
              that.setData({
                joinButton: "开始学习"
              })
            }, 1000);
          }
        })
      }
      
    } else if (this.data.joinButton == "开始学习"){
      wx.navigateTo({
        url: '../courseLearn/courseLearn',
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
    

    this.setData({
      dialogShow: false,   //true
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
    if (this.data.joinButton == "查看内容") {
      wx.reLaunch({
        url: '../sysAdmin/sysAdmin',
      })
    }
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