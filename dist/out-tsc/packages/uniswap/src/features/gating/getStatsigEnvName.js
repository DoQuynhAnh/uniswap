import { isBetaEnv, isProdEnv } from 'utilities/src/environment/env';
import { isInterface } from 'utilities/src/platform';
export var StatsigEnvName;
(function (StatsigEnvName) {
    StatsigEnvName["Beta"] = "beta";
    StatsigEnvName["Development"] = "development";
    StatsigEnvName["Production"] = "production";
    StatsigEnvName["Staging"] = "staging";
})(StatsigEnvName || (StatsigEnvName = {}));
export function getStatsigEnvName() {
    if (isBetaEnv()) {
        return isInterface ? StatsigEnvName.Staging : StatsigEnvName.Beta;
    }
    if (isProdEnv()) {
        return StatsigEnvName.Production;
    }
    return StatsigEnvName.Development;
}
//# sourceMappingURL=getStatsigEnvName.js.map