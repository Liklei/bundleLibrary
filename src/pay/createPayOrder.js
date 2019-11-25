
import {
   DOMAIN,
   TEST_DOMAIN,
   ERROR_CODE
} from '../lib/data';
import utils from '../lib/utils';
import api from '../lib/api';

export default{
    payback: function(data, callkack) {
         if(!(data instanceof Object)) {
            throw Error(`the first of arguments is not a object`);
         }
         if(!callkack) {
            throw Error(`the second of arguments is not a object`);
         }
         if(!(callkack instanceof Function)) {
            throw Error(`${callkack} is not function`);
         }
         api.payPack(data, DOMAIN()).then(function(res) {
            callkack && callkack(res)
         }).catch(function(error) {
            callkack && callkack(error)
         })
    },
    create: function(param, domain) {
       if(!global.PUB_PARAMS) {
         throw Error(`尚未配置公共参数`);
       }
       if(!(param instanceof Object)) {
         throw Error(`the first of arguments is not a object`);
       }
       return new Promise(function(resolve, reject) {
         utils.ajaxPost(domain + '/api/v4/payapporder', params).then(function(res) {
             let codemsg = ERROR_CODE()[res.code] ? ERROR_CODE()[res.code] :  res.code
             if(res.code === 10000) {
                 resolve(res)
             }else{
                 reject(codemsg, res)
             }
         }).catch(function(e) {
             reject(e)
         })
      }) 
    },
}