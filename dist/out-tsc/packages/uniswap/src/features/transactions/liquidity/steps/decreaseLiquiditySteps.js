export function orderDecreaseLiquiditySteps(flow) {
    const steps = [];
    if (flow.approvalPositionToken) {
        steps.push(flow.approvalPositionToken);
    }
    steps.push(flow.decreasePosition);
    return steps;
}
//# sourceMappingURL=decreaseLiquiditySteps.js.map