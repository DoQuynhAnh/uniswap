import { View } from 'react-native';
export function HiddenFromScreenReaders({ children, style }) {
    return (<View accessibilityElementsHidden={true} importantForAccessibility="no-hide-descendants" style={style}>
      {children}
    </View>);
}
//# sourceMappingURL=HiddenFromScreenReaders.native.jsx.map