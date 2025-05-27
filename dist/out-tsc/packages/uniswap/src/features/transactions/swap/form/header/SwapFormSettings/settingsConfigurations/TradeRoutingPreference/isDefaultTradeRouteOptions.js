import { DEFAULT_PROTOCOL_OPTIONS, } from 'uniswap/src/features/transactions/swap/utils/protocols';
export function isDefaultTradeRouteOptions(selectedProtocols, isV4HookPoolsEnabled, isV4HooksToggleFFEnabled) {
    return (new Set(selectedProtocols).size === new Set([...selectedProtocols, ...DEFAULT_PROTOCOL_OPTIONS]).size &&
        (isV4HooksToggleFFEnabled ? isV4HookPoolsEnabled : true));
}
//# sourceMappingURL=isDefaultTradeRouteOptions.js.map