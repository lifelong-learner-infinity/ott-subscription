const IRenewalService = require("./renewal.interface");
const SubscriptionFactory = require("../entities/factory/subscription-factory");
const SubscriptionStatus = require("../enums/subscription-status");
const DeviceFactoryProducer = require("../entities/factory/device-factory");
const TopUpStatus = require("../enums/top-up-status");
const RenewalReminderDto = require("../dto/renewal-reminder.dto");
const RenewalAmountDto = require("../dto/renewal-amount.dto");
const { NO_OF_DAYS_BEFORE_TO_NOTIFIED, SUBSCRIPTIONS_NOT_FOUND, OUTPUT_DATE_FORMAT, OUTPUT_DATE_LANG, INPUT_DATE_STRING_SEPARATOR  } = require("../constants/constants");
const SubscriptionNotFoundException = require("../exceptions/subscription-not-found.exception");

class RenewalService extends IRenewalService {

    #subscriptionModel;
    #renewalReminders;

    constructor(subscriptionModel, renewalReminders) {
        super();
        this.#subscriptionModel = subscriptionModel;
        this.#renewalReminders = renewalReminders;
    }

    #formatDate(dateObj) {
        const date = dateObj.toLocaleDateString(OUTPUT_DATE_LANG, OUTPUT_DATE_FORMAT);
        return date.replace(/\//g, INPUT_DATE_STRING_SEPARATOR);
    }

    #calculateRenewalReminderList() {

        const renewalList = [];
        const subscriptionList = this.#subscriptionModel.getSubscriptionList();
        const subscriptionStartDate = this.#subscriptionModel.getSubscriptionStartDate();

        for (const [category, planName] of subscriptionList.entries()) {
            let renewalDate = new Date(subscriptionStartDate);
            const subscription = SubscriptionFactory.getSubscription(category, planName);
            const monthsToAdd = subscription.getValidityInMonths();
            renewalDate.setMonth(renewalDate.getMonth() + monthsToAdd);
            renewalDate.setDate(renewalDate.getDate() - NO_OF_DAYS_BEFORE_TO_NOTIFIED);
            const formattedDate = this.#formatDate(renewalDate);
            renewalList.push({ category, formattedDate });
        }
        this.#renewalReminders.setRenewalList(renewalList);
    }

    #calculateRenewalAmount() {
        let amount = 0.0;
        const subscriptionList = this.#subscriptionModel.getSubscriptionList();
        for(const [category, planName] of subscriptionList.entries()) {
            const subscription = SubscriptionFactory.getSubscription(category, planName);
            amount += subscription.getPrice();
        }

        const topUpStatus = this.#subscriptionModel.getTopUpStatus();
        const devices = this.#subscriptionModel.getDevice();

        if(topUpStatus === TopUpStatus.ADDED && devices !== null) {
            const Device = DeviceFactoryProducer.getDeviceDetails(devices);
            const topUpMonths = this.#subscriptionModel.getTopUpMonths();
            amount += Device.getPrice() * topUpMonths;
        }

        this.#renewalReminders.setRenewalAmount(amount);
    }

    #printRenewalReminderList() {
        new RenewalReminderDto(this.#renewalReminders.getRenewalList()).toString();
    }

    #printRenewalAmount() {
        new RenewalAmountDto(this.#renewalReminders.getRenewalAmount()).toString();
    }

    generateReminders() {
        const subscriptionStatus = this.#subscriptionModel.getSubscriptionStatus();

        if([SubscriptionStatus.NOT_STARTED,SubscriptionStatus.STARTED].includes(subscriptionStatus)) {
            throw new SubscriptionNotFoundException(SUBSCRIPTIONS_NOT_FOUND);
        }

        this.#calculateRenewalReminderList();
        this.#calculateRenewalAmount();
        this.#printRenewalReminderList();
        this.#printRenewalAmount();
    }

}

module.exports = RenewalService;