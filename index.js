const fs = require("fs");
const AppConfig = require('./src/config/app.config');
const { FILE_NOT_FOUND } = require('./src/constants/constants');

function main(args) {
    const fileName = args[2];
    run(fileName);
}


function run(fileName) {
    const appConfig = new AppConfig();
    const command = appConfig.getCommandInvoker();

    try {
        const content = fs.readFileSync(fileName, { encoding: "utf8" });
        const inputLines = content.replace(/\r/g,'').split("\n");
        for(const line of inputLines) {
            const [action, ...tokens] = line.split(" ");
            command.execute(action, tokens);
        }
    } catch (err) {
        if(err.code === 'ENOENT') {
            console.log(FILE_NOT_FOUND);
        }
    }
}

main(process.argv);

module.exports = run;