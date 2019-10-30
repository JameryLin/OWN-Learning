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


  checkLogin:function(user){

    var id=this.data.userid;
    var password=this.data.userpassword;

    //读取数据库中的用户账号和密码
    var useridRe="123";
    var userpasswordRe="234";
    //读取数据库中的管理员账号和密码
    var adminidRe="321";
    var adminpasswordRe="432";
    
    if (id == useridRe || id == adminidRe){
      if (id == useridRe && password == userpasswordRe){
        wx.navigateTo({
          url: '../learnUser/learnUser',
        })
      } else if (id == adminidRe && password == adminpasswordRe) {
        wx.navigateTo({
          url: '../sysAdmin/sysAdmin',
        })
      }else{
        console.log("密码错误");
      }
    }else{
      console.log("无当前账号信息");
    }
    
  },
  toSignUp:function(){
    wx.navigateTo({
      url: '../signup/signup',
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