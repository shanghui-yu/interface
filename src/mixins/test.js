import wepy from 'wepy'
import dayjs from 'dayjs'
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
      mask: true,
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
  /**
   * @Author: yushanghui
   * @description: 获取文本折行
   * @param {,Object} context obj
   * @Date: 2019-01-03 19:20:30
   */
  getTextLine (context, obj) {
    context.setFontSize(obj.size)
    let arrText = obj.text.split('')
    let line = ''
    let arrTr = []
    for (let i = 0; i < arrText.length; i++) {
      var testLine = line + arrText[i]
      var metrics = context.measureText(testLine)
      var width = metrics.width
      if (width > obj.width && i > 0) {
        arrTr.push(line)
        line = arrText[i]
      } else {
        line = testLine
      }
      if (i === arrText.length - 1) {
        arrTr.push(line)
      }
    }
    return arrTr
  }
  textWrap (context, obj) {
    let tr = this.getTextLine(context, obj)
    for (let i = 0; i < tr.length; i++) {
      if (i < obj.line) {
        let txt = {
          x: obj.x,
          y: obj.y + (i * obj.height),
          color: obj.color,
          size: obj.size,
          align: obj.align,
          baseline: obj.baseline,
          text: tr[i],
          bold: obj.bold
        }
        if (i === obj.line - 1) {
          txt.text = txt.text.substring(0, txt.text.length - 3) + '......'
        }
        this.drawText(context, txt)
      }
    }
  }
  drawText (context, obj) {
    context.save()
    context.setFillStyle(obj.color)
    context.setFontSize(obj.size)
    context.setTextAlign(obj.align)
    context.setTextBaseline(obj.baseline)
    if (obj.bold) {
      context.fillText(obj.text, obj.x, obj.y - 0.5)
      context.fillText(obj.text, obj.x - 0.5, obj.y)
    }
    context.fillText(obj.text, obj.x, obj.y)
    if (obj.bold) {
      context.fillText(obj.text, obj.x, obj.y + 0.5)
      context.fillText(obj.text, obj.x + 0.5, obj.y)
    }
    context.restore()
  }
  async getWeekS() {
    let now = Number(dayjs().format('DD'))
    let monthEnd = Number(dayjs().endOf('month').format('DD'))
    let nextMonths = dayjs().add(1, 'month').endOf('month').format('DD')
    let datas = []
    for (let index = 0; index < (monthEnd - now + 1); index++) {
      let json = {
        stockNum: 0,
        price: 0,
        date: dayjs().add(index, 'day').format('YYYY-MM-DD')
      }
      datas.push(json)
      if (index === (monthEnd - now)) {
        for (let index = 0; index < nextMonths; index++) {
          let json = {
            stockNum: 0,
            price: 0,
            date: dayjs().add(1, 'month').startOf('month').add(index, 'day').format('YYYY-MM-DD')
          }
          datas.push(json)
        }
      }
    }
    return datas
  }
  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
