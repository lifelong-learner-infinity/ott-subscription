const assert = require('assert');
const RunApp = require('./index');


describe("OTT Subscription Tests", () => {
   it("Integration Test #1", async () => {
       const argument= "sample_input/input1.txt";
       const expectedOutput = "RENEWAL_REMINDER MUSIC 23-02-2022\n" +
           "RENEWAL_REMINDER VIDEO 25-04-2022\n" +
           "RENEWAL_REMINDER PODCAST 23-02-2022\n" +
           "RENEWAL_AMOUNT 700";

       // capture console statements
       const consoleLogMessages = [];
       const originalConsoleLog = console.log;
       console.log = (message) => {
           consoleLogMessages.push(message);
       };

       // when
       RunApp(argument);

       // then
       assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
       console.log = originalConsoleLog;
   });

    it("Integration Test #2", async () => {
        const argument= "sample_input/input2.txt";
        const expectedOutput = "RENEWAL_REMINDER MUSIC 27-02-2020\n" +
            "RENEWAL_REMINDER PODCAST 29-12-2019\n" +
            "RENEWAL_AMOUNT 550";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });

    it("Integration Test #3", async () => {
        const argument= "sample_input/input3.txt";
        const expectedOutput = "RENEWAL_REMINDER MUSIC 15-10-2021\n" +
            "RENEWAL_REMINDER VIDEO 15-10-2021\n" +
            "RENEWAL_REMINDER PODCAST 15-08-2021\n" +
            "RENEWAL_AMOUNT 850";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });

    it("Integration Test #4", async () => {
        const argument= "sample_input/input4.txt";
        const expectedOutput = "INVALID_DATE\n" +
            "ADD_SUBSCRIPTION_FAILED INVALID_DATE\n" +
            "ADD_SUBSCRIPTION_FAILED INVALID_DATE\n" +
            "ADD_TOPUP_FAILED INVALID_DATE\n" +
            "SUBSCRIPTIONS_NOT_FOUND";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });

    it("Integration Test #5", async () => {
        const argument= "sample_input/input5.txt";
        const expectedOutput = "ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY\n" +
            "ADD_TOPUP_FAILED DUPLICATE_TOPUP\n" +
            "RENEWAL_REMINDER MUSIC 10-11-2022\n" +
            "RENEWAL_AMOUNT 200";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });

    it("Integration Test #6", async () => {
        const argument= "sample_input/input6.txt";
        const expectedOutput = "RENEWAL_REMINDER MUSIC 10-03-2022\n" +
            "RENEWAL_REMINDER VIDEO 10-03-2022\n" +
            "RENEWAL_REMINDER PODCAST 10-03-2022\n" +
            "RENEWAL_AMOUNT 250";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });

    it("Integration Test #7", async () => {
        const argument= "sample_input/input7.txt";
        const expectedOutput = "ADD_TOPUP_FAILED SUBSCRIPTIONS_NOT_FOUND\n" +
            "SUBSCRIPTIONS_NOT_FOUND";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });

    it("Integration Test #8", async () => {
        const argument= "sample_input/input8.txt";
        const expectedOutput = "SUBSCRIPTIONS_NOT_FOUND";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });

    it("Integration Test #9", async () => {
        const argument= "sample_input/input9.txt";
        const expectedOutput = "ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY\n" +
            "ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY\n" +
            "ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY\n" +
            "ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY\n" +
            "ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY\n" +
            "ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY\n" +
            "ADD_TOPUP_FAILED DUPLICATE_TOPUP\n" +
            "RENEWAL_REMINDER MUSIC 28-03-2022\n" +
            "RENEWAL_REMINDER VIDEO 28-03-2022\n" +
            "RENEWAL_REMINDER PODCAST 28-05-2022\n" +
            "RENEWAL_AMOUNT 700";

        // capture console statements
        const consoleLogMessages = [];
        const originalConsoleLog = console.log;
        console.log = (message) => {
            consoleLogMessages.push(message);
        };

        // when
        RunApp(argument);

        // then
        assert.deepStrictEqual(consoleLogMessages.join("\n"), expectedOutput);
        console.log = originalConsoleLog;
    });
});