const Subscription = require("../subscription");
const { PODCAST_SUBSCRIPTION_PERSONAL_PLAN_PRICE, PODCAST_SUBSCRIPTION_PERSONAL_PLAN_VALIDITY} = require("../../../constants/constants");

class PersonalPodcastSubscription extends Subscription {
    constructor() {
        super();
        this.price = PODCAST_SUBSCRIPTION_PERSONAL_PLAN_PRICE;
        this.validityInMonths = PODCAST_SUBSCRIPTION_PERSONAL_PLAN_VALIDITY;
    }
}

module.exports = PersonalPodcastSubscription;