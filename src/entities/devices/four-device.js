const IDevice = require('./device.interface');
const { FOUR_DEVICE_PRICE} = require('../../constants/constants');

class FourDevice extends IDevice {
    constructor() {
        super();
        this.price = FOUR_DEVICE_PRICE;
    }
}

module.exports = FourDevice;