import createPayOrder from './pay/createPayOrder.js';
import getOrderStatus from './pay/getOrderStatus.js';

function configParams(param) { 
    global.PUB_PARAMS = param;
}

export {
    configParams,
    createPayOrder,
    getOrderStatus
}
