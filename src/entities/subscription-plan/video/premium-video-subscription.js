const Subscription = require("../subscription");
const { VIDEO_SUBSCRIPTION_PREMIUM_PLAN_PRICE, VIDEO_SUBSCRIPTION_PREMIUM_PLAN_VALIDITY} = require("../../../constants/constants");

class PremiumVideoSubscription extends Subscription {
    constructor() {
        super();
        this.price = VIDEO_SUBSCRIPTION_PREMIUM_PLAN_PRICE;
        this.validityInMonths = VIDEO_SUBSCRIPTION_PREMIUM_PLAN_VALIDITY;
    }
}

module.exports = PremiumVideoSubscription;