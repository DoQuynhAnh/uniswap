import { JsonRpcProvider } from '@ethersproject/providers';
import { Signer } from 'ethers/lib/ethers';
import { PropsWithChildren } from 'react';
import { AccountMeta } from 'uniswap/src/features/accounts/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { FiatOnRampCurrency } from 'uniswap/src/features/fiatOnRamp/types';
import { Connector } from 'wagmi';
/** Stores objects/utils that exist on all platforms, abstracting away app-level specifics for each, in order to allow usage in cross-platform code. */
interface UniswapContextValue {
    account?: AccountMeta;
    connector?: Connector;
    navigateToBuyOrReceiveWithEmptyWallet?: () => void;
    navigateToFiatOnRamp: (args: {
        prefilledCurrency?: FiatOnRampCurrency;
    }) => void;
    navigateToSwapFlow: (args: {
        inputCurrencyId?: string;
        outputCurrencyId?: string;
    }) => void;
    navigateToSendFlow: (args: {
        chainId: UniverseChainId;
        currencyAddress?: Address;
    }) => void;
    navigateToReceive: () => void;
    navigateToTokenDetails: (currencyId: string) => void;
    navigateToExternalProfile: (args: {
        address: Address;
    }) => void;
    navigateToNftCollection: (args: {
        collectionAddress: Address;
        chainId: UniverseChainId;
    }) => void;
    handleShareToken: (args: {
        currencyId: string;
    }) => void;
    onSwapChainsChanged: (args: {
        chainId: UniverseChainId;
        prevChainId?: UniverseChainId;
        outputChainId?: UniverseChainId;
    }) => void;
    swapInputChainId?: UniverseChainId;
    setSwapOutputChainId: (chainId: UniverseChainId) => void;
    swapOutputChainId?: UniverseChainId;
    signer: Signer | undefined;
    useProviderHook: (chainId: number) => JsonRpcProvider | undefined;
    onConnectWallet?: () => void;
    isSwapTokenSelectorOpen: boolean;
    setIsSwapTokenSelectorOpen: (open: boolean) => void;
    getCanSignPermits?: (chainId: UniverseChainId | undefined) => boolean;
    getIsUniswapXSupported?: (chainId: UniverseChainId | undefined) => boolean;
    handleOnPressUniswapXUnsupported?: () => void;
    getCanBatchTransactions?: (chainId: UniverseChainId | undefined) => boolean;
    getSwapDelegationAddress?: (chainId: UniverseChainId | undefined) => string | undefined;
}
export declare const UniswapContext: import("react").Context<UniswapContextValue | null>;
export declare function UniswapProvider({ children, account, connector, navigateToBuyOrReceiveWithEmptyWallet, navigateToFiatOnRamp, navigateToSwapFlow, navigateToSendFlow, navigateToReceive, navigateToTokenDetails, navigateToExternalProfile, navigateToNftCollection, handleShareToken, onSwapChainsChanged, signer, useProviderHook, onConnectWallet, getCanSignPermits, getIsUniswapXSupported, handleOnPressUniswapXUnsupported, getCanBatchTransactions, getSwapDelegationAddress, }: PropsWithChildren<Omit<UniswapContextValue, 'isSwapTokenSelectorOpen' | 'setIsSwapTokenSelectorOpen' | 'setSwapOutputChainId'>>): JSX.Element;
/** Cross-platform util for getting items/utils that exist on all apps. */
export declare function useUniswapContext(): UniswapContextValue;
export declare function useUniswapContextSelector<T>(selector: (ctx: UniswapContextValue) => T): T | undefined;
/** Cross-platform util for getting metadata for the active account/wallet, regardless of platform/environment. */
export declare function useAccountMeta(): AccountMeta | undefined;
/** Cross-platform util for getting connector for the active account/wallet, only applicable to web, other platforms are undefined. */
export declare function useConnector(): Connector | undefined;
/** Cross-platform util for getting an RPC provider for the given `chainId`, regardless of platform/environment. */
export declare function useProvider(chainId: number): JsonRpcProvider | undefined;
/** Cross-platform util for getting a signer for the active account/wallet, regardless of platform/environment. */
export declare function useSigner(): Signer | undefined;
export {};
//# sourceMappingURL=UniswapContext.d.ts.map