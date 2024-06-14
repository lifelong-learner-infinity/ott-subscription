const Device = require('../../enums/devices');
const FourDevice = require('../devices/four-device');
const TenDevice = require('../devices/ten-device');
const { INVALID_DEVICE } = require("../../constants/constants");
const DeviceTypeInvalidException = require("../../exceptions/device-type-invalid.exception");

class DeviceFactoryProducer {

    static #getDeviceFactory(device) {
        switch (device) {
            case Device.TEN_DEVICE: return new TenDevice();
            case Device.FOUR_DEVICE: return new FourDevice();
            default: return null;
        }
    }

    static getDeviceDetails(device) {
        const deviceFactory = this.#getDeviceFactory(device);
        if(deviceFactory == null) {
            throw new DeviceTypeInvalidException(INVALID_DEVICE);
        }

        return deviceFactory;
    }

}

module.exports = DeviceFactoryProducer;