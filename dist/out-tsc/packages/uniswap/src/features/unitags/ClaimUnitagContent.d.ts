/// <reference types="react" />
import { EventConsumer, EventMapBase } from '@react-navigation/core';
import { SharedUnitagScreenParams, UnitagEntryPoint, UnitagScreens } from 'uniswap/src/types/screens/mobile';
export type ClaimUnitagContentProps = {
    unitagAddress?: string;
    entryPoint: UnitagEntryPoint;
    animateY?: boolean;
    navigationEventConsumer?: EventConsumer<EventMapBase>;
    onNavigateContinue?: (params: SharedUnitagScreenParams[UnitagScreens.ChooseProfilePicture]) => void;
    onComplete?: (unitag: string) => void;
};
export declare function ClaimUnitagContent({ unitagAddress, entryPoint, animateY, navigationEventConsumer, onNavigateContinue, onComplete, }: ClaimUnitagContentProps): JSX.Element;
//# sourceMappingURL=ClaimUnitagContent.d.ts.map