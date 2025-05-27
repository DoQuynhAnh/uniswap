/// <reference types="react" />
import { ColorTokens } from 'tamagui';
import { GeneratedIcon, IconProps } from 'ui/src/components/factories/createIcon';
type InlineCardProps = {
    Icon: GeneratedIcon | ((props: IconProps) => JSX.Element);
    iconColor?: ColorTokens;
    color: ColorTokens;
    backgroundColor?: ColorTokens;
    description: string | JSX.Element;
    iconBackgroundColor?: ColorTokens;
    heading?: string | JSX.Element;
    CtaButtonIcon?: GeneratedIcon | ((props: IconProps) => JSX.Element);
    CtaButtonIconColor?: ColorTokens;
    onPressCtaButton?: () => void;
};
export declare function InlineCard({ Icon, iconColor, color, backgroundColor, iconBackgroundColor, heading, description, CtaButtonIcon, CtaButtonIconColor, onPressCtaButton, }: InlineCardProps): JSX.Element;
export {};
//# sourceMappingURL=InlineCard.d.ts.map