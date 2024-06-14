const Subscription = require("../subscription");
const { MUSIC_SUBSCRIPTION_FREE_PLAN_PRICE, MUSIC_SUBSCRIPTION_FREE_PLAN_VALIDITY} = require("../../../constants/constants");

class FreeMusicSubscription extends Subscription {
    constructor() {
        super();
        this.price = MUSIC_SUBSCRIPTION_FREE_PLAN_PRICE;
        this.validityInMonths = MUSIC_SUBSCRIPTION_FREE_PLAN_VALIDITY;
    }
}

module.exports = FreeMusicSubscription;