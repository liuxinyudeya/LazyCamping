import { mockIp, mockReqId } from '../utils/mock';

export function genCartGroupData() {
  const resp = {
    data: {
      isNotEmpty: true,
      storeGoods: [
        {
          storeId: '1000',
          storeName: '云Mall深圳旗舰店',
          storeStatus: 1,
          totalDiscountSalePrice: '9990',
          promotionGoodsList: [
            {
              title: '满减满折回归',
              promotionCode: 'MERCHANT',
              promotionSubCode: 'MYJ',
              promotionId: '159174555838121985',
              tagText: ['满100元减99.9元'],
              promotionStatus: 3,
              tag: '满减',
              description: '满100元减99.9元,已减99.9元',
              doorSillRemain: null,
              isNeedAddOnShop: 0,
              goodsPromotionList: [
                {
                  uid: '88888888205468',
                  saasId: '88888888',
                  storeId: '1000',
                  spuId: '12',
                  skuId: '135691622',
                  isSelected: 1,
                  thumb:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png',
                  title:
                    '腾讯极光盒子4智能网络电视机顶盒6K千兆网络机顶盒4K高分辨率',
                  primaryImage:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png',
                  quantity: 1,
                  stockStatus: true,
                  stockQuantity: 3,
                  price: '9900',
                  originPrice: '16900',
                  tagPrice: null,
                  titlePrefixTags: [{ text: '新品' }, { text: '火爆' }],
                  roomId: null,
                  specInfo: [
                    {
                      specTitle: '颜色',
                      specValue: '经典白',
                    },
                    {
                      specTitle: '类型',
                      specValue: '经典套装',
                    },
                  ],
                  joinCartTime: '2020-06-29T07:55:40.000+0000',
                  available: 1,
                  putOnSale: 1,
                  etitle: null,
                },
                {
                  uid: '88888888205468',
                  saasId: '88888888',
                  storeId: '1000',
                  spuId: '18',
                  skuId: '135681631',
                  isSelected: 1,
                  thumb:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
                  title:
                    '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
                  primaryImage:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
                  quantity: 1,
                  stockStatus: true,
                  stockQuantity: 177,
                  price: '29800',
                  originPrice: '40000',
                  tagPrice: null,
                  titlePrefixTags: null,
                  roomId: null,
                  specInfo: [
                    {
                      specTitle: '颜色',
                      specValue: '米色荷叶边',
                    },
                    {
                      specTitle: '尺码',
                      specValue: 'M',
                    },
                  ],
                  joinCartTime: '2020-06-29T07:55:27.000+0000',
                  available: 1,
                  putOnSale: 1,
                  etitle: null,
                },
                {
                  uid: '88888888205468',
                  saasId: '88888888',
                  storeId: '1000',
                  spuId: '13',
                  skuId: '135698362',
                  isSelected: 1,
                  thumb:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
                  title:
                    '带帽午休毯虎年款多功能加厚加大加绒简约多功能午休毯连帽披肩',
                  primaryImage:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
                  quantity: 13,
                  stockStatus: true,
                  stockQuantity: 9,
                  price: '29900',
                  originPrice: '0',
                  tagPrice: null,
                  titlePrefixTags: [{ text: '火爆' }],
                  roomId: null,
                  specInfo: [
                    {
                      specTitle: '颜色',
                      specValue: '浅灰色',
                    },
                    {
                      specTitle: '尺码',
                      specValue: 'M',
                    },
                  ],
                  joinCartTime: '2020-06-29T07:54:43.000+0000',
                  available: 1,
                  putOnSale: 1,
                  etitle: null,
                },
                {
                  uid: '88888888205468',
                  saasId: '88888888',
                  storeId: '1000',
                  spuId: '7',
                  skuId: '135681625',
                  isSelected: 1,
                  thumb:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
                  title:
                    '不锈钢刀叉勺套装家用西餐餐具ins简约耐用不锈钢金色银色可选',
                  primaryImage:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
                  quantity: 1,
                  stockStatus: true,
                  stockQuantity: 0,
                  price: '29900',
                  originPrice: '29900',
                  tagPrice: null,
                  titlePrefixTags: null,
                  roomId: null,
                  specInfo: [
                    {
                      specTitle: '颜色',
                      specValue: '奶黄色',
                    },
                    {
                      specTitle: '数量',
                      specValue: '六件套',
                    },
                  ],
                  joinCartTime: '2020-06-29T07:55:00.000+0000',
                  available: 1,
                  putOnSale: 1,
                  etitle: null,
                },
              ],
              lastJoinTime: '2020-06-29T07:55:40.000+0000',
            },
            {
              title: null,
              promotionCode: 'EMPTY_PROMOTION',
              promotionSubCode: null,
              promotionId: null,
              tagText: null,
              promotionStatus: null,
              tag: null,
              description: null,
              doorSillRemain: null,
              isNeedAddOnShop: 0,
              goodsPromotionList: [
                {
                  uid: '88888888205468',
                  saasId: '88888888',
                  storeId: '1000',
                  spuId: '11',
                  skuId: '135691629',
                  isSelected: 0,
                  thumb:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
                  title: '运动连帽拉链卫衣休闲开衫长袖多色运动细绒面料运动上衣',
                  primaryImage:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
                  quantity: 1,
                  stockStatus: false,
                  stockQuantity: 0,
                  price: '25900',
                  originPrice: '39900',
                  tagPrice: null,
                  tagText: null,
                  roomId: null,
                  specInfo: [
                    {
                      specTitle: '颜色',
                      specValue: '军绿色',
                    },
                    {
                      specTitle: '尺码',
                      specValue: 'S',
                    },
                  ],
                  joinCartTime: '2020-04-24T06:26:48.000+0000',
                  available: 1,
                  putOnSale: 1,
                  etitle: null,
                },
                {
                  uid: '88888888205468',
                  saasId: '88888888',
                  storeId: '1000',
                  spuId: '5',
                  skuId: '135691635',
                  isSelected: 0,
                  thumb:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png',
                  title:
                    '迷你便携高颜值蓝牙无线耳机立体声只能触控式操作简约立体声耳机',
                  primaryImage:
                    'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png',
                  quantity: 1,
                  stockStatus: true,
                  stockQuantity: 96,
                  price: '29000',
                  originPrice: '29900',
                  tagPrice: null,
                  tagText: null,
                  roomId: null,
                  specInfo: [
                    {
                      specTitle: '颜色',
                      specValue: '黑色',
                    },
                    {
                      specTitle: '类型',
                      specValue: '简约款',
                    },
                  ],
                  joinCartTime: '2020-06-29T07:55:17.000+0000',
                  available: 1,
                  putOnSale: 1,
                  etitle: null,
                },
              ],
              lastJoinTime: null,
            },
          ],
          lastJoinTime: '2020-06-29T07:55:40.000+0000',
          postageFreePromotionVo: {
            title: null,
            promotionCode: null,
            promotionSubCode: null,
            promotionId: null,
            tagText: null,
            promotionStatus: null,
            tag: null,
            description: null,
            doorSillRemain: null,
            isNeedAddOnShop: 0,
          },
        },
      ],
      invalidGoodItems: [
        {
          uid: '88888888205468',
          saasId: '88888888',
          storeId: '1000',
          spuId: '1',
          skuId: '135691631',
          isSelected: 1,
          thumb: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
          title: '纯色纯棉休闲圆领短袖T恤纯白亲肤厚柔软细腻面料纯白短袖套头T恤',
          primaryImage:
            'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
          quantity: 8,
          stockStatus: true,
          stockQuantity: 177,
          price: '26900',
          originPrice: '31900',
          tagPrice: null,
          tagText: null,
          roomId: null,
          specInfo: [
            {
              specTitle: '颜色',
              specValue: '白色',
            },
            {
              specTitle: '尺码',
              specValue: 'S',
            },
          ],
          joinCartTime: '2020-04-28T04:03:59.000+0000',
          available: 1,
          putOnSale: 1,
          etitle: null,
        },
      ],
      isAllSelected: false,
      selectedGoodsCount: 16,
      totalAmount: '179997',
      totalDiscountAmount: '110000',
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 269,
    success: true,
  };
  return resp;
}
