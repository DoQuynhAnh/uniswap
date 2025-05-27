import { ComponentProps } from 'react';
import { RotatableChevron } from 'ui/src/components/icons/RotatableChevron';
import { CurrencyInfo, PortfolioBalance } from 'uniswap/src/features/dataApi/types';
import { TestIDType } from 'uniswap/src/test/fixtures/testIDs';
interface TokenSelectorBalanceDisplayProps {
    onPress: () => void;
    selectedCurrencyInfo: CurrencyInfo;
    disabled?: boolean;
    loading?: boolean;
    chevronDirection?: ComponentProps<typeof RotatableChevron>['direction'];
    testID?: TestIDType;
    portfolioBalance?: PortfolioBalance | null | undefined;
}
export declare function TokenSelectorBalanceDisplay({ selectedCurrencyInfo, onPress, disabled, loading, chevronDirection, testID, portfolioBalance, }: TokenSelectorBalanceDisplayProps): JSX.Element;
export {};
//# sourceMappingURL=TokenSelectorBalanceDisplay.d.ts.map