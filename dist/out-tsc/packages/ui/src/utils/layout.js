import { useState } from 'react';
/**
 *
 * @returns props that absolutely position an element right after the last word of the last line of text
 * For this to work you must pass in <Text onTextLayout={onTextLayout} /> into the text that you want it to be positioned next to
 */
export function usePostTextElementPositionProps() {
    const [postTextElementPositionProps, setPostTextElementPositionProps] = useState(undefined);
    const onTextLayout = (event) => {
        const { lines } = event.nativeEvent;
        const lastLine = lines[lines.length - 1];
        if (!lastLine) {
            return;
        }
        const { width, x, y } = lastLine;
        setPostTextElementPositionProps({ position: 'absolute', left: x + width, top: y });
    };
    return { postTextElementPositionProps, onTextLayout };
}
//# sourceMappingURL=layout.js.map