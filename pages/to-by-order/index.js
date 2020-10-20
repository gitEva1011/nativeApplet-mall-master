// pages/to-by-order/index.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    goodDetails: [],
    radio: '1',
    value: '',
  },
    /**
   * 组件的生命周期
   */
  onLoad(e) {
    const _this = this
    const goodDetails = JSON.parse(e.goodDetails);
    // console.log(e)

    // console.log(goodDetails)
    _this.setData({
      goodDetails: goodDetails
    })

  },
  /**
   * 组件的方法列表
   */
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
})
