class AddTopUpFailedException extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = AddTopUpFailedException;