const IRenewalReminders = require("./renewal-reminders.interface");

class RenewalReminders extends IRenewalReminders {
    #renewalList;
    #renewalAmount;

    constructor() {
        super();
        this.#renewalList = [];
        this.#renewalAmount = 0;
    }


    getRenewalList() {
        return this.#renewalList;
    }

    setRenewalList(renewalList) {
        this.#renewalList = renewalList;
    }

    getRenewalAmount() {
        return this.#renewalAmount;
    }

    setRenewalAmount(renewalAmount) {
        this.#renewalAmount = renewalAmount;
    }
}

module.exports = RenewalReminders;