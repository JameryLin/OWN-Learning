// pages/courseReDetail/courseReDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sectionNumber:'第一节',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toCourseRelease:function(){
    wx.showModal({
      title: '发布课程',
      content: '课程发布后暂无法做修改，请检查内容，确认无误后发布!',
      confirmText:'发布',
      success: function (res) {
        if (res.confirm) {
          /*//////////////Jamery say--------
          //在这里把数据写入数据库，和下面3个toast结合使用
          //写入时候弹出toast发布中
          //写入成功则弹出toast发布成功,并跳转到课程信息页，按钮为查看内容
          //写入失败则弹出toast发布失败
          //
          */

          /*
          wx.showToast({
            title: '发布中',
            icon: 'loading',
            duration:  ,  //持续时间
            mask: true,
          })
          */
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 1000,
            mask: true,
            success: function () {
              setTimeout(function () {
                var joinButton='查看内容';
                wx.navigateTo({                
                  url: '../courseInfo/courseInfo?joinButton=' + joinButton,
                })                
              }, 1000);
            }
          })

          /*
          wx.showToast({
            title: '发布失败',
            icon: 'none',
            duration: 1000,
            mask: true,
          })
          */
            
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