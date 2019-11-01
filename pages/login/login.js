// pages/login/login.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:"",
    userpassword:"",
  },

  useridInput:function(e){
    this.data.userid=e.detail.value;
  },
  userpasswordInput: function (e) {
    this.data.userpassword = e.detail.value;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  checkLogin:function(){

    var id=this.data.userid;
    var password=this.data.userpassword;

    /////////////////Jamery say--------
    //读取数据库中的用户账号和密码分别赋值
    var useridRe="123";
    var userpasswordRe="234";
    //读取数据库中的管理员账号和密码分别赋值
    var adminidRe="321";
    var adminpasswordRe="432";
    
    if (id == useridRe || id == adminidRe){
      if (id == useridRe && password == userpasswordRe){
        wx.reLaunch({
          url: '../learnUser/learnUser',
        })
        wx.hideHomeButton();
      } else if (id == adminidRe && password == adminpasswordRe) {
        wx.reLaunch({
          url: '../sysAdmin/sysAdmin',
        })
        wx.hideHomeButton();
      }else{
        console.log("密码错误");
        wx.showToast({
          title: '密码错误,请重新输入',
          icon:'none',
          duration:1000,
          mask:true
        })
      }
    }else{
      console.log("无当前账号信息");
      wx.showToast({
        title: '无当前账号信息,请先注册',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
    
  },
  toSignUp:function(){
    wx.navigateTo({
      url: '../signup/signup',
    })
  },
  forgotPass:function(){
    wx.showToast({
      title: '现在还不能找回密码,努力想想吧',
      icon: 'none',
      duration: 1000,
      mask: true
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