import { flush, getUserId, Identify, identify, init, setDeviceId, track } from '@amplitude/analytics-browser';
import { ANONYMOUS_DEVICE_ID } from '@uniswap/analytics';
import { ALLOW_ANALYTICS_ATOM_KEY, AMPLITUDE_SHARED_TRACKING_OPTIONS, ANONYMOUS_EVENT_NAMES, DUMMY_KEY, } from 'utilities/src/telemetry/analytics/constants';
import { generateAnalyticsLoggers } from 'utilities/src/telemetry/analytics/logging';
import { getProcessedEvent } from 'utilities/src/telemetry/analytics/utils';
const loggers = generateAnalyticsLoggers('telemetry/analytics.web');
let allowAnalytics = true;
let testnetMode = false;
let testnetModeConfig;
let commitHash;
let userId;
async function setAnalyticsAtomDirect(allowed) {
    try {
        window.localStorage.setItem(ALLOW_ANALYTICS_ATOM_KEY, JSON.stringify(allowed));
        document.dispatchEvent(new Event('analyticsToggled'));
    }
    catch {
        await chrome.storage.local.set({ ALLOW_ANALYTICS_ATOM_KEY: JSON.stringify(allowed) });
    }
}
async function getAnalyticsAtomFromStorage() {
    try {
        return window.localStorage.getItem(ALLOW_ANALYTICS_ATOM_KEY) !== 'false';
    }
    catch {
        const res = await chrome.storage.local.get(ALLOW_ANALYTICS_ATOM_KEY);
        return res[ALLOW_ANALYTICS_ATOM_KEY] !== 'false';
    }
}
export async function getAnalyticsAtomDirect(forceRead) {
    if (forceRead) {
        allowAnalytics = await getAnalyticsAtomFromStorage();
    }
    return allowAnalytics;
}
// Listen for changes from other areas
const updateLocalVar = async () => {
    allowAnalytics = await getAnalyticsAtomFromStorage();
};
try {
    window.document.addEventListener('analyticsToggled', updateLocalVar, false);
}
catch {
    chrome.storage.local.onChanged.addListener(updateLocalVar);
}
export const analytics = {
    async init(transportProvider, allowed, initHash, userIdGetter) {
        // Set properties
        commitHash = initHash;
        await setAnalyticsAtomDirect(allowed);
        try {
            init(DUMMY_KEY, // Amplitude custom reverse proxy takes care of API key
            undefined, // User ID should be undefined to let Amplitude default to Device ID
            {
                transportProvider, // Used to support custom reverse proxy header
                // Disable tracking of private user information by Amplitude
                trackingOptions: AMPLITUDE_SHARED_TRACKING_OPTIONS,
            });
            userId = userIdGetter ? await userIdGetter() : getUserId();
            if (allowed && userId) {
                setDeviceId(userId);
            }
            if (!allowed) {
                setDeviceId(ANONYMOUS_DEVICE_ID);
            }
        }
        catch (error) {
            loggers.init(error);
        }
    },
    async setAllowAnalytics(allowed) {
        await setAnalyticsAtomDirect(allowed);
        if (allowed) {
            if (userId) {
                setDeviceId(userId);
            }
        }
        else {
            loggers.setAllowAnalytics(allowed);
            identify(new Identify().clearAll()); // Clear all custom user properties
            setDeviceId(ANONYMOUS_DEVICE_ID);
        }
    },
    setTestnetMode(enabled, config) {
        testnetMode = enabled;
        testnetModeConfig = config;
    },
    async sendEvent(eventName, eventProperties) {
        if (!(await getAnalyticsAtomDirect()) && !ANONYMOUS_EVENT_NAMES.includes(eventName)) {
            return;
        }
        const propertiesWithHash = {
            ...eventProperties,
            ...(commitHash ? { git_commit_hash: commitHash } : {}),
        };
        const processedTestnetEvent = getProcessedEvent({
            eventName,
            eventProperties: propertiesWithHash,
            testnetModeConfig,
            isTestnetMode: testnetMode,
        });
        if (processedTestnetEvent) {
            const { eventName: processedEventName, eventProperties: processedEventProperties } = processedTestnetEvent;
            loggers.sendEvent(processedEventName, processedEventProperties);
            track(processedEventName, processedEventProperties);
        }
    },
    flushEvents() {
        loggers.flushEvents();
        flush();
    },
    async setUserProperty(property, value, insert) {
        if (!(await getAnalyticsAtomDirect())) {
            return;
        }
        if (insert) {
            identify(new Identify().postInsert(property, value));
        }
        else {
            loggers.setUserProperty(property, value);
            identify(new Identify().set(property, value));
        }
    },
};
//# sourceMappingURL=analytics.web.js.map