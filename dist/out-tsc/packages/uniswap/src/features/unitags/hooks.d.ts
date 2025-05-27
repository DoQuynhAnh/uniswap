/// <reference types="jest" />
import { UnitagAddressResponse, UnitagUsernameResponse } from 'uniswap/src/features/unitags/types';
export declare const useUnitagByAddress: (address?: Address) => {
    unitag?: UnitagAddressResponse;
    loading: boolean;
    pending: boolean;
    fetching: boolean;
};
export declare const useUnitagByName: (username?: string) => {
    unitag?: UnitagUsernameResponse;
    loading: boolean;
};
//# sourceMappingURL=hooks.d.ts.map