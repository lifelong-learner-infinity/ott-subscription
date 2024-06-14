const ICommand = require("./command.interface");

class AddTopUpCommand extends ICommand {

    #subscriptionService;

    constructor(subscriptionService) {
        super();
        this.#subscriptionService = subscriptionService;
    }

    execute(tokens) {
        try {
            const [deviceType, noOfMonths] = tokens;
            this.#subscriptionService.addTopUp(deviceType, noOfMonths);
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = AddTopUpCommand;