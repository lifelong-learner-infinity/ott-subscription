const AbstractFactory = require('./abstract-factory');
const SubscriptionPlan = require('../../enums/subscription-plan');
const FreePodcastSubscription = require("../subscription-plan/podcast/free-podcast-subscription");
const PersonalPodcastSubscription = require("../subscription-plan/podcast/personal-podcast-subscription");
const PremiumPodcastSubscription = require("../subscription-plan/podcast/premium-podcast-subscription");

class PodcastSubscriptionFactory extends AbstractFactory {
    getSubscriptionPlan(planType) {
        switch (planType) {
            case SubscriptionPlan.FREE: return new FreePodcastSubscription();
            case SubscriptionPlan.PERSONAL: return new PersonalPodcastSubscription();
            case SubscriptionPlan.PREMIUM: return new PremiumPodcastSubscription();
            default: return null;
        }
    }
}

module.exports = PodcastSubscriptionFactory;