export function orderMigrateLiquiditySteps(flow) {
    const steps = [];
    if (flow.permit) {
        steps.push(flow.permit);
    }
    if (flow.positionTokenPermitTransaction) {
        steps.push(flow.positionTokenPermitTransaction);
    }
    steps.push(flow.migrate);
    return steps;
}
//# sourceMappingURL=migrationSteps.js.map