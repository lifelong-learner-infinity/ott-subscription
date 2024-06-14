const Subscription = require("../subscription");
const { MUSIC_SUBSCRIPTION_PERSONAL_PLAN_PRICE, MUSIC_SUBSCRIPTION_PERSONAL_PLAN_VALIDITY} = require("../../../constants/constants");

class PersonalMusicSubscription extends Subscription {
    constructor() {
        super();
        this.price = MUSIC_SUBSCRIPTION_PERSONAL_PLAN_PRICE;
        this.validityInMonths = MUSIC_SUBSCRIPTION_PERSONAL_PLAN_VALIDITY;
    }
}

module.exports = PersonalMusicSubscription;