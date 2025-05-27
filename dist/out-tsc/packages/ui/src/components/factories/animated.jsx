import React from 'react';
import Animated from 'react-native-reanimated';
export function withAnimated(WrappedComponent) {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    class WithAnimated extends React.Component {
        render() {
            return <WrappedComponent {...this.props}/>;
        }
    }
    WithAnimated.displayName = `WithAnimated(${displayName})`;
    return Animated.createAnimatedComponent(WithAnimated);
}
//# sourceMappingURL=animated.jsx.map