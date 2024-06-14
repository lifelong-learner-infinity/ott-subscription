const ICommand = require("./command.interface");
const { ZERO } = require("../constants/constants");

class StartSubscriptionCommand extends ICommand {

    #subscriptionService;

    constructor(subscriptionService) {
        super();
        this.#subscriptionService = subscriptionService;
    }

    execute(tokens) {
        try {
            const startDate = tokens[ZERO];
            this.#subscriptionService.startSubscription(startDate);
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = StartSubscriptionCommand;