import { renderHook } from '@testing-library/react-hooks';
import { useTradingApiSwapQuery } from 'uniswap/src/data/apiClients/tradingApi/useTradingApiSwapQuery';
import { AccountType } from 'uniswap/src/features/accounts/types';
import { useIsSmartContractAddress } from 'uniswap/src/features/address/useIsSmartContractAddress';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { useTransactionGasFee } from 'uniswap/src/features/gas/hooks';
import { usePermit2SignatureWithData } from 'uniswap/src/features/transactions/swap/contexts/hooks/usePermit2Signature';
import { useTransactionRequestInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTransactionRequestInfo';
import { useWrapTransactionRequest } from 'uniswap/src/features/transactions/swap/contexts/hooks/useWrapTransactionRequest';
import { useV4SwapEnabled } from 'uniswap/src/features/transactions/swap/hooks/useV4SwapEnabled';
import { WrapType } from 'uniswap/src/features/transactions/types/wrap';
import { ETH, WETH } from 'uniswap/src/test/fixtures';
import { createMockDerivedSwapInfo, createMockTokenApprovalInfo } from 'uniswap/src/test/fixtures/transactions/swap';
jest.mock('uniswap/src/data/apiClients/tradingApi/useTradingApiSwapQuery');
jest.mock('uniswap/src/features/transactions/swap/contexts/hooks/usePermit2Signature');
jest.mock('uniswap/src/features/transactions/swap/contexts/hooks/useWrapTransactionRequest');
jest.mock('uniswap/src/features/gas/hooks');
jest.mock('uniswap/src/features/transactions/swap/hooks/useV4SwapEnabled');
jest.mock('uniswap/src/features/gating/hooks', () => {
    return {
        ...jest.requireActual('uniswap/src/features/gating/hooks'),
        useDynamicConfigValue: jest.fn().mockImplementation((config, key, defaultVal) => {
            return defaultVal;
        }),
    };
});
jest.mock('uniswap/src/features/address/useIsSmartContractAddress');
const mockUseTradingApiSwapQuery = useTradingApiSwapQuery;
const mockUsePermit2SignatureWithData = usePermit2SignatureWithData;
const mockUseWrapTransactionRequest = useWrapTransactionRequest;
const mockUseTransactionGasFee = useTransactionGasFee;
const mockUseV4SwapEnabled = useV4SwapEnabled;
const mockUseIsSmartContractAddress = useIsSmartContractAddress;
describe('useTransactionRequestInfo', () => {
    const mockAccount = { address: '0x123', type: AccountType.SignerMnemonic };
    const mockWrapGasFee = {
        value: '250000',
        params: {
            gasLimit: '250000',
            maxFeePerGas: '300000',
            maxPriorityFeePerGas: '350000',
        },
        isLoading: false,
        error: null,
    };
    const swapQueryResult = {
        data: {
            requestId: '123',
            transactions: [
                {
                    from: '0x123',
                    data: '0x',
                    value: '0',
                    to: '0xSwap',
                    chainId: UniverseChainId.Mainnet,
                    gasLimit: '500000',
                    maxFeePerGas: '600000',
                    maxPriorityFeePerGas: '700000',
                },
            ],
        },
        error: null,
        isLoading: false,
    };
    beforeEach(() => {
        jest.clearAllMocks();
        mockUseIsSmartContractAddress.mockReturnValue({ loading: false, isSmartContractAddress: false });
    });
    it('should include gas fee values from wrapGasFee in the returned wrap transactionRequest', () => {
        var _a;
        // Swap needs wrapping
        const mockDerivedSwapInfo = createMockDerivedSwapInfo(ETH, WETH, '1000000000000000000', '1000000000', {
            wrapType: WrapType.Wrap,
        });
        mockUseWrapTransactionRequest.mockReturnValue({
            to: '0xWrap',
            chainId: UniverseChainId.Mainnet,
        });
        mockUsePermit2SignatureWithData.mockReturnValue({ signature: undefined, isLoading: false });
        mockUseTradingApiSwapQuery.mockReturnValue(swapQueryResult);
        mockUseTransactionGasFee.mockReturnValue(mockWrapGasFee);
        mockUseV4SwapEnabled.mockReturnValue(true);
        const { result } = renderHook(() => useTransactionRequestInfo({
            derivedSwapInfo: mockDerivedSwapInfo,
            tokenApprovalInfo: createMockTokenApprovalInfo(),
            account: mockAccount,
        }));
        expect((_a = result.current.txRequests) === null || _a === void 0 ? void 0 : _a[0]).toMatchObject({
            to: '0xWrap',
            chainId: UniverseChainId.Mainnet,
            gasLimit: '250000',
            maxFeePerGas: '300000',
            maxPriorityFeePerGas: '350000',
        });
    });
    it('should return the swap transactionRequest when wrap is not applicable', () => {
        var _a;
        // Swap does not need wrapping
        const mockDerivedSwapInfo = createMockDerivedSwapInfo(ETH, WETH, '1000000000000000000', '1000000000');
        mockUseWrapTransactionRequest.mockReturnValue(null);
        mockUsePermit2SignatureWithData.mockReturnValue({ signature: undefined, isLoading: false });
        mockUseTradingApiSwapQuery.mockReturnValue(swapQueryResult);
        mockUseTransactionGasFee.mockReturnValue({ error: null, isLoading: false });
        mockUseV4SwapEnabled.mockReturnValue(true);
        const { result } = renderHook(() => useTransactionRequestInfo({
            derivedSwapInfo: mockDerivedSwapInfo,
            tokenApprovalInfo: createMockTokenApprovalInfo(),
            account: mockAccount,
        }));
        expect((_a = result.current.txRequests) === null || _a === void 0 ? void 0 : _a[0]).toMatchObject({
            to: '0xSwap',
            chainId: UniverseChainId.Mainnet,
            gasLimit: '500000',
            maxFeePerGas: '600000',
            maxPriorityFeePerGas: '700000',
        });
    });
});
//# sourceMappingURL=useTransactionRequestInfo.test.js.map