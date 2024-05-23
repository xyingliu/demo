const products = [
    {
        "category": "全国流量",
        "subcategories": [
            {
                "name": "5GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '11',
                        "price2": '6'
                    },
                    {
                        "days": '3天',
                        "price1": '12',
                        "price2": '7'
                    },
                    {
                        "days": '5天',
                        "price1": '13',
                        "price2": '8'
                    },
                    {
                        "days": '7天',
                        "price1": '15',
                        "price2": '10'
                    }
                ]
            },
            {
                "name": "10GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '16',
                        "price2": '11'
                    },
                    {
                        "days": '3天',
                        "price1": '17',
                        "price2": '12'
                    },
                    {
                        "days": '5天',
                        "price1": '18',
                        "price2": '13'
                    },
                    {
                        "days": '7天',
                        "price1": '20',
                        "price2": '15'
                    }
                ]
            },
            {
                "name": "30GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '21',
                        "price2": '16'
                    },
                    {
                        "days": '3天',
                        "price1": '22',
                        "price2": '17'
                    },
                    {
                        "days": '5天',
                        "price1": '23',
                        "price2": '18'
                    },
                    {
                        "days": '7天',
                        "price1": '25',
                        "price2": '20'
                    }
                ]
            },
            {
                "name": "100GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '51',
                        "price2": '31'
                    },
                    {
                        "days": '3天',
                        "price1": '52',
                        "price2": '32'
                    },
                    {
                        "days": '5天',
                        "price1": '53',
                        "price2": '33'
                    },
                    {
                        "days": '7天',
                        "price1": '55',
                        "price2": '35'
                    }
                ]
            },
        ]
    },
    {
        "category": "区域流量",
        "subcategories": [
            {
                "name": "5GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '6',
                        "price2": '1'
                    },
                    {
                        "days": '3天',
                        "price1": '7',
                        "price2": '2'
                    },
                    {
                        "days": '5天',
                        "price1": '8',
                        "price2": '3'
                    },
                    {
                        "days": '7天',
                        "price1": '10',
                        "price2": '5'
                    }
                ]
            },
            {
                "name": "10GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '11',
                        "price2": '6'
                    },
                    {
                        "days": '3天',
                        "price1": '12',
                        "price2": '7'
                    },
                    {
                        "days": '5天',
                        "price1": '13',
                        "price2": '8'
                    },
                    {
                        "days": '7天',
                        "price1": '15',
                        "price2": '10'
                    }
                ]
            },
            {
                "name": "30GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '16',
                        "price2": '11'
                    },
                    {
                        "days": '3天',
                        "price1": '17',
                        "price2": '12'
                    },
                    {
                        "days": '5天',
                        "price1": '18',
                        "price2": '13'
                    },
                    {
                        "days": '7天',
                        "price1": '20',
                        "price2": '15'
                    }
                ]
            },
            {
                "name": "100GB",
                "prices": [
                    {
                        "days": '1天',
                        "price1": '46',
                        "price2": '26'
                    },
                    {
                        "days": '3天',
                        "price1": '47',
                        "price2": '27'
                    },
                    {
                        "days": '5天',
                        "price1": '48',
                        "price2": '28'
                    },
                    {
                        "days": '7天',
                        "price1": '50',
                        "price2": '30'
                    }
                ]
            },
        ]
    }
]
let active = {
    id: 0,
    flow: 0,
    day: 0,
    yn: 0,
}