const IDevice = require('./device.interface');
const { TEN_DEVICE_PRICE} = require('../../constants/constants');

class TenDevice extends IDevice {
    constructor() {
        super();
        this.price = TEN_DEVICE_PRICE;
    }
}

module.exports = TenDevice;