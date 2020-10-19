const WXAPI = require('apifm-wxapi')
Page({
  /**
   * 组件的初始数据
   */
  data: {
    // show: false,
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
