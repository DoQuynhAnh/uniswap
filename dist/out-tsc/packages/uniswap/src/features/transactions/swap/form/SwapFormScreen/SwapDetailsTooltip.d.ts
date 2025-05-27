import { ReactNode } from 'react';
import { FlexProps, GeneratedIcon, IconProps } from 'ui/src';
type OuterProps = {
    children: ReactNode;
    gap?: FlexProps['gap'];
};
declare const Outer: ({ children, gap }: OuterProps) => JSX.Element;
type Title = {
    title: string;
    uniswapX?: boolean;
};
declare const Header: ({ title, Icon, iconColor, logo, }: {
    title: Title;
    Icon?: GeneratedIcon | undefined;
    iconColor?: string | undefined;
    logo?: ReactNode;
}) => JSX.Element;
declare const Content: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const Row: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
declare const LineItemLabel: ({ label }: {
    label: string;
}) => JSX.Element;
declare const LineItemValue: ({ Icon, value, usdValue, iconColor, logo, }: {
    Icon?: GeneratedIcon | undefined;
    value?: string | undefined;
    usdValue?: string | undefined;
    iconColor?: IconProps['color'];
    logo?: ReactNode;
}) => JSX.Element;
declare const Description: ({ text, learnMoreUrl }: {
    text: string;
    learnMoreUrl?: string | undefined;
}) => JSX.Element;
declare const Separator: () => JSX.Element;
export { Content, Description, Header, LineItemLabel, LineItemValue, Outer, Row, Separator };
//# sourceMappingURL=SwapDetailsTooltip.d.ts.map