const { RENEWAL_REMINDER } = require("../constants/constants");

class RenewalReminderDto {

    #renewalList;

    constructor(renewalList) {
        this.#renewalList = renewalList;
    }

    toString() {
        this.#renewalList.forEach(({ category, formattedDate }) => {
            console.log(`${RENEWAL_REMINDER} ${category} ${formattedDate}`);
        });
    }
}

module.exports = RenewalReminderDto;