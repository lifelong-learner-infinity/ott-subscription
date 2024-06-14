const Subscription = require("../subscription");
const { MUSIC_SUBSCRIPTION_PREMIUM_PLAN_PRICE, MUSIC_SUBSCRIPTION_PREMIUM_PLAN_VALIDITY} = require("../../../constants/constants");

class PremiumMusicSubscription extends Subscription {
    constructor() {
        super();
        this.price = MUSIC_SUBSCRIPTION_PREMIUM_PLAN_PRICE;
        this.validityInMonths = MUSIC_SUBSCRIPTION_PREMIUM_PLAN_VALIDITY;
    }
}

module.exports = PremiumMusicSubscription;