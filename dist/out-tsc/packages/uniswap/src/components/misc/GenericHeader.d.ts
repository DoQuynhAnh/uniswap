/// <reference types="react" />
import { FlexProps, GeneratedIcon, SpaceTokens } from 'ui/src';
import { IconSizeTokens, TextVariantTokens } from 'ui/src/theme';
type GenericHeaderProps = {
    Icon?: GeneratedIcon;
    iconSize?: IconSizeTokens;
    iconPaddingOverride?: SpaceTokens;
    title?: string;
    titleVariant?: TextVariantTokens;
    subtitle?: string;
    subtitleVariant?: TextVariantTokens;
    flexProps?: FlexProps;
};
/**
 * Helper component to render an icon w/ padding, title, and subtitle
 */
export declare function GenericHeader({ title, titleVariant, subtitle, subtitleVariant, Icon, iconSize, iconPaddingOverride, flexProps, }: GenericHeaderProps): JSX.Element;
export {};
//# sourceMappingURL=GenericHeader.d.ts.map