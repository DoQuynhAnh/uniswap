export function orderIncreaseLiquiditySteps(flow) {
    const steps = [];
    if (flow.revokeToken0) {
        steps.push(flow.revokeToken0);
    }
    if (flow.revokeToken1) {
        steps.push(flow.revokeToken1);
    }
    if (flow.approvalToken0) {
        steps.push(flow.approvalToken0);
    }
    if (flow.approvalToken1) {
        steps.push(flow.approvalToken1);
    }
    if (flow.approvalPositionToken) {
        steps.push(flow.approvalPositionToken);
    }
    if (flow.permit) {
        steps.push(flow.permit);
    }
    if (flow.token0PermitTransaction) {
        steps.push(flow.token0PermitTransaction);
    }
    if (flow.token1PermitTransaction) {
        steps.push(flow.token1PermitTransaction);
    }
    steps.push(flow.increasePosition);
    return steps;
}
//# sourceMappingURL=increaseLiquiditySteps.js.map