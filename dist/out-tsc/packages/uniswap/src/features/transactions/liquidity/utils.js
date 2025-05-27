// Takes the two potential errors from calls to the trading api and returns:
//   - false if there is no error
//   - a string with an error message if one can be parsed
//   - true if there is an error but no message could be parsed
// The calldata error takes precedence over the approval error for the message.
export function getErrorMessageToDisplay({ calldataError, approvalError, }) {
    if (calldataError) {
        return parseErrorMessageTitle(calldataError, { includeRequestId: true }) || true;
    }
    if (approvalError) {
        return parseErrorMessageTitle(approvalError, { includeRequestId: true }) || true;
    }
    return false;
}
export function parseErrorMessageTitle(error, { defaultTitle, includeRequestId }) {
    var _a, _b;
    if (!error) {
        return defaultTitle;
    }
    const errorWithData = error;
    const requestId = (_a = errorWithData.data) === null || _a === void 0 ? void 0 : _a.requestId;
    const title = ((_b = errorWithData.data) === null || _b === void 0 ? void 0 : _b.detail) || errorWithData.name || defaultTitle;
    return includeRequestId && title ? `${title}, id: ${requestId}` : title;
}
//# sourceMappingURL=utils.js.map