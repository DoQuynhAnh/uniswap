/// <reference types="react" />
import { ColorTokens } from 'ui/src';
interface PillMultiToggleOption {
    value: string;
    display?: JSX.Element | string;
}
export declare function PillMultiToggle({ options, defaultOption, onSelectOption, activePillColor, activeTextColor, }: {
    options: PillMultiToggleOption[];
    defaultOption: string;
    onSelectOption?: (option: string | number) => void;
    activePillColor?: ColorTokens;
    activeTextColor?: ColorTokens;
}): JSX.Element;
export {};
//# sourceMappingURL=PillMultiToggle.d.ts.map