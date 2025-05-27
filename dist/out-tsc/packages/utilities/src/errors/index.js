import { trimToLength } from 'utilities/src/primitives/string';
export class PlatformSplitStubError extends Error {
    constructor(functionName) {
        super(`${functionName} not implemented. Did you forget a platform override?`);
        this.name = this.constructor.name;
    }
}
export class NotImplementedError extends Error {
    constructor(functionName) {
        super(`${functionName} is not implemented on this platform.`);
        this.name = this.constructor.name;
    }
}
export function assert(predicate, errorMessage) {
    if (!predicate) {
        throw new Error(errorMessage);
    }
}
export function errorToString(error, maxLength = 240) {
    let errorMessage = '';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    else if (typeof error === 'string') {
        errorMessage = error;
    }
    else if (typeof error === 'number') {
        errorMessage = `Error code: ${error}`;
    }
    else {
        errorMessage = JSON.stringify(error);
    }
    return trimToLength(errorMessage, maxLength);
}
export function tryCatch(valueFnOrPromise) {
    // Handle promises by recursively calling tryCatch
    if (valueFnOrPromise instanceof Promise) {
        return valueFnOrPromise
            .then((v) => tryCatch(() => v))
            .catch((e) => tryCatch(() => {
            throw e;
        }));
    }
    try {
        return { data: valueFnOrPromise(), error: null };
    }
    catch (e) {
        return { data: null, error: e instanceof Error ? e : new Error(String(e)) };
    }
}
//# sourceMappingURL=index.js.map