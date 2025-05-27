/// <reference types="react" />
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { TestIDType } from 'uniswap/src/test/fixtures/testIDs';
interface SelectTokenButtonProps {
    onPress?: () => void;
    selectedCurrencyInfo?: CurrencyInfo | null;
    testID?: TestIDType;
    tokenColor?: string;
}
export declare const SelectTokenButton: import("react").NamedExoticComponent<SelectTokenButtonProps>;
export {};
//# sourceMappingURL=SelectTokenButton.d.ts.map