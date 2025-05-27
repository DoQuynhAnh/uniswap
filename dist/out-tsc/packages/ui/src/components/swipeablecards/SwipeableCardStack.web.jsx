import { BaseSwipeableCardStack } from 'ui/src/components/swipeablecards/BaseSwipeableCardStack';
export function SwipeableCardStack({ cards, minCardHeight = 0, renderCard, keyExtractor, onSwiped, }) {
    return (<BaseSwipeableCardStack cards={cards} keyExtractor={keyExtractor} renderCard={renderCard} minCardHeight={minCardHeight} onSwiped={onSwiped}/>);
}
//# sourceMappingURL=SwipeableCardStack.web.jsx.map