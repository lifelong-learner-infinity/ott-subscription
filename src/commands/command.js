const { NO_COMMAND_FOUND } = require("../constants/constants");
const CommandNotFoundException = require("../exceptions/command-not-found.exception");

class Command {
    #commandMap = new Map();

    register(commandName, commandMethod) {
        this.#commandMap.set(commandName, commandMethod);
    }

    execute(command, tokens) {
        const commandMethod = this.#commandMap.get(command);
        if(!commandMethod) {
            throw new CommandNotFoundException(NO_COMMAND_FOUND);
        }
        commandMethod.execute(tokens);
    }
}

module.exports = Command;