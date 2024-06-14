class CommandNotFoundException extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = CommandNotFoundException;