class SubscriptionInvalidTypeException extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = SubscriptionInvalidTypeException;