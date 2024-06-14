const AbstractFactory = require('./abstract-factory');
const SubscriptionPlan = require('../../enums/subscription-plan');
const FreeMusicSubscription = require("../subscription-plan/music/free-music-subscription");
const PersonalMusicSubscription = require("../subscription-plan/music/personal-music-subscription");
const PremiumMusicSubscription = require("../subscription-plan/music/premium-music-subscription");

class MusicSubscriptionFactory extends AbstractFactory {
    getSubscriptionPlan(planType) {
        switch (planType) {
            case SubscriptionPlan.FREE: return new FreeMusicSubscription();
            case SubscriptionPlan.PERSONAL: return new PersonalMusicSubscription();
            case SubscriptionPlan.PREMIUM: return new PremiumMusicSubscription();
            default: return null;
        }
    }
}

module.exports = MusicSubscriptionFactory;