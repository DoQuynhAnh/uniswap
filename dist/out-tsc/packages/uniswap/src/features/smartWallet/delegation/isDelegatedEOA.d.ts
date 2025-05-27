interface IsDelegatedEOAInput {
    bytecode: `0x${string}`;
}
interface IsDelegatedEOAOutput {
    isDelegated: boolean;
    delegateTo: `0x${string}` | null;
}
export declare function isDelegatedEOA(input: IsDelegatedEOAInput): IsDelegatedEOAOutput;
export {};
//# sourceMappingURL=isDelegatedEOA.d.ts.map