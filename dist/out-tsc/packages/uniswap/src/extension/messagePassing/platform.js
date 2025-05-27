export function parseMessage(message, schema) {
    try {
        // The returned value will be properly typed according to the schema,
        // but this type can be `any` if the schema passed in is defined as `any`.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return schema.parse(message);
    }
    catch (e) {
        return undefined;
    }
}
//# sourceMappingURL=platform.js.map