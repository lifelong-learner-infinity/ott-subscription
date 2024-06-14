const Subscription = require("../subscription");
const { VIDEO_SUBSCRIPTION_FREE_PLAN_PRICE, VIDEO_SUBSCRIPTION_FREE_PLAN_VALIDITY} = require("../../../constants/constants");

class FreeVideoSubscription extends Subscription {
    constructor() {
        super();
        this.price = VIDEO_SUBSCRIPTION_FREE_PLAN_PRICE;
        this.validityInMonths = VIDEO_SUBSCRIPTION_FREE_PLAN_VALIDITY;
    }
}

module.exports = FreeVideoSubscription;