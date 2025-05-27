import type { NativeSyntheticEvent, TextLayoutEventData } from 'react-native';
type ElementPositionProps = {
    position: 'absolute';
    left: number;
    top: number;
};
/**
 *
 * @returns props that absolutely position an element right after the last word of the last line of text
 * For this to work you must pass in <Text onTextLayout={onTextLayout} /> into the text that you want it to be positioned next to
 */
export declare function usePostTextElementPositionProps(): {
    postTextElementPositionProps?: ElementPositionProps;
    onTextLayout: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
};
export {};
//# sourceMappingURL=layout.d.ts.map