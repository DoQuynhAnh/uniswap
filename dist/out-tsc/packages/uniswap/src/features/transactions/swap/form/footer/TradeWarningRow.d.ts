/// <reference types="react" />
import { TouchableAreaProps } from 'ui/src';
import { Warning } from 'uniswap/src/components/modals/WarningModal/types';
type TradeWarningRowProps = React.PropsWithChildren<TouchableAreaProps> & {
    warning: Warning;
};
export declare function TradeWarningRow(props: TradeWarningRowProps): JSX.Element;
export {};
//# sourceMappingURL=TradeWarningRow.d.ts.map