/// <reference types="react" />
import { ColorTokens, FlexProps } from 'ui/src';
interface AccountIconProps {
    size: number;
    showViewOnlyBadge?: boolean;
    address: string;
    avatarUri?: string | null;
    showBackground?: boolean;
    showBorder?: boolean;
    borderWidth?: FlexProps['borderWidth'];
    borderColor?: ColorTokens;
}
export declare function AccountIcon({ size, showViewOnlyBadge, address, avatarUri, showBackground, showBorder, borderColor, borderWidth, }: AccountIconProps): JSX.Element;
export {};
//# sourceMappingURL=AccountIcon.d.ts.map