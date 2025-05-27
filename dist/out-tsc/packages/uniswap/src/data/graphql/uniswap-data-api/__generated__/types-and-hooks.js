import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
/**
 *  Enums (alphabetized):
 * deprecated and replaced with TransactionType, please do not use this
 */
export var ActivityType;
(function (ActivityType) {
    ActivityType["Approve"] = "APPROVE";
    ActivityType["Borrow"] = "BORROW";
    ActivityType["Burn"] = "BURN";
    ActivityType["Cancel"] = "CANCEL";
    ActivityType["Claim"] = "CLAIM";
    ActivityType["Deployment"] = "DEPLOYMENT";
    ActivityType["Lend"] = "LEND";
    ActivityType["Mint"] = "MINT";
    ActivityType["Nft"] = "NFT";
    ActivityType["OffRamp"] = "OFF_RAMP";
    ActivityType["OnRamp"] = "ON_RAMP";
    ActivityType["Receive"] = "RECEIVE";
    ActivityType["Repay"] = "REPAY";
    ActivityType["Send"] = "SEND";
    ActivityType["Stake"] = "STAKE";
    ActivityType["Swap"] = "SWAP";
    ActivityType["SwapOrder"] = "SWAP_ORDER";
    ActivityType["Staking"] = "Staking";
    ActivityType["Unknown"] = "UNKNOWN";
    ActivityType["Unstake"] = "UNSTAKE";
    ActivityType["Withdraw"] = "WITHDRAW";
    ActivityType["Market"] = "market";
    ActivityType["Money"] = "money";
})(ActivityType || (ActivityType = {}));
export var AssetActivitySwitch;
(function (AssetActivitySwitch) {
    AssetActivitySwitch["Alternate"] = "ALTERNATE";
    AssetActivitySwitch["Legacy"] = "LEGACY";
})(AssetActivitySwitch || (AssetActivitySwitch = {}));
export var Chain;
(function (Chain) {
    Chain["Arbitrum"] = "ARBITRUM";
    Chain["ArbitrumSepolia"] = "ARBITRUM_SEPOLIA";
    Chain["AstrochainSepolia"] = "ASTROCHAIN_SEPOLIA";
    Chain["Avalanche"] = "AVALANCHE";
    Chain["Base"] = "BASE";
    Chain["BaseSepolia"] = "BASE_SEPOLIA";
    Chain["Blast"] = "BLAST";
    Chain["Bnb"] = "BNB";
    Chain["Celo"] = "CELO";
    Chain["Ethereum"] = "ETHEREUM";
    Chain["EthereumGoerli"] = "ETHEREUM_GOERLI";
    Chain["EthereumSepolia"] = "ETHEREUM_SEPOLIA";
    Chain["MonadTestnet"] = "MONAD_TESTNET";
    Chain["Optimism"] = "OPTIMISM";
    Chain["Polygon"] = "POLYGON";
    Chain["Soneium"] = "SONEIUM";
    Chain["Unichain"] = "UNICHAIN";
    Chain["UnknownChain"] = "UNKNOWN_CHAIN";
    Chain["Worldchain"] = "WORLDCHAIN";
    Chain["Zksync"] = "ZKSYNC";
    Chain["Zora"] = "ZORA";
})(Chain || (Chain = {}));
export var CollectionSortableField;
(function (CollectionSortableField) {
    CollectionSortableField["Volume"] = "VOLUME";
})(CollectionSortableField || (CollectionSortableField = {}));
export var Currency;
(function (Currency) {
    Currency["Ars"] = "ARS";
    Currency["Aud"] = "AUD";
    Currency["Brl"] = "BRL";
    Currency["Cad"] = "CAD";
    Currency["Cny"] = "CNY";
    Currency["Cop"] = "COP";
    Currency["Eth"] = "ETH";
    Currency["Eur"] = "EUR";
    Currency["Gbp"] = "GBP";
    Currency["Hkd"] = "HKD";
    Currency["Idr"] = "IDR";
    Currency["Inr"] = "INR";
    Currency["Jpy"] = "JPY";
    Currency["Krw"] = "KRW";
    Currency["Matic"] = "MATIC";
    Currency["Mxn"] = "MXN";
    Currency["Ngn"] = "NGN";
    Currency["Pkr"] = "PKR";
    Currency["Rub"] = "RUB";
    Currency["Sgd"] = "SGD";
    Currency["Thb"] = "THB";
    Currency["Try"] = "TRY";
    Currency["Uah"] = "UAH";
    Currency["Usd"] = "USD";
    Currency["Vnd"] = "VND";
})(Currency || (Currency = {}));
export var HighLow;
(function (HighLow) {
    HighLow["High"] = "HIGH";
    HighLow["Low"] = "LOW";
})(HighLow || (HighLow = {}));
/**   FIVE_MINUTE is only supported for TokenMarket.pricePercentChange */
export var HistoryDuration;
(function (HistoryDuration) {
    HistoryDuration["Day"] = "DAY";
    HistoryDuration["FiveMinute"] = "FIVE_MINUTE";
    HistoryDuration["Hour"] = "HOUR";
    HistoryDuration["Max"] = "MAX";
    HistoryDuration["Month"] = "MONTH";
    HistoryDuration["Week"] = "WEEK";
    HistoryDuration["Year"] = "YEAR";
})(HistoryDuration || (HistoryDuration = {}));
export var MediaType;
(function (MediaType) {
    MediaType["Audio"] = "AUDIO";
    MediaType["Image"] = "IMAGE";
    MediaType["Raw"] = "RAW";
    MediaType["Video"] = "VIDEO";
})(MediaType || (MediaType = {}));
export var NftActivityType;
(function (NftActivityType) {
    NftActivityType["CancelListing"] = "CANCEL_LISTING";
    NftActivityType["Listing"] = "LISTING";
    NftActivityType["Sale"] = "SALE";
    NftActivityType["Transfer"] = "TRANSFER";
})(NftActivityType || (NftActivityType = {}));
export var NftAssetSortableField;
(function (NftAssetSortableField) {
    NftAssetSortableField["Price"] = "PRICE";
    NftAssetSortableField["Rarity"] = "RARITY";
})(NftAssetSortableField || (NftAssetSortableField = {}));
export var NftMarketplace;
(function (NftMarketplace) {
    NftMarketplace["Cryptopunks"] = "CRYPTOPUNKS";
    NftMarketplace["Foundation"] = "FOUNDATION";
    NftMarketplace["Looksrare"] = "LOOKSRARE";
    NftMarketplace["Nft20"] = "NFT20";
    NftMarketplace["Nftx"] = "NFTX";
    NftMarketplace["Opensea"] = "OPENSEA";
    NftMarketplace["Sudoswap"] = "SUDOSWAP";
    NftMarketplace["X2Y2"] = "X2Y2";
})(NftMarketplace || (NftMarketplace = {}));
export var NftRarityProvider;
(function (NftRarityProvider) {
    NftRarityProvider["RaritySniper"] = "RARITY_SNIPER";
})(NftRarityProvider || (NftRarityProvider = {}));
export var NftStandard;
(function (NftStandard) {
    NftStandard["Erc721"] = "ERC721";
    NftStandard["Erc1155"] = "ERC1155";
    NftStandard["Noncompliant"] = "NONCOMPLIANT";
})(NftStandard || (NftStandard = {}));
export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Cancelled"] = "CANCELLED";
    OrderStatus["Executed"] = "EXECUTED";
    OrderStatus["Expired"] = "EXPIRED";
    OrderStatus["Valid"] = "VALID";
})(OrderStatus || (OrderStatus = {}));
export var OrderType;
(function (OrderType) {
    OrderType["Listing"] = "LISTING";
    OrderType["Offer"] = "OFFER";
})(OrderType || (OrderType = {}));
export var PoolTransactionType;
(function (PoolTransactionType) {
    PoolTransactionType["Add"] = "ADD";
    PoolTransactionType["Remove"] = "REMOVE";
    PoolTransactionType["Swap"] = "SWAP";
})(PoolTransactionType || (PoolTransactionType = {}));
export var PriceSource;
(function (PriceSource) {
    PriceSource["SubgraphV2"] = "SUBGRAPH_V2";
    PriceSource["SubgraphV3"] = "SUBGRAPH_V3";
    PriceSource["SubgraphV4"] = "SUBGRAPH_V4";
})(PriceSource || (PriceSource = {}));
export var ProtectionAttackType;
(function (ProtectionAttackType) {
    ProtectionAttackType["AirdropPattern"] = "AIRDROP_PATTERN";
    ProtectionAttackType["DynamicAnalysis"] = "DYNAMIC_ANALYSIS";
    ProtectionAttackType["HighFees"] = "HIGH_FEES";
    ProtectionAttackType["Honeypot"] = "HONEYPOT";
    ProtectionAttackType["Impersonator"] = "IMPERSONATOR";
    ProtectionAttackType["InorganicVolume"] = "INORGANIC_VOLUME";
    ProtectionAttackType["KnownMalicious"] = "KNOWN_MALICIOUS";
    ProtectionAttackType["Metadata"] = "METADATA";
    ProtectionAttackType["Rugpull"] = "RUGPULL";
    ProtectionAttackType["StaticCodeSignature"] = "STATIC_CODE_SIGNATURE";
    ProtectionAttackType["Unknown"] = "UNKNOWN";
    ProtectionAttackType["UnstableTokenPrice"] = "UNSTABLE_TOKEN_PRICE";
})(ProtectionAttackType || (ProtectionAttackType = {}));
export var ProtectionResult;
(function (ProtectionResult) {
    ProtectionResult["Benign"] = "BENIGN";
    ProtectionResult["Malicious"] = "MALICIOUS";
    ProtectionResult["Spam"] = "SPAM";
    ProtectionResult["Unknown"] = "UNKNOWN";
    ProtectionResult["Warning"] = "WARNING";
})(ProtectionResult || (ProtectionResult = {}));
export var ProtocolVersion;
(function (ProtocolVersion) {
    ProtocolVersion["V2"] = "V2";
    ProtocolVersion["V3"] = "V3";
    ProtocolVersion["V4"] = "V4";
})(ProtocolVersion || (ProtocolVersion = {}));
export var SafetyLevel;
(function (SafetyLevel) {
    SafetyLevel["Blocked"] = "BLOCKED";
    SafetyLevel["MediumWarning"] = "MEDIUM_WARNING";
    SafetyLevel["StrongWarning"] = "STRONG_WARNING";
    SafetyLevel["Verified"] = "VERIFIED";
})(SafetyLevel || (SafetyLevel = {}));
export var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["AssetActivity"] = "ASSET_ACTIVITY";
})(SubscriptionType || (SubscriptionType = {}));
export var SwapOrderStatus;
(function (SwapOrderStatus) {
    SwapOrderStatus["Cancelled"] = "CANCELLED";
    SwapOrderStatus["Error"] = "ERROR";
    SwapOrderStatus["Expired"] = "EXPIRED";
    SwapOrderStatus["Filled"] = "FILLED";
    SwapOrderStatus["InsufficientFunds"] = "INSUFFICIENT_FUNDS";
    SwapOrderStatus["Open"] = "OPEN";
})(SwapOrderStatus || (SwapOrderStatus = {}));
export var SwapOrderType;
(function (SwapOrderType) {
    SwapOrderType["Dutch"] = "DUTCH";
    SwapOrderType["DutchV2"] = "DUTCH_V2";
    SwapOrderType["Limit"] = "LIMIT";
    SwapOrderType["Priority"] = "PRIORITY";
})(SwapOrderType || (SwapOrderType = {}));
export var TokenSortableField;
(function (TokenSortableField) {
    TokenSortableField["MarketCap"] = "MARKET_CAP";
    TokenSortableField["Popularity"] = "POPULARITY";
    TokenSortableField["TotalValueLocked"] = "TOTAL_VALUE_LOCKED";
    TokenSortableField["Volume"] = "VOLUME";
})(TokenSortableField || (TokenSortableField = {}));
export var TokenStandard;
(function (TokenStandard) {
    TokenStandard["Erc20"] = "ERC20";
    TokenStandard["Native"] = "NATIVE";
})(TokenStandard || (TokenStandard = {}));
export var TokenTradeType;
(function (TokenTradeType) {
    TokenTradeType["ExactInput"] = "EXACT_INPUT";
    TokenTradeType["ExactOutput"] = "EXACT_OUTPUT";
})(TokenTradeType || (TokenTradeType = {}));
export var TransactionDirection;
(function (TransactionDirection) {
    TransactionDirection["In"] = "IN";
    TransactionDirection["Out"] = "OUT";
    TransactionDirection["Self"] = "SELF";
})(TransactionDirection || (TransactionDirection = {}));
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["Confirmed"] = "CONFIRMED";
    TransactionStatus["Failed"] = "FAILED";
    TransactionStatus["Pending"] = "PENDING";
})(TransactionStatus || (TransactionStatus = {}));
export var TransactionType;
(function (TransactionType) {
    TransactionType["Approve"] = "APPROVE";
    TransactionType["Borrow"] = "BORROW";
    TransactionType["Bridging"] = "BRIDGING";
    TransactionType["Cancel"] = "CANCEL";
    TransactionType["Claim"] = "CLAIM";
    TransactionType["Deployment"] = "DEPLOYMENT";
    TransactionType["Execute"] = "EXECUTE";
    TransactionType["Lend"] = "LEND";
    TransactionType["Mint"] = "MINT";
    TransactionType["OffRamp"] = "OFF_RAMP";
    TransactionType["OnRamp"] = "ON_RAMP";
    TransactionType["Receive"] = "RECEIVE";
    TransactionType["Repay"] = "REPAY";
    TransactionType["Send"] = "SEND";
    TransactionType["Stake"] = "STAKE";
    TransactionType["Swap"] = "SWAP";
    TransactionType["SwapOrder"] = "SWAP_ORDER";
    TransactionType["Unknown"] = "UNKNOWN";
    TransactionType["Unstake"] = "UNSTAKE";
    TransactionType["Withdraw"] = "WITHDRAW";
})(TransactionType || (TransactionType = {}));
export const TokenBalanceQuantityPartsFragmentDoc = gql `
    fragment TokenBalanceQuantityParts on TokenBalance {
  id
  quantity
}
    `;
export const TokenBalanceMainPartsFragmentDoc = gql `
    fragment TokenBalanceMainParts on TokenBalance {
  ...TokenBalanceQuantityParts
  denominatedValue {
    currency
    value
  }
  tokenProjectMarket {
    relativeChange24: pricePercentChange(duration: DAY) {
      value
    }
  }
}
    ${TokenBalanceQuantityPartsFragmentDoc}`;
export const TokenBasicInfoPartsFragmentDoc = gql `
    fragment TokenBasicInfoParts on Token {
  id
  address
  chain
  decimals
  name
  standard
  symbol
}
    `;
export const TokenBasicProjectPartsFragmentDoc = gql `
    fragment TokenBasicProjectParts on Token {
  project {
    id
    isSpam
    logoUrl
    name
    safetyLevel
    spamCode
    tokens {
      chain
      address
    }
  }
}
    `;
export const TokenFeeDataPartsFragmentDoc = gql `
    fragment TokenFeeDataParts on Token {
  feeData {
    buyFeeBps
    sellFeeBps
  }
}
    `;
export const TokenProtectionInfoPartsFragmentDoc = gql `
    fragment TokenProtectionInfoParts on Token {
  protectionInfo {
    result
    attackTypes
    blockaidFees {
      buy
      sell
      transfer
    }
  }
}
    `;
export const TokenPartsFragmentDoc = gql `
    fragment TokenParts on Token {
  ...TokenBasicInfoParts
  ...TokenBasicProjectParts
  ...TokenFeeDataParts
  ...TokenProtectionInfoParts
}
    ${TokenBasicInfoPartsFragmentDoc}
${TokenBasicProjectPartsFragmentDoc}
${TokenFeeDataPartsFragmentDoc}
${TokenProtectionInfoPartsFragmentDoc}`;
export const TokenBalancePartsFragmentDoc = gql `
    fragment TokenBalanceParts on TokenBalance {
  ...TokenBalanceMainParts
  isHidden
  token {
    ...TokenParts
  }
}
    ${TokenBalanceMainPartsFragmentDoc}
${TokenPartsFragmentDoc}`;
export const TokenProjectUrlsPartsFragmentDoc = gql `
    fragment TokenProjectUrlsParts on Token {
  project {
    homepageUrl
    twitterName
  }
}
    `;
export const TokenProjectMarketsPartsFragmentDoc = gql `
    fragment TokenProjectMarketsParts on Token {
  project {
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      marketCap {
        value
      }
      fullyDilutedValuation {
        value
      }
      priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
        value
      }
      priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
        value
      }
      pricePercentChange24h {
        value
      }
    }
  }
}
    `;
export const TokenMarketPartsFragmentDoc = gql `
    fragment TokenMarketParts on Token {
  market(currency: USD) {
    id
    volume(duration: DAY) {
      value
    }
    price {
      value
    }
    priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
      value
    }
    priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
      value
    }
  }
}
    `;
export const TopTokenPartsFragmentDoc = gql `
    fragment TopTokenParts on Token {
  ...TokenBasicInfoParts
  market {
    id
    totalValueLocked {
      value
    }
    volume(duration: DAY) {
      value
    }
  }
  project {
    id
    logoUrl
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      pricePercentChange24h {
        value
      }
      marketCap {
        value
      }
    }
  }
}
    ${TokenBasicInfoPartsFragmentDoc}`;
export const HomeScreenTokenPartsFragmentDoc = gql `
    fragment HomeScreenTokenParts on Token {
  ...TokenBasicInfoParts
  project {
    id
    logoUrl
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      pricePercentChange24h {
        value
      }
    }
  }
}
    ${TokenBasicInfoPartsFragmentDoc}`;
export const TransactionPartsFragmentDoc = gql `
    fragment TransactionParts on Transaction {
  id
  blockNumber
  hash
  status
  to
  from
  nonce
}
    `;
export const TokenAssetPartsFragmentDoc = gql `
    fragment TokenAssetParts on Token {
  id
  address
  chain
  symbol
  name
  decimals
  standard
  project {
    id
    name
    logo {
      id
      url
    }
    safetyLevel
    logoUrl
    isSpam
  }
}
    `;
export const TokenTransferPartsFragmentDoc = gql `
    fragment TokenTransferParts on TokenTransfer {
  id
  asset {
    ...TokenAssetParts
  }
  tokenStandard
  quantity
  sender
  recipient
  direction
  transactedValue {
    id
    currency
    value
  }
}
    ${TokenAssetPartsFragmentDoc}`;
export const NftAssetPartsFragmentDoc = gql `
    fragment NFTAssetParts on NftAsset {
  id
  name
  isSpam
  nftContract {
    id
    chain
    address
  }
  tokenId
  image {
    id
    url
  }
  collection {
    id
    name
  }
}
    `;
export const NftTransferPartsFragmentDoc = gql `
    fragment NFTTransferParts on NftTransfer {
  id
  asset {
    ...NFTAssetParts
  }
  nftStandard
  sender
  recipient
  direction
}
    ${NftAssetPartsFragmentDoc}`;
export const TokenApprovalPartsFragmentDoc = gql `
    fragment TokenApprovalParts on TokenApproval {
  id
  asset {
    ...TokenAssetParts
  }
  tokenStandard
  approvedAddress
  quantity
}
    ${TokenAssetPartsFragmentDoc}`;
export const NftApprovalPartsFragmentDoc = gql `
    fragment NFTApprovalParts on NftApproval {
  id
  asset {
    ...NFTAssetParts
  }
  nftStandard
  approvedAddress
}
    ${NftAssetPartsFragmentDoc}`;
export const NftApproveForAllPartsFragmentDoc = gql `
    fragment NFTApproveForAllParts on NftApproveForAll {
  id
  asset {
    ...NFTAssetParts
  }
  nftStandard
  operatorAddress
  approved
}
    ${NftAssetPartsFragmentDoc}`;
export const SimpleTokenDetailsFragmentDoc = gql `
    fragment SimpleTokenDetails on Token {
  ...TokenBasicInfoParts
  project {
    id
    isSpam
    logoUrl
    name
    safetyLevel
  }
  ...TokenFeeDataParts
  ...TokenProtectionInfoParts
}
    ${TokenBasicInfoPartsFragmentDoc}
${TokenFeeDataPartsFragmentDoc}
${TokenProtectionInfoPartsFragmentDoc}`;
export const OnRampTransferPartsFragmentDoc = gql `
    fragment OnRampTransferParts on OnRampTransfer {
  id
  token {
    ...SimpleTokenDetails
  }
  tokenStandard
  amount
  sourceCurrency
  sourceAmount
  serviceProvider {
    serviceProvider
    name
    url
    logoLightUrl
    logoDarkUrl
  }
  transactionReferenceId
  externalSessionId
  networkFee
  transactionFee
  totalFee
}
    ${SimpleTokenDetailsFragmentDoc}`;
export const TransactionDetailsPartsFragmentDoc = gql `
    fragment TransactionDetailsParts on TransactionDetails {
  id
  type
  from
  to
  hash
  nonce
  status: transactionStatus
  assetChanges {
    __typename
    ... on TokenTransfer {
      ...TokenTransferParts
    }
    ... on NftTransfer {
      ...NFTTransferParts
    }
    ... on TokenApproval {
      ...TokenApprovalParts
    }
    ... on NftApproval {
      ...NFTApprovalParts
    }
    ... on NftApproveForAll {
      ...NFTApproveForAllParts
    }
    ... on OnRampTransfer {
      ...OnRampTransferParts
    }
  }
}
    ${TokenTransferPartsFragmentDoc}
${NftTransferPartsFragmentDoc}
${TokenApprovalPartsFragmentDoc}
${NftApprovalPartsFragmentDoc}
${NftApproveForAllPartsFragmentDoc}
${OnRampTransferPartsFragmentDoc}`;
export const SwapOrderDetailsPartsFragmentDoc = gql `
    fragment SwapOrderDetailsParts on SwapOrderDetails {
  id
  offerer
  hash
  orderStatus: swapOrderStatus
  expiry
  swapOrderType
  encodedOrder
  inputToken {
    ...TokenAssetParts
  }
  inputTokenQuantity
  outputToken {
    ...TokenAssetParts
  }
  outputTokenQuantity
}
    ${TokenAssetPartsFragmentDoc}`;
export const OnRampTransactionDetailsPartsFragmentDoc = gql `
    fragment OnRampTransactionDetailsParts on OnRampTransactionDetails {
  id
  status
  receiverAddress
  onRampTransfer {
    id
    token {
      ...SimpleTokenDetails
    }
    amount
    sourceCurrency
    sourceAmount
    serviceProvider {
      serviceProvider
      name
      url
      logoLightUrl
      logoDarkUrl
    }
    transactionReferenceId
    externalSessionId
  }
}
    ${SimpleTokenDetailsFragmentDoc}`;
export const AssetActivityPartsFragmentDoc = gql `
    fragment AssetActivityParts on AssetActivity {
  id
  timestamp
  chain
  details {
    __typename
    ... on TransactionDetails {
      ...TransactionDetailsParts
    }
    ... on SwapOrderDetails {
      ...SwapOrderDetailsParts
    }
    ... on OnRampTransactionDetails {
      ...OnRampTransactionDetailsParts
    }
  }
}
    ${TransactionDetailsPartsFragmentDoc}
${SwapOrderDetailsPartsFragmentDoc}
${OnRampTransactionDetailsPartsFragmentDoc}`;
export const TokenPriceFragmentDoc = gql `
    fragment TokenPrice on Token {
  id
  project {
    id
    markets(currencies: [USD]) {
      id
      price {
        id
        value
      }
    }
    logo {
      id
      url
    }
  }
  market(currency: USD) {
    id
    price {
      id
      value
    }
  }
}
    `;
export const PoolTransactionTokenFragmentDoc = gql `
    fragment PoolTransactionToken on Token {
  id
  address
  symbol
  chain
  decimals
  project {
    id
    name
    logo {
      id
      url
    }
  }
}
    `;
export const QuickTokenBalancePartsFragmentDoc = gql `
    fragment QuickTokenBalanceParts on TokenBalance {
  id
  quantity
  denominatedValue {
    id
    value
    currency
  }
  token {
    id
    address
    chain
    standard
  }
}
    `;
export const PortfolioTokenBalancePartsFragmentDoc = gql `
    fragment PortfolioTokenBalanceParts on TokenBalance {
  id
  quantity
  denominatedValue {
    id
    currency
    value
  }
  token {
    ...SimpleTokenDetails
    id
    address
    chain
    symbol
    name
    decimals
    standard
    project {
      id
      name
      logo {
        id
        url
      }
      safetyLevel
      logoUrl
      isSpam
    }
  }
  tokenProjectMarket {
    id
    pricePercentChange(duration: DAY) {
      id
      value
    }
    tokenProject {
      id
      logoUrl
      isSpam
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}`;
export const CandlestickOhlcFragmentDoc = gql `
    fragment CandlestickOHLC on TimestampedOhlc {
  id
  timestamp
  open {
    id
    value
  }
  high {
    id
    value
  }
  low {
    id
    value
  }
  close {
    id
    value
  }
}
    `;
export const PriceHistoryFallbackFragmentDoc = gql `
    fragment PriceHistoryFallback on TimestampedAmount {
  id
  value
  timestamp
}
    `;
export const TransactionTokenFragmentDoc = gql `
    fragment TransactionToken on Token {
  id
  address
  symbol
  chain
  decimals
  project {
    id
    name
    tokens {
      id
      address
      symbol
      chain
    }
    logo {
      id
      url
    }
  }
}
    `;
export const PoolTxFragmentDoc = gql `
    fragment PoolTx on PoolTransaction {
  id
  chain
  protocolVersion
  timestamp
  hash
  account
  token0 {
    ...TransactionToken
  }
  token0Quantity
  token1 {
    ...TransactionToken
  }
  token1Quantity
  usdValue {
    id
    value
  }
  type
}
    ${TransactionTokenFragmentDoc}`;
export const TokenPriceHistoryDocument = gql `
    query TokenPriceHistory($contract: ContractInput!, $duration: HistoryDuration = DAY, $maxHistoryLength: Int = 1000) {
  tokenProjects(contracts: [$contract]) {
    id
    name
    markets(currencies: [USD]) {
      id
      price {
        value
      }
      pricePercentChange24h {
        value
      }
      priceHistory(duration: $duration, maxLength: $maxHistoryLength) {
        timestamp
        value
      }
    }
    tokens {
      id
      chain
      address
      symbol
      decimals
      market(currency: USD) {
        id
        price {
          value
        }
        pricePercentChange24h: pricePercentChange(duration: DAY) {
          value
        }
        priceHistory(duration: $duration, maxLength: $maxHistoryLength) {
          timestamp
          value
        }
      }
    }
  }
}
    `;
/**
 * __useTokenPriceHistoryQuery__
 *
 * To run a query within a React component, call `useTokenPriceHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceHistoryQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      duration: // value for 'duration'
 *      maxHistoryLength: // value for 'maxHistoryLength'
 *   },
 * });
 */
export function useTokenPriceHistoryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenPriceHistoryDocument, options);
}
export function useTokenPriceHistoryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenPriceHistoryDocument, options);
}
export const AccountListDocument = gql `
    query AccountList($addresses: [String!]!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]) {
  portfolios(
    ownerAddresses: $addresses
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    ownerAddress
    tokensTotalDenominatedValue {
      value
    }
  }
}
    `;
/**
 * __useAccountListQuery__
 *
 * To run a query within a React component, call `useAccountListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountListQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *      valueModifiers: // value for 'valueModifiers'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useAccountListQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(AccountListDocument, options);
}
export function useAccountListLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(AccountListDocument, options);
}
export const SearchPopularNftCollectionsDocument = gql `
    query SearchPopularNFTCollections {
  topCollections(chains: [ETHEREUM], orderBy: VOLUME, duration: DAY, first: 2) {
    edges {
      node {
        id
        name
        collectionId
        isVerified
        nftContracts {
          id
          chain
          address
        }
        image {
          id
          url
        }
      }
    }
  }
}
    `;
/**
 * __useSearchPopularNftCollectionsQuery__
 *
 * To run a query within a React component, call `useSearchPopularNftCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPopularNftCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPopularNftCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchPopularNftCollectionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(SearchPopularNftCollectionsDocument, options);
}
export function useSearchPopularNftCollectionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(SearchPopularNftCollectionsDocument, options);
}
export const NftsDocument = gql `
    query Nfts($ownerAddress: String!) {
  portfolios(ownerAddresses: [$ownerAddress]) {
    id
    nftBalances {
      id
      ownedAsset {
        id
        collection {
          id
          collectionId
          description
          image {
            id
            url
          }
          isVerified
          name
          numAssets
          markets(currencies: [USD]) {
            id
            floorPrice {
              value
            }
            owners
            volume24h {
              value
            }
            totalVolume {
              value
            }
          }
        }
        description
        image {
          id
          url
        }
        name
        nftContract {
          id
          address
          chain
          standard
        }
        thumbnail {
          id
          url
        }
        tokenId
        creator {
          id
          address
          username
        }
      }
    }
  }
}
    `;
/**
 * __useNftsQuery__
 *
 * To run a query within a React component, call `useNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftsQuery({
 *   variables: {
 *      ownerAddress: // value for 'ownerAddress'
 *   },
 * });
 */
export function useNftsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(NftsDocument, options);
}
export function useNftsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(NftsDocument, options);
}
export const NftItemScreenDocument = gql `
    query NFTItemScreen($contractAddress: String!, $filter: NftAssetsFilterInput, $activityFilter: NftActivityFilterInput) {
  nftAssets(address: $contractAddress, filter: $filter) {
    edges {
      node {
        id
        ownerAddress
        collection {
          id
          collectionId
          description
          image {
            id
            url
          }
          isVerified
          name
          numAssets
          markets(currencies: [USD]) {
            id
            floorPrice {
              value
            }
            owners
            totalVolume {
              value
            }
          }
          nftContracts {
            id
            address
          }
        }
        description
        image {
          id
          url
          dimensions {
            width
            height
          }
        }
        name
        nftContract {
          id
          address
          chain
          standard
        }
        tokenId
        creator {
          id
          address
          username
        }
        traits {
          id
          name
          rarity
          value
        }
        listings(first: 1) {
          edges {
            node {
              id
              price {
                currency
                value
              }
            }
          }
        }
      }
    }
  }
  nftActivity(filter: $activityFilter) {
    edges {
      node {
        id
        quantity
        price {
          currency
          value
        }
      }
    }
  }
}
    `;
/**
 * __useNftItemScreenQuery__
 *
 * To run a query within a React component, call `useNftItemScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftItemScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftItemScreenQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *      filter: // value for 'filter'
 *      activityFilter: // value for 'activityFilter'
 *   },
 * });
 */
export function useNftItemScreenQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(NftItemScreenDocument, options);
}
export function useNftItemScreenLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(NftItemScreenDocument, options);
}
export const NftCollectionScreenDocument = gql `
    query NftCollectionScreen($contractAddress: String!, $first: Int, $after: String) {
  nftCollections(filter: {addresses: [$contractAddress]}) {
    edges {
      node {
        id
        bannerImage {
          id
          url
        }
        isVerified
        numAssets
        description
        homepageUrl
        twitterName
        image {
          id
          url
        }
        name
        markets(currencies: [USD]) {
          id
          floorPrice {
            value
          }
          owners
          volume24h {
            value
          }
          totalVolume {
            value
          }
        }
      }
    }
  }
  nftAssets(
    address: $contractAddress
    first: $first
    after: $after
    orderBy: PRICE
    asc: true
  ) {
    edges {
      node {
        ownerAddress
        id
        name
        tokenId
        nftContract {
          id
          address
        }
        collection {
          id
          collectionId
          name
        }
        image {
          id
          url
          dimensions {
            width
            height
          }
        }
        listings(first: 1) {
          edges {
            node {
              id
              price {
                currency
                value
              }
            }
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
/**
 * __useNftCollectionScreenQuery__
 *
 * To run a query within a React component, call `useNftCollectionScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftCollectionScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftCollectionScreenQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useNftCollectionScreenQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(NftCollectionScreenDocument, options);
}
export function useNftCollectionScreenLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(NftCollectionScreenDocument, options);
}
export const NftsTabDocument = gql `
    query NftsTab($ownerAddress: String!, $first: Int, $after: String, $filter: NftBalancesFilterInput, $chains: [Chain!]!) {
  nftBalances(
    ownerAddress: $ownerAddress
    chains: $chains
    first: $first
    after: $after
    filter: $filter
  ) {
    edges {
      node {
        ownedAsset {
          chain
          id
          collection {
            id
            name
            isVerified
            markets(currencies: [ETH]) {
              id
              floorPrice {
                value
              }
            }
          }
          image {
            id
            url
            dimensions {
              width
              height
            }
          }
          thumbnail {
            id
            url
          }
          name
          tokenId
          description
          nftContract {
            id
            address
          }
          isSpam
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
/**
 * __useNftsTabQuery__
 *
 * To run a query within a React component, call `useNftsTabQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftsTabQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftsTabQuery({
 *   variables: {
 *      ownerAddress: // value for 'ownerAddress'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      filter: // value for 'filter'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useNftsTabQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(NftsTabDocument, options);
}
export function useNftsTabLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(NftsTabDocument, options);
}
export const PortfolioBalancesDocument = gql `
    query PortfolioBalances($ownerAddress: String!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]!) {
  portfolios(
    ownerAddresses: [$ownerAddress]
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    tokensTotalDenominatedValue {
      value
    }
    tokensTotalDenominatedValueChange(duration: DAY) {
      absolute {
        value
      }
      percentage {
        value
      }
    }
    tokenBalances {
      ...TokenBalanceParts
    }
  }
}
    ${TokenBalancePartsFragmentDoc}`;
/**
 * __usePortfolioBalancesQuery__
 *
 * To run a query within a React component, call `usePortfolioBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioBalancesQuery({
 *   variables: {
 *      ownerAddress: // value for 'ownerAddress'
 *      valueModifiers: // value for 'valueModifiers'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function usePortfolioBalancesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(PortfolioBalancesDocument, options);
}
export function usePortfolioBalancesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(PortfolioBalancesDocument, options);
}
export const MultiplePortfolioBalancesDocument = gql `
    query MultiplePortfolioBalances($ownerAddresses: [String!]!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]!) {
  portfolios(
    ownerAddresses: $ownerAddresses
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    tokensTotalDenominatedValue {
      value
    }
    tokensTotalDenominatedValueChange(duration: DAY) {
      absolute {
        value
      }
      percentage {
        value
      }
    }
    tokenBalances {
      id
      quantity
      isHidden
      denominatedValue {
        currency
        value
      }
      token {
        ...TokenBasicInfoParts
        ...TokenBasicProjectParts
      }
      tokenProjectMarket {
        relativeChange24: pricePercentChange(duration: DAY) {
          value
        }
      }
    }
  }
}
    ${TokenBasicInfoPartsFragmentDoc}
${TokenBasicProjectPartsFragmentDoc}`;
/**
 * __useMultiplePortfolioBalancesQuery__
 *
 * To run a query within a React component, call `useMultiplePortfolioBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMultiplePortfolioBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMultiplePortfolioBalancesQuery({
 *   variables: {
 *      ownerAddresses: // value for 'ownerAddresses'
 *      valueModifiers: // value for 'valueModifiers'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useMultiplePortfolioBalancesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(MultiplePortfolioBalancesDocument, options);
}
export function useMultiplePortfolioBalancesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(MultiplePortfolioBalancesDocument, options);
}
export const SelectWalletScreenDocument = gql `
    query SelectWalletScreen($ownerAddresses: [String!]!, $valueModifiers: [PortfolioValueModifier!], $chains: [Chain!]!) {
  portfolios(
    ownerAddresses: $ownerAddresses
    chains: $chains
    valueModifiers: $valueModifiers
  ) {
    id
    ownerAddress
    tokensTotalDenominatedValue {
      value
    }
  }
}
    `;
/**
 * __useSelectWalletScreenQuery__
 *
 * To run a query within a React component, call `useSelectWalletScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectWalletScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectWalletScreenQuery({
 *   variables: {
 *      ownerAddresses: // value for 'ownerAddresses'
 *      valueModifiers: // value for 'valueModifiers'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useSelectWalletScreenQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(SelectWalletScreenDocument, options);
}
export function useSelectWalletScreenLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(SelectWalletScreenDocument, options);
}
export const TransactionHistoryUpdaterDocument = gql `
    query TransactionHistoryUpdater($addresses: [String!]!, $onRampAuth: OnRampTransactionsAuth, $chains: [Chain!]!) {
  portfolios(ownerAddresses: $addresses, chains: $chains) {
    id
    ownerAddress
    assetActivities(
      pageSize: 1
      page: 1
      chains: $chains
      onRampTransactionsAuth: $onRampAuth
      includeBridging: true
    ) {
      id
      timestamp
      details {
        ... on TransactionDetails {
          id
          hash
        }
      }
    }
  }
}
    `;
/**
 * __useTransactionHistoryUpdaterQuery__
 *
 * To run a query within a React component, call `useTransactionHistoryUpdaterQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionHistoryUpdaterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionHistoryUpdaterQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *      onRampAuth: // value for 'onRampAuth'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useTransactionHistoryUpdaterQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TransactionHistoryUpdaterDocument, options);
}
export function useTransactionHistoryUpdaterLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TransactionHistoryUpdaterDocument, options);
}
export const TokenDocument = gql `
    query Token($chain: Chain!, $address: String) {
  token(chain: $chain, address: $address) {
    ...TokenParts
  }
}
    ${TokenPartsFragmentDoc}`;
/**
 * __useTokenQuery__
 *
 * To run a query within a React component, call `useTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenDocument, options);
}
export function useTokenLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenDocument, options);
}
export const TokenDetailsScreenDocument = gql `
    query TokenDetailsScreen($chain: Chain!, $address: String) {
  token(chain: $chain, address: $address) {
    ...TokenParts
    ...TokenMarketParts
    ...TokenBasicProjectParts
    ...TokenProjectUrlsParts
    ...TokenProjectMarketsParts
  }
}
    ${TokenPartsFragmentDoc}
${TokenMarketPartsFragmentDoc}
${TokenBasicProjectPartsFragmentDoc}
${TokenProjectUrlsPartsFragmentDoc}
${TokenProjectMarketsPartsFragmentDoc}`;
/**
 * __useTokenDetailsScreenQuery__
 *
 * To run a query within a React component, call `useTokenDetailsScreenQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenDetailsScreenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenDetailsScreenQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenDetailsScreenQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenDetailsScreenDocument, options);
}
export function useTokenDetailsScreenLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenDetailsScreenDocument, options);
}
export const TokenProjectDescriptionDocument = gql `
    query TokenProjectDescription($chain: Chain!, $address: String, $includeSpanish: Boolean = false, $includeFrench: Boolean = false, $includeJapanese: Boolean = false, $includePortuguese: Boolean = false, $includeVietnamese: Boolean = false, $includeChineseSimplified: Boolean = false, $includeChineseTraditional: Boolean = false) {
  token(chain: $chain, address: $address) {
    chain
    address
    project {
      id
      description
      descriptionTranslations {
        descriptionEsEs @include(if: $includeSpanish)
        descriptionFrFr @include(if: $includeFrench)
        descriptionJaJp @include(if: $includeJapanese)
        descriptionPtPt @include(if: $includePortuguese)
        descriptionViVn @include(if: $includeVietnamese)
        descriptionZhHans @include(if: $includeChineseSimplified)
        descriptionZhHant @include(if: $includeChineseTraditional)
      }
    }
  }
}
    `;
/**
 * __useTokenProjectDescriptionQuery__
 *
 * To run a query within a React component, call `useTokenProjectDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenProjectDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenProjectDescriptionQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      includeSpanish: // value for 'includeSpanish'
 *      includeFrench: // value for 'includeFrench'
 *      includeJapanese: // value for 'includeJapanese'
 *      includePortuguese: // value for 'includePortuguese'
 *      includeVietnamese: // value for 'includeVietnamese'
 *      includeChineseSimplified: // value for 'includeChineseSimplified'
 *      includeChineseTraditional: // value for 'includeChineseTraditional'
 *   },
 * });
 */
export function useTokenProjectDescriptionQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenProjectDescriptionDocument, options);
}
export function useTokenProjectDescriptionLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenProjectDescriptionDocument, options);
}
export const TokenProjectsDocument = gql `
    query TokenProjects($contracts: [ContractInput!]!) {
  tokenProjects(contracts: $contracts) {
    id
    logoUrl
    safetyLevel
    tokens {
      ...TokenBasicInfoParts
      ...TokenFeeDataParts
      ...TokenProtectionInfoParts
    }
  }
}
    ${TokenBasicInfoPartsFragmentDoc}
${TokenFeeDataPartsFragmentDoc}
${TokenProtectionInfoPartsFragmentDoc}`;
/**
 * __useTokenProjectsQuery__
 *
 * To run a query within a React component, call `useTokenProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenProjectsQuery({
 *   variables: {
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export function useTokenProjectsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenProjectsDocument, options);
}
export function useTokenProjectsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenProjectsDocument, options);
}
export const TransactionListDocument = gql `
    query TransactionList($address: String!, $onRampAuth: OnRampTransactionsAuth, $chains: [Chain!]!, $pageSize: Int = 100) {
  portfolios(ownerAddresses: [$address], chains: $chains) {
    id
    assetActivities(
      pageSize: $pageSize
      page: 1
      includeOffChain: true
      includeBridging: true
      chains: $chains
      onRampTransactionsAuth: $onRampAuth
    ) {
      id
      timestamp
      chain
      details {
        ... on OnRampTransactionDetails {
          id
          status
          receiverAddress
          onRampTransfer {
            id
            transactionReferenceId
            externalSessionId
            token {
              ...TokenBasicInfoParts
              ...TokenBasicProjectParts
            }
            tokenStandard
            amount
            sourceCurrency
            sourceAmount
            serviceProvider {
              serviceProvider
              name
              url
              logoLightUrl
              logoDarkUrl
              supportUrl
            }
            networkFee
            transactionFee
            totalFee
          }
        }
        ... on TransactionDetails {
          id
          to
          type
          hash
          from
          status
          application {
            name
            address
            icon {
              url
            }
          }
          assetChanges {
            __typename
            ... on TokenTransfer {
              id
              asset {
                id
                symbol
                address
                decimals
                chain
                project {
                  id
                  isSpam
                  spamCode
                }
              }
              tokenStandard
              quantity
              sender
              recipient
              direction
              transactedValue {
                id
                currency
                value
              }
            }
            ... on NftTransfer {
              id
              asset {
                id
                name
                isSpam
                nftContract {
                  id
                  chain
                  address
                }
                tokenId
                image {
                  id
                  url
                }
                collection {
                  id
                  name
                }
              }
              nftStandard
              sender
              recipient
              direction
            }
            ... on OnRampTransfer {
              id
              transactionReferenceId
              externalSessionId
              token {
                ...TokenBasicInfoParts
                ...TokenBasicProjectParts
              }
              tokenStandard
              amount
              sourceCurrency
              sourceAmount
              serviceProvider {
                serviceProvider
                name
                url
                logoLightUrl
                logoDarkUrl
                supportUrl
              }
              networkFee
              transactionFee
              totalFee
            }
            ... on TokenApproval {
              id
              asset {
                id
                symbol
                decimals
                address
                chain
              }
              tokenStandard
              approvedAddress
              quantity
            }
          }
          networkFee {
            quantity
            tokenSymbol
            tokenAddress
            tokenChain
          }
        }
        ... on SwapOrderDetails {
          id
          offerer
          hash
          orderStatus: swapOrderStatus
          expiry
          swapOrderType
          encodedOrder
          inputToken {
            id
            symbol
            address
            decimals
            chain
          }
          inputTokenQuantity
          outputToken {
            id
            symbol
            address
            decimals
            chain
          }
          outputTokenQuantity
        }
      }
    }
  }
}
    ${TokenBasicInfoPartsFragmentDoc}
${TokenBasicProjectPartsFragmentDoc}`;
/**
 * __useTransactionListQuery__
 *
 * To run a query within a React component, call `useTransactionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionListQuery({
 *   variables: {
 *      address: // value for 'address'
 *      onRampAuth: // value for 'onRampAuth'
 *      chains: // value for 'chains'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useTransactionListQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TransactionListDocument, options);
}
export function useTransactionListLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TransactionListDocument, options);
}
export const FeedTransactionListDocument = gql `
    query FeedTransactionList($addresses: [String!]!, $chains: [Chain!]!) {
  portfolios(ownerAddresses: $addresses, chains: $chains) {
    id
    ownerAddress
    assetActivities(pageSize: 30, includeBridging: true, page: 1, chains: $chains) {
      id
      timestamp
      chain
      details {
        ... on TransactionDetails {
          id
          to
          type
          hash
          from
          status
          assetChanges {
            __typename
            ... on TokenTransfer {
              id
              asset {
                id
                symbol
                address
                decimals
                chain
                project {
                  id
                  isSpam
                  spamCode
                }
              }
              tokenStandard
              quantity
              sender
              recipient
              direction
              transactedValue {
                currency
                value
              }
            }
            ... on NftTransfer {
              id
              asset {
                id
                name
                isSpam
                nftContract {
                  id
                  chain
                  address
                }
                tokenId
                image {
                  id
                  url
                }
                collection {
                  id
                  name
                }
              }
              nftStandard
              sender
              recipient
              direction
            }
            ... on TokenApproval {
              id
              asset {
                id
                symbol
                decimals
                address
                chain
              }
              tokenStandard
              approvedAddress
              quantity
            }
          }
        }
      }
    }
  }
}
    `;
/**
 * __useFeedTransactionListQuery__
 *
 * To run a query within a React component, call `useFeedTransactionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedTransactionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedTransactionListQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useFeedTransactionListQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(FeedTransactionListDocument, options);
}
export function useFeedTransactionListLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(FeedTransactionListDocument, options);
}
export const TopTokensDocument = gql `
    query TopTokens($chain: Chain, $page: Int = 1, $pageSize: Int = 100, $orderBy: TokenSortableField = POPULARITY) {
  topTokens(chain: $chain, page: $page, pageSize: $pageSize, orderBy: $orderBy) {
    ...TokenParts
  }
}
    ${TokenPartsFragmentDoc}`;
/**
 * __useTopTokensQuery__
 *
 * To run a query within a React component, call `useTopTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopTokensQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTopTokensQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TopTokensDocument, options);
}
export function useTopTokensLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TopTokensDocument, options);
}
export const SearchTokensDocument = gql `
    query SearchTokens($searchQuery: String!, $chains: [Chain!]!, $tokenSearchV2Enabled: Boolean) {
  searchTokens(
    searchQuery: $searchQuery
    chains: $chains
    tokenSearchV2Enabled: $tokenSearchV2Enabled
  ) {
    ...TokenParts
  }
}
    ${TokenPartsFragmentDoc}`;
/**
 * __useSearchTokensQuery__
 *
 * To run a query within a React component, call `useSearchTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTokensQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      chains: // value for 'chains'
 *      tokenSearchV2Enabled: // value for 'tokenSearchV2Enabled'
 *   },
 * });
 */
export function useSearchTokensQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(SearchTokensDocument, options);
}
export function useSearchTokensLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(SearchTokensDocument, options);
}
export const ExploreSearchDocument = gql `
    query ExploreSearch($searchQuery: String!, $nftCollectionsFilter: NftCollectionsFilterInput!, $chains: [Chain!], $tokenSearchV2Enabled: Boolean) {
  searchTokens(
    searchQuery: $searchQuery
    chains: $chains
    tokenSearchV2Enabled: $tokenSearchV2Enabled
  ) {
    chain
    address
    decimals
    symbol
    market {
      volume(duration: DAY) {
        value
      }
    }
    name
    project {
      id
      logoUrl
      safetyLevel
    }
    protectionInfo {
      result
      attackTypes
      blockaidFees {
        buy
        sell
        transfer
      }
    }
    feeData {
      buyFeeBps
      sellFeeBps
    }
  }
  nftCollections(filter: $nftCollectionsFilter, first: 4) {
    edges {
      node {
        id
        name
        collectionId
        isVerified
        nftContracts {
          id
          chain
          address
        }
        image {
          id
          url
        }
      }
    }
  }
}
    `;
/**
 * __useExploreSearchQuery__
 *
 * To run a query within a React component, call `useExploreSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useExploreSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExploreSearchQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      nftCollectionsFilter: // value for 'nftCollectionsFilter'
 *      chains: // value for 'chains'
 *      tokenSearchV2Enabled: // value for 'tokenSearchV2Enabled'
 *   },
 * });
 */
export function useExploreSearchQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(ExploreSearchDocument, options);
}
export function useExploreSearchLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(ExploreSearchDocument, options);
}
export const HomeScreenTokensDocument = gql `
    query HomeScreenTokens($contracts: [ContractInput!]!, $chain: Chain!) {
  tokens(contracts: $contracts) {
    ...HomeScreenTokenParts
  }
  eth: token(address: null, chain: $chain) {
    ...HomeScreenTokenParts
  }
}
    ${HomeScreenTokenPartsFragmentDoc}`;
/**
 * __useHomeScreenTokensQuery__
 *
 * To run a query within a React component, call `useHomeScreenTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeScreenTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeScreenTokensQuery({
 *   variables: {
 *      contracts: // value for 'contracts'
 *      chain: // value for 'chain'
 *   },
 * });
 */
export function useHomeScreenTokensQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(HomeScreenTokensDocument, options);
}
export function useHomeScreenTokensLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(HomeScreenTokensDocument, options);
}
export const FavoriteTokenCardDocument = gql `
    query FavoriteTokenCard($chain: Chain!, $address: String) {
  token(chain: $chain, address: $address) {
    ...TokenBasicInfoParts
    ...TokenBasicProjectParts
    ...TokenProjectMarketsParts
    market(currency: USD) {
      id
      price {
        value
      }
      pricePercentChange(duration: DAY) {
        value
      }
    }
  }
}
    ${TokenBasicInfoPartsFragmentDoc}
${TokenBasicProjectPartsFragmentDoc}
${TokenProjectMarketsPartsFragmentDoc}`;
/**
 * __useFavoriteTokenCardQuery__
 *
 * To run a query within a React component, call `useFavoriteTokenCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteTokenCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteTokenCardQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useFavoriteTokenCardQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(FavoriteTokenCardDocument, options);
}
export function useFavoriteTokenCardLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(FavoriteTokenCardDocument, options);
}
export const WidgetTokensDocument = gql `
    query WidgetTokens($contracts: [ContractInput!]!) {
  tokens(contracts: $contracts) {
    symbol
    chain
    address
    name
  }
}
    `;
/**
 * __useWidgetTokensQuery__
 *
 * To run a query within a React component, call `useWidgetTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useWidgetTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWidgetTokensQuery({
 *   variables: {
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export function useWidgetTokensQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(WidgetTokensDocument, options);
}
export function useWidgetTokensLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(WidgetTokensDocument, options);
}
export const TokensDocument = gql `
    query Tokens($contracts: [ContractInput!]!) {
  tokens(contracts: $contracts) {
    ...TokenParts
  }
}
    ${TokenPartsFragmentDoc}`;
/**
 * __useTokensQuery__
 *
 * To run a query within a React component, call `useTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokensQuery({
 *   variables: {
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export function useTokensQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokensDocument, options);
}
export function useTokensLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokensDocument, options);
}
export const ConvertDocument = gql `
    query Convert($fromCurrency: Currency!, $toCurrency: Currency!) {
  convert(
    fromAmount: {currency: $fromCurrency, value: 1.0}
    toCurrency: $toCurrency
  ) {
    value
    currency
  }
}
    `;
/**
 * __useConvertQuery__
 *
 * To run a query within a React component, call `useConvertQuery` and pass it any options that fit your needs.
 * When your component renders, `useConvertQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConvertQuery({
 *   variables: {
 *      fromCurrency: // value for 'fromCurrency'
 *      toCurrency: // value for 'toCurrency'
 *   },
 * });
 */
export function useConvertQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(ConvertDocument, options);
}
export function useConvertLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(ConvertDocument, options);
}
export const RecentTokenTransfersDocument = gql `
    query RecentTokenTransfers($address: String!, $chains: [Chain!]) {
  portfolios(ownerAddresses: [$address], chains: $chains) {
    id
    ownerAddress
    assetActivities(pageSize: 100, page: 1, chains: $chains) {
      id
      timestamp
      chain
      details {
        ... on TransactionDetails {
          to
          type
          hash
          from
          status
          assetChanges {
            __typename
            ... on TokenTransfer {
              id
              asset {
                id
                symbol
                address
                decimals
                chain
                project {
                  id
                  isSpam
                  spamCode
                }
              }
              tokenStandard
              quantity
              sender
              recipient
              direction
              transactedValue {
                currency
                value
              }
            }
            ... on NftTransfer {
              id
              asset {
                id
                name
                isSpam
                nftContract {
                  id
                  chain
                  address
                }
                tokenId
                image {
                  id
                  url
                }
                collection {
                  id
                  name
                }
              }
              nftStandard
              sender
              recipient
              direction
            }
            ... on TokenApproval {
              id
              asset {
                id
                symbol
                decimals
                address
                chain
              }
              tokenStandard
              approvedAddress
              quantity
            }
          }
        }
      }
    }
  }
}
    `;
/**
 * __useRecentTokenTransfersQuery__
 *
 * To run a query within a React component, call `useRecentTokenTransfersQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentTokenTransfersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentTokenTransfersQuery({
 *   variables: {
 *      address: // value for 'address'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useRecentTokenTransfersQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(RecentTokenTransfersDocument, options);
}
export function useRecentTokenTransfersLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(RecentTokenTransfersDocument, options);
}
export const RecentlySearchedAssetsDocument = gql `
    query RecentlySearchedAssets($collectionAddresses: [String!]!, $contracts: [ContractInput!]!) {
  nftCollections(filter: {addresses: $collectionAddresses}) {
    edges {
      node {
        collectionId
        image {
          url
        }
        isVerified
        name
        numAssets
        nftContracts {
          address
        }
        markets(currencies: ETH) {
          floorPrice {
            currency
            value
          }
        }
      }
    }
  }
  tokens(contracts: $contracts) {
    id
    decimals
    name
    chain
    standard
    address
    symbol
    feeData {
      buyFeeBps
      sellFeeBps
    }
    protectionInfo {
      attackTypes
      result
      blockaidFees {
        buy
        sell
        transfer
      }
    }
    market(currency: USD) {
      id
      price {
        id
        value
        currency
      }
      pricePercentChange(duration: DAY) {
        id
        value
      }
      volume24H: volume(duration: DAY) {
        id
        value
        currency
      }
    }
    project {
      id
      logoUrl
      safetyLevel
    }
  }
}
    `;
/**
 * __useRecentlySearchedAssetsQuery__
 *
 * To run a query within a React component, call `useRecentlySearchedAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentlySearchedAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentlySearchedAssetsQuery({
 *   variables: {
 *      collectionAddresses: // value for 'collectionAddresses'
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export function useRecentlySearchedAssetsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(RecentlySearchedAssetsDocument, options);
}
export function useRecentlySearchedAssetsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(RecentlySearchedAssetsDocument, options);
}
export const TokenSpotPriceDocument = gql `
    query TokenSpotPrice($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    name
    symbol
    project {
      id
      markets(currencies: [USD]) {
        id
        price {
          id
          value
        }
      }
    }
  }
}
    `;
/**
 * __useTokenSpotPriceQuery__
 *
 * To run a query within a React component, call `useTokenSpotPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenSpotPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenSpotPriceQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenSpotPriceQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenSpotPriceDocument, options);
}
export function useTokenSpotPriceLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenSpotPriceDocument, options);
}
export const UniswapPricesDocument = gql `
    query UniswapPrices($contracts: [ContractInput!]!) {
  tokens(contracts: $contracts) {
    id
    address
    chain
    standard
    project {
      id
      markets(currencies: [USD]) {
        id
        price {
          id
          value
        }
      }
    }
  }
}
    `;
/**
 * __useUniswapPricesQuery__
 *
 * To run a query within a React component, call `useUniswapPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniswapPricesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniswapPricesQuery({
 *   variables: {
 *      contracts: // value for 'contracts'
 *   },
 * });
 */
export function useUniswapPricesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(UniswapPricesDocument, options);
}
export function useUniswapPricesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(UniswapPricesDocument, options);
}
export const ActivityWebDocument = gql `
    query ActivityWeb($account: String!, $chains: [Chain!]!, $onRampTransactionIDs: [String!], $includeOffChain: Boolean!) {
  portfolios(ownerAddresses: [$account], chains: $chains) {
    id
    assetActivities(
      pageSize: 100
      page: 1
      includeOffChain: $includeOffChain
      chains: $chains
      onRampTransactionIDs: $onRampTransactionIDs
      includeBridging: true
    ) {
      ...AssetActivityParts
    }
  }
}
    ${AssetActivityPartsFragmentDoc}`;
/**
 * __useActivityWebQuery__
 *
 * To run a query within a React component, call `useActivityWebQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityWebQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityWebQuery({
 *   variables: {
 *      account: // value for 'account'
 *      chains: // value for 'chains'
 *      onRampTransactionIDs: // value for 'onRampTransactionIDs'
 *      includeOffChain: // value for 'includeOffChain'
 *   },
 * });
 */
export function useActivityWebQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(ActivityWebDocument, options);
}
export function useActivityWebLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(ActivityWebDocument, options);
}
export const OnAssetActivityDocument = gql `
    subscription OnAssetActivity($subscriptionId: ID!, $account: String!) {
  onAssetActivity(subscriptionId: $subscriptionId, addresses: [$account]) {
    ...AssetActivityParts
  }
}
    ${AssetActivityPartsFragmentDoc}`;
/**
 * __useOnAssetActivitySubscription__
 *
 * To run a query within a React component, call `useOnAssetActivitySubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnAssetActivitySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnAssetActivitySubscription({
 *   variables: {
 *      subscriptionId: // value for 'subscriptionId'
 *      account: // value for 'account'
 *   },
 * });
 */
export function useOnAssetActivitySubscription(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useSubscription(OnAssetActivityDocument, options);
}
export const AllV3TicksDocument = gql `
    query AllV3Ticks($chain: Chain!, $address: String!, $skip: Int, $first: Int) {
  v3Pool(chain: $chain, address: $address) {
    id
    ticks(skip: $skip, first: $first) {
      tick: tickIdx
      liquidityNet
      price0
      price1
    }
  }
}
    `;
/**
 * __useAllV3TicksQuery__
 *
 * To run a query within a React component, call `useAllV3TicksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllV3TicksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllV3TicksQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllV3TicksQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(AllV3TicksDocument, options);
}
export function useAllV3TicksLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(AllV3TicksDocument, options);
}
export const AllV4TicksDocument = gql `
    query AllV4Ticks($chain: Chain!, $poolId: String!, $skip: Int, $first: Int) {
  v4Pool(chain: $chain, poolId: $poolId) {
    id
    ticks(skip: $skip, first: $first) {
      tick: tickIdx
      liquidityNet
      price0
      price1
    }
  }
}
    `;
/**
 * __useAllV4TicksQuery__
 *
 * To run a query within a React component, call `useAllV4TicksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllV4TicksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllV4TicksQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      poolId: // value for 'poolId'
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllV4TicksQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(AllV4TicksDocument, options);
}
export function useAllV4TicksLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(AllV4TicksDocument, options);
}
export const FeeTierDistributionDocument = gql `
    query FeeTierDistribution($chain: Chain!, $token0: String!, $token1: String!) {
  v3PoolsForTokenPair(chain: $chain, token0: $token0, token1: $token1) {
    feeTier
    token0Supply
    token1Supply
  }
}
    `;
/**
 * __useFeeTierDistributionQuery__
 *
 * To run a query within a React component, call `useFeeTierDistributionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeeTierDistributionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeeTierDistributionQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      token0: // value for 'token0'
 *      token1: // value for 'token1'
 *   },
 * });
 */
export function useFeeTierDistributionQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(FeeTierDistributionDocument, options);
}
export function useFeeTierDistributionLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(FeeTierDistributionDocument, options);
}
export const TokenPromoDocument = gql `
    query TokenPromo($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      price {
        id
        value
      }
      pricePercentChange(duration: DAY) {
        id
        value
      }
    }
  }
}
    `;
/**
 * __useTokenPromoQuery__
 *
 * To run a query within a React component, call `useTokenPromoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPromoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPromoQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenPromoQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenPromoDocument, options);
}
export function useTokenPromoLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenPromoDocument, options);
}
export const CollectionPromoDocument = gql `
    query CollectionPromo($addresses: [String!]!) {
  nftCollections(filter: {addresses: $addresses}) {
    edges {
      node {
        markets(currencies: ETH) {
          floorPricePercentChange(duration: DAY) {
            value
          }
        }
      }
    }
  }
}
    `;
/**
 * __useCollectionPromoQuery__
 *
 * To run a query within a React component, call `useCollectionPromoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionPromoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionPromoQuery({
 *   variables: {
 *      addresses: // value for 'addresses'
 *   },
 * });
 */
export function useCollectionPromoQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(CollectionPromoDocument, options);
}
export function useCollectionPromoLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(CollectionPromoDocument, options);
}
export const DailyProtocolVolumeDocument = gql `
    query DailyProtocolVolume($version: ProtocolVersion!) {
  historicalProtocolVolume(chain: ETHEREUM, version: $version, duration: MONTH) {
    value
  }
}
    `;
/**
 * __useDailyProtocolVolumeQuery__
 *
 * To run a query within a React component, call `useDailyProtocolVolumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useDailyProtocolVolumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDailyProtocolVolumeQuery({
 *   variables: {
 *      version: // value for 'version'
 *   },
 * });
 */
export function useDailyProtocolVolumeQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(DailyProtocolVolumeDocument, options);
}
export function useDailyProtocolVolumeLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(DailyProtocolVolumeDocument, options);
}
export const IsV3SubgraphStaleDocument = gql `
    query isV3SubgraphStale($chain: Chain!) {
  isV3SubgraphStale(chain: $chain)
}
    `;
/**
 * __useIsV3SubgraphStaleQuery__
 *
 * To run a query within a React component, call `useIsV3SubgraphStaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsV3SubgraphStaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsV3SubgraphStaleQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *   },
 * });
 */
export function useIsV3SubgraphStaleQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(IsV3SubgraphStaleDocument, options);
}
export function useIsV3SubgraphStaleLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(IsV3SubgraphStaleDocument, options);
}
export const CollectionSearchDocument = gql `
    query CollectionSearch($query: String!) {
  nftCollections(filter: {nameQuery: $query}) {
    edges {
      cursor
      node {
        image {
          url
        }
        isVerified
        name
        numAssets
        nftContracts {
          address
          chain
          name
          symbol
          totalSupply
        }
        markets(currencies: ETH) {
          floorPrice {
            currency
            value
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
/**
 * __useCollectionSearchQuery__
 *
 * To run a query within a React component, call `useCollectionSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCollectionSearchQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(CollectionSearchDocument, options);
}
export function useCollectionSearchLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(CollectionSearchDocument, options);
}
export const NftBalanceDocument = gql `
    query NftBalance($ownerAddress: String!, $filter: NftBalancesFilterInput, $chains: [Chain!] = [ETHEREUM], $first: Int, $after: String, $last: Int, $before: String) {
  nftBalances(
    ownerAddress: $ownerAddress
    chains: $chains
    filter: $filter
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
    edges {
      node {
        ownedAsset {
          id
          animationUrl
          collection {
            id
            isVerified
            image {
              id
              url
            }
            name
            twitterName
            nftContracts {
              id
              address
              chain
              name
              standard
              symbol
              totalSupply
            }
            markets(currencies: ETH) {
              id
              floorPrice {
                id
                value
              }
            }
          }
          chain
          description
          flaggedBy
          image {
            id
            url
          }
          originalImage {
            id
            url
          }
          name
          ownerAddress
          smallImage {
            id
            url
          }
          suspiciousFlag
          tokenId
          thumbnail {
            id
            url
          }
          listings(first: 1) {
            edges {
              node {
                price {
                  id
                  value
                  currency
                }
                createdAt
                marketplace
                endAt
              }
            }
          }
        }
        listedMarketplaces
        listingFees {
          id
          payoutAddress
          basisPoints
        }
        lastPrice {
          id
          currency
          timestamp
          value
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
/**
 * __useNftBalanceQuery__
 *
 * To run a query within a React component, call `useNftBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftBalanceQuery({
 *   variables: {
 *      ownerAddress: // value for 'ownerAddress'
 *      filter: // value for 'filter'
 *      chains: // value for 'chains'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useNftBalanceQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(NftBalanceDocument, options);
}
export function useNftBalanceLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(NftBalanceDocument, options);
}
export const V3PoolDocument = gql `
    query V3Pool($chain: Chain!, $address: String!) {
  v3Pool(chain: $chain, address: $address) {
    id
    protocolVersion
    address
    feeTier
    token0 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token0Supply
    token1 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token1Supply
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    historicalVolume(duration: WEEK) {
      value
      timestamp
    }
    totalLiquidity {
      value
    }
    totalLiquidityPercentChange24h {
      value
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}
${TokenPriceFragmentDoc}`;
/**
 * __useV3PoolQuery__
 *
 * To run a query within a React component, call `useV3PoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useV3PoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV3PoolQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useV3PoolQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V3PoolDocument, options);
}
export function useV3PoolLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V3PoolDocument, options);
}
export const V4PoolDocument = gql `
    query V4Pool($chain: Chain!, $poolId: String!) {
  v4Pool(chain: $chain, poolId: $poolId) {
    id
    protocolVersion
    feeTier
    poolId
    hook {
      id
      address
    }
    token0 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token0Supply
    token1 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token1Supply
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    historicalVolume(duration: WEEK) {
      value
      timestamp
    }
    rewardsCampaign {
      id
      boostedApr
      startTimestamp
      endTimestamp
      totalRewardAllocation
      distributedRewards
    }
    totalLiquidity {
      value
    }
    totalLiquidityPercentChange24h {
      value
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}
${TokenPriceFragmentDoc}`;
/**
 * __useV4PoolQuery__
 *
 * To run a query within a React component, call `useV4PoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useV4PoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV4PoolQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      poolId: // value for 'poolId'
 *   },
 * });
 */
export function useV4PoolQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V4PoolDocument, options);
}
export function useV4PoolLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V4PoolDocument, options);
}
export const PoolPriceHistoryDocument = gql `
    query PoolPriceHistory($chain: Chain!, $addressOrId: String!, $duration: HistoryDuration!, $isV4: Boolean!, $isV3: Boolean!, $isV2: Boolean!) {
  v4Pool(chain: $chain, poolId: $addressOrId) @include(if: $isV4) {
    id
    priceHistory(duration: $duration) {
      id
      token0Price
      token1Price
      timestamp
    }
  }
  v3Pool(chain: $chain, address: $addressOrId) @include(if: $isV3) {
    id
    priceHistory(duration: $duration) {
      id
      token0Price
      token1Price
      timestamp
    }
  }
  v2Pair(chain: $chain, address: $addressOrId) @include(if: $isV2) {
    id
    priceHistory(duration: $duration) {
      id
      token0Price
      token1Price
      timestamp
    }
  }
}
    `;
/**
 * __usePoolPriceHistoryQuery__
 *
 * To run a query within a React component, call `usePoolPriceHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolPriceHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolPriceHistoryQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      addressOrId: // value for 'addressOrId'
 *      duration: // value for 'duration'
 *      isV4: // value for 'isV4'
 *      isV3: // value for 'isV3'
 *      isV2: // value for 'isV2'
 *   },
 * });
 */
export function usePoolPriceHistoryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(PoolPriceHistoryDocument, options);
}
export function usePoolPriceHistoryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(PoolPriceHistoryDocument, options);
}
export const PoolVolumeHistoryDocument = gql `
    query PoolVolumeHistory($chain: Chain!, $addressOrId: String!, $duration: HistoryDuration!, $isV4: Boolean!, $isV3: Boolean!, $isV2: Boolean!) {
  v4Pool(chain: $chain, poolId: $addressOrId) @include(if: $isV4) {
    id
    historicalVolume(duration: $duration) {
      id
      value
      timestamp
    }
  }
  v3Pool(chain: $chain, address: $addressOrId) @include(if: $isV3) {
    id
    historicalVolume(duration: $duration) {
      id
      value
      timestamp
    }
  }
  v2Pair(chain: $chain, address: $addressOrId) @include(if: $isV2) {
    id
    historicalVolume(duration: $duration) {
      id
      value
      timestamp
    }
  }
}
    `;
/**
 * __usePoolVolumeHistoryQuery__
 *
 * To run a query within a React component, call `usePoolVolumeHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePoolVolumeHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePoolVolumeHistoryQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      addressOrId: // value for 'addressOrId'
 *      duration: // value for 'duration'
 *      isV4: // value for 'isV4'
 *      isV3: // value for 'isV3'
 *      isV2: // value for 'isV2'
 *   },
 * });
 */
export function usePoolVolumeHistoryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(PoolVolumeHistoryDocument, options);
}
export function usePoolVolumeHistoryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(PoolVolumeHistoryDocument, options);
}
export const V2PairDocument = gql `
    query V2Pair($chain: Chain!, $address: String!) {
  v2Pair(chain: $chain, address: $address) {
    id
    protocolVersion
    address
    token0 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token0Supply
    token1 {
      ...SimpleTokenDetails
      ...TokenPrice
    }
    token1Supply
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    historicalVolume(duration: WEEK) {
      value
      timestamp
    }
    totalLiquidity {
      value
    }
    totalLiquidityPercentChange24h {
      value
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}
${TokenPriceFragmentDoc}`;
/**
 * __useV2PairQuery__
 *
 * To run a query within a React component, call `useV2PairQuery` and pass it any options that fit your needs.
 * When your component renders, `useV2PairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV2PairQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useV2PairQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V2PairDocument, options);
}
export function useV2PairLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V2PairDocument, options);
}
export const V4PoolTransactionsDocument = gql `
    query V4PoolTransactions($chain: Chain!, $poolId: String!, $first: Int!, $cursor: Int) {
  v4Pool(chain: $chain, poolId: $poolId) {
    id
    transactions(first: $first, timestampCursor: $cursor) {
      timestamp
      hash
      account
      token0 {
        ...PoolTransactionToken
      }
      token0Quantity
      token1 {
        ...PoolTransactionToken
      }
      token1Quantity
      usdValue {
        value
      }
      type
    }
  }
}
    ${PoolTransactionTokenFragmentDoc}`;
/**
 * __useV4PoolTransactionsQuery__
 *
 * To run a query within a React component, call `useV4PoolTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV4PoolTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV4PoolTransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      poolId: // value for 'poolId'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV4PoolTransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V4PoolTransactionsDocument, options);
}
export function useV4PoolTransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V4PoolTransactionsDocument, options);
}
export const V3PoolTransactionsDocument = gql `
    query V3PoolTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  v3Pool(chain: $chain, address: $address) {
    id
    transactions(first: $first, timestampCursor: $cursor) {
      timestamp
      hash
      account
      token0 {
        ...PoolTransactionToken
      }
      token0Quantity
      token1 {
        ...PoolTransactionToken
      }
      token1Quantity
      usdValue {
        value
      }
      type
    }
  }
}
    ${PoolTransactionTokenFragmentDoc}`;
/**
 * __useV3PoolTransactionsQuery__
 *
 * To run a query within a React component, call `useV3PoolTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV3PoolTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV3PoolTransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV3PoolTransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V3PoolTransactionsDocument, options);
}
export function useV3PoolTransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V3PoolTransactionsDocument, options);
}
export const V2PairTransactionsDocument = gql `
    query V2PairTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  v2Pair(chain: $chain, address: $address) {
    id
    transactions(first: $first, timestampCursor: $cursor) {
      timestamp
      hash
      account
      token0 {
        ...PoolTransactionToken
      }
      token0Quantity
      token1 {
        ...PoolTransactionToken
      }
      token1Quantity
      usdValue {
        value
      }
      type
    }
  }
}
    ${PoolTransactionTokenFragmentDoc}`;
/**
 * __useV2PairTransactionsQuery__
 *
 * To run a query within a React component, call `useV2PairTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV2PairTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV2PairTransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV2PairTransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V2PairTransactionsDocument, options);
}
export function useV2PairTransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V2PairTransactionsDocument, options);
}
export const QuickTokenBalancesWebDocument = gql `
    query QuickTokenBalancesWeb($ownerAddress: String!, $chains: [Chain!]!) {
  portfolios(ownerAddresses: [$ownerAddress], chains: $chains) {
    id
    tokenBalances {
      ...QuickTokenBalanceParts
    }
  }
}
    ${QuickTokenBalancePartsFragmentDoc}`;
/**
 * __useQuickTokenBalancesWebQuery__
 *
 * To run a query within a React component, call `useQuickTokenBalancesWebQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuickTokenBalancesWebQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuickTokenBalancesWebQuery({
 *   variables: {
 *      ownerAddress: // value for 'ownerAddress'
 *      chains: // value for 'chains'
 *   },
 * });
 */
export function useQuickTokenBalancesWebQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(QuickTokenBalancesWebDocument, options);
}
export function useQuickTokenBalancesWebLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(QuickTokenBalancesWebDocument, options);
}
export const SearchPopularTokensWebDocument = gql `
    query SearchPopularTokensWeb($chain: Chain!) {
  topTokens(pageSize: 4, page: 1, chain: $chain, orderBy: POPULARITY) {
    ...SimpleTokenDetails
    market(currency: USD) {
      id
      price {
        id
        value
        currency
      }
      pricePercentChange(duration: DAY) {
        id
        value
      }
      volume24H: volume(duration: DAY) {
        id
        value
        currency
      }
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}`;
/**
 * __useSearchPopularTokensWebQuery__
 *
 * To run a query within a React component, call `useSearchPopularTokensWebQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPopularTokensWebQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPopularTokensWebQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *   },
 * });
 */
export function useSearchPopularTokensWebQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(SearchPopularTokensWebDocument, options);
}
export function useSearchPopularTokensWebLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(SearchPopularTokensWebDocument, options);
}
export const SearchTokensWebDocument = gql `
    query SearchTokensWeb($searchQuery: String!, $chains: [Chain!], $tokenSearchV2Enabled: Boolean) {
  searchTokens(
    searchQuery: $searchQuery
    chains: $chains
    tokenSearchV2Enabled: $tokenSearchV2Enabled
  ) {
    ...SimpleTokenDetails
    id
    decimals
    name
    chain
    standard
    address
    symbol
    market(currency: USD) {
      id
      price {
        id
        value
        currency
      }
      pricePercentChange(duration: DAY) {
        id
        value
      }
      volume24H: volume(duration: DAY) {
        id
        value
        currency
      }
    }
    project {
      id
      name
      logo {
        id
        url
      }
      safetyLevel
      logoUrl
      isSpam
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}`;
/**
 * __useSearchTokensWebQuery__
 *
 * To run a query within a React component, call `useSearchTokensWebQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTokensWebQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTokensWebQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      chains: // value for 'chains'
 *      tokenSearchV2Enabled: // value for 'tokenSearchV2Enabled'
 *   },
 * });
 */
export function useSearchTokensWebQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(SearchTokensWebDocument, options);
}
export function useSearchTokensWebLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(SearchTokensWebDocument, options);
}
export const TokenWebDocument = gql `
    query TokenWeb($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    decimals
    name
    chain
    address
    symbol
    standard
    market(currency: USD) {
      id
      totalValueLocked {
        id
        value
        currency
      }
      price {
        id
        value
        currency
      }
      volume24H: volume(duration: DAY) {
        id
        value
        currency
      }
      priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
        id
        value
      }
      priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
        id
        value
      }
    }
    project {
      id
      name
      description
      homepageUrl
      twitterName
      logoUrl
      tokens {
        id
        chain
        address
      }
      markets(currencies: [USD]) {
        id
        fullyDilutedValuation {
          id
          value
          currency
        }
        marketCap {
          id
          value
          currency
        }
      }
    }
  }
}
    `;
/**
 * __useTokenWebQuery__
 *
 * To run a query within a React component, call `useTokenWebQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenWebQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenWebQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenWebQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenWebDocument, options);
}
export function useTokenWebLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenWebDocument, options);
}
export const TokenProjectWebDocument = gql `
    query TokenProjectWeb($chain: Chain!, $address: String = null) {
  token(chain: $chain, address: $address) {
    id
    decimals
    name
    chain
    address
    symbol
    standard
    project {
      id
      description
      homepageUrl
      twitterName
      logoUrl
      tokens {
        id
        chain
        address
      }
    }
  }
}
    `;
/**
 * __useTokenProjectWebQuery__
 *
 * To run a query within a React component, call `useTokenProjectWebQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenProjectWebQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenProjectWebQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenProjectWebQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenProjectWebDocument, options);
}
export function useTokenProjectWebLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenProjectWebDocument, options);
}
export const TokenPriceDocument = gql `
    query TokenPrice($chain: Chain!, $address: String = null, $duration: HistoryDuration!, $fallback: Boolean = false) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      price {
        id
        value
      }
      ohlc(duration: $duration) @skip(if: $fallback) {
        ...CandlestickOHLC
      }
      priceHistory(duration: $duration) @include(if: $fallback) {
        ...PriceHistoryFallback
      }
    }
  }
}
    ${CandlestickOhlcFragmentDoc}
${PriceHistoryFallbackFragmentDoc}`;
/**
 * __useTokenPriceQuery__
 *
 * To run a query within a React component, call `useTokenPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      duration: // value for 'duration'
 *      fallback: // value for 'fallback'
 *   },
 * });
 */
export function useTokenPriceQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenPriceDocument, options);
}
export function useTokenPriceLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenPriceDocument, options);
}
export const TokenHistoricalVolumesDocument = gql `
    query TokenHistoricalVolumes($chain: Chain!, $address: String = null, $duration: HistoryDuration!) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      historicalVolume(duration: $duration) {
        id
        timestamp
        value
      }
    }
  }
}
    `;
/**
 * __useTokenHistoricalVolumesQuery__
 *
 * To run a query within a React component, call `useTokenHistoricalVolumesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenHistoricalVolumesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenHistoricalVolumesQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useTokenHistoricalVolumesQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenHistoricalVolumesDocument, options);
}
export function useTokenHistoricalVolumesLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenHistoricalVolumesDocument, options);
}
export const TokenHistoricalTvlsDocument = gql `
    query TokenHistoricalTvls($chain: Chain!, $address: String = null, $duration: HistoryDuration!) {
  token(chain: $chain, address: $address) {
    id
    address
    chain
    market(currency: USD) {
      id
      historicalTvl(duration: $duration) {
        id
        timestamp
        value
      }
      totalValueLocked {
        id
        value
        currency
      }
    }
  }
}
    `;
/**
 * __useTokenHistoricalTvlsQuery__
 *
 * To run a query within a React component, call `useTokenHistoricalTvlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenHistoricalTvlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenHistoricalTvlsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useTokenHistoricalTvlsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TokenHistoricalTvlsDocument, options);
}
export function useTokenHistoricalTvlsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TokenHistoricalTvlsDocument, options);
}
export const V4TokenTransactionsDocument = gql `
    query V4TokenTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  token(chain: $chain, address: $address) {
    ...TransactionToken
    v4Transactions(first: $first, timestampCursor: $cursor) {
      ...PoolTx
    }
  }
}
    ${TransactionTokenFragmentDoc}
${PoolTxFragmentDoc}`;
/**
 * __useV4TokenTransactionsQuery__
 *
 * To run a query within a React component, call `useV4TokenTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV4TokenTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV4TokenTransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV4TokenTransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V4TokenTransactionsDocument, options);
}
export function useV4TokenTransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V4TokenTransactionsDocument, options);
}
export const V3TokenTransactionsDocument = gql `
    query V3TokenTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  token(chain: $chain, address: $address) {
    ...TransactionToken
    v3Transactions(first: $first, timestampCursor: $cursor) {
      ...PoolTx
    }
  }
}
    ${TransactionTokenFragmentDoc}
${PoolTxFragmentDoc}`;
/**
 * __useV3TokenTransactionsQuery__
 *
 * To run a query within a React component, call `useV3TokenTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV3TokenTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV3TokenTransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV3TokenTransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V3TokenTransactionsDocument, options);
}
export function useV3TokenTransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V3TokenTransactionsDocument, options);
}
export const V2TokenTransactionsDocument = gql `
    query V2TokenTransactions($chain: Chain!, $address: String!, $first: Int!, $cursor: Int) {
  token(chain: $chain, address: $address) {
    ...TransactionToken
    v2Transactions(first: $first, timestampCursor: $cursor) {
      ...PoolTx
    }
  }
}
    ${TransactionTokenFragmentDoc}
${PoolTxFragmentDoc}`;
/**
 * __useV2TokenTransactionsQuery__
 *
 * To run a query within a React component, call `useV2TokenTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV2TokenTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV2TokenTransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      address: // value for 'address'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV2TokenTransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V2TokenTransactionsDocument, options);
}
export function useV2TokenTransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V2TokenTransactionsDocument, options);
}
export const TopV4PoolsDocument = gql `
    query TopV4Pools($chain: Chain!, $first: Int!, $cursor: Float, $tokenAddress: String) {
  topV4Pools(
    first: $first
    chain: $chain
    tokenFilter: $tokenAddress
    tvlCursor: $cursor
  ) {
    id
    protocolVersion
    poolId
    hook {
      id
      address
    }
    totalLiquidity {
      value
    }
    feeTier
    token0 {
      ...SimpleTokenDetails
    }
    token1 {
      ...SimpleTokenDetails
    }
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    volume30d: cumulativeVolume(duration: MONTH) {
      value
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}`;
/**
 * __useTopV4PoolsQuery__
 *
 * To run a query within a React component, call `useTopV4PoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopV4PoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopV4PoolsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *      tokenAddress: // value for 'tokenAddress'
 *   },
 * });
 */
export function useTopV4PoolsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TopV4PoolsDocument, options);
}
export function useTopV4PoolsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TopV4PoolsDocument, options);
}
export const TopV3PoolsDocument = gql `
    query TopV3Pools($chain: Chain!, $first: Int!, $cursor: Float, $tokenAddress: String) {
  topV3Pools(
    first: $first
    chain: $chain
    tokenFilter: $tokenAddress
    tvlCursor: $cursor
  ) {
    id
    protocolVersion
    address
    totalLiquidity {
      value
    }
    feeTier
    token0 {
      ...SimpleTokenDetails
    }
    token1 {
      ...SimpleTokenDetails
    }
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    volume30d: cumulativeVolume(duration: MONTH) {
      value
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}`;
/**
 * __useTopV3PoolsQuery__
 *
 * To run a query within a React component, call `useTopV3PoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopV3PoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopV3PoolsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *      tokenAddress: // value for 'tokenAddress'
 *   },
 * });
 */
export function useTopV3PoolsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TopV3PoolsDocument, options);
}
export function useTopV3PoolsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TopV3PoolsDocument, options);
}
export const TopV2PairsDocument = gql `
    query TopV2Pairs($chain: Chain!, $first: Int!, $cursor: Float, $tokenAddress: String) {
  topV2Pairs(
    first: $first
    chain: $chain
    tokenFilter: $tokenAddress
    tvlCursor: $cursor
  ) {
    id
    protocolVersion
    address
    totalLiquidity {
      value
    }
    token0 {
      ...SimpleTokenDetails
    }
    token1 {
      ...SimpleTokenDetails
    }
    txCount
    volume24h: cumulativeVolume(duration: DAY) {
      value
    }
    volume30d: cumulativeVolume(duration: MONTH) {
      value
    }
  }
}
    ${SimpleTokenDetailsFragmentDoc}`;
/**
 * __useTopV2PairsQuery__
 *
 * To run a query within a React component, call `useTopV2PairsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopV2PairsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopV2PairsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *      tokenAddress: // value for 'tokenAddress'
 *   },
 * });
 */
export function useTopV2PairsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(TopV2PairsDocument, options);
}
export function useTopV2PairsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(TopV2PairsDocument, options);
}
export const V4TransactionsDocument = gql `
    query V4Transactions($chain: Chain!, $first: Int!, $cursor: Int) {
  v4Transactions(chain: $chain, first: $first, timestampCursor: $cursor) {
    ...PoolTx
  }
}
    ${PoolTxFragmentDoc}`;
/**
 * __useV4TransactionsQuery__
 *
 * To run a query within a React component, call `useV4TransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV4TransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV4TransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV4TransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V4TransactionsDocument, options);
}
export function useV4TransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V4TransactionsDocument, options);
}
export const V3TransactionsDocument = gql `
    query V3Transactions($chain: Chain!, $first: Int!, $cursor: Int) {
  v3Transactions(chain: $chain, first: $first, timestampCursor: $cursor) {
    ...PoolTx
  }
}
    ${PoolTxFragmentDoc}`;
/**
 * __useV3TransactionsQuery__
 *
 * To run a query within a React component, call `useV3TransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV3TransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV3TransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV3TransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V3TransactionsDocument, options);
}
export function useV3TransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V3TransactionsDocument, options);
}
export const V2TransactionsDocument = gql `
    query V2Transactions($chain: Chain!, $first: Int!, $cursor: Int) {
  v2Transactions(chain: $chain, first: $first, timestampCursor: $cursor) {
    ...PoolTx
  }
}
    ${PoolTxFragmentDoc}`;
/**
 * __useV2TransactionsQuery__
 *
 * To run a query within a React component, call `useV2TransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useV2TransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useV2TransactionsQuery({
 *   variables: {
 *      chain: // value for 'chain'
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useV2TransactionsQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(V2TransactionsDocument, options);
}
export function useV2TransactionsLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(V2TransactionsDocument, options);
}
//# sourceMappingURL=types-and-hooks.js.map