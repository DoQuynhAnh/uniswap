import { ReactNode } from 'react';
import { animations } from 'ui/src/theme/animations';
type TransitionDirection = 'forward' | 'backward' | 'up' | 'down';
type AnimationType = 'fade' | TransitionDirection;
type AnimationKey = keyof (typeof animations)['animations'];
type AnimationTransitionType = 'unset' | AnimationKey | null | undefined;
export declare function TransitionItem({ animationType, childKey, animation, children, }: {
    animationType?: AnimationType;
    childKey?: string | number;
    animation?: AnimationTransitionType;
    children?: ReactNode;
}): JSX.Element;
export declare function AnimateTransition({ currentIndex, animationType, children, }: {
    currentIndex: number;
    children: ReactNode;
    animationType?: AnimationType;
}): JSX.Element;
export declare function AnimatedPager({ children, currentIndex }: {
    currentIndex: number;
    children: ReactNode;
}): JSX.Element;
export {};
//# sourceMappingURL=AnimatePresencePager.d.ts.map