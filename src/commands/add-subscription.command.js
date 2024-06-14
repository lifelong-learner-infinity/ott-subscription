const ICommand = require("./command.interface");

class AddSubscriptionCommand extends ICommand {

    #subscriptionService;

    constructor(subscriptionService) {
        super();
        this.#subscriptionService = subscriptionService;
    }

    execute(tokens) {
        try {
            const [category, planName] = tokens;
            this.#subscriptionService.addSubscription(category, planName);
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = AddSubscriptionCommand;