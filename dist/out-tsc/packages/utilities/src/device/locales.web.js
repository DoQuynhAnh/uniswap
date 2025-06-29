import { DEFAULT_LANGUAGE_CODE, DEFAULT_LANGUAGE_TAG } from 'utilities/src/device/constants';
import { logger } from 'utilities/src/logger/logger';
export function getDeviceLocales() {
    try {
        const language = chrome.i18n.getUILanguage();
        return [{ languageCode: language, languageTag: language }];
    }
    catch (e) {
        logger.error(e, {
            level: 'warn',
            tags: { file: 'utils.ts', function: 'getDeviceLocales' },
        });
    }
    return [
        {
            languageCode: DEFAULT_LANGUAGE_CODE,
            languageTag: DEFAULT_LANGUAGE_TAG,
        },
    ];
}
//# sourceMappingURL=locales.web.js.map