import fetch from './ajax'
class XHR {
  getUnionid (json) {  // 获取openId
    return fetch({
      url: `${fetch.URLS}/smallLogin.do`,
      body: json,
      type: 'POST'
    })
  }
  authorization (json) {  // 授权存储
    return fetch({
      url: `${fetch.URLS}/smallSignup.do`,
      body: json,
      type: 'POST'
    })
  }
  getPhoneCode(json) { // 获取手机号
    return fetch({
      url: `${fetch.URLS}/mobileSignup.do`,
      body: json,
      type: 'POST'
    })
  }
  queryUser(json) { // 获取用户信息
    return fetch({
      url: `${fetch.URLS}/queryUser.do`,
      body: json,
      type: 'POST'
    })
  }
  submitPhone(json) { // 提交手机号
    return fetch({
      url: `${fetch.URLS}/mobileLogin.do`,
      body: json,
      type: 'POST'
    })
  }
  editPhone(json) { // 修改手机号
    return fetch({
      url: `${fetch.URLS}/updateMobile.do`,
      body: json,
      type: 'POST'
    })
  }
  getDetail (json) {  // Poi详情页
    return fetch({
      url: `${fetch.URLS}/poiDetail.do`,
      body: json,
      type: 'POST'
    })
  }
  getBanner (json) {  // 获取banner
    return fetch({
      url: `${fetch.URLS}/indexBanner.do`,
      body: json,
      type: 'POST'
    })
  }
  getBannerDetail(json) { // 获取banner
    return fetch({
      url: `${fetch.URLS}/indexBannerDetail.do`,
      body: json,
      type: 'POST'
    })
  }
  getCategory (json) {  // 获取品类列表
    return fetch({
      url: `${fetch.URLS}/indexKind.do`,
      body: json,
      type: 'POST'
    })
  }
  getShopList (json) {  // 首页poi列表
    return fetch({
      url: `${fetch.URLS}/poiList.do`,
      body: json,
      type: 'POST'
    })
  }
  seachShop(json) { // 首页poi列表
    return fetch({
      url: `${fetch.URLS}/poiSearch.do`,
      body: json,
      type: 'POST'
    })
  }
  buyShop(json) { // 购买页面
    return fetch({
      url: `${fetch.URLS}/productDetail.do`,
      body: json,
      type: 'POST'
    })
  }
  buyOk(json) { // 确认下单页
    return fetch({
      url: `${fetch.URLS}/buyOrder.do`,
      body: json,
      type: 'POST'
    })
  }
  payment(json) { // 支付订单
    return fetch({
      url: `${fetch.URLS}/payOrder.do`,
      body: json,
      type: 'POST'
    })
  }
  userDistribution(json) { // 更改用户所属分销商id
    return fetch({
      url: `${fetch.URLS}/subDist.do`,
      body: json,
      type: 'POST'
    })
  }
  getOneShareCode(json) { // 1级分销商的分享二维码
    return fetch({
      url: `${fetch.URLS}/getFirstWXACode.do`,
      body: json,
      type: 'POST'
    })
  }
  applyCompanyQuery(json) { // 1级分销商的发展2级分销商 先根据openId查询
    return fetch({
      url: `${fetch.URLS}/applyCompanyQuery.do`,
      body: json,
      type: 'POST'
    })
  }

  applyCompan(json) { // 加入一级分销商
    return fetch({
      url: `${fetch.URLS}/applyCompany.do`,
      body: json,
      type: 'POST'
    })
  }
}

export default new XHR()
