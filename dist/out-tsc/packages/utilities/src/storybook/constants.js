const BASE_WAIT_TIME = 250;
export var StorybookTestingSleepTimes;
(function (StorybookTestingSleepTimes) {
    StorybookTestingSleepTimes[StorybookTestingSleepTimes["SHORT"] = 250] = "SHORT";
    StorybookTestingSleepTimes[StorybookTestingSleepTimes["MEDIUM"] = 500] = "MEDIUM";
    StorybookTestingSleepTimes[StorybookTestingSleepTimes["LONG"] = 750] = "LONG";
    StorybookTestingSleepTimes[StorybookTestingSleepTimes["XL"] = 1000] = "XL";
})(StorybookTestingSleepTimes || (StorybookTestingSleepTimes = {}));
//# sourceMappingURL=constants.js.map