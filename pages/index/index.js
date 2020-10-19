const WXAPI = require('apifm-wxapi')
Page({
   /**
   * 组件的初始数据
   */
  data: {
    searchValue: '',
    banners: null,
    goodsCategory: null,
    goodsList: [],
    curPage: 1,
    pageSize: 20,
    isShowNoData: false
  },
    /**
   * 组件的生命周期
   */
  onLoad: function() {
    var _this = this
    _this.initBanners()
    _this.initCategory()
    _this.getGoodsList()
  },
  onReachBottom: function() {
    var _this = this
    _this.setData({
      curPage: _this.data.curPage + 1
    })
    _this.getGoodsList()
  },
  /**
   * 组件的方法列表
   */
  toDetails(e){
    wx.navigateTo({
      url: '/pages/goods-details/index?id=' + e.currentTarget.dataset.id,
    })
  },
  async getGoodsList(){
    let _data = []
    wx.showLoading()
    const res = await WXAPI.goods({
      page: this.data.curPage,
      pageSize: this.data.pageSize
    })
    wx.hideLoading()
    if (res.code == 0) {
      _data =  this.data.goodsList.concat(res.data)
      this.setData({
        goodsList: _data
      })
    } 
    if(res.code === 700){
      this.setData({
        isShowNoData: true
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
