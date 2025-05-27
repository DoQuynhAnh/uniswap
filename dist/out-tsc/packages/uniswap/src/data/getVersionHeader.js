import { isExtension } from 'utilities/src/platform';
export const getVersionHeader = () => {
    var _a;
    if (isExtension) {
        return (_a = process.env.VERSION) !== null && _a !== void 0 ? _a : '';
    }
    else {
        // unimplemented for interface
        return '';
    }
};
//# sourceMappingURL=getVersionHeader.js.map