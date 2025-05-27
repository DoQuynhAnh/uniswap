/// <reference types="react" />
import type { ViewProps } from 'react-native';
import { FlexProps } from 'ui/src/components/layout';
export type FlexLoaderProps = {
    repeat?: number;
} & FlexProps & ViewProps;
export declare function FlexLoader({ repeat, backgroundColor, borderRadius, width, height, ...props }: FlexLoaderProps): JSX.Element;
//# sourceMappingURL=FlexLoader.d.ts.map