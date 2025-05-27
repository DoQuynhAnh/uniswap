import { renderHook } from '@testing-library/react-hooks';
import { UNI, WBTC } from 'uniswap/src/constants/tokens';
import { Routing } from 'uniswap/src/data/tradingApi/__generated__/index';
import { FeeType } from 'uniswap/src/data/tradingApi/types';
import { AccountType } from 'uniswap/src/features/accounts/types';
import { UniverseChainId } from 'uniswap/src/features/chains/types';
import { DEFAULT_GAS_STRATEGY } from 'uniswap/src/features/gas/hooks';
import { useSwapTxAndGasInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useSwapTxAndGasInfo';
import { useTokenApprovalInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo';
import { useTransactionRequestInfo } from 'uniswap/src/features/transactions/swap/contexts/hooks/useTransactionRequestInfo';
import { ApprovalAction } from 'uniswap/src/features/transactions/swap/types/trade';
import { createMockDerivedSwapInfo } from 'uniswap/src/test/fixtures/transactions/swap';
jest.mock('uniswap/src/features/transactions/swap/contexts/hooks/useTokenApprovalInfo');
jest.mock('uniswap/src/features/transactions/swap/contexts/hooks/useTransactionRequestInfo');
describe('useSwapTxAndGasInfo', () => {
    const mockDerivedSwapInfo = createMockDerivedSwapInfo(UNI[UniverseChainId.Mainnet], WBTC, '1000000000000000000', '1000000000');
    const mockAccount = { address: '0x123', type: AccountType.SignerMnemonic };
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should return ClassicSwapTxAndGasInfo including gas estimates for classic trade', () => {
        const mockTokenApprovalInfo = {
            action: ApprovalAction.RevokeAndPermit2Approve,
            txRequest: {
                to: '0x456',
                chainId: 1,
                gasLimit: '100000',
                maxFeePerGas: '300000',
                maxPriorityFeePerGas: '400000',
            },
            cancelTxRequest: {
                to: '0x789',
                chainId: 1,
                gasLimit: '100000',
                maxFeePerGas: '500000',
                maxPriorityFeePerGas: '600000',
            },
        };
        const mockApprovalGasFeeResult = {
            value: '200000',
            gasEstimates: {
                activeEstimate: {
                    gasLimit: '100000',
                    gasFee: '220000',
                    maxFeePerGas: '300000',
                    maxPriorityFeePerGas: '400000',
                    type: FeeType.EIP1559,
                    strategy: DEFAULT_GAS_STRATEGY,
                },
            },
            isLoading: false,
            error: null,
        };
        const mockRevokeGasFeeResult = {
            value: '200000',
            gasEstimates: {
                activeEstimate: {
                    gasLimit: '100000',
                    gasFee: '220000',
                    maxFeePerGas: '300000',
                    maxPriorityFeePerGas: '400000',
                    type: FeeType.EIP1559,
                    strategy: DEFAULT_GAS_STRATEGY,
                },
            },
            isLoading: false,
            error: null,
        };
        const mockSwapTxInfo = {
            txRequests: [{ to: '0x456', chainId: 1 }],
            gasFeeResult: { value: '123', isLoading: false, error: null },
            gasEstimate: {
                swapEstimates: {
                    activeEstimate: {
                        gasLimit: '500000',
                        gasFee: '600000',
                        maxFeePerGas: '700000',
                        maxPriorityFeePerGas: '800000',
                        type: FeeType.EIP1559,
                        strategy: DEFAULT_GAS_STRATEGY,
                    },
                },
            },
            swapRequestArgs: undefined,
        };
        useTokenApprovalInfo.mockReturnValue({
            tokenApprovalInfo: mockTokenApprovalInfo,
            approvalGasFeeResult: mockApprovalGasFeeResult,
            revokeGasFeeResult: mockRevokeGasFeeResult,
        });
        useTransactionRequestInfo.mockReturnValue(mockSwapTxInfo);
        const { result } = renderHook(() => useSwapTxAndGasInfo({ derivedSwapInfo: mockDerivedSwapInfo, account: mockAccount }));
        expect(result.current).toMatchObject({
            routing: Routing.CLASSIC,
            trade: expect.any(Object),
            txRequests: expect.any(Array),
            approveTxRequest: expect.any(Object),
            revocationTxRequest: expect.any(Object),
            gasFee: { value: '400123', isLoading: false, error: null },
            gasFeeEstimation: {
                swapEstimates: {
                    activeEstimate: {
                        gasLimit: '500000',
                        gasFee: '600000',
                        maxFeePerGas: '700000',
                        maxPriorityFeePerGas: '800000',
                        type: FeeType.EIP1559,
                        strategy: DEFAULT_GAS_STRATEGY,
                    },
                },
                approvalEstimates: {
                    activeEstimate: {
                        gasLimit: '100000',
                        gasFee: '220000',
                        maxFeePerGas: '300000',
                        maxPriorityFeePerGas: '400000',
                        type: FeeType.EIP1559,
                        strategy: DEFAULT_GAS_STRATEGY,
                    },
                },
            },
            permit: undefined,
            swapRequestArgs: undefined,
            unsigned: false,
        });
    });
});
//# sourceMappingURL=useSwapTxAndGasInfo.test.js.map