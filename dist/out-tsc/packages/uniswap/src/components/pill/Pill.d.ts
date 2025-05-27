import { ReactNode } from 'react';
import { FlexProps } from 'ui/src';
import { TextVariantTokens } from 'ui/src/theme';
type PillProps = {
    customBackgroundColor?: string;
    customBorderColor?: string;
    foregroundColor?: string;
    icon?: ReactNode;
    label?: ReactNode;
    textVariant?: TextVariantTokens;
} & FlexProps;
export declare function Pill({ borderRadius, children, customBackgroundColor, customBorderColor, flexDirection, foregroundColor, icon, label, px, py, textVariant, ...rest }: PillProps): JSX.Element;
export {};
//# sourceMappingURL=Pill.d.ts.map