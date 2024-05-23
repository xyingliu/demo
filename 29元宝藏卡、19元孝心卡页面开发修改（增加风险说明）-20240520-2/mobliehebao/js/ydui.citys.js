! function () {
  var citys = [{
    "CountryId": 1,
    "CountryName": "北京市",
    "Province": [{
      "ProvinceId": 1,
      "ProvinceName": "市辖区",
      "City": [{
        "CityId": 1,
        "CityName": "东城区",
        "CountyList": [{
          "CountyId": 1,
          "CountyName": "zzz镇"
        }, {
          "CountyId": 2,
          "CountyName": "yyy镇"
        }, {
          "CountyId": 3,
          "CountyName": "XXX镇"
        }, {
          "CountyId": 4,
          "CountyName": "xxx街道"
        }, ]
      }, {
        "CityId": 2,
        "CityName": "西城区",
        "CountyList": [{
          "CountyId": 1,
          "CountyName": "zzz镇"
        }, {
          "CountyId": 2,
          "CountyName": "yyy镇"
        }, {
          "CountyId": 3,
          "CountyName": "XXX镇"
        }, {
          "CountyId": 4,
          "CountyName": "xxx街道"
        }, ]
      }]
    }, ]
  }, {
    "CountryId": 2,
    "CountryName": "河北省",
    "Province": [{
      "ProvinceId": 1,
      "ProvinceName": "石家庄市",
      "City": [{
        "CityId": 1,
        "CityName": "桥东区",
        "CountyList": [{
          "CountyId": 1,
          "CountyName": "zzz镇"
        }, {
          "CountyId": 2,
          "CountyName": "yyy镇"
        }, {
          "CountyId": 3,
          "CountyName": "XXX镇"
        }, {
          "CountyId": 4,
          "CountyName": "xxx街道"
        }, ]
      }]
    }, {
      "ProvinceId": 2,
      "ProvinceName": "保定市",
      "City": [{
        "CityId": 2,
        "CityName": "桥东区",
        "CountyList": [{
          "CountyId": 1,
          "CountyName": "zzz镇"
        }, {
          "CountyId": 2,
          "CountyName": "yyy镇"
        }, {
          "CountyId": 3,
          "CountyName": "XXX镇"
        }, {
          "CountyId": 4,
          "CountyName": "xxx街道"
        }, ]
      }]
    }, ]
  }, {
    "CountryId": 3,
    "CountryName": "新疆维吾尔自治区",
    "Province": [{
      "ProvinceId": 1,
      "ProvinceName": "哈密市",
      "City": [{
        "CityId": 1,
        "CityName": "巴里坤哈萨克自治县",
        "CountyList": [{
          "CountyId": 1,
          "CountyName": "zzz镇"
        }, {
          "CountyId": 2,
          "CountyName": "yyy镇"
        }, {
          "CountyId": 3,
          "CountyName": "XXX镇"
        }, {
          "CountyId": 4,
          "CountyName": "xxx街道"
        }, ]
      }]
    }, {
      "ProvinceId": 2,
      "ProvinceName": "克孜勒苏柯尔克孜自治州",
      "City": [{
        "CityId": 2,
        "CityName": "阿克陶县",
        "CountyList": [{
          "CountyId": 1,
          "CountyName": "zzz镇"
        }, {
          "CountyId": 2,
          "CountyName": "yyy镇"
        }, {
          "CountyId": 3,
          "CountyName": "XXX镇"
        }, {
          "CountyId": 4,
          "CountyName": "xxx街道"
        }, ]
      }]
    }, ]
  }, ];
  if (typeof define === "function") {
    define(citys)
  } else {
    window.YDUI_CITYS = citys
  }
}();