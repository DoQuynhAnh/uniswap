import { ComponentProps, ReactNode } from 'react';
import { ColorTokens, FlexProps, TouchableArea } from 'ui/src';
export declare const SHADOW_OFFSET_SMALL: {
    readonly width: 0;
    readonly height: 2;
};
export declare function Shadow({ children, ...rest }: FlexProps): JSX.Element;
type HeaderProps = {
    title: string | ReactNode;
    subtitle?: string | ReactNode;
    onPress?: () => void;
    icon?: JSX.Element;
} & ComponentProps<typeof TouchableArea>;
declare function Header({ title, subtitle, onPress, icon, ...buttonProps }: HeaderProps): JSX.Element;
type EmptyStateProps = {
    additionalButtonLabel?: string;
    buttonLabel?: string;
    description: string;
    onPress?: () => void;
    onPressAdditional?: () => void;
    title?: string;
    icon?: ReactNode;
};
declare function EmptyState({ additionalButtonLabel, buttonLabel, description, onPress, onPressAdditional, title, icon, }: EmptyStateProps): JSX.Element;
type ErrorStateProps = {
    title?: string;
    description?: string;
    onRetry?: () => void;
    retryButtonLabel?: string;
    icon?: ReactNode;
};
declare function ErrorState(props: ErrorStateProps): JSX.Element;
type InlineErrorStateProps = {
    backgroundColor?: ColorTokens;
    textColor?: ColorTokens;
} & Pick<ErrorStateProps, 'icon' | 'title' | 'onRetry' | 'retryButtonLabel'>;
declare function InlineErrorState(props: InlineErrorStateProps): JSX.Element;
export declare const BaseCard: {
    EmptyState: typeof EmptyState;
    ErrorState: typeof ErrorState;
    Header: typeof Header;
    InlineErrorState: typeof InlineErrorState;
    Shadow: typeof Shadow;
};
export {};
//# sourceMappingURL=BaseCard.d.ts.map