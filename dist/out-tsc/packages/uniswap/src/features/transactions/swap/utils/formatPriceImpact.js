export function formatPriceImpact(priceImpact, formatPercent) {
    if (!priceImpact) {
        return undefined;
    }
    const positiveImpactPrefix = priceImpact.lessThan(0) ? '+' : '';
    return `${positiveImpactPrefix}${formatPercent(priceImpact.multiply(-1).toFixed(3))}`;
}
//# sourceMappingURL=formatPriceImpact.js.map