export function orderUniswapXSteps(flow) {
    const steps = [];
    if (flow.wrap) {
        steps.push(flow.wrap);
    }
    if (flow.revocation) {
        steps.push(flow.revocation);
    }
    if (flow.approval) {
        steps.push(flow.approval);
    }
    steps.push(flow.signOrder);
    return steps;
}
//# sourceMappingURL=uniswapxSteps.js.map