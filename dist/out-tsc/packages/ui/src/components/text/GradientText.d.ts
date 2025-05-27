import { PropsWithChildren } from 'react';
import { GetProps } from 'tamagui';
import { LinearGradientProps } from 'tamagui/linear-gradient';
import { Text } from 'ui/src/components/text';
export type GradientTextProps = PropsWithChildren<GetProps<typeof Text> & {
    gradient: LinearGradientProps;
}>;
export declare function GradientText({ children, ...props }: GradientTextProps): JSX.Element;
//# sourceMappingURL=GradientText.d.ts.map