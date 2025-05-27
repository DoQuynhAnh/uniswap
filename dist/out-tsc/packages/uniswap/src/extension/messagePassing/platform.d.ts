import { z } from 'zod';
export type MessageParsers<T extends string, R extends {
    [key in T]: {
        type: key;
    };
}> = {
    [key in T]: (message: unknown) => R[key];
};
export declare function parseMessage<TSchema extends z.ZodTypeAny>(message: unknown, schema: TSchema): z.infer<TSchema> | undefined;
//# sourceMappingURL=platform.d.ts.map