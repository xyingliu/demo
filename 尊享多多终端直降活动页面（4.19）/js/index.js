/** @format */
console.log(1111, 'index')
// 购机直降券
const couponMaps = {
  silver: {
    className: 'silver-coupon',
    bg: './img/silver-coupon-bg.png',
    price: '50',
    title: '银券',
  },
  gold: {
    className: 'gold-coupon',
    bg: './img/gold-coupon-bg.png',
    price: '100',
    title: '金券',
  },
  platinum: {
    className: 'platinum-coupon',
    bg: './img/platinum-coupon-bg.png',
    price: '200',
    title: '铂金券',
  },
  diamond: {
    className: 'diamond-coupon',
    bg: './img/diamond-coupon-bg.png',
    price: '300',
    title: '钻石券',
  },
}

const { silver, gold, platinum, diamond } = couponMaps
const levelMaps = {
  level1: {
    // 消费最低金额
    min: 80,
    // 消费最高金额
    max: 120,
    // 手机列表
    phoneList: [
      {
        descImg: './img/vivoy100.png',
        downPrice: 350,
        oldrice: 1649,
      },
      {
        descImg: './img/opporeno11.png',
        downPrice: 350,
        oldrice: 2249,
      },
      {
        descImg: './img/honorx50i+.png',
        downPrice: 250,
        oldrice: 1349,
      },
      {
        descImg: './img/iPhone15.png',
        downPrice: 1150,
        oldrice: 4849,
      },
    ],
    // 违约金金额
    breachMoney: 100,
  },
  level2: {
    min: 120,
    max: 200,
    // 券包
    couponList: [silver, gold],
    phoneList: [
      {
        descImg: './img/honorx50i+.png',
        downPrice: 250,
        oldrice: 1349,
      },
      {
        descImg: './img/vivoy100.png',
        downPrice: 350,
        oldrice: 1649,
      },
      {
        descImg: './img/iphone15pro.png',
        downPrice: 700,
        oldrice: 9599,
      },
      {
        descImg: './img/oppoa2x.png',
        downPrice: 200,
        oldrice: 1099,
      },
    ],
    breachMoney: 150,
  },
  level3: {
    min: 200,
    max: 300,
    couponList: [silver, gold, platinum],
    phoneList: [
      {
        descImg: './img/honorx50i+.png',
        downPrice: 250,
        oldrice: 1349,
      },
      {
        descImg: './img/oppoa2x.png',
        downPrice: 200,
        oldrice: 1099,
      },
      {
        descImg: './img/vivox100.png',
        downPrice: 600,
        oldrice: 3699,
      },
      {
        descImg: './img/honor100.png',
        downPrice: 500,
        oldrice: 2099,
      },
    ],
    breachMoney: 250,
  },
  level4: {
    min: 300,
    couponList: [silver, gold, platinum, diamond],
    phoneList: [
      {
        descImg: './img/iphone15pro.png',
        downPrice: 700,
        oldrice: 9599,
      },
      {
        descImg: './img/opporeno11.png',
        downPrice: 400,
        oldrice: 2899,
      },
      {
        descImg: './img/honormagic6.png',
        downPrice: 500,
        oldrice: 4199,
      },
      {
        descImg: './img/vivoxfold3.png',
        downPrice: 600,
        oldrice: 7399,
      },
    ],
    breachMoney: 350,
  },
}

let currentPrice = 200
init()
async function init() {
  initModalDom()
  setCurrentPriceLevel(currentPrice)
}

function setCurrentPriceLevel(currentPrice) {
  let { couponList = [], phoneList, min, breachMoney } = levelData(currentPrice)
  // 购机直降券包数据设置
  setCoupon({ couponList, min })
  // 购机直降钜划算数据设置
  setPhoneCoupon({ phoneList })
  // 设置等级相应金额
  bindEle({ min, breachMoney, currentPrice })
}

function setPhoneCoupon({ phoneList }) {
  let html = ''
  phoneList.forEach(({ descImg, downPrice, oldrice }) => {
    html += setPhoneCouponHtml({ descImg, downPrice, oldrice })
  })
  $('.buy-phone-cheap-list').html(html)
}

function setPhoneCouponHtml({ descImg, downPrice, oldrice }) {
  const nowPrice = oldrice - downPrice
  return `
  <div class="list-item">
      <img class="img-desc"
            src="${descImg}">
      <p class="list-item-desc list-item-desc1">叠加券累计降
          <span class="color-red-text">${downPrice}</span>
          <span class="yuan color-red-text">元</span>
      </p>
      <p class="list-item-desc">厂商建议零售价
          <span class="color-red-text">${oldrice}</span>
          <span class="yuan color-red-text">元</span>
      </p>
      <div class="current-price">
          <p class="price-num"><span>${nowPrice}</span>元</p>
          到手价
      </div>
  </div>`
}

/****/
/**
 * @description: 购机直降券包数据设置
 * @param {*} couponList:购机直降券显示列表
 * @param {*} min: 当前用户套餐金额
 * @return {*}
 */
function setCoupon({ couponList, min }) {
  let html = ''
  if (min < 120) {
    $('.single-silver-coupon').removeClass('hide')
    $('.buy-phone-coupon-list').addClass('hide')
    $('.tips').addClass('hide')
    $('.buy-phone-coupon-list').html(html)
  } else {
    $('.single-silver-coupon').addClass('hide')
    $('.buy-phone-coupon-list').removeClass('hide')
    $('.tips').removeClass('hide')

    couponList.forEach((item) => {
      html += setCouponsHtml(item)
    })
    $('.buy-phone-coupon-list').html(html)
  }
}

/**
 * @description: 券html渲染
 * silver银券,gold:金券, platinum:铂金券,diamond: 钻石券
 * @param {*} bg 券背景
 * @param {*} className 券class名称
 * @param {*} price 券金额 50 100 200 300
 * @param {*} title 券标题  金券、银券、铂金券、钻石券
 * @return {*}
 */
function setCouponsHtml({ bg, className, price, title }) {
  return `
  <div class="list-item ${className}">
    <img src="${bg}">
    <div class="list-item-main">
        <div class="expiry">有效期一年</div>
        <div class="price">
            <span>${price}</span>元
        </div>
        <div class="main-title">${title}</div>
    </div>
  </div>`
}
/**
 * @description: 金额设置
 * @param {*} min 最低消费
 * @param {*} breachMoney 违约金金额
 * @return {*}
 */
function bindEle({ min, breachMoney, currentPrice }) {
  // price-info-num 您近三个月消费均值金额
  $('.price-info-num').html(currentPrice)

  // price-promise-num 每月承诺消费金额
  $('.price-promise-num').html(min)

  // breach-money 业务规则缴纳违约金金额
  $('.breach-money').html(breachMoney)
}

/**
 * 通过金额得到当前等级需要配置的数据
 * 80>=level1>120
 * 120>=level2>200
 * 200>=level3>300
 * 300>=level4
 */
function levelData(currentPrice) {
  let data = ''
  if (currentPrice < 120) {
    data = levelMaps.level1
  } else if (currentPrice < 200) {
    data = levelMaps.level2
  } else if (currentPrice < 300) {
    data = levelMaps.level3
  } else {
    data = levelMaps.level4
  }
  return data
}
function handleClick() {
  window.location.href = './handled.html'
}

/**
 * @description: 办理弹窗弹出
 * @param {*} type  success：办理成功 failed 办理失败
 * @return {*}
 */
function showModal({ type = 'success' }) {
  if (type == 'success') {
    $('.handle-failed').addClass('hide')
    $('.handle-success').removeClass('hide')
    $('.modal')
      .removeClass('hide')
      .fadeIn(200, function () {})
  } else {
    $('.handle-failed').removeClass('hide')
    $('.handle-success').addClass('hide')
    $('.modal')
      .removeClass('hide')
      .fadeIn(200, function () {})
  }
}

// 办理弹窗关闭
function hideModal() {
  $('.modal')
    .addClass('hide')
    .fadeOut(200, function () {})
}

/**
 * @description: 办理弹窗dom
 * @return {*}
 */
function initModalDom() {
  const modal = `
  <div class="modal-bg">
    <div class="handle-content handle-success">
      <img src="./img/handle-success.png">
      <p class="text">办理成功</p>
    </div>

    <div class="handle-content  handle-failed hide">
      <img src="./img/handle-failed.png">
      <p class="text">办理失败</p>
    </div>
    <div class="back-btn" onClick="hideModal()">
      返回
    </div>
  </div>
  <p class="close-icon" onClick="hideModal()">
    <img src="./img/close-icon.png" />
  </p>
  `
  $('.modal').html(modal)
}
