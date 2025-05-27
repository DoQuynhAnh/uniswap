/// <reference types="react" />
import { ColorTokens, FlexProps } from 'ui/src';
interface NewTagProps {
    backgroundColor?: ColorTokens;
    textColor?: ColorTokens;
    ml?: FlexProps['ml'];
    exclamation?: boolean;
}
declare function _NewTag({ backgroundColor, textColor, ml, exclamation, }: NewTagProps): JSX.Element;
export declare const NewTag: import("react").MemoExoticComponent<typeof _NewTag>;
export {};
//# sourceMappingURL=NewTag.d.ts.map