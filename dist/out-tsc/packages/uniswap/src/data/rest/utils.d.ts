import { ProtectionInfo as ProtectionInfoProtobuf } from '@uniswap/client-explore/dist/uniswap/explore/v1/service_pb';
import { ProtectionInfo, SafetyLevel } from 'uniswap/src/data/graphql/uniswap-data-api/__generated__/types-and-hooks';
/**
 * Helper functions to parse string enum fields from REST API responses.
 *
 * Note: The Protobuf types use string enums instead of strictly typed enums because
 * Protobuf does not allow defining two of the same enum name in the same proto file. (i.e. both ProtectionAttackType and
 * ProtectionResult contain 'UNKNOWN')
 *
 * Since the Explore service just calls GraphQL, we have confidence the string values will match the GraphQL enums.
 * Just validating here!
 */
export declare function parseSafetyLevel(safetyLevel?: string): SafetyLevel | undefined;
export declare function parseProtectionInfo(protectionInfo?: ProtectionInfoProtobuf): ProtectionInfo | undefined;
//# sourceMappingURL=utils.d.ts.map