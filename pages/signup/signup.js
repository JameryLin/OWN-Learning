// pages/signup/signup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newname:"",
    newid:"",
    newpassword:"",
    newconfirm:"",
  },

  newnameInput:function(e){
    this.data.newname=e.detail.value;
  },
  newidInput:function(e){
    this.data.newid=e.detail.value;
  },
  newpassInput:function(e){
    this.data.newpassword=e.detail.value;
  },
  newconfirmInput:function(e){
    this.data.newconfirm=e.detail.value;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toSignUp:function(){
    var name=this.data.newname;
    var id=this.data.newid;
    var password=this.data.newpassword;
    var confirm=this.data.newconfirm;

    if (name == "" || id == "" || password == "" || confirm == ""){
      wx.showToast({
        title: '请补全信息',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    } else if (password !=confirm){
      wx.showToast({
        title: '两次密码输入不一致,请重新输入',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
    /*//////////////Jamery say--------
    else if( 判断邮箱格式是否合法 ){
      wx.showToast({
        title: '请输入有效的邮箱',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
    */
    else {
      
      /*//////////////Jamery say--------
      //在这里把数据写入数据库，和下面3个toast结合使用
      //写入时候弹出toast注册中
      //写入成功则弹出toast注册成功,并跳转到登录页
      //写入失败则弹出toast注册失败
      //
      */

      /*
      wx.showToast({
        title: '注册中',
        icon: 'loading',
        duration:  ,  //持续时间
        mask: true,
      })
      */
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 1000,
        mask: true,
        success:function(){
          setTimeout(function(){
            wx.reLaunch({
              url: '../login/login',
            })
          },1000);
        }
      })
      
      /*
      wx.showToast({
        title: '注册失败',
        icon: 'none',
        duration: 1000,
        mask: true,
      })
      */
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