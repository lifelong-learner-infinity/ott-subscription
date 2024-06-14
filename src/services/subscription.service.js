const ISubscriptionService = require("./subscribe.interface");
const SubscriptionStatus = require("../enums/subscription-status");
const TopUpStatus = require("../enums/top-up-status");
const InvalidDateException = require("../exceptions/invalid-date.exception");
const AddSubscriptionFailedException = require("../exceptions/add-subscription-failed.exception");
const AddTopUpFailedException = require("../exceptions/add-topup-failed.exception");
const { INVALID_DATE, SUBSCRIPTIONS_NOT_FOUND, ADD_SUBSCRIPTION_FAILED,
    ADD_TOPUP_FAILED, DUPLICATE_TOPUP, DUPLICATE_CATEGORY, INPUT_DATE_FORMAT, INPUT_DATE_STRING_SEPARATOR  } = require("../constants/constants");

class SubscriptionService extends ISubscriptionService {
    #subscriptionModel;

    constructor(subscriptionModel) {
        super();
        this.#subscriptionModel = subscriptionModel;
    }

    #parseDate(dateStr) {
        const [day, month, year] = dateStr.split(INPUT_DATE_STRING_SEPARATOR);
        return Date.parse(`${year}-${month}-${day}`);
    }

    #isValidDate(dateStr) {
        return INPUT_DATE_FORMAT.test(dateStr);
    }

    startSubscription(startDate) {
        if(!this.#isValidDate(startDate)) {
            throw new InvalidDateException(INVALID_DATE);
        }

        this.#subscriptionModel.addSubscriptionDate(this.#parseDate(startDate));
    }

    addSubscription(category, planName) {
        const subscriptionStatus = this.#subscriptionModel.getSubscriptionStatus();
        const isAlreadySubscribed = this.#subscriptionModel.isAlreadySubscribed(category);

        if(subscriptionStatus === SubscriptionStatus.NOT_STARTED) {
            throw new AddSubscriptionFailedException(`${ADD_SUBSCRIPTION_FAILED} ${INVALID_DATE}`);
        }

        if(isAlreadySubscribed) {
            throw new AddSubscriptionFailedException(`${ADD_SUBSCRIPTION_FAILED} ${DUPLICATE_CATEGORY}`)
        }

        this.#subscriptionModel.addSubscription(category, planName);

    }

    addTopUp(topUpName, noOfMonths) {
        const subscriptionStatus = this.#subscriptionModel.getSubscriptionStatus();
        const topUpStatus = this.#subscriptionModel.getTopUpStatus();

        if(subscriptionStatus === SubscriptionStatus.NOT_STARTED) {
            throw new AddTopUpFailedException(`${ADD_TOPUP_FAILED} ${INVALID_DATE}`);
        }

        if(subscriptionStatus === SubscriptionStatus.STARTED) {
            throw new AddTopUpFailedException(`${ADD_TOPUP_FAILED} ${SUBSCRIPTIONS_NOT_FOUND}`);
        }

        if(topUpStatus === TopUpStatus.ADDED) {
            throw new AddTopUpFailedException(`${ADD_TOPUP_FAILED} ${DUPLICATE_TOPUP}`);
        }

        this.#subscriptionModel.addTopUp(topUpName, noOfMonths);

    }
}

module.exports = SubscriptionService;