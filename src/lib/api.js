import utils from './utils';
export default{
    payPack: function(params, domain) {
        return utils.ajaxPost(domain + '/api/v4/payorderparm', params)
    },
    queryOrder: function(params, domain) {
        return utils.ajaxPost(domain + '/api/v4/payorderstate', params)
    },
}