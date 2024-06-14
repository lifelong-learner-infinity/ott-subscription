class DeviceTypeInvalidException extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = DeviceTypeInvalidException;