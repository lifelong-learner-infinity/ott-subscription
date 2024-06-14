const Subscription = require("../subscription");
const { VIDEO_SUBSCRIPTION_PERSONAL_PLAN_PRICE, VIDEO_SUBSCRIPTION_PERSONAL_PLAN_VALIDITY} = require("../../../constants/constants");

class PersonalVideoSubscription extends Subscription {
    constructor() {
        super();
        this.price = VIDEO_SUBSCRIPTION_PERSONAL_PLAN_PRICE;
        this.validityInMonths = VIDEO_SUBSCRIPTION_PERSONAL_PLAN_VALIDITY;
    }
}

module.exports = PersonalVideoSubscription;