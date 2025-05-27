import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'tamagui/linear-gradient';
import { Text } from 'ui/src/components/text';
export function GradientText({ gradient, children, ...props }) {
    return (<MaskedView maskElement={<Text {...props}>{children}</Text>}>
      <LinearGradient {...gradient}>
        <Text {...props} opacity={0}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>);
}
//# sourceMappingURL=GradientText.native.jsx.map