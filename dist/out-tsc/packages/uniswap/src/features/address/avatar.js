import { useENSAvatar } from 'uniswap/src/features/ens/api';
import { useUnitagByAddress } from 'uniswap/src/features/unitags/hooks';
import { getValidAddress } from 'uniswap/src/utils/addresses';
/*
 * Fetches avatar for address, in priority uses: unitag avatar, ens avatar, undefined
 *  Note that this hook is used instead of just useENSAvatar because our implementation
 *  of useENSAvatar checks for reverse name resolution which Unitags does not support.
 *  Chose to do this because even if we used useENSAvatar without reverse name resolution,
 *  there is more latency because it has to go to the contract via CCIP-read first.
 */
export function useAvatar(address) {
    var _a;
    const validated = getValidAddress(address);
    const { data: ensAvatar, isLoading: ensLoading } = useENSAvatar(validated);
    const { unitag, loading: unitagLoading } = useUnitagByAddress(validated || undefined);
    const unitagAvatar = (_a = unitag === null || unitag === void 0 ? void 0 : unitag.metadata) === null || _a === void 0 ? void 0 : _a.avatar;
    if (unitagAvatar) {
        return { avatar: unitagAvatar, loading: false };
    }
    if (ensAvatar) {
        return { avatar: ensAvatar, loading: false };
    }
    return { avatar: undefined, loading: ensLoading || unitagLoading };
}
//# sourceMappingURL=avatar.js.map