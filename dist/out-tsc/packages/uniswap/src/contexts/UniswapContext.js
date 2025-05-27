import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from 'react';
import { useEvent } from 'utilities/src/react/hooks';
export const UniswapContext = createContext(null);
export function UniswapProvider({ children, account, connector, navigateToBuyOrReceiveWithEmptyWallet, navigateToFiatOnRamp, navigateToSwapFlow, navigateToSendFlow, navigateToReceive, navigateToTokenDetails, navigateToExternalProfile, navigateToNftCollection, handleShareToken, onSwapChainsChanged, signer, useProviderHook, onConnectWallet, getCanSignPermits, getIsUniswapXSupported, handleOnPressUniswapXUnsupported, getCanBatchTransactions, getSwapDelegationAddress, }) {
    const [swapInputChainId, setSwapInputChainId] = useState();
    const [swapOutputChainId, setSwapOutputChainId] = useState();
    const [isSwapTokenSelectorOpen, setIsSwapTokenSelectorOpen] = useState(false);
    const value = useMemo(() => ({
        account,
        connector,
        navigateToBuyOrReceiveWithEmptyWallet,
        navigateToFiatOnRamp,
        navigateToSwapFlow,
        navigateToSendFlow,
        navigateToReceive,
        navigateToTokenDetails,
        navigateToExternalProfile,
        navigateToNftCollection,
        handleShareToken,
        onSwapChainsChanged: ({ chainId, prevChainId, outputChainId, }) => {
            onSwapChainsChanged({ chainId, prevChainId, outputChainId });
            setSwapInputChainId(chainId);
            setSwapOutputChainId(outputChainId);
        },
        signer,
        useProviderHook,
        onConnectWallet,
        swapInputChainId,
        swapOutputChainId,
        setSwapOutputChainId,
        isSwapTokenSelectorOpen,
        setIsSwapTokenSelectorOpen: (open) => setIsSwapTokenSelectorOpen(open),
        getCanSignPermits,
        getIsUniswapXSupported,
        handleOnPressUniswapXUnsupported,
        getCanBatchTransactions,
        getSwapDelegationAddress,
    }), [
        account,
        connector,
        navigateToBuyOrReceiveWithEmptyWallet,
        navigateToFiatOnRamp,
        navigateToSwapFlow,
        navigateToSendFlow,
        navigateToReceive,
        navigateToTokenDetails,
        navigateToExternalProfile,
        navigateToNftCollection,
        handleShareToken,
        signer,
        useProviderHook,
        onConnectWallet,
        swapInputChainId,
        swapOutputChainId,
        isSwapTokenSelectorOpen,
        setIsSwapTokenSelectorOpen,
        getCanSignPermits,
        onSwapChainsChanged,
        getIsUniswapXSupported,
        handleOnPressUniswapXUnsupported,
        getCanBatchTransactions,
        getSwapDelegationAddress,
    ]);
    return _jsx(UniswapContext.Provider, { value: value, children: children });
}
/** Cross-platform util for getting items/utils that exist on all apps. */
export function useUniswapContext() {
    const context = useContext(UniswapContext);
    if (!context) {
        throw new Error('useUniswapContext must be used within a UniswapProvider');
    }
    return context;
}
export function useUniswapContextSelector(selector) {
    const stableSelector = useEvent(selector);
    const context = useContext(UniswapContext);
    return context ? stableSelector(context) : undefined;
}
/** Cross-platform util for getting metadata for the active account/wallet, regardless of platform/environment. */
export function useAccountMeta() {
    return useUniswapContext().account;
}
/** Cross-platform util for getting connector for the active account/wallet, only applicable to web, other platforms are undefined. */
export function useConnector() {
    return useUniswapContext().connector;
}
/** Cross-platform util for getting an RPC provider for the given `chainId`, regardless of platform/environment. */
export function useProvider(chainId) {
    return useUniswapContext().useProviderHook(chainId);
}
/** Cross-platform util for getting a signer for the active account/wallet, regardless of platform/environment. */
export function useSigner() {
    return useUniswapContext().signer;
}
//# sourceMappingURL=UniswapContext.js.map