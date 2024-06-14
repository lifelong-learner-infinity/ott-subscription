const SubscriptionStatus = require("../enums/subscription-status");
const TopUpStatus = require("../enums/top-up-status");

class SubscriptionModel {
    #subscriptionStartDate;
    #subscriptionStatus;
    #subscriptionList;
    #device;
    #topUpStatus;
    #topUpMonths;

    constructor() {
        this.#subscriptionStartDate = null;
        this.#subscriptionStatus = SubscriptionStatus.NOT_STARTED;
        this.#subscriptionList = new Map();
        this.#device = null;
        this.#topUpStatus = TopUpStatus.EMPTY;
        this.#topUpMonths = 0;
    }

    addSubscriptionDate(startDate) {
        this.#subscriptionStatus = SubscriptionStatus.STARTED;
        this.#subscriptionStartDate = startDate;
    }

    addSubscription(category, planName) {
        this.#subscriptionStatus = SubscriptionStatus.ADDED;
        this.#subscriptionList.set(category, planName);
    }

    addTopUp(deviceType, noOfMonths) {
        this.#topUpStatus = TopUpStatus.ADDED;
        this.#topUpMonths = noOfMonths;
        this.#device = deviceType;
    }

    isAlreadySubscribed(category) {
        return this.#subscriptionList.has(category);
    }

    getSubscriptionStartDate() {
        return this.#subscriptionStartDate;
    }

    getSubscriptionStatus() {
        return this.#subscriptionStatus;
    }

    getSubscriptionList() {
        return this.#subscriptionList;
    }

    getDevice() {
        return this.#device;
    }

    getTopUpStatus() {
        return this.#topUpStatus;
    }

    getTopUpMonths() {
        return this.#topUpMonths;
    }
}

module.exports = SubscriptionModel;
