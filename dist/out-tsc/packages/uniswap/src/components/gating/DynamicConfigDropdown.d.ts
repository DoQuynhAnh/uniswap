/// <reference types="react" />
import { DynamicConfigs } from 'uniswap/src/features/gating/configs';
export declare function DynamicConfigDropdown({ config, configKey, label, options, selected, }: {
    config: DynamicConfigs;
    configKey: string;
    label: string;
    options: Array<{
        value: string;
        label?: string;
    } | {
        jsonValue: object;
        label?: string;
    }>;
    selected: string;
}): JSX.Element;
//# sourceMappingURL=DynamicConfigDropdown.d.ts.map