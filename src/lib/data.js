export const DOMAIN = function() {
    return 'http://app.xunjiepdf.com'
}

export const TEST_DOMAIN = function() {
    return 'http://115.159.44.133:8992/'
}

export const ERROR_CODE = function() {
    return {
        '11101': '缺少 或 不符合要求的 productid',
        '11102': '缺少 或 不符合要求的 deviceid',
        '11103': '缺少 或 不符合要求的 devicetype',
        '11104': '缺少 或 不符合要求的 devicetos',
        '11105': '缺少 或 不符合要求的 language',
        '11106': '缺少 或 不符合要求的 softname',
        '11107': '缺少 或 不符合要求的 softversion',
        '11108': '缺少 或 不符合要求的 timestamp',
        '11109': '缺少 或 不符合要求的 clientip',
        '11110': '缺少 或 不符合要求的 datasign',
        '18071': '缺少 或 不符合要求的 account',
        '18072': '缺少 或 不符合要求的 packageid',
        '18073': '缺少 或 不符合要求的 orderno',
        '20000': '等待付款',
        '30000': '已退款',
        '19011': '查询失败',
        '19012': '订单信息不对',
    }
} 