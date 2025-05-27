import { EthMethod } from 'uniswap/src/features/dappRequests/types';
export const isSignTypedDataRequest = (request) => request.type === EthMethod.SignTypedData || request.type === EthMethod.SignTypedDataV4;
//# sourceMappingURL=utils.js.map