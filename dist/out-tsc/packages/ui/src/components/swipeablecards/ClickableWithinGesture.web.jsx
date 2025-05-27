import { TouchableArea } from 'ui/src/components/touchable';
export function ClickableWithinGesture({ onPress, children }) {
    const onCloseWithPropagationStop = (e) => {
        e.stopPropagation();
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (<TouchableArea flex={1} flexGrow={1} onPress={onCloseWithPropagationStop}>
      {children}
    </TouchableArea>);
}
//# sourceMappingURL=ClickableWithinGesture.web.jsx.map