const Subscription = require("../subscription");
const { PODCAST_SUBSCRIPTION_PREMIUM_PLAN_PRICE, PODCAST_SUBSCRIPTION_PREMIUM_PLAN_VALIDITY} = require("../../../constants/constants");

class PremiumPodcastSubscription extends Subscription {
    constructor() {
        super();
        this.price = PODCAST_SUBSCRIPTION_PREMIUM_PLAN_PRICE;
        this.validityInMonths = PODCAST_SUBSCRIPTION_PREMIUM_PLAN_VALIDITY;
    }
}

module.exports = PremiumPodcastSubscription;