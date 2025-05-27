import { BaseCard } from 'ui/src/components/swipeablecards/BaseCard';
import { TouchableArea } from 'ui/src/components/touchable';
export function SwipeableCard({ children, stackIndex, cardHeight, onPress, onLayout, }) {
    return (<TouchableArea onPress={onPress}>
      <BaseCard stackIndex={stackIndex} cardHeight={cardHeight} onLayout={onLayout}>
        {children}
      </BaseCard>
    </TouchableArea>);
}
//# sourceMappingURL=SwipeableCard.web.jsx.map