const { RENEWAL_AMOUNT } = require("../constants/constants");

class RenewalAmountDto {
    #renewalAmount;

    constructor(renewalAmount) {
        this.#renewalAmount = renewalAmount;
    }

    toString() {
        console.log(`${RENEWAL_AMOUNT} ${this.#renewalAmount}`);
    }

}

module.exports = RenewalAmountDto;