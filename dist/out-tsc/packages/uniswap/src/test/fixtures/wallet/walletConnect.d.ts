import { DappRequestType, UwULinkRequestInfo, WalletConnectSessionRequestInfo } from 'uniswap/src/types/walletConnect';
export declare const dappInfoWC: {
    <O extends Partial<WalletConnectSessionRequestInfo>>(overrides: O): Omit<{
        requestType: DappRequestType.WalletConnectSessionRequest;
        name: string;
        url: string;
        icon: string;
    }, keyof O> & O;
    (): {
        requestType: DappRequestType.WalletConnectSessionRequest;
        name: string;
        url: string;
        icon: string;
    };
};
export declare const dappInfoUwULink: {
    <O extends Partial<UwULinkRequestInfo>>(overrides: O): Omit<{
        requestType: DappRequestType.UwULink;
        name: string;
        url: string;
        icon: string;
        chain_id: number;
    }, keyof O> & O;
    (): {
        requestType: DappRequestType.UwULink;
        name: string;
        url: string;
        icon: string;
        chain_id: number;
    };
};
//# sourceMappingURL=walletConnect.d.ts.map