export function orderClassicSwapSteps(flow) {
    const steps = [];
    if (flow.revocation) {
        steps.push(flow.revocation);
    }
    if (flow.approval) {
        steps.push(flow.approval);
    }
    if (flow.permit) {
        steps.push(flow.permit);
    }
    steps.push(flow.swap);
    return steps;
}
//# sourceMappingURL=classicSteps.js.map