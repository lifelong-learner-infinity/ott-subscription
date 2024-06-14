const Subscriptions = require("../../enums/subscription-category");
const MusicSubscriptionFactory = require("../subscription-category/music-subscription-factory");
const PodcastSubscriptionFactory = require("../subscription-category/podcast-subscription-factory");
const VideoSubscriptionFactory = require("../subscription-category/video-subscription-factory");
const SubscriptionInvalidTypeException = require("../../exceptions/subscription-invalid-type.exception");
const { INVALID_SUBSCRIPTION_CATEGORY, INVALID_SUBSCRIPTION_PLAN } = require("../../constants/constants");

class SubscriptionFactory {

    static #getSubscriptionCategoryFactory(categoryType) {
        switch (categoryType) {
            case Subscriptions.MUSIC: return new MusicSubscriptionFactory();
            case Subscriptions.PODCAST: return new PodcastSubscriptionFactory();
            case Subscriptions.VIDEO: return new VideoSubscriptionFactory();
            default: return null;
        }
    }

    static getSubscription(categoryType, planType) {
        const abstractFactory = this.#getSubscriptionCategoryFactory(categoryType);
        if(abstractFactory === null) throw new SubscriptionInvalidTypeException(INVALID_SUBSCRIPTION_CATEGORY);
        const subscription = abstractFactory.getSubscriptionPlan(planType);
        if(subscription === null) throw new SubscriptionInvalidTypeException(INVALID_SUBSCRIPTION_PLAN);
        return subscription;
    }
}

module.exports = SubscriptionFactory;