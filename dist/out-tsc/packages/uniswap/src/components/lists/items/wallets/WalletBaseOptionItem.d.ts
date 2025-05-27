/// <reference types="react" />
import { OptionItemProps } from 'uniswap/src/components/lists/items/OptionItem';
import { WalletOption } from 'uniswap/src/components/lists/items/types';
type WalletBaseOptionItemProps = {
    option: WalletOption;
} & OptionItemProps;
export declare function WalletBaseOptionItem({ option, ...optionItemProps }: WalletBaseOptionItemProps): JSX.Element;
export {};
//# sourceMappingURL=WalletBaseOptionItem.d.ts.map