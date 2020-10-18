const WXAPI = require('apifm-wxapi')
Page({
   /**
   * 组件的初始数据
   */
  data: {
    searchValue: '',
    banners: null,
    goodsCategory: null,
    goodsList: null
  },
  onLoad: function() {
    this.initBanners()
    this.initCategory()
    this.getGoodsList()
  },
  /**
   * 组件的方法列表
   */
  async getGoodsList(){
    let _data = []
    const res = await WXAPI.goods()
    console.log(res)
    if (res.code == 0) {
      _data = res.data
      this.setData({
        goodsList: _data
      })
    } 
  },
  tapBanner(e){
    let url = e.currentTarget.dataset.url
    if(url){
      wx.navigateTo({
        url
      })
    }
  },
  async initCategory(){
    let _data = []
    const res = await WXAPI.goodsCategory()
    if (res.code == 0) {
      _data = res.data
      this.setData({
        goodsCategory: _data
      })
    } 
  },
  async initBanners(){
    let _data = []
    const res = await WXAPI.banners({
      type: 'index'
    })
    if (res.code == 0) {
      _data = res.data
      this.setData({
        banners: _data
      })
    } 
  },
  onSearch() {
    wx.navigateTo({
      url: '/pages/goods/list?name=' + this.data.searchValue
    })
  },
})
