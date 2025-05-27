export function parseERC20ApproveCalldata(data) {
    const amount = BigInt(`0x${data.slice(-64)}`); // length of a uint256
    const spender = `0x${data.slice(-104, -64)}`; // length of an address
    return { amount, spender };
}
//# sourceMappingURL=approvals.js.map