// These types are used in the gas estimation improvement experiment.
// They are internal to uniswap, so they are not declared in the Trading API public definition.
// Once the experiment is complete, we can remove them easily or add them to the public API definition.
export var FeeType;
(function (FeeType) {
    FeeType["LEGACY"] = "legacy";
    FeeType["EIP1559"] = "eip1559";
})(FeeType || (FeeType = {}));
//# sourceMappingURL=types.js.map