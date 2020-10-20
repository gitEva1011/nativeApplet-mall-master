const WXAPI = require('apifm-wxapi')
Page({
  /**
   * 组件的初始数据
   */
  data: {
    buyNum: 1,
    buyType: 0,
    isShowInfo: false,
    goodId: '',
    goodDetails: []
  },
    /**
   * 组件的生命周期
   */
  onLoad(e) {
    const _this = this
    const goodId = e.id
    _this.setData({
      goodId: goodId
    })
    _this.getGoodsDetail()
    // console.log(e.id)
  },
  /**
   * 组件的方法列表
   */
  buyNow(e){
    const goodDetails = {
      name: e.currentTarget.dataset.name,
      price: e.currentTarget.dataset.price,
      pic: e.currentTarget.dataset.pic,
      buyNum: this.data.buyNum
    }
    wx.navigateTo({
      url: '/pages/to-by-order/index?goodDetails=' + JSON.stringify(goodDetails),
    })
  },
  closeInfo(){
    this.setData({
      isShowInfo: false
    })
  },
  isShowInfoHandle(e){
    const type = e.currentTarget.dataset.type
    console.log(type)
    this.setData({
      isShowInfo: true,
      buyType: type
    })
  },
  onStepperChange(event) {
    console.log(event.detail);
  },
  async getGoodsDetail(){
    const _this = this
    const res = await WXAPI.goodsDetail(_this.data.goodId)
    if(res.code === 0){
      this.setData({
        goodDetails: res.data
      })
    }
  }

})
