import { omit, pick } from 'es-toolkit';
export function createFixture(defaultOptionsOrGetter) {
    return (getValues) => {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        return (overrides) => {
            // Get default options (if they exist)
            const defaultOptions = typeof defaultOptionsOrGetter === 'function' ? defaultOptionsOrGetter() : defaultOptionsOrGetter;
            // Get overrides for options (filter out undefined values)
            const optionOverrides = Object.fromEntries(Object.entries(defaultOptions
                ? pick(overrides || {}, Object.keys(defaultOptions) || [])
                : {}).filter(([, value]) => value !== undefined));
            // Get values with getValues function
            const mergedOptions = defaultOptions ? { ...defaultOptions, ...optionOverrides } : undefined;
            const values = getValues(mergedOptions);
            // Get overrides for values
            const valueOverrides = overrides
                ? omit(overrides, Object.keys(defaultOptions || []))
                : {};
            return Array.isArray(values)
                ? // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    values.map((v) => ({ ...v, ...valueOverrides }))
                : { ...values, ...valueOverrides };
        };
    };
}
//# sourceMappingURL=factory.js.map