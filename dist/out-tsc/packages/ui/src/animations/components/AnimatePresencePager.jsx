import { Children, useEffect, useState } from 'react';
import { AnimatePresence, styled } from 'tamagui';
import { Flex } from 'ui/src/components/layout';
import { usePrevious } from 'utilities/src/react/hooks';
const AnimationStyle = {
    fade: {
        enter: {},
        exit: {},
    },
    forward: {
        enter: { x: 10 },
        exit: { x: -10 },
    },
    backward: {
        enter: { x: -10 },
        exit: { x: 10 },
    },
    up: {
        enter: { y: 10 },
        exit: { y: -10 },
    },
    down: {
        enter: { y: -10 },
        exit: { y: 10 },
    },
};
const AnimatedItem = styled(Flex, {
    x: 0,
    opacity: 1,
    width: '100%',
    grow: true,
    variants: {
        going: (going) => ({
            enterStyle: {
                ...AnimationStyle[going].enter,
                opacity: 0,
            },
            exitStyle: {
                zIndex: 0,
                ...AnimationStyle[going].exit,
                opacity: 0,
            },
        }),
    },
});
export function TransitionItem({ animationType = 'fade', childKey, animation, children, }) {
    return (<AnimatePresence exitBeforeEnter custom={{ going: animationType }} initial={false}>
      {children && (<AnimatedItem key={childKey !== null && childKey !== void 0 ? childKey : 'animated-item'} animation={animation !== null && animation !== void 0 ? animation : 'fastHeavy'} going={animationType}>
          {children}
        </AnimatedItem>)}
    </AnimatePresence>);
}
export function AnimateTransition({ currentIndex, animationType = 'fade', children, }) {
    const childrenArray = Children.toArray(children);
    return (<AnimatePresence exitBeforeEnter custom={{ going: animationType }} initial={false}>
      <AnimatedItem key={`slide-item-${currentIndex}`} animation="fastHeavy" going={animationType}>
        {childrenArray[currentIndex]}
      </AnimatedItem>
    </AnimatePresence>);
}
export function AnimatedPager({ children, currentIndex }) {
    const prevIndex = usePrevious(currentIndex);
    const [direction, setDirection] = useState('forward');
    useEffect(() => {
        if (prevIndex === undefined) {
            return;
        }
        if (currentIndex > prevIndex) {
            setDirection('forward');
        }
        else if (currentIndex < prevIndex) {
            setDirection('backward');
        }
    }, [currentIndex, prevIndex, setDirection]);
    return (<AnimateTransition animationType={direction} currentIndex={currentIndex}>
      {children}
    </AnimateTransition>);
}
//# sourceMappingURL=AnimatePresencePager.jsx.map