import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BaseSwipeableCardStack } from 'ui/src/components/swipeablecards/BaseSwipeableCardStack';
export function SwipeableCardStack({ cards, minCardHeight = 0, renderCard, keyExtractor, onSwiped, }) {
    return (<GestureHandlerRootView>
      <BaseSwipeableCardStack cards={cards} keyExtractor={keyExtractor} renderCard={renderCard} minCardHeight={minCardHeight} onSwiped={onSwiped}/>
    </GestureHandlerRootView>);
}
//# sourceMappingURL=SwipeableCardStack.native.jsx.map