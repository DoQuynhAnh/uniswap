/// <reference types="react" />
import { CurrencyInfo } from 'uniswap/src/features/dataApi/types';
import { TokenProtectionWarning } from 'uniswap/src/features/tokens/safetyUtils';
type TokenWarningCardProps = {
    currencyInfo: Maybe<CurrencyInfo>;
    tokenProtectionWarningOverride?: TokenProtectionWarning;
    feeOnTransferOverride?: {
        buyFeePercent?: number;
        sellFeePercent?: number;
    };
    onPress?: () => void;
    headingTestId?: string;
    descriptionTestId?: string;
    hideCtaIcon?: boolean;
    checked?: boolean;
    setChecked?: (checked: boolean) => void;
};
export declare function TokenWarningCard({ currencyInfo, tokenProtectionWarningOverride, feeOnTransferOverride, headingTestId, descriptionTestId, hideCtaIcon, checked, setChecked, onPress, }: TokenWarningCardProps): JSX.Element | null;
export {};
//# sourceMappingURL=TokenWarningCard.d.ts.map