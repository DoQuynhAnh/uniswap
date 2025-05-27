export const getTradeSettingsDeadline = (customDeadline) => {
    // if custom deadline is set (in minutes), convert to unix timestamp format from now
    const deadlineSeconds = (customDeadline !== null && customDeadline !== void 0 ? customDeadline : 0) * 60;
    const deadline = customDeadline ? Math.floor(Date.now() / 1000) + deadlineSeconds : undefined;
    return deadline;
};
//# sourceMappingURL=getTradeSettingsDeadline.js.map