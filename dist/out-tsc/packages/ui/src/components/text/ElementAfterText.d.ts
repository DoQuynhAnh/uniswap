/// <reference types="react" />
import { FlexProps } from 'ui/src/components/layout/Flex';
import { TextProps } from 'ui/src/components/text/Text';
type ElementAfterTextProps = {
    element?: JSX.Element;
    text: string;
    wrapperProps?: FlexProps;
    textProps?: TextProps;
};
export declare function ElementAfterText({ element, text, wrapperProps, textProps }: ElementAfterTextProps): JSX.Element;
export {};
//# sourceMappingURL=ElementAfterText.d.ts.map