import {
    DOMAIN,
    TEST_DOMAIN,
    ERROR_CODE
 } from '../lib/data';
 import utils from '../lib/utils';
 import api from '../lib/api';

let Timer = null;
let orderResult = null;

export default {
    createQuery: function(data) {
        if(!global.PUB_PARAMS) {
            throw Error('not config global params');   
        }
        if(!data) {
            throw Error('no transmit data');   
        }
        if(!(data instanceof Object)) {
            throw Error(`the first of arguments is not a object`);
        }
        return new Promise(function(resolve, reject){
            Timer = setInterval(() => {
                api.queryOrder(global.PUB_PARAMS).then(res => {
                  switch (res.code) {
                    case 10000:
                      clearInterval(Timer);
                      orderResult = res;
                      resolve(res);
                      break;
                    case 20000:
                      console.info('Looping interface'); 
                      break;
                    default:
                      res.errMsg = ERROR_CODE[res.code] || '网路请求失败';  
                      orderResult = res;
                      reject(res);
                      clearInterval(Timer);
                      break;
                  }
                }).catch(function(e) {
                    reject(e)
                });
            }, global.PUB_PARAMS.gapTime);
        });
    },
    stopQuery: function() {
        if(Timer) {
            clearInterval(Timer);
            Timer = null;
        }
    },
    failQuery: function(callback) {
        if(callkack && !(callkack instanceof Function)) {
            throw Error('callback not a function'); 
        }
        if(!orderResult) {
            throw Error('Looping interface, now'); 
        }
        callback && callback(orderResult);
    }
}