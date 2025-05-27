import { DisplayName } from 'uniswap/src/features/accounts/types';
type DisplayNameOptions = {
    showShortenedEns?: boolean;
    includeUnitagSuffix?: boolean;
    overrideDisplayName?: string;
};
/**
 * Displays the ENS name or Unitag name if one is available, otherwise displays the address.
 *
 * @param address - The address to display
 * @param options.showShortenedEns - Whether to shorten the ENS name to ENS_TRIM_LENGTH characters
 * @param options.includeUnitagSuffix - Whether to include the unitag suffix (.uni.eth) in returned unitag name
 */
export declare function useOnchainDisplayName(address: Maybe<string>, options?: DisplayNameOptions): DisplayName | undefined;
export {};
//# sourceMappingURL=useOnchainDisplayName.d.ts.map