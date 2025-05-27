/// <reference types="react" />
import { ColorTokens } from 'ui/src';
import { IconSizeTokens, fonts } from 'ui/src/theme';
interface RelativeChangeProps {
    change?: number;
    absoluteChange?: number;
    variant?: keyof typeof fonts;
    semanticColor?: boolean;
    positiveChangeColor?: ColorTokens;
    negativeChangeColor?: ColorTokens;
    arrowSize?: IconSizeTokens;
    loading?: boolean;
    alignRight?: boolean;
}
export declare function RelativeChange(props: RelativeChangeProps): JSX.Element;
export {};
//# sourceMappingURL=RelativeChange.d.ts.map