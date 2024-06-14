const SubscriptionModel = require("../entities/subscription.model");
const RenewalReminders = require("../entities/renewal-reminders");
const SubscriptionService = require("../services/subscription.service");
const RenewalService = require("../services/renewal.service");
const StartSubscriptionCommand = require("../commands/start-subscription.command");
const AddSubscriptionCommand = require('../commands/add-subscription.command');
const AddTopUpCommand = require('../commands/add-top-up.command');
const PrintRenewalCommand = require("../commands/renewal.command");
const Command = require("../commands/command");
const CommandList = require("../enums/command-list");

class AppConfig {
    #subscriptionModel = new SubscriptionModel();
    #subscriptionService = new SubscriptionService(this.#subscriptionModel);
    #renewalReminders = new RenewalReminders();
    #renewalService = new RenewalService(this.#subscriptionModel, this.#renewalReminders);
    #startSubscriptionCommand = new StartSubscriptionCommand(this.#subscriptionService);
    #addSubscriptionCommand = new AddSubscriptionCommand(this.#subscriptionService);
    #addTopUpCommand = new AddTopUpCommand(this.#subscriptionService);
    #printRenewalCommand = new PrintRenewalCommand(this.#renewalService);
    #command = new Command();

    getCommandInvoker() {
        this.#command.register(CommandList.START_SUBSCRIPTION, this.#startSubscriptionCommand);
        this.#command.register(CommandList.ADD_SUBSCRIPTION, this.#addSubscriptionCommand);
        this.#command.register(CommandList.ADD_TOPUP, this.#addTopUpCommand);
        this.#command.register(CommandList.PRINT_RENEWAL_DETAILS, this.#printRenewalCommand);
        return this.#command;
    }
}

module.exports = AppConfig;