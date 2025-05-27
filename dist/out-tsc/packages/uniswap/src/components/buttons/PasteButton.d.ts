/// <reference types="react" />
import { TextProps } from 'ui/src';
export default function PasteButton({ inline, onPress, beforePress, afterClipboardReceived, textVariant, }: {
    inline?: boolean;
    onPress: (text: string) => void;
    beforePress?: () => void;
    afterClipboardReceived?: () => void;
    textVariant?: Extract<TextProps['variant'], 'buttonLabel2' | 'buttonLabel3'>;
}): JSX.Element;
//# sourceMappingURL=PasteButton.d.ts.map