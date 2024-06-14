class Subscription {
    constructor() {
        this.price = null;
        this.validityInMonths = null;
    }

    getValidityInMonths() {
        return this.validityInMonths;
    }

    getPrice() {
        return this.price;
    }
}

module.exports = Subscription;