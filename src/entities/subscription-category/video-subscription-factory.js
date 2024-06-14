const AbstractFactory = require('./abstract-factory');
const SubscriptionPlan = require('../../enums/subscription-plan');
const FreeVideoSubscription = require("../subscription-plan/video/free-video-subscription");
const PersonalVideoSubscription = require("../subscription-plan/video/personal-video-subscription");
const PremiumVideoSubscription = require("../subscription-plan/video/premium-video-subscription");

class VideoSubscriptionFactory extends AbstractFactory {
    getSubscriptionPlan(planType) {
        switch (planType) {
            case SubscriptionPlan.FREE: return new FreeVideoSubscription();
            case SubscriptionPlan.PERSONAL: return new PersonalVideoSubscription();
            case SubscriptionPlan.PREMIUM: return new PremiumVideoSubscription();
            default: return null;
        }
    }
}

module.exports = VideoSubscriptionFactory;