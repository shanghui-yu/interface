import fetch from './ajax'
class USER {
  myOrder(json) { //  我的订单
    return fetch({
      url: `${fetch.URLS}/myOrderList.do`,
      body: json,
      type: 'POST'
    })
  }
  myOrderDetail(json) { //  订单明细
    return fetch({
      url: `${fetch.URLS}/myOrderDetail.do`,
      body: json,
      type: 'POST'
    })
  }

  applyOrder(json) { //  订单申请退款
    return fetch({
      url: `${fetch.URLS}/applyOrder.do`,
      body: json,
      type: 'POST'
    })
  }
  myOrderReturn(json) { //  退款明细
    return fetch({
      url: `${fetch.URLS}/myOrderRefund.do`,
      body: json,
      type: 'POST'
    })
  }
  distProduct(json) { // 分销产品
    return fetch({
      url: `${fetch.URLS}/distProduct.do`,
      body: json,
      type: 'POST'
    })
  }
  distProductPrice(json) { // 查看分销产品价格日历
    return fetch({
      url: `${fetch.URLS}/distProductPrice.do`,
      body: json,
      type: 'POST'
    })
  }
  myDistList(json) { // 我的分销商(1级权限）
    return fetch({
      url: `${fetch.URLS}/myDistList.do`,
      body: json,
      type: 'POST'
    })
  }
  myDistListUser(json) { // 我的分销商(2级权限）
    return fetch({
      url: `${fetch.URLS}/myDistListUser.do`,
      body: json,
      type: 'POST'
    })
  }
  myCommiss(json) { // 分销佣金
    return fetch({
      url: `${fetch.URLS}/myCommiss.do`,
      body: json,
      type: 'POST'
    })
  }
  myCommissRecord(json) { // 提现记录
    return fetch({
      url: `${fetch.URLS}/myCommissRecord.do`,
      body: json,
      type: 'POST'
    })
  }
  myCommissQuery(json) { // 查询冻结佣金金额
    return fetch({
      url: `${fetch.URLS}/myCommissQuery.do`,
      body: json,
      type: 'POST'
    })
  }
  getWXACode(json) { // 获取二维码
    return fetch({
      url: `${fetch.URLS}/getWXACode.do`,
      body: json,
      type: 'POST'
    })
  }
  applyCommiss(json) { // 获取二维码
    return fetch({
      url: `${fetch.URLS}/applyCommiss.do`,
      body: json,
      type: 'POST'
    })
  }
}

export default new USER()
