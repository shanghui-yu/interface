import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    imgUrl: 'https://small.5178u.com'
  }
  methods = {
    // 去购买
    toBuy (item) {
      try {
        let userinfo = wepy.getStorageSync('userinfo')
        let phone = wepy.getStorageSync('phone')
        if (!userinfo.avatarUrl) {
          wepy.redirectTo({
            url: '/pages/authorization?type=detail'
          })
        } else if (phone === '') {
          wepy.redirectTo({
            url: `/pages/addPhone?type=detail`
          })
        } else {
          wepy.navigateTo({
            url: `/pages/buy-tickets?id=${item.id}&price=${item.price}`
          })
        }
      } catch (error) {}
    }
  }
  // 验证手机号
  checkTel(tel) {
    let reg = /^(13[0-9]|14[578]|15[0-3,5-9]|16[56]|17[01235678]|18[0-9]|19[189])\d{8}$/
    if (reg.test(tel)) {
      return true
    } else {
      return false
    }
  }
  toDecimal2(x) {
    let f = parseFloat(x)
    if (isNaN(f)) {
      return false
    }
    f = Math.round(x * 100) / 100
    let s = f.toString()
    let rs = s.indexOf('.')
    if (rs < 0) {
      rs = s.length
      s += '.'
    }
    while (s.length <= rs + 2) {
      s += '0'
    }
    return s
  }
  // 成功提示
  showToast(message, succress) {
    wepy.showToast({
      icon: 'none',
      title: message,
      duration: 2000
    }).then(succress)
  }
  // 富文本过滤规则
  replaceKeyWord(str, obj) {
    for (var key in obj) {
      let reg = new RegExp(key, 'g')
      str = str.replace(reg, obj[key])
    }
    return str
  }
  regName (name) {
    var regName = /^[\u4e00-\u9fa5]{2,6}$/
    if (!regName.test(name)) {
      this.showToast('真实姓名填写有误')
      return false
    } else {
      return true
    }
  }
  regCard (cardNo) {
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (!regIdNo.test(cardNo)) {
      this.showToast('身份证号填写有误')
      return false
    } else {
      return true
    }
  }
  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
