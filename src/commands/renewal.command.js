const ICommand = require("./command.interface");

class RenewalCommand extends ICommand {
    #renewalService

    constructor(renewalService) {
        super();
        this.#renewalService = renewalService;
    }

    execute(tokens) {
        try {
            this.#renewalService.generateReminders();
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = RenewalCommand;