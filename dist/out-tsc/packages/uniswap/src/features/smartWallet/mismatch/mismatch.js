export function createHasMismatchUtil(ctx) {
    const withPerformanceLogger = createWithPerformanceLogger({
        logger: ctx.logger,
        name: 'hasMismatch',
        filename: 'mismatch.ts',
    });
    /**
     * Returns true if the connected wallet thinks the account is not a smart account (EIP-7702),
     * but there is a deployed contract at the address.
     */
    return withPerformanceLogger(async function hasMismatch(input) {
        var _a;
        const [delegatedResult, isAtomicBatchingSupported] = await Promise.all([
            ctx.delegationService.getIsAddressDelegated(input),
            ctx.getIsAtomicBatchingSupported({
                chainId: input.chainId,
            }),
        ]);
        const isMismatch = !isAtomicBatchingSupported && delegatedResult.isDelegated;
        if (isMismatch && delegatedResult.delegatedAddress) {
            (_a = ctx.onMismatchDetected) === null || _a === void 0 ? void 0 : _a.call(ctx, {
                chainId: input.chainId,
                isDelegated: delegatedResult.isDelegated,
                delegatedAddress: delegatedResult.delegatedAddress,
            });
        }
        return isMismatch;
    });
}
/**
 * Creates a performance logger wrapper for async functions.
 *
 * @param ctx - The context object containing logger and metadata
 * @param ctx.logger - The logger instance to use
 * @param ctx.name - The name of the operation being logged
 * @param ctx.filename - The filename where the operation is being performed
 * @returns A function that takes a function to be measured and returns a wrapped version that logs performance
 *
 * @example
 * const withLogger = createWithPerformanceLogger({
 *   logger,
 *   name: 'fetchData',
 *   filename: 'dataService.ts'
 * });
 *
 * const loggedFetchData = withLogger(fetchData);
 * const data = await loggedFetchData(id, options);
 */
function createWithPerformanceLogger(ctx) {
    return (fn) => {
        return async (...args) => {
            if (!(ctx === null || ctx === void 0 ? void 0 : ctx.logger) || !ctx.filename || !ctx.name) {
                return fn(...args);
            }
            const start = performance.now();
            try {
                const result = await fn(...args);
                const end = performance.now();
                ctx.logger.info(ctx.filename, ctx.name, `${ctx.name} took ${end - start}ms`);
                return result;
            }
            catch (error) {
                const end = performance.now();
                ctx.logger.error(error, {
                    tags: {
                        file: ctx.filename,
                        function: ctx.name,
                    },
                    extra: {
                        duration: end - start,
                    },
                });
                throw error;
            }
        };
    };
}
//# sourceMappingURL=mismatch.js.map