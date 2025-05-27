import { isBetaEnv, isDevEnv } from 'utilities/src/environment/env';
export var DatadogEnvironment;
(function (DatadogEnvironment) {
    DatadogEnvironment["DEV"] = "dev";
    DatadogEnvironment["BETA"] = "beta";
    DatadogEnvironment["PROD"] = "prod";
})(DatadogEnvironment || (DatadogEnvironment = {}));
export function getDatadogEnvironment() {
    if (isDevEnv()) {
        return DatadogEnvironment.DEV;
    }
    if (isBetaEnv()) {
        return DatadogEnvironment.BETA;
    }
    return DatadogEnvironment.PROD;
}
//# sourceMappingURL=env.js.map