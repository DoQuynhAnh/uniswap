import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * The `AWSJSON` scalar type provided by AWS AppSync, represents a JSON string that
     * complies with [RFC 8259](https://tools.ietf.org/html/rfc8259).  Maps like
     * "**{\\"upvotes\\": 10}**", lists like "**[1,2,3]**", and scalar values like
     * "**\\"AWSJSON example string\\"**", "**1**", and "**true**" are accepted as
     * valid JSON and will automatically be parsed and loaded in the resolver mapping
     * templates as Maps, Lists, or Scalar values rather than as the literal input
     * strings.  Invalid JSON strings like "**{a: 1}**", "**{'a': 1}**" and "**Unquoted
     * string**" will throw GraphQL validation errors.
     */
    AWSJSON: any;
};
/**
 *  Types, unions, and inputs (alphabetized):
 * These are colocated to highlight the relationship between some types and their inputs.
 */
export type ActivityDetails = OffRampTransactionDetails | OnRampTransactionDetails | SwapOrderDetails | TransactionDetails;
export type ActivityDetailsInput = {
    offRampTransactionDetails?: InputMaybe<OffRampTransactionDetailsInput>;
    onRampTransactionDetails?: InputMaybe<OnRampTransactionDetailsInput>;
    swapOrderDetails?: InputMaybe<SwapOrderDetailsInput>;
    transactionDetails?: InputMaybe<TransactionDetailsInput>;
};
/**
 *  Enums (alphabetized):
 * deprecated and replaced with TransactionType, please do not use this
 */
export declare enum ActivityType {
    Approve = "APPROVE",
    Borrow = "BORROW",
    Burn = "BURN",
    Cancel = "CANCEL",
    Claim = "CLAIM",
    Deployment = "DEPLOYMENT",
    Lend = "LEND",
    Mint = "MINT",
    Nft = "NFT",
    OffRamp = "OFF_RAMP",
    OnRamp = "ON_RAMP",
    Receive = "RECEIVE",
    Repay = "REPAY",
    Send = "SEND",
    Stake = "STAKE",
    Swap = "SWAP",
    SwapOrder = "SWAP_ORDER",
    Staking = "Staking",
    Unknown = "UNKNOWN",
    Unstake = "UNSTAKE",
    Withdraw = "WITHDRAW",
    Market = "market",
    Money = "money"
}
export type Amount = IAmount & {
    __typename?: 'Amount';
    currency?: Maybe<Currency>;
    id: Scalars['ID'];
    value: Scalars['Float'];
};
export type AmountChange = {
    __typename?: 'AmountChange';
    absolute?: Maybe<Amount>;
    id: Scalars['ID'];
    percentage?: Maybe<Amount>;
};
export type AmountInput = {
    currency?: InputMaybe<Currency>;
    value: Scalars['Float'];
};
export type ApplicationContract = IContract & {
    __typename?: 'ApplicationContract';
    address: Scalars['String'];
    chain: Chain;
    icon?: Maybe<Image>;
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export type ApplicationContractInput = {
    address: Scalars['String'];
    chain: Chain;
    icon?: InputMaybe<ImageInput>;
    name?: InputMaybe<Scalars['String']>;
};
export type AssetActivity = {
    __typename?: 'AssetActivity';
    addresses?: Maybe<Array<Scalars['String']>>;
    /** @deprecated use assetChanges field in details */
    assetChanges: Array<Maybe<AssetChange>>;
    chain: Chain;
    details: ActivityDetails;
    /** @deprecated not required, remove usage */
    gasUsed?: Maybe<Scalars['Float']>;
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    /** @deprecated use fields from details */
    transaction: Transaction;
    /** @deprecated use type field in details */
    type: ActivityType;
};
export type AssetActivityInput = {
    chain: Chain;
    details: ActivityDetailsInput;
    timestamp: Scalars['Int'];
};
export declare enum AssetActivitySwitch {
    Alternate = "ALTERNATE",
    Legacy = "LEGACY"
}
export type AssetChange = NftApproval | NftApproveForAll | NftTransfer | OffRampTransfer | OnRampTransfer | TokenApproval | TokenTransfer;
export type AssetChangeInput = {
    nftApproval?: InputMaybe<NftApprovalInput>;
    nftApproveForAll?: InputMaybe<NftApproveForAllInput>;
    nftTransfer?: InputMaybe<NftTransferInput>;
    offRampTransfer?: InputMaybe<OffRampTransferInput>;
    onRampTransfer?: InputMaybe<OnRampTransferInput>;
    tokenApproval?: InputMaybe<TokenApprovalInput>;
    tokenTransfer?: InputMaybe<TokenTransferInput>;
};
export type BlockaidFees = {
    __typename?: 'BlockaidFees';
    buy?: Maybe<Scalars['Float']>;
    sell?: Maybe<Scalars['Float']>;
    transfer?: Maybe<Scalars['Float']>;
};
export declare enum Chain {
    Arbitrum = "ARBITRUM",
    ArbitrumSepolia = "ARBITRUM_SEPOLIA",
    AstrochainSepolia = "ASTROCHAIN_SEPOLIA",
    Avalanche = "AVALANCHE",
    Base = "BASE",
    BaseSepolia = "BASE_SEPOLIA",
    Blast = "BLAST",
    Bnb = "BNB",
    Celo = "CELO",
    Ethereum = "ETHEREUM",
    EthereumGoerli = "ETHEREUM_GOERLI",
    EthereumSepolia = "ETHEREUM_SEPOLIA",
    MonadTestnet = "MONAD_TESTNET",
    Optimism = "OPTIMISM",
    Polygon = "POLYGON",
    Soneium = "SONEIUM",
    Unichain = "UNICHAIN",
    UnknownChain = "UNKNOWN_CHAIN",
    Worldchain = "WORLDCHAIN",
    Zksync = "ZKSYNC",
    Zora = "ZORA"
}
export declare enum CollectionSortableField {
    Volume = "VOLUME"
}
export type ContractInput = {
    address?: InputMaybe<Scalars['String']>;
    chain: Chain;
};
export declare enum Currency {
    Ars = "ARS",
    Aud = "AUD",
    Brl = "BRL",
    Cad = "CAD",
    Cny = "CNY",
    Cop = "COP",
    Eth = "ETH",
    Eur = "EUR",
    Gbp = "GBP",
    Hkd = "HKD",
    Idr = "IDR",
    Inr = "INR",
    Jpy = "JPY",
    Krw = "KRW",
    Matic = "MATIC",
    Mxn = "MXN",
    Ngn = "NGN",
    Pkr = "PKR",
    Rub = "RUB",
    Sgd = "SGD",
    Thb = "THB",
    Try = "TRY",
    Uah = "UAH",
    Usd = "USD",
    Vnd = "VND"
}
export type CurrencyAmountInput = {
    currency: Currency;
    value: Scalars['Float'];
};
export type DescriptionTranslations = {
    __typename?: 'DescriptionTranslations';
    descriptionEnUs?: Maybe<Scalars['String']>;
    descriptionEs419?: Maybe<Scalars['String']>;
    descriptionEsEs?: Maybe<Scalars['String']>;
    descriptionEsUs?: Maybe<Scalars['String']>;
    descriptionFrFr?: Maybe<Scalars['String']>;
    descriptionHiIn?: Maybe<Scalars['String']>;
    descriptionIdId?: Maybe<Scalars['String']>;
    descriptionJaJp?: Maybe<Scalars['String']>;
    descriptionMsMy?: Maybe<Scalars['String']>;
    descriptionNlNl?: Maybe<Scalars['String']>;
    descriptionPtPt?: Maybe<Scalars['String']>;
    descriptionRuRu?: Maybe<Scalars['String']>;
    descriptionThTh?: Maybe<Scalars['String']>;
    descriptionTrTr?: Maybe<Scalars['String']>;
    descriptionUkUa?: Maybe<Scalars['String']>;
    descriptionUrPk?: Maybe<Scalars['String']>;
    descriptionViVn?: Maybe<Scalars['String']>;
    descriptionZhHans?: Maybe<Scalars['String']>;
    descriptionZhHant?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
};
export type Dimensions = {
    __typename?: 'Dimensions';
    height?: Maybe<Scalars['Float']>;
    id: Scalars['ID'];
    width?: Maybe<Scalars['Float']>;
};
export type DimensionsInput = {
    height?: InputMaybe<Scalars['Float']>;
    width?: InputMaybe<Scalars['Float']>;
};
export type FeeData = {
    __typename?: 'FeeData';
    buyFeeBps?: Maybe<Scalars['String']>;
    externalTransferFailed?: Maybe<Scalars['Boolean']>;
    feeTakenOnTransfer?: Maybe<Scalars['Boolean']>;
    sellFeeBps?: Maybe<Scalars['String']>;
    sellReverted?: Maybe<Scalars['Boolean']>;
};
export declare enum HighLow {
    High = "HIGH",
    Low = "LOW"
}
/**   FIVE_MINUTE is only supported for TokenMarket.pricePercentChange */
export declare enum HistoryDuration {
    Day = "DAY",
    FiveMinute = "FIVE_MINUTE",
    Hour = "HOUR",
    Max = "MAX",
    Month = "MONTH",
    Week = "WEEK",
    Year = "YEAR"
}
/**   Interfaces (alphabetized): */
export type IAmount = {
    currency?: Maybe<Currency>;
    value: Scalars['Float'];
};
export type IContract = {
    address?: Maybe<Scalars['String']>;
    chain: Chain;
};
export type IPool = {
    address: Scalars['String'];
    chain: Chain;
    createdAtTimestamp?: Maybe<Scalars['Int']>;
    cumulativeVolume?: Maybe<Amount>;
    historicalVolume?: Maybe<Array<Maybe<TimestampedAmount>>>;
    id: Scalars['ID'];
    priceHistory?: Maybe<Array<Maybe<TimestampedPoolPrice>>>;
    protocolVersion: ProtocolVersion;
    token0?: Maybe<Token>;
    token0Supply?: Maybe<Scalars['Float']>;
    token1?: Maybe<Token>;
    token1Supply?: Maybe<Scalars['Float']>;
    totalLiquidity?: Maybe<Amount>;
    totalLiquidityPercentChange24h?: Maybe<Amount>;
    transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
    txCount?: Maybe<Scalars['Int']>;
};
export type IPoolCumulativeVolumeArgs = {
    duration: HistoryDuration;
};
export type IPoolHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type IPoolPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type IPoolTransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type Image = {
    __typename?: 'Image';
    dimensions?: Maybe<Dimensions>;
    id: Scalars['ID'];
    url: Scalars['String'];
};
export type ImageInput = {
    dimensions?: InputMaybe<DimensionsInput>;
    url: Scalars['String'];
};
export declare enum MediaType {
    Audio = "AUDIO",
    Image = "IMAGE",
    Raw = "RAW",
    Video = "VIDEO"
}
export type Mutation = {
    __typename?: 'Mutation';
    assetActivity: AssetActivity;
    heartbeat: Status;
    unsubscribe: Status;
};
export type MutationAssetActivityArgs = {
    input: AssetActivityInput;
};
export type MutationHeartbeatArgs = {
    subscriptionId: Scalars['ID'];
    type: SubscriptionType;
};
export type MutationUnsubscribeArgs = {
    subscriptionId: Scalars['ID'];
    type: SubscriptionType;
};
export type NetworkFee = {
    __typename?: 'NetworkFee';
    quantity?: Maybe<Scalars['String']>;
    tokenAddress?: Maybe<Scalars['String']>;
    tokenChain?: Maybe<Scalars['String']>;
    tokenSymbol?: Maybe<Scalars['String']>;
};
export type NftActivity = {
    __typename?: 'NftActivity';
    address: Scalars['String'];
    asset?: Maybe<NftAsset>;
    fromAddress: Scalars['String'];
    id: Scalars['ID'];
    marketplace?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<OrderStatus>;
    price?: Maybe<Amount>;
    quantity?: Maybe<Scalars['Int']>;
    timestamp: Scalars['Int'];
    toAddress?: Maybe<Scalars['String']>;
    tokenId?: Maybe<Scalars['String']>;
    transactionHash?: Maybe<Scalars['String']>;
    type: NftActivityType;
    url?: Maybe<Scalars['String']>;
};
export type NftActivityConnection = {
    __typename?: 'NftActivityConnection';
    edges: Array<NftActivityEdge>;
    pageInfo: PageInfo;
};
export type NftActivityEdge = {
    __typename?: 'NftActivityEdge';
    cursor: Scalars['String'];
    node: NftActivity;
};
export type NftActivityFilterInput = {
    activityTypes?: InputMaybe<Array<NftActivityType>>;
    address?: InputMaybe<Scalars['String']>;
    tokenId?: InputMaybe<Scalars['String']>;
};
export declare enum NftActivityType {
    CancelListing = "CANCEL_LISTING",
    Listing = "LISTING",
    Sale = "SALE",
    Transfer = "TRANSFER"
}
export type NftApproval = {
    __typename?: 'NftApproval';
    approvedAddress: Scalars['String'];
    /**   can be erc721, erc1155, noncompliant */
    asset: NftAsset;
    id: Scalars['ID'];
    nftStandard: NftStandard;
};
export type NftApprovalInput = {
    approvedAddress: Scalars['String'];
    asset: NftAssetInput;
    nftStandard: NftStandard;
};
export type NftApproveForAll = {
    __typename?: 'NftApproveForAll';
    approved: Scalars['Boolean'];
    /**   can be erc721, erc1155, noncompliant */
    asset: NftAsset;
    id: Scalars['ID'];
    nftStandard: NftStandard;
    operatorAddress: Scalars['String'];
};
export type NftApproveForAllInput = {
    approved: Scalars['Boolean'];
    asset: NftAssetInput;
    nftStandard: NftStandard;
    operatorAddress: Scalars['String'];
};
export type NftAsset = {
    __typename?: 'NftAsset';
    animationUrl?: Maybe<Scalars['String']>;
    chain?: Maybe<Chain>;
    collection?: Maybe<NftCollection>;
    creator?: Maybe<NftProfile>;
    description?: Maybe<Scalars['String']>;
    flaggedBy?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    image?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    imageUrl?: Maybe<Scalars['String']>;
    isSpam?: Maybe<Scalars['Boolean']>;
    listings?: Maybe<NftOrderConnection>;
    mediaType?: Maybe<MediaType>;
    metadataUrl?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    nftContract?: Maybe<NftContract>;
    originalImage?: Maybe<Image>;
    /**   TODO: may need to be array to support erc1155 cases. not needed at the moment so will revisit. */
    ownerAddress?: Maybe<Scalars['String']>;
    protectionInfo?: Maybe<ProtectionInfo>;
    rarities?: Maybe<Array<NftAssetRarity>>;
    smallImage?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    smallImageUrl?: Maybe<Scalars['String']>;
    suspiciousFlag?: Maybe<Scalars['Boolean']>;
    thumbnail?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    thumbnailUrl?: Maybe<Scalars['String']>;
    tokenId: Scalars['String'];
    traits?: Maybe<Array<NftAssetTrait>>;
};
export type NftAssetListingsArgs = {
    after?: InputMaybe<Scalars['String']>;
    asc?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
};
export type NftAssetConnection = {
    __typename?: 'NftAssetConnection';
    edges: Array<NftAssetEdge>;
    pageInfo: PageInfo;
    totalCount?: Maybe<Scalars['Int']>;
};
export type NftAssetEdge = {
    __typename?: 'NftAssetEdge';
    cursor: Scalars['String'];
    node: NftAsset;
};
export type NftAssetInput = {
    animationUrl?: InputMaybe<Scalars['String']>;
    collection?: InputMaybe<NftCollectionInput>;
    description?: InputMaybe<Scalars['String']>;
    image?: InputMaybe<ImageInput>;
    isSpam?: InputMaybe<Scalars['Boolean']>;
    mediaType?: InputMaybe<MediaType>;
    name?: InputMaybe<Scalars['String']>;
    nftContract?: InputMaybe<NftContractInput>;
    smallImage?: InputMaybe<ImageInput>;
    thumbnail?: InputMaybe<ImageInput>;
    tokenId: Scalars['String'];
};
export type NftAssetRarity = {
    __typename?: 'NftAssetRarity';
    id: Scalars['ID'];
    provider?: Maybe<NftRarityProvider>;
    rank?: Maybe<Scalars['Int']>;
    score?: Maybe<Scalars['Float']>;
};
export declare enum NftAssetSortableField {
    Price = "PRICE",
    Rarity = "RARITY"
}
export type NftAssetTrait = {
    __typename?: 'NftAssetTrait';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    rarity?: Maybe<Scalars['Float']>;
    value?: Maybe<Scalars['String']>;
};
export type NftAssetTraitInput = {
    name: Scalars['String'];
    values: Array<Scalars['String']>;
};
export type NftAssetsFilterInput = {
    listed?: InputMaybe<Scalars['Boolean']>;
    marketplaces?: InputMaybe<Array<NftMarketplace>>;
    maxPrice?: InputMaybe<Scalars['String']>;
    minPrice?: InputMaybe<Scalars['String']>;
    tokenIds?: InputMaybe<Array<Scalars['String']>>;
    tokenSearchQuery?: InputMaybe<Scalars['String']>;
    traits?: InputMaybe<Array<NftAssetTraitInput>>;
};
export type NftBalance = {
    __typename?: 'NftBalance';
    id: Scalars['ID'];
    lastPrice?: Maybe<TimestampedAmount>;
    listedMarketplaces?: Maybe<Array<NftMarketplace>>;
    listingFees?: Maybe<Array<Maybe<NftFee>>>;
    ownedAsset?: Maybe<NftAsset>;
    quantity?: Maybe<Scalars['Int']>;
};
export type NftBalanceAssetInput = {
    address: Scalars['String'];
    tokenId: Scalars['String'];
};
export type NftBalanceConnection = {
    __typename?: 'NftBalanceConnection';
    edges: Array<NftBalanceEdge>;
    pageInfo: PageInfo;
};
export type NftBalanceEdge = {
    __typename?: 'NftBalanceEdge';
    cursor: Scalars['String'];
    node: NftBalance;
};
export type NftBalancesFilterInput = {
    addresses?: InputMaybe<Array<Scalars['String']>>;
    assets?: InputMaybe<Array<NftBalanceAssetInput>>;
    filterSpam?: InputMaybe<Scalars['Boolean']>;
};
export type NftCollection = {
    __typename?: 'NftCollection';
    bannerImage?: Maybe<Image>;
    /**
     *  TODO: support querying for collection assets here
     * assets(page: Int, pageSize: Int, orderBy: NftAssetSortableField): [NftAsset]
     * @deprecated Field no longer supported
     */
    bannerImageUrl?: Maybe<Scalars['String']>;
    collectionId: Scalars['String'];
    creator?: Maybe<NftProfile>;
    description?: Maybe<Scalars['String']>;
    discordUrl?: Maybe<Scalars['String']>;
    homepageUrl?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    image?: Maybe<Image>;
    /** @deprecated Field no longer supported */
    imageUrl?: Maybe<Scalars['String']>;
    instagramName?: Maybe<Scalars['String']>;
    isVerified?: Maybe<Scalars['Boolean']>;
    markets?: Maybe<Array<NftCollectionMarket>>;
    name?: Maybe<Scalars['String']>;
    nftContracts?: Maybe<Array<NftContract>>;
    numAssets?: Maybe<Scalars['Int']>;
    /** @deprecated Field no longer supported */
    openseaUrl?: Maybe<Scalars['String']>;
    traits?: Maybe<Array<NftCollectionTrait>>;
    twitterName?: Maybe<Scalars['String']>;
};
export type NftCollectionMarketsArgs = {
    currencies: Array<Currency>;
};
export type NftCollectionBalance = {
    __typename?: 'NftCollectionBalance';
    address: Scalars['String'];
    balance: Scalars['Float'];
    id: Scalars['ID'];
    logoImage?: Maybe<Image>;
    name: Scalars['String'];
};
export type NftCollectionBalanceConnection = {
    __typename?: 'NftCollectionBalanceConnection';
    edges: Array<NftCollectionBalanceEdge>;
    pageInfo: PageInfo;
};
export type NftCollectionBalanceEdge = {
    __typename?: 'NftCollectionBalanceEdge';
    cursor: Scalars['String'];
    node: NftCollectionBalance;
};
export type NftCollectionConnection = {
    __typename?: 'NftCollectionConnection';
    edges: Array<NftCollectionEdge>;
    pageInfo: PageInfo;
};
export type NftCollectionEdge = {
    __typename?: 'NftCollectionEdge';
    cursor: Scalars['String'];
    node: NftCollection;
};
export type NftCollectionInput = {
    collectionId: Scalars['String'];
    name?: InputMaybe<Scalars['String']>;
    nftContracts?: InputMaybe<Array<NftContractInput>>;
};
export type NftCollectionMarket = {
    __typename?: 'NftCollectionMarket';
    floorPrice?: Maybe<TimestampedAmount>;
    floorPricePercentChange?: Maybe<TimestampedAmount>;
    id: Scalars['ID'];
    listings?: Maybe<TimestampedAmount>;
    marketplaces?: Maybe<Array<NftCollectionMarketplace>>;
    nftContracts?: Maybe<Array<NftContract>>;
    owners?: Maybe<Scalars['Int']>;
    percentListed?: Maybe<TimestampedAmount>;
    percentUniqueOwners?: Maybe<TimestampedAmount>;
    sales?: Maybe<TimestampedAmount>;
    totalVolume?: Maybe<TimestampedAmount>;
    volume?: Maybe<TimestampedAmount>;
    /** @deprecated Field no longer supported */
    volume24h?: Maybe<Amount>;
    volumePercentChange?: Maybe<TimestampedAmount>;
};
export type NftCollectionMarketFloorPricePercentChangeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketMarketplacesArgs = {
    marketplaces?: InputMaybe<Array<NftMarketplace>>;
};
export type NftCollectionMarketSalesArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketVolumeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketVolumePercentChangeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
export type NftCollectionMarketplace = {
    __typename?: 'NftCollectionMarketplace';
    floorPrice?: Maybe<Scalars['Float']>;
    id: Scalars['ID'];
    listings?: Maybe<Scalars['Int']>;
    marketplace?: Maybe<NftMarketplace>;
};
export type NftCollectionTrait = {
    __typename?: 'NftCollectionTrait';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    stats?: Maybe<Array<NftCollectionTraitStats>>;
    values?: Maybe<Array<Scalars['String']>>;
};
export type NftCollectionTraitStats = {
    __typename?: 'NftCollectionTraitStats';
    assets?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    listings?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
};
export type NftCollectionsFilterInput = {
    addresses?: InputMaybe<Array<Scalars['String']>>;
    nameQuery?: InputMaybe<Scalars['String']>;
};
export type NftContract = IContract & {
    __typename?: 'NftContract';
    address: Scalars['String'];
    chain: Chain;
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    standard?: Maybe<NftStandard>;
    symbol?: Maybe<Scalars['String']>;
    totalSupply?: Maybe<Scalars['Int']>;
};
export type NftContractInput = {
    address: Scalars['String'];
    chain: Chain;
    name?: InputMaybe<Scalars['String']>;
    standard?: InputMaybe<NftStandard>;
    symbol?: InputMaybe<Scalars['String']>;
    totalSupply?: InputMaybe<Scalars['Int']>;
};
export type NftFee = {
    __typename?: 'NftFee';
    basisPoints: Scalars['Int'];
    id: Scalars['ID'];
    payoutAddress: Scalars['String'];
};
export declare enum NftMarketplace {
    Cryptopunks = "CRYPTOPUNKS",
    Foundation = "FOUNDATION",
    Looksrare = "LOOKSRARE",
    Nft20 = "NFT20",
    Nftx = "NFTX",
    Opensea = "OPENSEA",
    Sudoswap = "SUDOSWAP",
    X2Y2 = "X2Y2"
}
export type NftOrder = {
    __typename?: 'NftOrder';
    address: Scalars['String'];
    auctionType?: Maybe<Scalars['String']>;
    createdAt: Scalars['Float'];
    endAt?: Maybe<Scalars['Float']>;
    id: Scalars['ID'];
    maker: Scalars['String'];
    marketplace: NftMarketplace;
    marketplaceUrl: Scalars['String'];
    orderHash?: Maybe<Scalars['String']>;
    poolPrices?: Maybe<Array<Scalars['String']>>;
    price: Amount;
    protocolParameters?: Maybe<Scalars['AWSJSON']>;
    quantity: Scalars['Int'];
    startAt: Scalars['Float'];
    status: OrderStatus;
    taker?: Maybe<Scalars['String']>;
    tokenId?: Maybe<Scalars['String']>;
    type: OrderType;
};
export type NftOrderConnection = {
    __typename?: 'NftOrderConnection';
    edges: Array<NftOrderEdge>;
    pageInfo: PageInfo;
};
export type NftOrderEdge = {
    __typename?: 'NftOrderEdge';
    cursor: Scalars['String'];
    node: NftOrder;
};
export type NftProfile = {
    __typename?: 'NftProfile';
    address: Scalars['String'];
    id: Scalars['ID'];
    isVerified?: Maybe<Scalars['Boolean']>;
    profileImage?: Maybe<Image>;
    username?: Maybe<Scalars['String']>;
};
export declare enum NftRarityProvider {
    RaritySniper = "RARITY_SNIPER"
}
export type NftRouteResponse = {
    __typename?: 'NftRouteResponse';
    calldata: Scalars['String'];
    id: Scalars['ID'];
    route?: Maybe<Array<NftTrade>>;
    sendAmount: TokenAmount;
    toAddress: Scalars['String'];
};
export declare enum NftStandard {
    Erc721 = "ERC721",
    Erc1155 = "ERC1155",
    Noncompliant = "NONCOMPLIANT"
}
export type NftTrade = {
    __typename?: 'NftTrade';
    amount: Scalars['Int'];
    contractAddress: Scalars['String'];
    id: Scalars['ID'];
    marketplace: NftMarketplace;
    /**   price represents the current price of the NFT, which can be different from quotePrice */
    price: TokenAmount;
    /**   quotePrice represents the last quoted price of the NFT */
    quotePrice?: Maybe<TokenAmount>;
    tokenId: Scalars['String'];
    tokenType?: Maybe<NftStandard>;
};
export type NftTradeInput = {
    amount: Scalars['Int'];
    contractAddress: Scalars['String'];
    id: Scalars['ID'];
    marketplace: NftMarketplace;
    quotePrice?: InputMaybe<TokenAmountInput>;
    tokenId: Scalars['String'];
    tokenType?: InputMaybe<NftStandard>;
};
export type NftTransfer = {
    __typename?: 'NftTransfer';
    asset: NftAsset;
    direction: TransactionDirection;
    id: Scalars['ID'];
    nftStandard: NftStandard;
    recipient: Scalars['String'];
    sender: Scalars['String'];
};
export type NftTransferInput = {
    asset: NftAssetInput;
    direction: TransactionDirection;
    nftStandard: NftStandard;
    recipient: Scalars['String'];
    sender: Scalars['String'];
};
export type OffRampServiceProvider = {
    __typename?: 'OffRampServiceProvider';
    id: Scalars['ID'];
    logoDarkUrl: Scalars['String'];
    logoLightUrl: Scalars['String'];
    name: Scalars['String'];
    serviceProvider: Scalars['String'];
    supportUrl?: Maybe<Scalars['String']>;
    url: Scalars['String'];
};
export type OffRampServiceProviderInput = {
    logoDarkUrl: Scalars['String'];
    logoLightUrl: Scalars['String'];
    name: Scalars['String'];
    serviceProvider: Scalars['String'];
    supportUrl?: InputMaybe<Scalars['String']>;
    url: Scalars['String'];
};
export type OffRampTransactionDetails = {
    __typename?: 'OffRampTransactionDetails';
    id: Scalars['ID'];
    offRampTransfer: OffRampTransfer;
    senderAddress: Scalars['String'];
    status: TransactionStatus;
};
export type OffRampTransactionDetailsInput = {
    offRampTransfer: OffRampTransferInput;
    senderAddress: Scalars['String'];
    status: TransactionStatus;
};
export type OffRampTransfer = {
    __typename?: 'OffRampTransfer';
    amount: Scalars['Float'];
    destinationAmount: Scalars['Float'];
    destinationCurrency?: Maybe<Scalars['String']>;
    externalSessionId: Scalars['String'];
    id: Scalars['ID'];
    networkFee?: Maybe<Scalars['Float']>;
    serviceProvider: OffRampServiceProvider;
    token: Token;
    tokenStandard: TokenStandard;
    totalFee?: Maybe<Scalars['Float']>;
    transactionFee?: Maybe<Scalars['Float']>;
    transactionReferenceId: Scalars['String'];
};
export type OffRampTransferInput = {
    amount: Scalars['Float'];
    destinationAmount: Scalars['Float'];
    destinationCurrency?: InputMaybe<Scalars['String']>;
    networkFee?: InputMaybe<Scalars['Float']>;
    serviceProvider: OffRampServiceProviderInput;
    token: TokenAssetInput;
    tokenStandard: TokenStandard;
    totalFee?: InputMaybe<Scalars['Float']>;
    transactionFee?: InputMaybe<Scalars['Float']>;
    transactionReferenceId: Scalars['String'];
};
export type OnRampServiceProvider = {
    __typename?: 'OnRampServiceProvider';
    id: Scalars['ID'];
    logoDarkUrl: Scalars['String'];
    logoLightUrl: Scalars['String'];
    name: Scalars['String'];
    serviceProvider: Scalars['String'];
    supportUrl?: Maybe<Scalars['String']>;
    url: Scalars['String'];
};
export type OnRampServiceProviderInput = {
    logoDarkUrl: Scalars['String'];
    logoLightUrl: Scalars['String'];
    name: Scalars['String'];
    serviceProvider: Scalars['String'];
    supportUrl?: InputMaybe<Scalars['String']>;
    url: Scalars['String'];
};
export type OnRampTransactionDetails = {
    __typename?: 'OnRampTransactionDetails';
    id: Scalars['ID'];
    onRampTransfer: OnRampTransfer;
    receiverAddress: Scalars['String'];
    status: TransactionStatus;
};
export type OnRampTransactionDetailsInput = {
    onRampTransfer: OnRampTransferInput;
    receiverAddress: Scalars['String'];
    status: TransactionStatus;
};
export type OnRampTransactionsAuth = {
    queryParams: Scalars['String'];
    signature: Scalars['String'];
};
export type OnRampTransfer = {
    __typename?: 'OnRampTransfer';
    amount: Scalars['Float'];
    externalSessionId: Scalars['String'];
    id: Scalars['ID'];
    networkFee?: Maybe<Scalars['Float']>;
    serviceProvider: OnRampServiceProvider;
    sourceAmount: Scalars['Float'];
    sourceCurrency?: Maybe<Scalars['String']>;
    token: Token;
    tokenStandard: TokenStandard;
    totalFee?: Maybe<Scalars['Float']>;
    transactionFee?: Maybe<Scalars['Float']>;
    transactionReferenceId: Scalars['String'];
};
export type OnRampTransferInput = {
    amount: Scalars['Float'];
    networkFee?: InputMaybe<Scalars['Float']>;
    serviceProvider: OnRampServiceProviderInput;
    sourceAmount: Scalars['Float'];
    sourceCurrency?: InputMaybe<Scalars['String']>;
    token: TokenAssetInput;
    tokenStandard: TokenStandard;
    totalFee?: InputMaybe<Scalars['Float']>;
    transactionFee?: InputMaybe<Scalars['Float']>;
    transactionReferenceId: Scalars['String'];
};
export declare enum OrderStatus {
    Cancelled = "CANCELLED",
    Executed = "EXECUTED",
    Expired = "EXPIRED",
    Valid = "VALID"
}
export declare enum OrderType {
    Listing = "LISTING",
    Offer = "OFFER"
}
export type PageInfo = {
    __typename?: 'PageInfo';
    endCursor?: Maybe<Scalars['String']>;
    hasNextPage?: Maybe<Scalars['Boolean']>;
    hasPreviousPage?: Maybe<Scalars['Boolean']>;
    startCursor?: Maybe<Scalars['String']>;
};
/**   v2 pool parameters as defined by https://github.com/Uniswap/v2-sdk/blob/main/src/entities/pair.ts */
export type PairInput = {
    tokenAmountA: TokenAmountInput;
    tokenAmountB: TokenAmountInput;
};
export type PermitDetailsInput = {
    amount: Scalars['String'];
    expiration: Scalars['String'];
    nonce: Scalars['String'];
    token: Scalars['String'];
};
export type PermitInput = {
    details: PermitDetailsInput;
    sigDeadline: Scalars['String'];
    signature: Scalars['String'];
    spender: Scalars['String'];
};
/**   v3 pool parameters as defined by https://github.com/Uniswap/v3-sdk/blob/main/src/entities/pool.ts */
export type PoolInput = {
    fee: Scalars['Int'];
    liquidity: Scalars['String'];
    sqrtRatioX96: Scalars['String'];
    tickCurrent: Scalars['String'];
    tokenA: TokenInput;
    tokenB: TokenInput;
};
export type PoolTransaction = {
    __typename?: 'PoolTransaction';
    account: Scalars['String'];
    chain: Chain;
    hash: Scalars['String'];
    id: Scalars['ID'];
    protocolVersion: ProtocolVersion;
    timestamp: Scalars['Int'];
    token0: Token;
    token0Quantity: Scalars['String'];
    token1: Token;
    token1Quantity: Scalars['String'];
    type: PoolTransactionType;
    usdValue: Amount;
};
export declare enum PoolTransactionType {
    Add = "ADD",
    Remove = "REMOVE",
    Swap = "SWAP"
}
export type Portfolio = {
    __typename?: 'Portfolio';
    assetActivities?: Maybe<Array<Maybe<AssetActivity>>>;
    id: Scalars['ID'];
    /**   TODO: (michael.zhang) replace with paginated query */
    nftBalances?: Maybe<Array<Maybe<NftBalance>>>;
    ownerAddress: Scalars['String'];
    tokenBalances?: Maybe<Array<Maybe<TokenBalance>>>;
    tokensTotalDenominatedValue?: Maybe<Amount>;
    tokensTotalDenominatedValueChange?: Maybe<AmountChange>;
};
export type PortfolioAssetActivitiesArgs = {
    _fs?: InputMaybe<AssetActivitySwitch>;
    chains?: InputMaybe<Array<Chain>>;
    includeBridging?: InputMaybe<Scalars['Boolean']>;
    includeOffChain?: InputMaybe<Scalars['Boolean']>;
    onRampTransactionIDs?: InputMaybe<Array<Scalars['String']>>;
    onRampTransactionsAuth?: InputMaybe<OnRampTransactionsAuth>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};
export type PortfolioTokensTotalDenominatedValueChangeArgs = {
    duration?: InputMaybe<HistoryDuration>;
};
/**   Specify how the portfolio value should be calculated for each `ownerAddress`. */
export type PortfolioValueModifier = {
    includeSmallBalances?: InputMaybe<Scalars['Boolean']>;
    includeSpamTokens?: InputMaybe<Scalars['Boolean']>;
    ownerAddress: Scalars['String'];
    tokenBalancesLimit?: InputMaybe<Scalars['Int']>;
    tokenExcludeOverrides?: InputMaybe<Array<ContractInput>>;
    tokenIncludeOverrides?: InputMaybe<Array<ContractInput>>;
};
export declare enum PriceSource {
    SubgraphV2 = "SUBGRAPH_V2",
    SubgraphV3 = "SUBGRAPH_V3",
    SubgraphV4 = "SUBGRAPH_V4"
}
export declare enum ProtectionAttackType {
    AirdropPattern = "AIRDROP_PATTERN",
    DynamicAnalysis = "DYNAMIC_ANALYSIS",
    HighFees = "HIGH_FEES",
    Honeypot = "HONEYPOT",
    Impersonator = "IMPERSONATOR",
    InorganicVolume = "INORGANIC_VOLUME",
    KnownMalicious = "KNOWN_MALICIOUS",
    Metadata = "METADATA",
    Rugpull = "RUGPULL",
    StaticCodeSignature = "STATIC_CODE_SIGNATURE",
    Unknown = "UNKNOWN",
    UnstableTokenPrice = "UNSTABLE_TOKEN_PRICE"
}
export type ProtectionInfo = {
    __typename?: 'ProtectionInfo';
    attackTypes?: Maybe<Array<Maybe<ProtectionAttackType>>>;
    blockaidFees?: Maybe<BlockaidFees>;
    result?: Maybe<ProtectionResult>;
};
export declare enum ProtectionResult {
    Benign = "BENIGN",
    Malicious = "MALICIOUS",
    Spam = "SPAM",
    Unknown = "UNKNOWN",
    Warning = "WARNING"
}
export declare enum ProtocolVersion {
    V2 = "V2",
    V3 = "V3",
    V4 = "V4"
}
export type PushNotification = {
    __typename?: 'PushNotification';
    contents: Scalars['AWSJSON'];
    id: Scalars['ID'];
    notifyAddress: Scalars['String'];
    signerHeader: Scalars['AWSJSON'];
    viewerHeader: Scalars['AWSJSON'];
};
export type Query = {
    __typename?: 'Query';
    convert?: Maybe<Amount>;
    dailyProtocolTvl?: Maybe<Array<TimestampedAmount>>;
    historicalProtocolVolume?: Maybe<Array<TimestampedAmount>>;
    isV3SubgraphStale?: Maybe<Scalars['Boolean']>;
    nftActivity?: Maybe<NftActivityConnection>;
    nftAssets?: Maybe<NftAssetConnection>;
    nftBalances?: Maybe<NftBalanceConnection>;
    nftCollectionBalances?: Maybe<NftCollectionBalanceConnection>;
    nftCollections?: Maybe<NftCollectionConnection>;
    nftRoute?: Maybe<NftRouteResponse>;
    portfolios?: Maybe<Array<Maybe<Portfolio>>>;
    searchTokens?: Maybe<Array<Maybe<Token>>>;
    /**
     *  token consumes chain and address instead of contract because the apollo client request cache can only use
     * keys from the response, and the token response does not contain a contract, but does contain an unwrapped
     * contract: chain and address.
     */
    token?: Maybe<Token>;
    tokenProjects?: Maybe<Array<Maybe<TokenProject>>>;
    tokens?: Maybe<Array<Maybe<Token>>>;
    topCollections?: Maybe<NftCollectionConnection>;
    topTokens?: Maybe<Array<Maybe<Token>>>;
    /**   returns top v2 pairs sorted by total value locked in desc order */
    topV2Pairs?: Maybe<Array<V2Pair>>;
    /**   returns top v3 pools sorted by total value locked in desc order */
    topV3Pools?: Maybe<Array<V3Pool>>;
    topV4Pools?: Maybe<Array<V4Pool>>;
    transactionNotification?: Maybe<TransactionNotification>;
    v2Pair?: Maybe<V2Pair>;
    v2Transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
    v3Pool?: Maybe<V3Pool>;
    v3PoolsForTokenPair?: Maybe<Array<V3Pool>>;
    v3Transactions?: Maybe<Array<PoolTransaction>>;
    v4Pool?: Maybe<V4Pool>;
    v4PoolsForTokenPair?: Maybe<Array<V4Pool>>;
    v4Transactions?: Maybe<Array<PoolTransaction>>;
};
export type QueryConvertArgs = {
    fromAmount: CurrencyAmountInput;
    toCurrency: Currency;
};
export type QueryDailyProtocolTvlArgs = {
    chain: Chain;
    version: ProtocolVersion;
};
export type QueryHistoricalProtocolVolumeArgs = {
    chain: Chain;
    duration: HistoryDuration;
    version: ProtocolVersion;
};
export type QueryIsV3SubgraphStaleArgs = {
    chain: Chain;
};
export type QueryNftActivityArgs = {
    after?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    filter?: InputMaybe<NftActivityFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
};
export type QueryNftAssetsArgs = {
    address: Scalars['String'];
    after?: InputMaybe<Scalars['String']>;
    asc?: InputMaybe<Scalars['Boolean']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    filter?: InputMaybe<NftAssetsFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<NftAssetSortableField>;
};
export type QueryNftBalancesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    chains?: InputMaybe<Array<Chain>>;
    filter?: InputMaybe<NftBalancesFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    ownerAddress: Scalars['String'];
};
export type QueryNftCollectionBalancesArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    ownerAddress: Scalars['String'];
};
export type QueryNftCollectionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    chain?: InputMaybe<Chain>;
    filter?: InputMaybe<NftCollectionsFilterInput>;
    first?: InputMaybe<Scalars['Int']>;
};
export type QueryNftRouteArgs = {
    chain?: InputMaybe<Chain>;
    nftTrades: Array<NftTradeInput>;
    senderAddress: Scalars['String'];
    tokenTrades?: InputMaybe<Array<TokenTradeInput>>;
};
export type QueryPortfoliosArgs = {
    chains?: InputMaybe<Array<Chain>>;
    fungibleIds?: InputMaybe<Array<Scalars['String']>>;
    lookupTokens?: InputMaybe<Array<ContractInput>>;
    ownerAddresses: Array<Scalars['String']>;
    valueModifiers?: InputMaybe<Array<PortfolioValueModifier>>;
};
export type QuerySearchTokensArgs = {
    chains?: InputMaybe<Array<Chain>>;
    searchQuery: Scalars['String'];
    tokenSearchV2Enabled?: InputMaybe<Scalars['Boolean']>;
};
export type QueryTokenArgs = {
    address?: InputMaybe<Scalars['String']>;
    chain: Chain;
};
export type QueryTokenProjectsArgs = {
    contracts: Array<ContractInput>;
};
export type QueryTokensArgs = {
    contracts: Array<ContractInput>;
};
export type QueryTopCollectionsArgs = {
    after?: InputMaybe<Scalars['String']>;
    chains?: InputMaybe<Array<Chain>>;
    cursor?: InputMaybe<Scalars['String']>;
    duration?: InputMaybe<HistoryDuration>;
    first?: InputMaybe<Scalars['Int']>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CollectionSortableField>;
};
export type QueryTopTokensArgs = {
    chain?: InputMaybe<Chain>;
    orderBy?: InputMaybe<TokenSortableField>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
};
export type QueryTopV2PairsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    tokenFilter?: InputMaybe<Scalars['String']>;
    tvlCursor?: InputMaybe<Scalars['Float']>;
};
export type QueryTopV3PoolsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    tokenFilter?: InputMaybe<Scalars['String']>;
    tvlCursor?: InputMaybe<Scalars['Float']>;
};
export type QueryTopV4PoolsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    tokenFilter?: InputMaybe<Scalars['String']>;
    tvlCursor?: InputMaybe<Scalars['Float']>;
};
export type QueryTransactionNotificationArgs = {
    address: Scalars['String'];
    chain: Chain;
    isBridging?: InputMaybe<Scalars['Boolean']>;
    transactionHash: Scalars['String'];
};
export type QueryV2PairArgs = {
    address: Scalars['String'];
    chain: Chain;
};
export type QueryV2TransactionsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type QueryV3PoolArgs = {
    address: Scalars['String'];
    chain: Chain;
};
export type QueryV3PoolsForTokenPairArgs = {
    chain: Chain;
    token0: Scalars['String'];
    token1: Scalars['String'];
};
export type QueryV3TransactionsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type QueryV4PoolArgs = {
    chain: Chain;
    poolId: Scalars['String'];
};
export type QueryV4PoolsForTokenPairArgs = {
    chain: Chain;
    token0: Scalars['String'];
    token1: Scalars['String'];
};
export type QueryV4TransactionsArgs = {
    chain: Chain;
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type RewardsCampaign = {
    __typename?: 'RewardsCampaign';
    boostedApr: Scalars['Float'];
    distributedRewards?: Maybe<Scalars['String']>;
    endTimestamp?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    startTimestamp?: Maybe<Scalars['Int']>;
    totalRewardAllocation?: Maybe<Scalars['String']>;
};
export declare enum SafetyLevel {
    Blocked = "BLOCKED",
    MediumWarning = "MEDIUM_WARNING",
    StrongWarning = "STRONG_WARNING",
    Verified = "VERIFIED"
}
export type Status = {
    __typename?: 'Status';
    success: Scalars['Boolean'];
};
export type Subscription = {
    __typename?: 'Subscription';
    onAssetActivity?: Maybe<AssetActivity>;
};
export type SubscriptionOnAssetActivityArgs = {
    addresses: Array<Scalars['String']>;
    subscriptionId: Scalars['ID'];
};
export declare enum SubscriptionType {
    AssetActivity = "ASSET_ACTIVITY"
}
export type SwapOrderDetails = {
    __typename?: 'SwapOrderDetails';
    encodedOrder: Scalars['String'];
    expiry: Scalars['Int'];
    hash: Scalars['String'];
    id: Scalars['ID'];
    inputToken: Token;
    inputTokenQuantity: Scalars['String'];
    offerer: Scalars['String'];
    outputToken: Token;
    outputTokenQuantity: Scalars['String'];
    /** @deprecated use swapOrderStatus to disambiguate from transactionStatus */
    status: SwapOrderStatus;
    swapOrderStatus: SwapOrderStatus;
    swapOrderType: SwapOrderType;
};
export type SwapOrderDetailsInput = {
    encodedOrder: Scalars['String'];
    expiry: Scalars['Int'];
    hash: Scalars['String'];
    inputAmount: Scalars['String'];
    inputToken: TokenAssetInput;
    offerer: Scalars['String'];
    outputAmount: Scalars['String'];
    outputToken: TokenAssetInput;
    status?: InputMaybe<SwapOrderStatus>;
    swapOrderStatus: SwapOrderStatus;
    swapOrderType: SwapOrderType;
};
export declare enum SwapOrderStatus {
    Cancelled = "CANCELLED",
    Error = "ERROR",
    Expired = "EXPIRED",
    Filled = "FILLED",
    InsufficientFunds = "INSUFFICIENT_FUNDS",
    Open = "OPEN"
}
export declare enum SwapOrderType {
    Dutch = "DUTCH",
    DutchV2 = "DUTCH_V2",
    Limit = "LIMIT",
    Priority = "PRIORITY"
}
export type TimestampedAmount = IAmount & {
    __typename?: 'TimestampedAmount';
    currency?: Maybe<Currency>;
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    value: Scalars['Float'];
};
export type TimestampedOhlc = {
    __typename?: 'TimestampedOhlc';
    close: Amount;
    high: Amount;
    id: Scalars['ID'];
    low: Amount;
    open: Amount;
    timestamp: Scalars['Int'];
};
export type TimestampedPoolPrice = {
    __typename?: 'TimestampedPoolPrice';
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    token0Price: Scalars['Float'];
    token1Price: Scalars['Float'];
};
export type Token = IContract & {
    __typename?: 'Token';
    address?: Maybe<Scalars['String']>;
    chain: Chain;
    decimals?: Maybe<Scalars['Int']>;
    feeData?: Maybe<FeeData>;
    id: Scalars['ID'];
    market?: Maybe<TokenMarket>;
    name?: Maybe<Scalars['String']>;
    project?: Maybe<TokenProject>;
    protectionInfo?: Maybe<ProtectionInfo>;
    standard?: Maybe<TokenStandard>;
    symbol?: Maybe<Scalars['String']>;
    v2Transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
    v3Transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
    v4Transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
};
export type TokenMarketArgs = {
    currency?: InputMaybe<Currency>;
};
export type TokenV2TransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type TokenV3TransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type TokenV4TransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type TokenAmount = {
    __typename?: 'TokenAmount';
    currency: Currency;
    id: Scalars['ID'];
    value: Scalars['String'];
};
export type TokenAmountInput = {
    amount: Scalars['String'];
    token: TokenInput;
};
export type TokenApproval = {
    __typename?: 'TokenApproval';
    approvedAddress: Scalars['String'];
    /**   can be erc20 or native */
    asset: Token;
    id: Scalars['ID'];
    quantity: Scalars['String'];
    tokenStandard: TokenStandard;
};
export type TokenApprovalInput = {
    approvedAddress: Scalars['String'];
    asset: TokenAssetInput;
    quantity: Scalars['String'];
    tokenStandard: TokenStandard;
};
export type TokenAssetInput = {
    address?: InputMaybe<Scalars['String']>;
    chain: Chain;
    decimals?: InputMaybe<Scalars['Int']>;
    name?: InputMaybe<Scalars['String']>;
    standard: TokenStandard;
    symbol?: InputMaybe<Scalars['String']>;
};
export type TokenBalance = {
    __typename?: 'TokenBalance';
    blockNumber?: Maybe<Scalars['Int']>;
    blockTimestamp?: Maybe<Scalars['Int']>;
    denominatedValue?: Maybe<Amount>;
    id: Scalars['ID'];
    isHidden?: Maybe<Scalars['Boolean']>;
    ownerAddress: Scalars['String'];
    quantity?: Maybe<Scalars['Float']>;
    token?: Maybe<Token>;
    tokenProjectMarket?: Maybe<TokenProjectMarket>;
};
export type TokenInput = {
    address: Scalars['String'];
    chainId: Scalars['Int'];
    decimals: Scalars['Int'];
    isNative: Scalars['Boolean'];
};
export type TokenMarket = {
    __typename?: 'TokenMarket';
    fullyDilutedValuation?: Maybe<Amount>;
    historicalTvl?: Maybe<Array<Maybe<TimestampedAmount>>>;
    historicalVolume?: Maybe<Array<Maybe<TimestampedAmount>>>;
    id: Scalars['ID'];
    ohlc?: Maybe<Array<Maybe<TimestampedOhlc>>>;
    price?: Maybe<Amount>;
    priceHighLow?: Maybe<Amount>;
    priceHistory?: Maybe<Array<Maybe<TimestampedAmount>>>;
    pricePercentChange?: Maybe<Amount>;
    priceSource: PriceSource;
    token: Token;
    totalValueLocked?: Maybe<Amount>;
    /**   this volume is cumulative volume over the specified duration */
    volume?: Maybe<Amount>;
};
export type TokenMarketHistoricalTvlArgs = {
    duration: HistoryDuration;
};
export type TokenMarketHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type TokenMarketOhlcArgs = {
    duration: HistoryDuration;
};
export type TokenMarketPriceHighLowArgs = {
    duration: HistoryDuration;
    highLow: HighLow;
};
export type TokenMarketPriceHistoryArgs = {
    duration: HistoryDuration;
    maxLength?: InputMaybe<Scalars['Int']>;
};
export type TokenMarketPricePercentChangeArgs = {
    duration: HistoryDuration;
};
export type TokenMarketVolumeArgs = {
    duration: HistoryDuration;
};
export type TokenProject = {
    __typename?: 'TokenProject';
    description?: Maybe<Scalars['String']>;
    descriptionTranslations?: Maybe<DescriptionTranslations>;
    homepageUrl?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    isSpam?: Maybe<Scalars['Boolean']>;
    logo?: Maybe<Image>;
    /** @deprecated use logo */
    logoUrl?: Maybe<Scalars['String']>;
    markets?: Maybe<Array<Maybe<TokenProjectMarket>>>;
    name?: Maybe<Scalars['String']>;
    safetyLevel?: Maybe<SafetyLevel>;
    /** @deprecated use logo */
    smallLogo?: Maybe<Image>;
    spamCode?: Maybe<Scalars['Int']>;
    tokens: Array<Token>;
    twitterName?: Maybe<Scalars['String']>;
};
export type TokenProjectMarketsArgs = {
    currencies: Array<Currency>;
};
export type TokenProjectMarket = {
    __typename?: 'TokenProjectMarket';
    currency: Currency;
    fullyDilutedValuation?: Maybe<Amount>;
    id: Scalars['ID'];
    marketCap?: Maybe<Amount>;
    price?: Maybe<Amount>;
    priceHigh52w?: Maybe<Amount>;
    priceHighLow?: Maybe<Amount>;
    priceHistory?: Maybe<Array<Maybe<TimestampedAmount>>>;
    priceLow52w?: Maybe<Amount>;
    pricePercentChange?: Maybe<Amount>;
    pricePercentChange24h?: Maybe<Amount>;
    tokenProject: TokenProject;
};
export type TokenProjectMarketPriceHighLowArgs = {
    duration: HistoryDuration;
    highLow: HighLow;
};
export type TokenProjectMarketPriceHistoryArgs = {
    duration: HistoryDuration;
    maxLength?: InputMaybe<Scalars['Int']>;
};
export type TokenProjectMarketPricePercentChangeArgs = {
    duration: HistoryDuration;
};
export declare enum TokenSortableField {
    MarketCap = "MARKET_CAP",
    Popularity = "POPULARITY",
    TotalValueLocked = "TOTAL_VALUE_LOCKED",
    Volume = "VOLUME"
}
export declare enum TokenStandard {
    Erc20 = "ERC20",
    Native = "NATIVE"
}
export type TokenTradeInput = {
    permit?: InputMaybe<PermitInput>;
    routes?: InputMaybe<TokenTradeRoutesInput>;
    slippageToleranceBasisPoints?: InputMaybe<Scalars['Int']>;
    tokenAmount: TokenAmountInput;
};
export type TokenTradeRouteInput = {
    inputAmount: TokenAmountInput;
    outputAmount: TokenAmountInput;
    pools: Array<TradePoolInput>;
};
export type TokenTradeRoutesInput = {
    mixedRoutes?: InputMaybe<Array<TokenTradeRouteInput>>;
    tradeType: TokenTradeType;
    v2Routes?: InputMaybe<Array<TokenTradeRouteInput>>;
    v3Routes?: InputMaybe<Array<TokenTradeRouteInput>>;
};
export declare enum TokenTradeType {
    ExactInput = "EXACT_INPUT",
    ExactOutput = "EXACT_OUTPUT"
}
export type TokenTransfer = {
    __typename?: 'TokenTransfer';
    asset: Token;
    direction: TransactionDirection;
    id: Scalars['ID'];
    quantity: Scalars['String'];
    recipient: Scalars['String'];
    sender: Scalars['String'];
    tokenStandard: TokenStandard;
    transactedValue?: Maybe<Amount>;
};
export type TokenTransferInput = {
    asset: TokenAssetInput;
    direction: TransactionDirection;
    quantity: Scalars['String'];
    recipient: Scalars['String'];
    sender: Scalars['String'];
    tokenStandard: TokenStandard;
    transactedValue?: InputMaybe<AmountInput>;
};
export type TradePoolInput = {
    pair?: InputMaybe<PairInput>;
    pool?: InputMaybe<PoolInput>;
};
export type Transaction = {
    __typename?: 'Transaction';
    blockNumber: Scalars['Int'];
    from: Scalars['String'];
    gasLimit?: Maybe<Scalars['Float']>;
    hash: Scalars['String'];
    id: Scalars['ID'];
    maxFeePerGas?: Maybe<Scalars['Float']>;
    nonce: Scalars['Int'];
    status: TransactionStatus;
    to: Scalars['String'];
};
export type TransactionDetails = {
    __typename?: 'TransactionDetails';
    application?: Maybe<ApplicationContract>;
    assetChanges: Array<Maybe<AssetChange>>;
    from: Scalars['String'];
    hash: Scalars['String'];
    id: Scalars['ID'];
    networkFee?: Maybe<NetworkFee>;
    nonce: Scalars['Int'];
    /** @deprecated use transactionStatus to disambiguate from swapOrderStatus */
    status: TransactionStatus;
    to: Scalars['String'];
    transactionStatus: TransactionStatus;
    type: TransactionType;
};
export type TransactionDetailsInput = {
    application?: InputMaybe<ApplicationContractInput>;
    assetChanges: Array<InputMaybe<AssetChangeInput>>;
    from: Scalars['String'];
    hash: Scalars['String'];
    nonce: Scalars['Int'];
    status?: InputMaybe<TransactionStatus>;
    to: Scalars['String'];
    transactionStatus: TransactionStatus;
    type: TransactionType;
};
export declare enum TransactionDirection {
    In = "IN",
    Out = "OUT",
    Self = "SELF"
}
export type TransactionNotification = {
    __typename?: 'TransactionNotification';
    hash: Scalars['String'];
    id: Scalars['ID'];
    push: Array<PushNotification>;
};
export declare enum TransactionStatus {
    Confirmed = "CONFIRMED",
    Failed = "FAILED",
    Pending = "PENDING"
}
export declare enum TransactionType {
    Approve = "APPROVE",
    Borrow = "BORROW",
    Bridging = "BRIDGING",
    Cancel = "CANCEL",
    Claim = "CLAIM",
    Deployment = "DEPLOYMENT",
    Execute = "EXECUTE",
    Lend = "LEND",
    Mint = "MINT",
    OffRamp = "OFF_RAMP",
    OnRamp = "ON_RAMP",
    Receive = "RECEIVE",
    Repay = "REPAY",
    Send = "SEND",
    Stake = "STAKE",
    Swap = "SWAP",
    SwapOrder = "SWAP_ORDER",
    Unknown = "UNKNOWN",
    Unstake = "UNSTAKE",
    Withdraw = "WITHDRAW"
}
export type V2Pair = IPool & {
    __typename?: 'V2Pair';
    address: Scalars['String'];
    chain: Chain;
    createdAtTimestamp?: Maybe<Scalars['Int']>;
    cumulativeVolume?: Maybe<Amount>;
    historicalVolume?: Maybe<Array<Maybe<TimestampedAmount>>>;
    id: Scalars['ID'];
    priceHistory?: Maybe<Array<Maybe<TimestampedPoolPrice>>>;
    protocolVersion: ProtocolVersion;
    token0?: Maybe<Token>;
    token0Supply?: Maybe<Scalars['Float']>;
    token1?: Maybe<Token>;
    token1Supply?: Maybe<Scalars['Float']>;
    totalLiquidity?: Maybe<Amount>;
    totalLiquidityPercentChange24h?: Maybe<Amount>;
    transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
    txCount?: Maybe<Scalars['Int']>;
};
export type V2PairCumulativeVolumeArgs = {
    duration: HistoryDuration;
};
export type V2PairHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type V2PairPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type V2PairTransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type V3Pool = IPool & {
    __typename?: 'V3Pool';
    address: Scalars['String'];
    chain: Chain;
    createdAtTimestamp?: Maybe<Scalars['Int']>;
    cumulativeVolume?: Maybe<Amount>;
    feeTier?: Maybe<Scalars['Float']>;
    historicalVolume?: Maybe<Array<Maybe<TimestampedAmount>>>;
    id: Scalars['ID'];
    priceHistory?: Maybe<Array<Maybe<TimestampedPoolPrice>>>;
    protocolVersion: ProtocolVersion;
    ticks?: Maybe<Array<Maybe<V3PoolTick>>>;
    token0?: Maybe<Token>;
    token0Supply?: Maybe<Scalars['Float']>;
    token1?: Maybe<Token>;
    token1Supply?: Maybe<Scalars['Float']>;
    totalLiquidity?: Maybe<Amount>;
    totalLiquidityPercentChange24h?: Maybe<Amount>;
    transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
    txCount?: Maybe<Scalars['Int']>;
};
export type V3PoolCumulativeVolumeArgs = {
    duration: HistoryDuration;
};
export type V3PoolHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type V3PoolPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type V3PoolTicksArgs = {
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
};
export type V3PoolTransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type V3PoolTick = {
    __typename?: 'V3PoolTick';
    id: Scalars['ID'];
    liquidityGross?: Maybe<Scalars['String']>;
    liquidityNet?: Maybe<Scalars['String']>;
    price0?: Maybe<Scalars['String']>;
    price1?: Maybe<Scalars['String']>;
    tickIdx?: Maybe<Scalars['Int']>;
};
export type V4Pool = {
    __typename?: 'V4Pool';
    chain: Chain;
    createdAtTimestamp?: Maybe<Scalars['Int']>;
    cumulativeVolume?: Maybe<Amount>;
    feeTier?: Maybe<Scalars['Float']>;
    historicalVolume?: Maybe<Array<Maybe<TimestampedAmount>>>;
    hook?: Maybe<V4PoolHook>;
    id: Scalars['ID'];
    poolId: Scalars['String'];
    priceHistory?: Maybe<Array<Maybe<TimestampedPoolPrice>>>;
    protocolVersion: ProtocolVersion;
    rewardsCampaign?: Maybe<RewardsCampaign>;
    ticks?: Maybe<Array<Maybe<V4PoolTick>>>;
    token0?: Maybe<Token>;
    token0Supply?: Maybe<Scalars['Float']>;
    token1?: Maybe<Token>;
    token1Supply?: Maybe<Scalars['Float']>;
    totalLiquidity?: Maybe<Amount>;
    totalLiquidityPercentChange24h?: Maybe<Amount>;
    transactions?: Maybe<Array<Maybe<PoolTransaction>>>;
    txCount?: Maybe<Scalars['Int']>;
};
export type V4PoolCumulativeVolumeArgs = {
    duration: HistoryDuration;
};
export type V4PoolHistoricalVolumeArgs = {
    duration: HistoryDuration;
};
export type V4PoolPriceHistoryArgs = {
    duration: HistoryDuration;
};
export type V4PoolTicksArgs = {
    first?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
};
export type V4PoolTransactionsArgs = {
    first: Scalars['Int'];
    timestampCursor?: InputMaybe<Scalars['Int']>;
};
export type V4PoolHook = {
    __typename?: 'V4PoolHook';
    address: Scalars['String'];
    id: Scalars['ID'];
};
export type V4PoolTick = {
    __typename?: 'V4PoolTick';
    id: Scalars['ID'];
    liquidityGross?: Maybe<Scalars['String']>;
    liquidityNet?: Maybe<Scalars['String']>;
    price0?: Maybe<Scalars['String']>;
    price1?: Maybe<Scalars['String']>;
    tickIdx?: Maybe<Scalars['Int']>;
};
export type TokenPriceHistoryQueryVariables = Exact<{
    contract: ContractInput;
    duration?: InputMaybe<HistoryDuration>;
    maxHistoryLength?: InputMaybe<Scalars['Int']>;
}>;
export type TokenPriceHistoryQuery = {
    __typename?: 'Query';
    tokenProjects?: Array<{
        __typename?: 'TokenProject';
        id: string;
        name?: string | undefined;
        markets?: Array<{
            __typename?: 'TokenProjectMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            pricePercentChange24h?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            priceHistory?: Array<{
                __typename?: 'TimestampedAmount';
                timestamp: number;
                value: number;
            } | undefined> | undefined;
        } | undefined> | undefined;
        tokens: Array<{
            __typename?: 'Token';
            id: string;
            chain: Chain;
            address?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            market?: {
                __typename?: 'TokenMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                pricePercentChange24h?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                priceHistory?: Array<{
                    __typename?: 'TimestampedAmount';
                    timestamp: number;
                    value: number;
                } | undefined> | undefined;
            } | undefined;
        }>;
    } | undefined> | undefined;
};
export type AccountListQueryVariables = Exact<{
    addresses: Array<Scalars['String']> | Scalars['String'];
    valueModifiers?: InputMaybe<Array<PortfolioValueModifier> | PortfolioValueModifier>;
    chains?: InputMaybe<Array<Chain> | Chain>;
}>;
export type AccountListQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        ownerAddress: string;
        tokensTotalDenominatedValue?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined> | undefined;
};
export type SearchPopularNftCollectionsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type SearchPopularNftCollectionsQuery = {
    __typename?: 'Query';
    topCollections?: {
        __typename?: 'NftCollectionConnection';
        edges: Array<{
            __typename?: 'NftCollectionEdge';
            node: {
                __typename?: 'NftCollection';
                id: string;
                name?: string | undefined;
                collectionId: string;
                isVerified?: boolean | undefined;
                nftContracts?: Array<{
                    __typename?: 'NftContract';
                    id: string;
                    chain: Chain;
                    address: string;
                }> | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            };
        }>;
    } | undefined;
};
export type NftsQueryVariables = Exact<{
    ownerAddress: Scalars['String'];
}>;
export type NftsQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        nftBalances?: Array<{
            __typename?: 'NftBalance';
            id: string;
            ownedAsset?: {
                __typename?: 'NftAsset';
                id: string;
                description?: string | undefined;
                name?: string | undefined;
                tokenId: string;
                collection?: {
                    __typename?: 'NftCollection';
                    id: string;
                    collectionId: string;
                    description?: string | undefined;
                    isVerified?: boolean | undefined;
                    name?: string | undefined;
                    numAssets?: number | undefined;
                    image?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    markets?: Array<{
                        __typename?: 'NftCollectionMarket';
                        id: string;
                        owners?: number | undefined;
                        floorPrice?: {
                            __typename?: 'TimestampedAmount';
                            value: number;
                        } | undefined;
                        volume24h?: {
                            __typename?: 'Amount';
                            value: number;
                        } | undefined;
                        totalVolume?: {
                            __typename?: 'TimestampedAmount';
                            value: number;
                        } | undefined;
                    }> | undefined;
                } | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
                nftContract?: {
                    __typename?: 'NftContract';
                    id: string;
                    address: string;
                    chain: Chain;
                    standard?: NftStandard | undefined;
                } | undefined;
                thumbnail?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
                creator?: {
                    __typename?: 'NftProfile';
                    id: string;
                    address: string;
                    username?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type NftItemScreenQueryVariables = Exact<{
    contractAddress: Scalars['String'];
    filter?: InputMaybe<NftAssetsFilterInput>;
    activityFilter?: InputMaybe<NftActivityFilterInput>;
}>;
export type NftItemScreenQuery = {
    __typename?: 'Query';
    nftAssets?: {
        __typename?: 'NftAssetConnection';
        edges: Array<{
            __typename?: 'NftAssetEdge';
            node: {
                __typename?: 'NftAsset';
                id: string;
                ownerAddress?: string | undefined;
                description?: string | undefined;
                name?: string | undefined;
                tokenId: string;
                collection?: {
                    __typename?: 'NftCollection';
                    id: string;
                    collectionId: string;
                    description?: string | undefined;
                    isVerified?: boolean | undefined;
                    name?: string | undefined;
                    numAssets?: number | undefined;
                    image?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    markets?: Array<{
                        __typename?: 'NftCollectionMarket';
                        id: string;
                        owners?: number | undefined;
                        floorPrice?: {
                            __typename?: 'TimestampedAmount';
                            value: number;
                        } | undefined;
                        totalVolume?: {
                            __typename?: 'TimestampedAmount';
                            value: number;
                        } | undefined;
                    }> | undefined;
                    nftContracts?: Array<{
                        __typename?: 'NftContract';
                        id: string;
                        address: string;
                    }> | undefined;
                } | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                    dimensions?: {
                        __typename?: 'Dimensions';
                        width?: number | undefined;
                        height?: number | undefined;
                    } | undefined;
                } | undefined;
                nftContract?: {
                    __typename?: 'NftContract';
                    id: string;
                    address: string;
                    chain: Chain;
                    standard?: NftStandard | undefined;
                } | undefined;
                creator?: {
                    __typename?: 'NftProfile';
                    id: string;
                    address: string;
                    username?: string | undefined;
                } | undefined;
                traits?: Array<{
                    __typename?: 'NftAssetTrait';
                    id: string;
                    name?: string | undefined;
                    rarity?: number | undefined;
                    value?: string | undefined;
                }> | undefined;
                listings?: {
                    __typename?: 'NftOrderConnection';
                    edges: Array<{
                        __typename?: 'NftOrderEdge';
                        node: {
                            __typename?: 'NftOrder';
                            id: string;
                            price: {
                                __typename?: 'Amount';
                                currency?: Currency | undefined;
                                value: number;
                            };
                        };
                    }>;
                } | undefined;
            };
        }>;
    } | undefined;
    nftActivity?: {
        __typename?: 'NftActivityConnection';
        edges: Array<{
            __typename?: 'NftActivityEdge';
            node: {
                __typename?: 'NftActivity';
                id: string;
                quantity?: number | undefined;
                price?: {
                    __typename?: 'Amount';
                    currency?: Currency | undefined;
                    value: number;
                } | undefined;
            };
        }>;
    } | undefined;
};
export type NftCollectionScreenQueryVariables = Exact<{
    contractAddress: Scalars['String'];
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
}>;
export type NftCollectionScreenQuery = {
    __typename?: 'Query';
    nftCollections?: {
        __typename?: 'NftCollectionConnection';
        edges: Array<{
            __typename?: 'NftCollectionEdge';
            node: {
                __typename?: 'NftCollection';
                id: string;
                isVerified?: boolean | undefined;
                numAssets?: number | undefined;
                description?: string | undefined;
                homepageUrl?: string | undefined;
                twitterName?: string | undefined;
                name?: string | undefined;
                bannerImage?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
                markets?: Array<{
                    __typename?: 'NftCollectionMarket';
                    id: string;
                    owners?: number | undefined;
                    floorPrice?: {
                        __typename?: 'TimestampedAmount';
                        value: number;
                    } | undefined;
                    volume24h?: {
                        __typename?: 'Amount';
                        value: number;
                    } | undefined;
                    totalVolume?: {
                        __typename?: 'TimestampedAmount';
                        value: number;
                    } | undefined;
                }> | undefined;
            };
        }>;
    } | undefined;
    nftAssets?: {
        __typename?: 'NftAssetConnection';
        edges: Array<{
            __typename?: 'NftAssetEdge';
            node: {
                __typename?: 'NftAsset';
                ownerAddress?: string | undefined;
                id: string;
                name?: string | undefined;
                tokenId: string;
                nftContract?: {
                    __typename?: 'NftContract';
                    id: string;
                    address: string;
                } | undefined;
                collection?: {
                    __typename?: 'NftCollection';
                    id: string;
                    collectionId: string;
                    name?: string | undefined;
                } | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                    dimensions?: {
                        __typename?: 'Dimensions';
                        width?: number | undefined;
                        height?: number | undefined;
                    } | undefined;
                } | undefined;
                listings?: {
                    __typename?: 'NftOrderConnection';
                    edges: Array<{
                        __typename?: 'NftOrderEdge';
                        node: {
                            __typename?: 'NftOrder';
                            id: string;
                            price: {
                                __typename?: 'Amount';
                                currency?: Currency | undefined;
                                value: number;
                            };
                        };
                    }>;
                } | undefined;
            };
        }>;
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | undefined;
            hasNextPage?: boolean | undefined;
            hasPreviousPage?: boolean | undefined;
            startCursor?: string | undefined;
        };
    } | undefined;
};
export type NftsTabQueryVariables = Exact<{
    ownerAddress: Scalars['String'];
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
    filter?: InputMaybe<NftBalancesFilterInput>;
    chains: Array<Chain> | Chain;
}>;
export type NftsTabQuery = {
    __typename?: 'Query';
    nftBalances?: {
        __typename?: 'NftBalanceConnection';
        edges: Array<{
            __typename?: 'NftBalanceEdge';
            node: {
                __typename?: 'NftBalance';
                ownedAsset?: {
                    __typename?: 'NftAsset';
                    chain?: Chain | undefined;
                    id: string;
                    name?: string | undefined;
                    tokenId: string;
                    description?: string | undefined;
                    isSpam?: boolean | undefined;
                    collection?: {
                        __typename?: 'NftCollection';
                        id: string;
                        name?: string | undefined;
                        isVerified?: boolean | undefined;
                        markets?: Array<{
                            __typename?: 'NftCollectionMarket';
                            id: string;
                            floorPrice?: {
                                __typename?: 'TimestampedAmount';
                                value: number;
                            } | undefined;
                        }> | undefined;
                    } | undefined;
                    image?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                        dimensions?: {
                            __typename?: 'Dimensions';
                            width?: number | undefined;
                            height?: number | undefined;
                        } | undefined;
                    } | undefined;
                    thumbnail?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    nftContract?: {
                        __typename?: 'NftContract';
                        id: string;
                        address: string;
                    } | undefined;
                } | undefined;
            };
        }>;
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | undefined;
            hasNextPage?: boolean | undefined;
            hasPreviousPage?: boolean | undefined;
            startCursor?: string | undefined;
        };
    } | undefined;
};
export type TokenBalanceMainPartsFragment = {
    __typename?: 'TokenBalance';
    id: string;
    quantity?: number | undefined;
    denominatedValue?: {
        __typename?: 'Amount';
        currency?: Currency | undefined;
        value: number;
    } | undefined;
    tokenProjectMarket?: {
        __typename?: 'TokenProjectMarket';
        relativeChange24?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined;
};
export type TokenBalanceQuantityPartsFragment = {
    __typename?: 'TokenBalance';
    id: string;
    quantity?: number | undefined;
};
export type TokenBalancePartsFragment = {
    __typename?: 'TokenBalance';
    isHidden?: boolean | undefined;
    id: string;
    quantity?: number | undefined;
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            spamCode?: number | undefined;
            tokens: Array<{
                __typename?: 'Token';
                chain: Chain;
                address?: string | undefined;
            }>;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    denominatedValue?: {
        __typename?: 'Amount';
        currency?: Currency | undefined;
        value: number;
    } | undefined;
    tokenProjectMarket?: {
        __typename?: 'TokenProjectMarket';
        relativeChange24?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined;
};
export type PortfolioBalancesQueryVariables = Exact<{
    ownerAddress: Scalars['String'];
    valueModifiers?: InputMaybe<Array<PortfolioValueModifier> | PortfolioValueModifier>;
    chains: Array<Chain> | Chain;
}>;
export type PortfolioBalancesQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        tokensTotalDenominatedValue?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        tokensTotalDenominatedValueChange?: {
            __typename?: 'AmountChange';
            absolute?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            percentage?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined;
        tokenBalances?: Array<{
            __typename?: 'TokenBalance';
            isHidden?: boolean | undefined;
            id: string;
            quantity?: number | undefined;
            token?: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                name?: string | undefined;
                standard?: TokenStandard | undefined;
                symbol?: string | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    isSpam?: boolean | undefined;
                    logoUrl?: string | undefined;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                    spamCode?: number | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        chain: Chain;
                        address?: string | undefined;
                    }>;
                } | undefined;
                feeData?: {
                    __typename?: 'FeeData';
                    buyFeeBps?: string | undefined;
                    sellFeeBps?: string | undefined;
                } | undefined;
                protectionInfo?: {
                    __typename?: 'ProtectionInfo';
                    result?: ProtectionResult | undefined;
                    attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                    blockaidFees?: {
                        __typename?: 'BlockaidFees';
                        buy?: number | undefined;
                        sell?: number | undefined;
                        transfer?: number | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
            denominatedValue?: {
                __typename?: 'Amount';
                currency?: Currency | undefined;
                value: number;
            } | undefined;
            tokenProjectMarket?: {
                __typename?: 'TokenProjectMarket';
                relativeChange24?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
            } | undefined;
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type MultiplePortfolioBalancesQueryVariables = Exact<{
    ownerAddresses: Array<Scalars['String']> | Scalars['String'];
    valueModifiers?: InputMaybe<Array<PortfolioValueModifier> | PortfolioValueModifier>;
    chains: Array<Chain> | Chain;
}>;
export type MultiplePortfolioBalancesQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        tokensTotalDenominatedValue?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        tokensTotalDenominatedValueChange?: {
            __typename?: 'AmountChange';
            absolute?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            percentage?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined;
        tokenBalances?: Array<{
            __typename?: 'TokenBalance';
            id: string;
            quantity?: number | undefined;
            isHidden?: boolean | undefined;
            denominatedValue?: {
                __typename?: 'Amount';
                currency?: Currency | undefined;
                value: number;
            } | undefined;
            token?: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                name?: string | undefined;
                standard?: TokenStandard | undefined;
                symbol?: string | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    isSpam?: boolean | undefined;
                    logoUrl?: string | undefined;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                    spamCode?: number | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        chain: Chain;
                        address?: string | undefined;
                    }>;
                } | undefined;
            } | undefined;
            tokenProjectMarket?: {
                __typename?: 'TokenProjectMarket';
                relativeChange24?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
            } | undefined;
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type SelectWalletScreenQueryVariables = Exact<{
    ownerAddresses: Array<Scalars['String']> | Scalars['String'];
    valueModifiers?: InputMaybe<Array<PortfolioValueModifier> | PortfolioValueModifier>;
    chains: Array<Chain> | Chain;
}>;
export type SelectWalletScreenQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        ownerAddress: string;
        tokensTotalDenominatedValue?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined> | undefined;
};
export type TransactionHistoryUpdaterQueryVariables = Exact<{
    addresses: Array<Scalars['String']> | Scalars['String'];
    onRampAuth?: InputMaybe<OnRampTransactionsAuth>;
    chains: Array<Chain> | Chain;
}>;
export type TransactionHistoryUpdaterQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        ownerAddress: string;
        assetActivities?: Array<{
            __typename?: 'AssetActivity';
            id: string;
            timestamp: number;
            details: {
                __typename?: 'OffRampTransactionDetails';
            } | {
                __typename?: 'OnRampTransactionDetails';
            } | {
                __typename?: 'SwapOrderDetails';
            } | {
                __typename?: 'TransactionDetails';
                id: string;
                hash: string;
            };
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type TokenQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            spamCode?: number | undefined;
            tokens: Array<{
                __typename?: 'Token';
                chain: Chain;
                address?: string | undefined;
            }>;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type TokenDetailsScreenQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenDetailsScreenQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            volume?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            price?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            priceHigh52W?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            priceLow52W?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            spamCode?: number | undefined;
            homepageUrl?: string | undefined;
            twitterName?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                chain: Chain;
                address?: string | undefined;
            }>;
            markets?: Array<{
                __typename?: 'TokenProjectMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                marketCap?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                fullyDilutedValuation?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                priceHigh52W?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                priceLow52W?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                pricePercentChange24h?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
            } | undefined> | undefined;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type TokenProjectDescriptionQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
    includeSpanish?: InputMaybe<Scalars['Boolean']>;
    includeFrench?: InputMaybe<Scalars['Boolean']>;
    includeJapanese?: InputMaybe<Scalars['Boolean']>;
    includePortuguese?: InputMaybe<Scalars['Boolean']>;
    includeVietnamese?: InputMaybe<Scalars['Boolean']>;
    includeChineseSimplified?: InputMaybe<Scalars['Boolean']>;
    includeChineseTraditional?: InputMaybe<Scalars['Boolean']>;
}>;
export type TokenProjectDescriptionQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        chain: Chain;
        address?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            description?: string | undefined;
            descriptionTranslations?: {
                __typename?: 'DescriptionTranslations';
                descriptionEsEs?: string | undefined;
                descriptionFrFr?: string | undefined;
                descriptionJaJp?: string | undefined;
                descriptionPtPt?: string | undefined;
                descriptionViVn?: string | undefined;
                descriptionZhHans?: string | undefined;
                descriptionZhHant?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type TokenProjectsQueryVariables = Exact<{
    contracts: Array<ContractInput> | ContractInput;
}>;
export type TokenProjectsQuery = {
    __typename?: 'Query';
    tokenProjects?: Array<{
        __typename?: 'TokenProject';
        id: string;
        logoUrl?: string | undefined;
        safetyLevel?: SafetyLevel | undefined;
        tokens: Array<{
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        }>;
    } | undefined> | undefined;
};
export type TransactionListQueryVariables = Exact<{
    address: Scalars['String'];
    onRampAuth?: InputMaybe<OnRampTransactionsAuth>;
    chains: Array<Chain> | Chain;
    pageSize?: InputMaybe<Scalars['Int']>;
}>;
export type TransactionListQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        assetActivities?: Array<{
            __typename?: 'AssetActivity';
            id: string;
            timestamp: number;
            chain: Chain;
            details: {
                __typename?: 'OffRampTransactionDetails';
            } | {
                __typename?: 'OnRampTransactionDetails';
                id: string;
                status: TransactionStatus;
                receiverAddress: string;
                onRampTransfer: {
                    __typename?: 'OnRampTransfer';
                    id: string;
                    transactionReferenceId: string;
                    externalSessionId: string;
                    tokenStandard: TokenStandard;
                    amount: number;
                    sourceCurrency?: string | undefined;
                    sourceAmount: number;
                    networkFee?: number | undefined;
                    transactionFee?: number | undefined;
                    totalFee?: number | undefined;
                    token: {
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        chain: Chain;
                        decimals?: number | undefined;
                        name?: string | undefined;
                        standard?: TokenStandard | undefined;
                        symbol?: string | undefined;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            isSpam?: boolean | undefined;
                            logoUrl?: string | undefined;
                            name?: string | undefined;
                            safetyLevel?: SafetyLevel | undefined;
                            spamCode?: number | undefined;
                            tokens: Array<{
                                __typename?: 'Token';
                                chain: Chain;
                                address?: string | undefined;
                            }>;
                        } | undefined;
                    };
                    serviceProvider: {
                        __typename?: 'OnRampServiceProvider';
                        serviceProvider: string;
                        name: string;
                        url: string;
                        logoLightUrl: string;
                        logoDarkUrl: string;
                        supportUrl?: string | undefined;
                    };
                };
            } | {
                __typename?: 'SwapOrderDetails';
                id: string;
                offerer: string;
                hash: string;
                expiry: number;
                swapOrderType: SwapOrderType;
                encodedOrder: string;
                inputTokenQuantity: string;
                outputTokenQuantity: string;
                orderStatus: SwapOrderStatus;
                inputToken: {
                    __typename?: 'Token';
                    id: string;
                    symbol?: string | undefined;
                    address?: string | undefined;
                    decimals?: number | undefined;
                    chain: Chain;
                };
                outputToken: {
                    __typename?: 'Token';
                    id: string;
                    symbol?: string | undefined;
                    address?: string | undefined;
                    decimals?: number | undefined;
                    chain: Chain;
                };
            } | {
                __typename?: 'TransactionDetails';
                id: string;
                to: string;
                type: TransactionType;
                hash: string;
                from: string;
                status: TransactionStatus;
                application?: {
                    __typename?: 'ApplicationContract';
                    name?: string | undefined;
                    address: string;
                    icon?: {
                        __typename?: 'Image';
                        url: string;
                    } | undefined;
                } | undefined;
                assetChanges: Array<{
                    __typename: 'NftApproval';
                } | {
                    __typename: 'NftApproveForAll';
                } | {
                    __typename: 'NftTransfer';
                    id: string;
                    nftStandard: NftStandard;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'NftAsset';
                        id: string;
                        name?: string | undefined;
                        isSpam?: boolean | undefined;
                        tokenId: string;
                        nftContract?: {
                            __typename?: 'NftContract';
                            id: string;
                            chain: Chain;
                            address: string;
                        } | undefined;
                        image?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                        collection?: {
                            __typename?: 'NftCollection';
                            id: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                } | {
                    __typename: 'OffRampTransfer';
                } | {
                    __typename: 'OnRampTransfer';
                    id: string;
                    transactionReferenceId: string;
                    externalSessionId: string;
                    tokenStandard: TokenStandard;
                    amount: number;
                    sourceCurrency?: string | undefined;
                    sourceAmount: number;
                    networkFee?: number | undefined;
                    transactionFee?: number | undefined;
                    totalFee?: number | undefined;
                    token: {
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        chain: Chain;
                        decimals?: number | undefined;
                        name?: string | undefined;
                        standard?: TokenStandard | undefined;
                        symbol?: string | undefined;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            isSpam?: boolean | undefined;
                            logoUrl?: string | undefined;
                            name?: string | undefined;
                            safetyLevel?: SafetyLevel | undefined;
                            spamCode?: number | undefined;
                            tokens: Array<{
                                __typename?: 'Token';
                                chain: Chain;
                                address?: string | undefined;
                            }>;
                        } | undefined;
                    };
                    serviceProvider: {
                        __typename?: 'OnRampServiceProvider';
                        serviceProvider: string;
                        name: string;
                        url: string;
                        logoLightUrl: string;
                        logoDarkUrl: string;
                        supportUrl?: string | undefined;
                    };
                } | {
                    __typename: 'TokenApproval';
                    id: string;
                    tokenStandard: TokenStandard;
                    approvedAddress: string;
                    quantity: string;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                        address?: string | undefined;
                        chain: Chain;
                    };
                } | {
                    __typename: 'TokenTransfer';
                    id: string;
                    tokenStandard: TokenStandard;
                    quantity: string;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        symbol?: string | undefined;
                        address?: string | undefined;
                        decimals?: number | undefined;
                        chain: Chain;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            isSpam?: boolean | undefined;
                            spamCode?: number | undefined;
                        } | undefined;
                    };
                    transactedValue?: {
                        __typename?: 'Amount';
                        id: string;
                        currency?: Currency | undefined;
                        value: number;
                    } | undefined;
                } | undefined>;
                networkFee?: {
                    __typename?: 'NetworkFee';
                    quantity?: string | undefined;
                    tokenSymbol?: string | undefined;
                    tokenAddress?: string | undefined;
                    tokenChain?: string | undefined;
                } | undefined;
            };
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type FeedTransactionListQueryVariables = Exact<{
    addresses: Array<Scalars['String']> | Scalars['String'];
    chains: Array<Chain> | Chain;
}>;
export type FeedTransactionListQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        ownerAddress: string;
        assetActivities?: Array<{
            __typename?: 'AssetActivity';
            id: string;
            timestamp: number;
            chain: Chain;
            details: {
                __typename?: 'OffRampTransactionDetails';
            } | {
                __typename?: 'OnRampTransactionDetails';
            } | {
                __typename?: 'SwapOrderDetails';
            } | {
                __typename?: 'TransactionDetails';
                id: string;
                to: string;
                type: TransactionType;
                hash: string;
                from: string;
                status: TransactionStatus;
                assetChanges: Array<{
                    __typename: 'NftApproval';
                } | {
                    __typename: 'NftApproveForAll';
                } | {
                    __typename: 'NftTransfer';
                    id: string;
                    nftStandard: NftStandard;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'NftAsset';
                        id: string;
                        name?: string | undefined;
                        isSpam?: boolean | undefined;
                        tokenId: string;
                        nftContract?: {
                            __typename?: 'NftContract';
                            id: string;
                            chain: Chain;
                            address: string;
                        } | undefined;
                        image?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                        collection?: {
                            __typename?: 'NftCollection';
                            id: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                } | {
                    __typename: 'OffRampTransfer';
                } | {
                    __typename: 'OnRampTransfer';
                } | {
                    __typename: 'TokenApproval';
                    id: string;
                    tokenStandard: TokenStandard;
                    approvedAddress: string;
                    quantity: string;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                        address?: string | undefined;
                        chain: Chain;
                    };
                } | {
                    __typename: 'TokenTransfer';
                    id: string;
                    tokenStandard: TokenStandard;
                    quantity: string;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        symbol?: string | undefined;
                        address?: string | undefined;
                        decimals?: number | undefined;
                        chain: Chain;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            isSpam?: boolean | undefined;
                            spamCode?: number | undefined;
                        } | undefined;
                    };
                    transactedValue?: {
                        __typename?: 'Amount';
                        currency?: Currency | undefined;
                        value: number;
                    } | undefined;
                } | undefined>;
            };
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type TopTokensQueryVariables = Exact<{
    chain?: InputMaybe<Chain>;
    page?: InputMaybe<Scalars['Int']>;
    pageSize?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TokenSortableField>;
}>;
export type TopTokensQuery = {
    __typename?: 'Query';
    topTokens?: Array<{
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            spamCode?: number | undefined;
            tokens: Array<{
                __typename?: 'Token';
                chain: Chain;
                address?: string | undefined;
            }>;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined> | undefined;
};
export type SearchTokensQueryVariables = Exact<{
    searchQuery: Scalars['String'];
    chains: Array<Chain> | Chain;
    tokenSearchV2Enabled?: InputMaybe<Scalars['Boolean']>;
}>;
export type SearchTokensQuery = {
    __typename?: 'Query';
    searchTokens?: Array<{
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            spamCode?: number | undefined;
            tokens: Array<{
                __typename?: 'Token';
                chain: Chain;
                address?: string | undefined;
            }>;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined> | undefined;
};
export type ExploreSearchQueryVariables = Exact<{
    searchQuery: Scalars['String'];
    nftCollectionsFilter: NftCollectionsFilterInput;
    chains?: InputMaybe<Array<Chain> | Chain>;
    tokenSearchV2Enabled?: InputMaybe<Scalars['Boolean']>;
}>;
export type ExploreSearchQuery = {
    __typename?: 'Query';
    searchTokens?: Array<{
        __typename?: 'Token';
        chain: Chain;
        address?: string | undefined;
        decimals?: number | undefined;
        symbol?: string | undefined;
        name?: string | undefined;
        market?: {
            __typename?: 'TokenMarket';
            volume?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            logoUrl?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
    } | undefined> | undefined;
    nftCollections?: {
        __typename?: 'NftCollectionConnection';
        edges: Array<{
            __typename?: 'NftCollectionEdge';
            node: {
                __typename?: 'NftCollection';
                id: string;
                name?: string | undefined;
                collectionId: string;
                isVerified?: boolean | undefined;
                nftContracts?: Array<{
                    __typename?: 'NftContract';
                    id: string;
                    chain: Chain;
                    address: string;
                }> | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            };
        }>;
    } | undefined;
};
export type TokenPartsFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    chain: Chain;
    decimals?: number | undefined;
    name?: string | undefined;
    standard?: TokenStandard | undefined;
    symbol?: string | undefined;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        isSpam?: boolean | undefined;
        logoUrl?: string | undefined;
        name?: string | undefined;
        safetyLevel?: SafetyLevel | undefined;
        spamCode?: number | undefined;
        tokens: Array<{
            __typename?: 'Token';
            chain: Chain;
            address?: string | undefined;
        }>;
    } | undefined;
    feeData?: {
        __typename?: 'FeeData';
        buyFeeBps?: string | undefined;
        sellFeeBps?: string | undefined;
    } | undefined;
    protectionInfo?: {
        __typename?: 'ProtectionInfo';
        result?: ProtectionResult | undefined;
        attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
        blockaidFees?: {
            __typename?: 'BlockaidFees';
            buy?: number | undefined;
            sell?: number | undefined;
            transfer?: number | undefined;
        } | undefined;
    } | undefined;
};
export type TokenBasicInfoPartsFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    chain: Chain;
    decimals?: number | undefined;
    name?: string | undefined;
    standard?: TokenStandard | undefined;
    symbol?: string | undefined;
};
export type TokenBasicProjectPartsFragment = {
    __typename?: 'Token';
    project?: {
        __typename?: 'TokenProject';
        id: string;
        isSpam?: boolean | undefined;
        logoUrl?: string | undefined;
        name?: string | undefined;
        safetyLevel?: SafetyLevel | undefined;
        spamCode?: number | undefined;
        tokens: Array<{
            __typename?: 'Token';
            chain: Chain;
            address?: string | undefined;
        }>;
    } | undefined;
};
export type TokenProjectUrlsPartsFragment = {
    __typename?: 'Token';
    project?: {
        __typename?: 'TokenProject';
        homepageUrl?: string | undefined;
        twitterName?: string | undefined;
    } | undefined;
};
export type TokenProjectMarketsPartsFragment = {
    __typename?: 'Token';
    project?: {
        __typename?: 'TokenProject';
        markets?: Array<{
            __typename?: 'TokenProjectMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            marketCap?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            fullyDilutedValuation?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            priceHigh52W?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            priceLow52W?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            pricePercentChange24h?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined> | undefined;
    } | undefined;
};
export type TokenMarketPartsFragment = {
    __typename?: 'Token';
    market?: {
        __typename?: 'TokenMarket';
        id: string;
        volume?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        price?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        priceHigh52W?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        priceLow52W?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined;
};
export type TokenFeeDataPartsFragment = {
    __typename?: 'Token';
    feeData?: {
        __typename?: 'FeeData';
        buyFeeBps?: string | undefined;
        sellFeeBps?: string | undefined;
    } | undefined;
};
export type TokenProtectionInfoPartsFragment = {
    __typename?: 'Token';
    protectionInfo?: {
        __typename?: 'ProtectionInfo';
        result?: ProtectionResult | undefined;
        attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
        blockaidFees?: {
            __typename?: 'BlockaidFees';
            buy?: number | undefined;
            sell?: number | undefined;
            transfer?: number | undefined;
        } | undefined;
    } | undefined;
};
export type TopTokenPartsFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    chain: Chain;
    decimals?: number | undefined;
    name?: string | undefined;
    standard?: TokenStandard | undefined;
    symbol?: string | undefined;
    market?: {
        __typename?: 'TokenMarket';
        id: string;
        totalValueLocked?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        volume?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        logoUrl?: string | undefined;
        markets?: Array<{
            __typename?: 'TokenProjectMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            pricePercentChange24h?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            marketCap?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined> | undefined;
    } | undefined;
};
export type HomeScreenTokenPartsFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    chain: Chain;
    decimals?: number | undefined;
    name?: string | undefined;
    standard?: TokenStandard | undefined;
    symbol?: string | undefined;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        logoUrl?: string | undefined;
        markets?: Array<{
            __typename?: 'TokenProjectMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            pricePercentChange24h?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined> | undefined;
    } | undefined;
};
export type HomeScreenTokensQueryVariables = Exact<{
    contracts: Array<ContractInput> | ContractInput;
    chain: Chain;
}>;
export type HomeScreenTokensQuery = {
    __typename?: 'Query';
    tokens?: Array<{
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            logoUrl?: string | undefined;
            markets?: Array<{
                __typename?: 'TokenProjectMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                pricePercentChange24h?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
            } | undefined> | undefined;
        } | undefined;
    } | undefined> | undefined;
    eth?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            logoUrl?: string | undefined;
            markets?: Array<{
                __typename?: 'TokenProjectMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                pricePercentChange24h?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
            } | undefined> | undefined;
        } | undefined;
    } | undefined;
};
export type FavoriteTokenCardQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type FavoriteTokenCardQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
            pricePercentChange?: {
                __typename?: 'Amount';
                value: number;
            } | undefined;
        } | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            spamCode?: number | undefined;
            tokens: Array<{
                __typename?: 'Token';
                chain: Chain;
                address?: string | undefined;
            }>;
            markets?: Array<{
                __typename?: 'TokenProjectMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                marketCap?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                fullyDilutedValuation?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                priceHigh52W?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                priceLow52W?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
                pricePercentChange24h?: {
                    __typename?: 'Amount';
                    value: number;
                } | undefined;
            } | undefined> | undefined;
        } | undefined;
    } | undefined;
};
export type WidgetTokensQueryVariables = Exact<{
    contracts: Array<ContractInput> | ContractInput;
}>;
export type WidgetTokensQuery = {
    __typename?: 'Query';
    tokens?: Array<{
        __typename?: 'Token';
        symbol?: string | undefined;
        chain: Chain;
        address?: string | undefined;
        name?: string | undefined;
    } | undefined> | undefined;
};
export type TokensQueryVariables = Exact<{
    contracts: Array<ContractInput> | ContractInput;
}>;
export type TokensQuery = {
    __typename?: 'Query';
    tokens?: Array<{
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            spamCode?: number | undefined;
            tokens: Array<{
                __typename?: 'Token';
                chain: Chain;
                address?: string | undefined;
            }>;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined> | undefined;
};
export type ConvertQueryVariables = Exact<{
    fromCurrency: Currency;
    toCurrency: Currency;
}>;
export type ConvertQuery = {
    __typename?: 'Query';
    convert?: {
        __typename?: 'Amount';
        value: number;
        currency?: Currency | undefined;
    } | undefined;
};
export type RecentTokenTransfersQueryVariables = Exact<{
    address: Scalars['String'];
    chains?: InputMaybe<Array<Chain> | Chain>;
}>;
export type RecentTokenTransfersQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        ownerAddress: string;
        assetActivities?: Array<{
            __typename?: 'AssetActivity';
            id: string;
            timestamp: number;
            chain: Chain;
            details: {
                __typename?: 'OffRampTransactionDetails';
            } | {
                __typename?: 'OnRampTransactionDetails';
            } | {
                __typename?: 'SwapOrderDetails';
            } | {
                __typename?: 'TransactionDetails';
                to: string;
                type: TransactionType;
                hash: string;
                from: string;
                status: TransactionStatus;
                assetChanges: Array<{
                    __typename: 'NftApproval';
                } | {
                    __typename: 'NftApproveForAll';
                } | {
                    __typename: 'NftTransfer';
                    id: string;
                    nftStandard: NftStandard;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'NftAsset';
                        id: string;
                        name?: string | undefined;
                        isSpam?: boolean | undefined;
                        tokenId: string;
                        nftContract?: {
                            __typename?: 'NftContract';
                            id: string;
                            chain: Chain;
                            address: string;
                        } | undefined;
                        image?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                        collection?: {
                            __typename?: 'NftCollection';
                            id: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                } | {
                    __typename: 'OffRampTransfer';
                } | {
                    __typename: 'OnRampTransfer';
                } | {
                    __typename: 'TokenApproval';
                    id: string;
                    tokenStandard: TokenStandard;
                    approvedAddress: string;
                    quantity: string;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        symbol?: string | undefined;
                        decimals?: number | undefined;
                        address?: string | undefined;
                        chain: Chain;
                    };
                } | {
                    __typename: 'TokenTransfer';
                    id: string;
                    tokenStandard: TokenStandard;
                    quantity: string;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        symbol?: string | undefined;
                        address?: string | undefined;
                        decimals?: number | undefined;
                        chain: Chain;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            isSpam?: boolean | undefined;
                            spamCode?: number | undefined;
                        } | undefined;
                    };
                    transactedValue?: {
                        __typename?: 'Amount';
                        currency?: Currency | undefined;
                        value: number;
                    } | undefined;
                } | undefined>;
            };
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type RecentlySearchedAssetsQueryVariables = Exact<{
    collectionAddresses: Array<Scalars['String']> | Scalars['String'];
    contracts: Array<ContractInput> | ContractInput;
}>;
export type RecentlySearchedAssetsQuery = {
    __typename?: 'Query';
    nftCollections?: {
        __typename?: 'NftCollectionConnection';
        edges: Array<{
            __typename?: 'NftCollectionEdge';
            node: {
                __typename?: 'NftCollection';
                collectionId: string;
                isVerified?: boolean | undefined;
                name?: string | undefined;
                numAssets?: number | undefined;
                image?: {
                    __typename?: 'Image';
                    url: string;
                } | undefined;
                nftContracts?: Array<{
                    __typename?: 'NftContract';
                    address: string;
                }> | undefined;
                markets?: Array<{
                    __typename?: 'NftCollectionMarket';
                    floorPrice?: {
                        __typename?: 'TimestampedAmount';
                        currency?: Currency | undefined;
                        value: number;
                    } | undefined;
                }> | undefined;
            };
        }>;
    } | undefined;
    tokens?: Array<{
        __typename?: 'Token';
        id: string;
        decimals?: number | undefined;
        name?: string | undefined;
        chain: Chain;
        standard?: TokenStandard | undefined;
        address?: string | undefined;
        symbol?: string | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            result?: ProtectionResult | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
            pricePercentChange?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
            volume24H?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
        } | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            logoUrl?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
        } | undefined;
    } | undefined> | undefined;
};
export type SimpleTokenDetailsFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    chain: Chain;
    decimals?: number | undefined;
    name?: string | undefined;
    standard?: TokenStandard | undefined;
    symbol?: string | undefined;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        isSpam?: boolean | undefined;
        logoUrl?: string | undefined;
        name?: string | undefined;
        safetyLevel?: SafetyLevel | undefined;
    } | undefined;
    feeData?: {
        __typename?: 'FeeData';
        buyFeeBps?: string | undefined;
        sellFeeBps?: string | undefined;
    } | undefined;
    protectionInfo?: {
        __typename?: 'ProtectionInfo';
        result?: ProtectionResult | undefined;
        attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
        blockaidFees?: {
            __typename?: 'BlockaidFees';
            buy?: number | undefined;
            sell?: number | undefined;
            transfer?: number | undefined;
        } | undefined;
    } | undefined;
};
export type TokenSpotPriceQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenSpotPriceQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        name?: string | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            markets?: Array<{
                __typename?: 'TokenProjectMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined> | undefined;
        } | undefined;
    } | undefined;
};
export type UniswapPricesQueryVariables = Exact<{
    contracts: Array<ContractInput> | ContractInput;
}>;
export type UniswapPricesQuery = {
    __typename?: 'Query';
    tokens?: Array<{
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        standard?: TokenStandard | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            markets?: Array<{
                __typename?: 'TokenProjectMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined> | undefined;
        } | undefined;
    } | undefined> | undefined;
};
export type NftAssetPartsFragment = {
    __typename?: 'NftAsset';
    id: string;
    name?: string | undefined;
    isSpam?: boolean | undefined;
    tokenId: string;
    nftContract?: {
        __typename?: 'NftContract';
        id: string;
        chain: Chain;
        address: string;
    } | undefined;
    image?: {
        __typename?: 'Image';
        id: string;
        url: string;
    } | undefined;
    collection?: {
        __typename?: 'NftCollection';
        id: string;
        name?: string | undefined;
    } | undefined;
};
export type NftTransferPartsFragment = {
    __typename?: 'NftTransfer';
    id: string;
    nftStandard: NftStandard;
    sender: string;
    recipient: string;
    direction: TransactionDirection;
    asset: {
        __typename?: 'NftAsset';
        id: string;
        name?: string | undefined;
        isSpam?: boolean | undefined;
        tokenId: string;
        nftContract?: {
            __typename?: 'NftContract';
            id: string;
            chain: Chain;
            address: string;
        } | undefined;
        image?: {
            __typename?: 'Image';
            id: string;
            url: string;
        } | undefined;
        collection?: {
            __typename?: 'NftCollection';
            id: string;
            name?: string | undefined;
        } | undefined;
    };
};
export type TokenAssetPartsFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    chain: Chain;
    symbol?: string | undefined;
    name?: string | undefined;
    decimals?: number | undefined;
    standard?: TokenStandard | undefined;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        name?: string | undefined;
        safetyLevel?: SafetyLevel | undefined;
        logoUrl?: string | undefined;
        isSpam?: boolean | undefined;
        logo?: {
            __typename?: 'Image';
            id: string;
            url: string;
        } | undefined;
    } | undefined;
};
export type TokenTransferPartsFragment = {
    __typename?: 'TokenTransfer';
    id: string;
    tokenStandard: TokenStandard;
    quantity: string;
    sender: string;
    recipient: string;
    direction: TransactionDirection;
    asset: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        symbol?: string | undefined;
        name?: string | undefined;
        decimals?: number | undefined;
        standard?: TokenStandard | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            logoUrl?: string | undefined;
            isSpam?: boolean | undefined;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    };
    transactedValue?: {
        __typename?: 'Amount';
        id: string;
        currency?: Currency | undefined;
        value: number;
    } | undefined;
};
export type OnRampTransferPartsFragment = {
    __typename?: 'OnRampTransfer';
    id: string;
    tokenStandard: TokenStandard;
    amount: number;
    sourceCurrency?: string | undefined;
    sourceAmount: number;
    transactionReferenceId: string;
    externalSessionId: string;
    networkFee?: number | undefined;
    transactionFee?: number | undefined;
    totalFee?: number | undefined;
    token: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    };
    serviceProvider: {
        __typename?: 'OnRampServiceProvider';
        serviceProvider: string;
        name: string;
        url: string;
        logoLightUrl: string;
        logoDarkUrl: string;
    };
};
export type TokenApprovalPartsFragment = {
    __typename?: 'TokenApproval';
    id: string;
    tokenStandard: TokenStandard;
    approvedAddress: string;
    quantity: string;
    asset: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        symbol?: string | undefined;
        name?: string | undefined;
        decimals?: number | undefined;
        standard?: TokenStandard | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            logoUrl?: string | undefined;
            isSpam?: boolean | undefined;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    };
};
export type NftApprovalPartsFragment = {
    __typename?: 'NftApproval';
    id: string;
    nftStandard: NftStandard;
    approvedAddress: string;
    asset: {
        __typename?: 'NftAsset';
        id: string;
        name?: string | undefined;
        isSpam?: boolean | undefined;
        tokenId: string;
        nftContract?: {
            __typename?: 'NftContract';
            id: string;
            chain: Chain;
            address: string;
        } | undefined;
        image?: {
            __typename?: 'Image';
            id: string;
            url: string;
        } | undefined;
        collection?: {
            __typename?: 'NftCollection';
            id: string;
            name?: string | undefined;
        } | undefined;
    };
};
export type NftApproveForAllPartsFragment = {
    __typename?: 'NftApproveForAll';
    id: string;
    nftStandard: NftStandard;
    operatorAddress: string;
    approved: boolean;
    asset: {
        __typename?: 'NftAsset';
        id: string;
        name?: string | undefined;
        isSpam?: boolean | undefined;
        tokenId: string;
        nftContract?: {
            __typename?: 'NftContract';
            id: string;
            chain: Chain;
            address: string;
        } | undefined;
        image?: {
            __typename?: 'Image';
            id: string;
            url: string;
        } | undefined;
        collection?: {
            __typename?: 'NftCollection';
            id: string;
            name?: string | undefined;
        } | undefined;
    };
};
export type TransactionPartsFragment = {
    __typename?: 'Transaction';
    id: string;
    blockNumber: number;
    hash: string;
    status: TransactionStatus;
    to: string;
    from: string;
    nonce: number;
};
export type TransactionDetailsPartsFragment = {
    __typename?: 'TransactionDetails';
    id: string;
    type: TransactionType;
    from: string;
    to: string;
    hash: string;
    nonce: number;
    status: TransactionStatus;
    assetChanges: Array<{
        __typename: 'NftApproval';
        id: string;
        nftStandard: NftStandard;
        approvedAddress: string;
        asset: {
            __typename?: 'NftAsset';
            id: string;
            name?: string | undefined;
            isSpam?: boolean | undefined;
            tokenId: string;
            nftContract?: {
                __typename?: 'NftContract';
                id: string;
                chain: Chain;
                address: string;
            } | undefined;
            image?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
            collection?: {
                __typename?: 'NftCollection';
                id: string;
                name?: string | undefined;
            } | undefined;
        };
    } | {
        __typename: 'NftApproveForAll';
        id: string;
        nftStandard: NftStandard;
        operatorAddress: string;
        approved: boolean;
        asset: {
            __typename?: 'NftAsset';
            id: string;
            name?: string | undefined;
            isSpam?: boolean | undefined;
            tokenId: string;
            nftContract?: {
                __typename?: 'NftContract';
                id: string;
                chain: Chain;
                address: string;
            } | undefined;
            image?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
            collection?: {
                __typename?: 'NftCollection';
                id: string;
                name?: string | undefined;
            } | undefined;
        };
    } | {
        __typename: 'NftTransfer';
        id: string;
        nftStandard: NftStandard;
        sender: string;
        recipient: string;
        direction: TransactionDirection;
        asset: {
            __typename?: 'NftAsset';
            id: string;
            name?: string | undefined;
            isSpam?: boolean | undefined;
            tokenId: string;
            nftContract?: {
                __typename?: 'NftContract';
                id: string;
                chain: Chain;
                address: string;
            } | undefined;
            image?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
            collection?: {
                __typename?: 'NftCollection';
                id: string;
                name?: string | undefined;
            } | undefined;
        };
    } | {
        __typename: 'OffRampTransfer';
    } | {
        __typename: 'OnRampTransfer';
        id: string;
        tokenStandard: TokenStandard;
        amount: number;
        sourceCurrency?: string | undefined;
        sourceAmount: number;
        transactionReferenceId: string;
        externalSessionId: string;
        networkFee?: number | undefined;
        transactionFee?: number | undefined;
        totalFee?: number | undefined;
        token: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        };
        serviceProvider: {
            __typename?: 'OnRampServiceProvider';
            serviceProvider: string;
            name: string;
            url: string;
            logoLightUrl: string;
            logoDarkUrl: string;
        };
    } | {
        __typename: 'TokenApproval';
        id: string;
        tokenStandard: TokenStandard;
        approvedAddress: string;
        quantity: string;
        asset: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            symbol?: string | undefined;
            name?: string | undefined;
            decimals?: number | undefined;
            standard?: TokenStandard | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                logoUrl?: string | undefined;
                isSpam?: boolean | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
    } | {
        __typename: 'TokenTransfer';
        id: string;
        tokenStandard: TokenStandard;
        quantity: string;
        sender: string;
        recipient: string;
        direction: TransactionDirection;
        asset: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            symbol?: string | undefined;
            name?: string | undefined;
            decimals?: number | undefined;
            standard?: TokenStandard | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                logoUrl?: string | undefined;
                isSpam?: boolean | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        transactedValue?: {
            __typename?: 'Amount';
            id: string;
            currency?: Currency | undefined;
            value: number;
        } | undefined;
    } | undefined>;
};
export type OnRampTransactionDetailsPartsFragment = {
    __typename?: 'OnRampTransactionDetails';
    id: string;
    status: TransactionStatus;
    receiverAddress: string;
    onRampTransfer: {
        __typename?: 'OnRampTransfer';
        id: string;
        amount: number;
        sourceCurrency?: string | undefined;
        sourceAmount: number;
        transactionReferenceId: string;
        externalSessionId: string;
        token: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        };
        serviceProvider: {
            __typename?: 'OnRampServiceProvider';
            serviceProvider: string;
            name: string;
            url: string;
            logoLightUrl: string;
            logoDarkUrl: string;
        };
    };
};
export type SwapOrderDetailsPartsFragment = {
    __typename?: 'SwapOrderDetails';
    id: string;
    offerer: string;
    hash: string;
    expiry: number;
    swapOrderType: SwapOrderType;
    encodedOrder: string;
    inputTokenQuantity: string;
    outputTokenQuantity: string;
    orderStatus: SwapOrderStatus;
    inputToken: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        symbol?: string | undefined;
        name?: string | undefined;
        decimals?: number | undefined;
        standard?: TokenStandard | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            logoUrl?: string | undefined;
            isSpam?: boolean | undefined;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    };
    outputToken: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        symbol?: string | undefined;
        name?: string | undefined;
        decimals?: number | undefined;
        standard?: TokenStandard | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            logoUrl?: string | undefined;
            isSpam?: boolean | undefined;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    };
};
export type AssetActivityPartsFragment = {
    __typename?: 'AssetActivity';
    id: string;
    timestamp: number;
    chain: Chain;
    details: {
        __typename: 'OffRampTransactionDetails';
    } | {
        __typename: 'OnRampTransactionDetails';
        id: string;
        status: TransactionStatus;
        receiverAddress: string;
        onRampTransfer: {
            __typename?: 'OnRampTransfer';
            id: string;
            amount: number;
            sourceCurrency?: string | undefined;
            sourceAmount: number;
            transactionReferenceId: string;
            externalSessionId: string;
            token: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                name?: string | undefined;
                standard?: TokenStandard | undefined;
                symbol?: string | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    isSpam?: boolean | undefined;
                    logoUrl?: string | undefined;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                } | undefined;
                feeData?: {
                    __typename?: 'FeeData';
                    buyFeeBps?: string | undefined;
                    sellFeeBps?: string | undefined;
                } | undefined;
                protectionInfo?: {
                    __typename?: 'ProtectionInfo';
                    result?: ProtectionResult | undefined;
                    attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                    blockaidFees?: {
                        __typename?: 'BlockaidFees';
                        buy?: number | undefined;
                        sell?: number | undefined;
                        transfer?: number | undefined;
                    } | undefined;
                } | undefined;
            };
            serviceProvider: {
                __typename?: 'OnRampServiceProvider';
                serviceProvider: string;
                name: string;
                url: string;
                logoLightUrl: string;
                logoDarkUrl: string;
            };
        };
    } | {
        __typename: 'SwapOrderDetails';
        id: string;
        offerer: string;
        hash: string;
        expiry: number;
        swapOrderType: SwapOrderType;
        encodedOrder: string;
        inputTokenQuantity: string;
        outputTokenQuantity: string;
        orderStatus: SwapOrderStatus;
        inputToken: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            symbol?: string | undefined;
            name?: string | undefined;
            decimals?: number | undefined;
            standard?: TokenStandard | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                logoUrl?: string | undefined;
                isSpam?: boolean | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        outputToken: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            symbol?: string | undefined;
            name?: string | undefined;
            decimals?: number | undefined;
            standard?: TokenStandard | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                logoUrl?: string | undefined;
                isSpam?: boolean | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
    } | {
        __typename: 'TransactionDetails';
        id: string;
        type: TransactionType;
        from: string;
        to: string;
        hash: string;
        nonce: number;
        status: TransactionStatus;
        assetChanges: Array<{
            __typename: 'NftApproval';
            id: string;
            nftStandard: NftStandard;
            approvedAddress: string;
            asset: {
                __typename?: 'NftAsset';
                id: string;
                name?: string | undefined;
                isSpam?: boolean | undefined;
                tokenId: string;
                nftContract?: {
                    __typename?: 'NftContract';
                    id: string;
                    chain: Chain;
                    address: string;
                } | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
                collection?: {
                    __typename?: 'NftCollection';
                    id: string;
                    name?: string | undefined;
                } | undefined;
            };
        } | {
            __typename: 'NftApproveForAll';
            id: string;
            nftStandard: NftStandard;
            operatorAddress: string;
            approved: boolean;
            asset: {
                __typename?: 'NftAsset';
                id: string;
                name?: string | undefined;
                isSpam?: boolean | undefined;
                tokenId: string;
                nftContract?: {
                    __typename?: 'NftContract';
                    id: string;
                    chain: Chain;
                    address: string;
                } | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
                collection?: {
                    __typename?: 'NftCollection';
                    id: string;
                    name?: string | undefined;
                } | undefined;
            };
        } | {
            __typename: 'NftTransfer';
            id: string;
            nftStandard: NftStandard;
            sender: string;
            recipient: string;
            direction: TransactionDirection;
            asset: {
                __typename?: 'NftAsset';
                id: string;
                name?: string | undefined;
                isSpam?: boolean | undefined;
                tokenId: string;
                nftContract?: {
                    __typename?: 'NftContract';
                    id: string;
                    chain: Chain;
                    address: string;
                } | undefined;
                image?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
                collection?: {
                    __typename?: 'NftCollection';
                    id: string;
                    name?: string | undefined;
                } | undefined;
            };
        } | {
            __typename: 'OffRampTransfer';
        } | {
            __typename: 'OnRampTransfer';
            id: string;
            tokenStandard: TokenStandard;
            amount: number;
            sourceCurrency?: string | undefined;
            sourceAmount: number;
            transactionReferenceId: string;
            externalSessionId: string;
            networkFee?: number | undefined;
            transactionFee?: number | undefined;
            totalFee?: number | undefined;
            token: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                name?: string | undefined;
                standard?: TokenStandard | undefined;
                symbol?: string | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    isSpam?: boolean | undefined;
                    logoUrl?: string | undefined;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                } | undefined;
                feeData?: {
                    __typename?: 'FeeData';
                    buyFeeBps?: string | undefined;
                    sellFeeBps?: string | undefined;
                } | undefined;
                protectionInfo?: {
                    __typename?: 'ProtectionInfo';
                    result?: ProtectionResult | undefined;
                    attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                    blockaidFees?: {
                        __typename?: 'BlockaidFees';
                        buy?: number | undefined;
                        sell?: number | undefined;
                        transfer?: number | undefined;
                    } | undefined;
                } | undefined;
            };
            serviceProvider: {
                __typename?: 'OnRampServiceProvider';
                serviceProvider: string;
                name: string;
                url: string;
                logoLightUrl: string;
                logoDarkUrl: string;
            };
        } | {
            __typename: 'TokenApproval';
            id: string;
            tokenStandard: TokenStandard;
            approvedAddress: string;
            quantity: string;
            asset: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                symbol?: string | undefined;
                name?: string | undefined;
                decimals?: number | undefined;
                standard?: TokenStandard | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                    logoUrl?: string | undefined;
                    isSpam?: boolean | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
        } | {
            __typename: 'TokenTransfer';
            id: string;
            tokenStandard: TokenStandard;
            quantity: string;
            sender: string;
            recipient: string;
            direction: TransactionDirection;
            asset: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                symbol?: string | undefined;
                name?: string | undefined;
                decimals?: number | undefined;
                standard?: TokenStandard | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                    logoUrl?: string | undefined;
                    isSpam?: boolean | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            transactedValue?: {
                __typename?: 'Amount';
                id: string;
                currency?: Currency | undefined;
                value: number;
            } | undefined;
        } | undefined>;
    };
};
export type ActivityWebQueryVariables = Exact<{
    account: Scalars['String'];
    chains: Array<Chain> | Chain;
    onRampTransactionIDs?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
    includeOffChain: Scalars['Boolean'];
}>;
export type ActivityWebQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        assetActivities?: Array<{
            __typename?: 'AssetActivity';
            id: string;
            timestamp: number;
            chain: Chain;
            details: {
                __typename: 'OffRampTransactionDetails';
            } | {
                __typename: 'OnRampTransactionDetails';
                id: string;
                status: TransactionStatus;
                receiverAddress: string;
                onRampTransfer: {
                    __typename?: 'OnRampTransfer';
                    id: string;
                    amount: number;
                    sourceCurrency?: string | undefined;
                    sourceAmount: number;
                    transactionReferenceId: string;
                    externalSessionId: string;
                    token: {
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        chain: Chain;
                        decimals?: number | undefined;
                        name?: string | undefined;
                        standard?: TokenStandard | undefined;
                        symbol?: string | undefined;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            isSpam?: boolean | undefined;
                            logoUrl?: string | undefined;
                            name?: string | undefined;
                            safetyLevel?: SafetyLevel | undefined;
                        } | undefined;
                        feeData?: {
                            __typename?: 'FeeData';
                            buyFeeBps?: string | undefined;
                            sellFeeBps?: string | undefined;
                        } | undefined;
                        protectionInfo?: {
                            __typename?: 'ProtectionInfo';
                            result?: ProtectionResult | undefined;
                            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                            blockaidFees?: {
                                __typename?: 'BlockaidFees';
                                buy?: number | undefined;
                                sell?: number | undefined;
                                transfer?: number | undefined;
                            } | undefined;
                        } | undefined;
                    };
                    serviceProvider: {
                        __typename?: 'OnRampServiceProvider';
                        serviceProvider: string;
                        name: string;
                        url: string;
                        logoLightUrl: string;
                        logoDarkUrl: string;
                    };
                };
            } | {
                __typename: 'SwapOrderDetails';
                id: string;
                offerer: string;
                hash: string;
                expiry: number;
                swapOrderType: SwapOrderType;
                encodedOrder: string;
                inputTokenQuantity: string;
                outputTokenQuantity: string;
                orderStatus: SwapOrderStatus;
                inputToken: {
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    chain: Chain;
                    symbol?: string | undefined;
                    name?: string | undefined;
                    decimals?: number | undefined;
                    standard?: TokenStandard | undefined;
                    project?: {
                        __typename?: 'TokenProject';
                        id: string;
                        name?: string | undefined;
                        safetyLevel?: SafetyLevel | undefined;
                        logoUrl?: string | undefined;
                        isSpam?: boolean | undefined;
                        logo?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                    } | undefined;
                };
                outputToken: {
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    chain: Chain;
                    symbol?: string | undefined;
                    name?: string | undefined;
                    decimals?: number | undefined;
                    standard?: TokenStandard | undefined;
                    project?: {
                        __typename?: 'TokenProject';
                        id: string;
                        name?: string | undefined;
                        safetyLevel?: SafetyLevel | undefined;
                        logoUrl?: string | undefined;
                        isSpam?: boolean | undefined;
                        logo?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                    } | undefined;
                };
            } | {
                __typename: 'TransactionDetails';
                id: string;
                type: TransactionType;
                from: string;
                to: string;
                hash: string;
                nonce: number;
                status: TransactionStatus;
                assetChanges: Array<{
                    __typename: 'NftApproval';
                    id: string;
                    nftStandard: NftStandard;
                    approvedAddress: string;
                    asset: {
                        __typename?: 'NftAsset';
                        id: string;
                        name?: string | undefined;
                        isSpam?: boolean | undefined;
                        tokenId: string;
                        nftContract?: {
                            __typename?: 'NftContract';
                            id: string;
                            chain: Chain;
                            address: string;
                        } | undefined;
                        image?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                        collection?: {
                            __typename?: 'NftCollection';
                            id: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                } | {
                    __typename: 'NftApproveForAll';
                    id: string;
                    nftStandard: NftStandard;
                    operatorAddress: string;
                    approved: boolean;
                    asset: {
                        __typename?: 'NftAsset';
                        id: string;
                        name?: string | undefined;
                        isSpam?: boolean | undefined;
                        tokenId: string;
                        nftContract?: {
                            __typename?: 'NftContract';
                            id: string;
                            chain: Chain;
                            address: string;
                        } | undefined;
                        image?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                        collection?: {
                            __typename?: 'NftCollection';
                            id: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                } | {
                    __typename: 'NftTransfer';
                    id: string;
                    nftStandard: NftStandard;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'NftAsset';
                        id: string;
                        name?: string | undefined;
                        isSpam?: boolean | undefined;
                        tokenId: string;
                        nftContract?: {
                            __typename?: 'NftContract';
                            id: string;
                            chain: Chain;
                            address: string;
                        } | undefined;
                        image?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                        collection?: {
                            __typename?: 'NftCollection';
                            id: string;
                            name?: string | undefined;
                        } | undefined;
                    };
                } | {
                    __typename: 'OffRampTransfer';
                } | {
                    __typename: 'OnRampTransfer';
                    id: string;
                    tokenStandard: TokenStandard;
                    amount: number;
                    sourceCurrency?: string | undefined;
                    sourceAmount: number;
                    transactionReferenceId: string;
                    externalSessionId: string;
                    networkFee?: number | undefined;
                    transactionFee?: number | undefined;
                    totalFee?: number | undefined;
                    token: {
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        chain: Chain;
                        decimals?: number | undefined;
                        name?: string | undefined;
                        standard?: TokenStandard | undefined;
                        symbol?: string | undefined;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            isSpam?: boolean | undefined;
                            logoUrl?: string | undefined;
                            name?: string | undefined;
                            safetyLevel?: SafetyLevel | undefined;
                        } | undefined;
                        feeData?: {
                            __typename?: 'FeeData';
                            buyFeeBps?: string | undefined;
                            sellFeeBps?: string | undefined;
                        } | undefined;
                        protectionInfo?: {
                            __typename?: 'ProtectionInfo';
                            result?: ProtectionResult | undefined;
                            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                            blockaidFees?: {
                                __typename?: 'BlockaidFees';
                                buy?: number | undefined;
                                sell?: number | undefined;
                                transfer?: number | undefined;
                            } | undefined;
                        } | undefined;
                    };
                    serviceProvider: {
                        __typename?: 'OnRampServiceProvider';
                        serviceProvider: string;
                        name: string;
                        url: string;
                        logoLightUrl: string;
                        logoDarkUrl: string;
                    };
                } | {
                    __typename: 'TokenApproval';
                    id: string;
                    tokenStandard: TokenStandard;
                    approvedAddress: string;
                    quantity: string;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        chain: Chain;
                        symbol?: string | undefined;
                        name?: string | undefined;
                        decimals?: number | undefined;
                        standard?: TokenStandard | undefined;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            name?: string | undefined;
                            safetyLevel?: SafetyLevel | undefined;
                            logoUrl?: string | undefined;
                            isSpam?: boolean | undefined;
                            logo?: {
                                __typename?: 'Image';
                                id: string;
                                url: string;
                            } | undefined;
                        } | undefined;
                    };
                } | {
                    __typename: 'TokenTransfer';
                    id: string;
                    tokenStandard: TokenStandard;
                    quantity: string;
                    sender: string;
                    recipient: string;
                    direction: TransactionDirection;
                    asset: {
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        chain: Chain;
                        symbol?: string | undefined;
                        name?: string | undefined;
                        decimals?: number | undefined;
                        standard?: TokenStandard | undefined;
                        project?: {
                            __typename?: 'TokenProject';
                            id: string;
                            name?: string | undefined;
                            safetyLevel?: SafetyLevel | undefined;
                            logoUrl?: string | undefined;
                            isSpam?: boolean | undefined;
                            logo?: {
                                __typename?: 'Image';
                                id: string;
                                url: string;
                            } | undefined;
                        } | undefined;
                    };
                    transactedValue?: {
                        __typename?: 'Amount';
                        id: string;
                        currency?: Currency | undefined;
                        value: number;
                    } | undefined;
                } | undefined>;
            };
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type OnAssetActivitySubscriptionVariables = Exact<{
    subscriptionId: Scalars['ID'];
    account: Scalars['String'];
}>;
export type OnAssetActivitySubscription = {
    __typename?: 'Subscription';
    onAssetActivity?: {
        __typename?: 'AssetActivity';
        id: string;
        timestamp: number;
        chain: Chain;
        details: {
            __typename: 'OffRampTransactionDetails';
        } | {
            __typename: 'OnRampTransactionDetails';
            id: string;
            status: TransactionStatus;
            receiverAddress: string;
            onRampTransfer: {
                __typename?: 'OnRampTransfer';
                id: string;
                amount: number;
                sourceCurrency?: string | undefined;
                sourceAmount: number;
                transactionReferenceId: string;
                externalSessionId: string;
                token: {
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    chain: Chain;
                    decimals?: number | undefined;
                    name?: string | undefined;
                    standard?: TokenStandard | undefined;
                    symbol?: string | undefined;
                    project?: {
                        __typename?: 'TokenProject';
                        id: string;
                        isSpam?: boolean | undefined;
                        logoUrl?: string | undefined;
                        name?: string | undefined;
                        safetyLevel?: SafetyLevel | undefined;
                    } | undefined;
                    feeData?: {
                        __typename?: 'FeeData';
                        buyFeeBps?: string | undefined;
                        sellFeeBps?: string | undefined;
                    } | undefined;
                    protectionInfo?: {
                        __typename?: 'ProtectionInfo';
                        result?: ProtectionResult | undefined;
                        attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                        blockaidFees?: {
                            __typename?: 'BlockaidFees';
                            buy?: number | undefined;
                            sell?: number | undefined;
                            transfer?: number | undefined;
                        } | undefined;
                    } | undefined;
                };
                serviceProvider: {
                    __typename?: 'OnRampServiceProvider';
                    serviceProvider: string;
                    name: string;
                    url: string;
                    logoLightUrl: string;
                    logoDarkUrl: string;
                };
            };
        } | {
            __typename: 'SwapOrderDetails';
            id: string;
            offerer: string;
            hash: string;
            expiry: number;
            swapOrderType: SwapOrderType;
            encodedOrder: string;
            inputTokenQuantity: string;
            outputTokenQuantity: string;
            orderStatus: SwapOrderStatus;
            inputToken: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                symbol?: string | undefined;
                name?: string | undefined;
                decimals?: number | undefined;
                standard?: TokenStandard | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                    logoUrl?: string | undefined;
                    isSpam?: boolean | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            outputToken: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                symbol?: string | undefined;
                name?: string | undefined;
                decimals?: number | undefined;
                standard?: TokenStandard | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    safetyLevel?: SafetyLevel | undefined;
                    logoUrl?: string | undefined;
                    isSpam?: boolean | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
        } | {
            __typename: 'TransactionDetails';
            id: string;
            type: TransactionType;
            from: string;
            to: string;
            hash: string;
            nonce: number;
            status: TransactionStatus;
            assetChanges: Array<{
                __typename: 'NftApproval';
                id: string;
                nftStandard: NftStandard;
                approvedAddress: string;
                asset: {
                    __typename?: 'NftAsset';
                    id: string;
                    name?: string | undefined;
                    isSpam?: boolean | undefined;
                    tokenId: string;
                    nftContract?: {
                        __typename?: 'NftContract';
                        id: string;
                        chain: Chain;
                        address: string;
                    } | undefined;
                    image?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    collection?: {
                        __typename?: 'NftCollection';
                        id: string;
                        name?: string | undefined;
                    } | undefined;
                };
            } | {
                __typename: 'NftApproveForAll';
                id: string;
                nftStandard: NftStandard;
                operatorAddress: string;
                approved: boolean;
                asset: {
                    __typename?: 'NftAsset';
                    id: string;
                    name?: string | undefined;
                    isSpam?: boolean | undefined;
                    tokenId: string;
                    nftContract?: {
                        __typename?: 'NftContract';
                        id: string;
                        chain: Chain;
                        address: string;
                    } | undefined;
                    image?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    collection?: {
                        __typename?: 'NftCollection';
                        id: string;
                        name?: string | undefined;
                    } | undefined;
                };
            } | {
                __typename: 'NftTransfer';
                id: string;
                nftStandard: NftStandard;
                sender: string;
                recipient: string;
                direction: TransactionDirection;
                asset: {
                    __typename?: 'NftAsset';
                    id: string;
                    name?: string | undefined;
                    isSpam?: boolean | undefined;
                    tokenId: string;
                    nftContract?: {
                        __typename?: 'NftContract';
                        id: string;
                        chain: Chain;
                        address: string;
                    } | undefined;
                    image?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    collection?: {
                        __typename?: 'NftCollection';
                        id: string;
                        name?: string | undefined;
                    } | undefined;
                };
            } | {
                __typename: 'OffRampTransfer';
            } | {
                __typename: 'OnRampTransfer';
                id: string;
                tokenStandard: TokenStandard;
                amount: number;
                sourceCurrency?: string | undefined;
                sourceAmount: number;
                transactionReferenceId: string;
                externalSessionId: string;
                networkFee?: number | undefined;
                transactionFee?: number | undefined;
                totalFee?: number | undefined;
                token: {
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    chain: Chain;
                    decimals?: number | undefined;
                    name?: string | undefined;
                    standard?: TokenStandard | undefined;
                    symbol?: string | undefined;
                    project?: {
                        __typename?: 'TokenProject';
                        id: string;
                        isSpam?: boolean | undefined;
                        logoUrl?: string | undefined;
                        name?: string | undefined;
                        safetyLevel?: SafetyLevel | undefined;
                    } | undefined;
                    feeData?: {
                        __typename?: 'FeeData';
                        buyFeeBps?: string | undefined;
                        sellFeeBps?: string | undefined;
                    } | undefined;
                    protectionInfo?: {
                        __typename?: 'ProtectionInfo';
                        result?: ProtectionResult | undefined;
                        attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                        blockaidFees?: {
                            __typename?: 'BlockaidFees';
                            buy?: number | undefined;
                            sell?: number | undefined;
                            transfer?: number | undefined;
                        } | undefined;
                    } | undefined;
                };
                serviceProvider: {
                    __typename?: 'OnRampServiceProvider';
                    serviceProvider: string;
                    name: string;
                    url: string;
                    logoLightUrl: string;
                    logoDarkUrl: string;
                };
            } | {
                __typename: 'TokenApproval';
                id: string;
                tokenStandard: TokenStandard;
                approvedAddress: string;
                quantity: string;
                asset: {
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    chain: Chain;
                    symbol?: string | undefined;
                    name?: string | undefined;
                    decimals?: number | undefined;
                    standard?: TokenStandard | undefined;
                    project?: {
                        __typename?: 'TokenProject';
                        id: string;
                        name?: string | undefined;
                        safetyLevel?: SafetyLevel | undefined;
                        logoUrl?: string | undefined;
                        isSpam?: boolean | undefined;
                        logo?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                    } | undefined;
                };
            } | {
                __typename: 'TokenTransfer';
                id: string;
                tokenStandard: TokenStandard;
                quantity: string;
                sender: string;
                recipient: string;
                direction: TransactionDirection;
                asset: {
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    chain: Chain;
                    symbol?: string | undefined;
                    name?: string | undefined;
                    decimals?: number | undefined;
                    standard?: TokenStandard | undefined;
                    project?: {
                        __typename?: 'TokenProject';
                        id: string;
                        name?: string | undefined;
                        safetyLevel?: SafetyLevel | undefined;
                        logoUrl?: string | undefined;
                        isSpam?: boolean | undefined;
                        logo?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                    } | undefined;
                };
                transactedValue?: {
                    __typename?: 'Amount';
                    id: string;
                    currency?: Currency | undefined;
                    value: number;
                } | undefined;
            } | undefined>;
        };
    } | undefined;
};
export type AllV3TicksQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
}>;
export type AllV3TicksQuery = {
    __typename?: 'Query';
    v3Pool?: {
        __typename?: 'V3Pool';
        id: string;
        ticks?: Array<{
            __typename?: 'V3PoolTick';
            liquidityNet?: string | undefined;
            price0?: string | undefined;
            price1?: string | undefined;
            tick?: number | undefined;
        } | undefined> | undefined;
    } | undefined;
};
export type AllV4TicksQueryVariables = Exact<{
    chain: Chain;
    poolId: Scalars['String'];
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
}>;
export type AllV4TicksQuery = {
    __typename?: 'Query';
    v4Pool?: {
        __typename?: 'V4Pool';
        id: string;
        ticks?: Array<{
            __typename?: 'V4PoolTick';
            liquidityNet?: string | undefined;
            price0?: string | undefined;
            price1?: string | undefined;
            tick?: number | undefined;
        } | undefined> | undefined;
    } | undefined;
};
export type FeeTierDistributionQueryVariables = Exact<{
    chain: Chain;
    token0: Scalars['String'];
    token1: Scalars['String'];
}>;
export type FeeTierDistributionQuery = {
    __typename?: 'Query';
    v3PoolsForTokenPair?: Array<{
        __typename?: 'V3Pool';
        feeTier?: number | undefined;
        token0Supply?: number | undefined;
        token1Supply?: number | undefined;
    }> | undefined;
};
export type TokenPromoQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenPromoQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
            pricePercentChange?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type CollectionPromoQueryVariables = Exact<{
    addresses: Array<Scalars['String']> | Scalars['String'];
}>;
export type CollectionPromoQuery = {
    __typename?: 'Query';
    nftCollections?: {
        __typename?: 'NftCollectionConnection';
        edges: Array<{
            __typename?: 'NftCollectionEdge';
            node: {
                __typename?: 'NftCollection';
                markets?: Array<{
                    __typename?: 'NftCollectionMarket';
                    floorPricePercentChange?: {
                        __typename?: 'TimestampedAmount';
                        value: number;
                    } | undefined;
                }> | undefined;
            };
        }>;
    } | undefined;
};
export type DailyProtocolVolumeQueryVariables = Exact<{
    version: ProtocolVersion;
}>;
export type DailyProtocolVolumeQuery = {
    __typename?: 'Query';
    historicalProtocolVolume?: Array<{
        __typename?: 'TimestampedAmount';
        value: number;
    }> | undefined;
};
export type IsV3SubgraphStaleQueryVariables = Exact<{
    chain: Chain;
}>;
export type IsV3SubgraphStaleQuery = {
    __typename?: 'Query';
    isV3SubgraphStale?: boolean | undefined;
};
export type CollectionSearchQueryVariables = Exact<{
    query: Scalars['String'];
}>;
export type CollectionSearchQuery = {
    __typename?: 'Query';
    nftCollections?: {
        __typename?: 'NftCollectionConnection';
        edges: Array<{
            __typename?: 'NftCollectionEdge';
            cursor: string;
            node: {
                __typename?: 'NftCollection';
                isVerified?: boolean | undefined;
                name?: string | undefined;
                numAssets?: number | undefined;
                image?: {
                    __typename?: 'Image';
                    url: string;
                } | undefined;
                nftContracts?: Array<{
                    __typename?: 'NftContract';
                    address: string;
                    chain: Chain;
                    name?: string | undefined;
                    symbol?: string | undefined;
                    totalSupply?: number | undefined;
                }> | undefined;
                markets?: Array<{
                    __typename?: 'NftCollectionMarket';
                    floorPrice?: {
                        __typename?: 'TimestampedAmount';
                        currency?: Currency | undefined;
                        value: number;
                    } | undefined;
                }> | undefined;
            };
        }>;
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | undefined;
            hasNextPage?: boolean | undefined;
            hasPreviousPage?: boolean | undefined;
            startCursor?: string | undefined;
        };
    } | undefined;
};
export type NftBalanceQueryVariables = Exact<{
    ownerAddress: Scalars['String'];
    filter?: InputMaybe<NftBalancesFilterInput>;
    chains?: InputMaybe<Array<Chain> | Chain>;
    first?: InputMaybe<Scalars['Int']>;
    after?: InputMaybe<Scalars['String']>;
    last?: InputMaybe<Scalars['Int']>;
    before?: InputMaybe<Scalars['String']>;
}>;
export type NftBalanceQuery = {
    __typename?: 'Query';
    nftBalances?: {
        __typename?: 'NftBalanceConnection';
        edges: Array<{
            __typename?: 'NftBalanceEdge';
            node: {
                __typename?: 'NftBalance';
                listedMarketplaces?: Array<NftMarketplace> | undefined;
                ownedAsset?: {
                    __typename?: 'NftAsset';
                    id: string;
                    animationUrl?: string | undefined;
                    chain?: Chain | undefined;
                    description?: string | undefined;
                    flaggedBy?: string | undefined;
                    name?: string | undefined;
                    ownerAddress?: string | undefined;
                    suspiciousFlag?: boolean | undefined;
                    tokenId: string;
                    collection?: {
                        __typename?: 'NftCollection';
                        id: string;
                        isVerified?: boolean | undefined;
                        name?: string | undefined;
                        twitterName?: string | undefined;
                        image?: {
                            __typename?: 'Image';
                            id: string;
                            url: string;
                        } | undefined;
                        nftContracts?: Array<{
                            __typename?: 'NftContract';
                            id: string;
                            address: string;
                            chain: Chain;
                            name?: string | undefined;
                            standard?: NftStandard | undefined;
                            symbol?: string | undefined;
                            totalSupply?: number | undefined;
                        }> | undefined;
                        markets?: Array<{
                            __typename?: 'NftCollectionMarket';
                            id: string;
                            floorPrice?: {
                                __typename?: 'TimestampedAmount';
                                id: string;
                                value: number;
                            } | undefined;
                        }> | undefined;
                    } | undefined;
                    image?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    originalImage?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    smallImage?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    thumbnail?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                    listings?: {
                        __typename?: 'NftOrderConnection';
                        edges: Array<{
                            __typename?: 'NftOrderEdge';
                            node: {
                                __typename?: 'NftOrder';
                                createdAt: number;
                                marketplace: NftMarketplace;
                                endAt?: number | undefined;
                                price: {
                                    __typename?: 'Amount';
                                    id: string;
                                    value: number;
                                    currency?: Currency | undefined;
                                };
                            };
                        }>;
                    } | undefined;
                } | undefined;
                listingFees?: Array<{
                    __typename?: 'NftFee';
                    id: string;
                    payoutAddress: string;
                    basisPoints: number;
                } | undefined> | undefined;
                lastPrice?: {
                    __typename?: 'TimestampedAmount';
                    id: string;
                    currency?: Currency | undefined;
                    timestamp: number;
                    value: number;
                } | undefined;
            };
        }>;
        pageInfo: {
            __typename?: 'PageInfo';
            endCursor?: string | undefined;
            hasNextPage?: boolean | undefined;
            hasPreviousPage?: boolean | undefined;
            startCursor?: string | undefined;
        };
    } | undefined;
};
export type TokenPriceFragment = {
    __typename?: 'Token';
    id: string;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        markets?: Array<{
            __typename?: 'TokenProjectMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
        } | undefined> | undefined;
        logo?: {
            __typename?: 'Image';
            id: string;
            url: string;
        } | undefined;
    } | undefined;
    market?: {
        __typename?: 'TokenMarket';
        id: string;
        price?: {
            __typename?: 'Amount';
            id: string;
            value: number;
        } | undefined;
    } | undefined;
};
export type V3PoolQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
}>;
export type V3PoolQuery = {
    __typename?: 'Query';
    v3Pool?: {
        __typename?: 'V3Pool';
        id: string;
        protocolVersion: ProtocolVersion;
        address: string;
        feeTier?: number | undefined;
        token0Supply?: number | undefined;
        token1Supply?: number | undefined;
        txCount?: number | undefined;
        token0?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                markets?: Array<{
                    __typename?: 'TokenProjectMarket';
                    id: string;
                    price?: {
                        __typename?: 'Amount';
                        id: string;
                        value: number;
                    } | undefined;
                } | undefined> | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
            market?: {
                __typename?: 'TokenMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token1?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                markets?: Array<{
                    __typename?: 'TokenProjectMarket';
                    id: string;
                    price?: {
                        __typename?: 'Amount';
                        id: string;
                        value: number;
                    } | undefined;
                } | undefined> | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
            market?: {
                __typename?: 'TokenMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        volume24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        historicalVolume?: Array<{
            __typename?: 'TimestampedAmount';
            value: number;
            timestamp: number;
        } | undefined> | undefined;
        totalLiquidity?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        totalLiquidityPercentChange24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined;
};
export type V4PoolQueryVariables = Exact<{
    chain: Chain;
    poolId: Scalars['String'];
}>;
export type V4PoolQuery = {
    __typename?: 'Query';
    v4Pool?: {
        __typename?: 'V4Pool';
        id: string;
        protocolVersion: ProtocolVersion;
        feeTier?: number | undefined;
        poolId: string;
        token0Supply?: number | undefined;
        token1Supply?: number | undefined;
        txCount?: number | undefined;
        hook?: {
            __typename?: 'V4PoolHook';
            id: string;
            address: string;
        } | undefined;
        token0?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                markets?: Array<{
                    __typename?: 'TokenProjectMarket';
                    id: string;
                    price?: {
                        __typename?: 'Amount';
                        id: string;
                        value: number;
                    } | undefined;
                } | undefined> | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
            market?: {
                __typename?: 'TokenMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token1?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                markets?: Array<{
                    __typename?: 'TokenProjectMarket';
                    id: string;
                    price?: {
                        __typename?: 'Amount';
                        id: string;
                        value: number;
                    } | undefined;
                } | undefined> | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
            market?: {
                __typename?: 'TokenMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        volume24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        historicalVolume?: Array<{
            __typename?: 'TimestampedAmount';
            value: number;
            timestamp: number;
        } | undefined> | undefined;
        rewardsCampaign?: {
            __typename?: 'RewardsCampaign';
            id: string;
            boostedApr: number;
            startTimestamp?: number | undefined;
            endTimestamp?: number | undefined;
            totalRewardAllocation?: string | undefined;
            distributedRewards?: string | undefined;
        } | undefined;
        totalLiquidity?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        totalLiquidityPercentChange24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined;
};
export type PoolPriceHistoryQueryVariables = Exact<{
    chain: Chain;
    addressOrId: Scalars['String'];
    duration: HistoryDuration;
    isV4: Scalars['Boolean'];
    isV3: Scalars['Boolean'];
    isV2: Scalars['Boolean'];
}>;
export type PoolPriceHistoryQuery = {
    __typename?: 'Query';
    v4Pool?: {
        __typename?: 'V4Pool';
        id: string;
        priceHistory?: Array<{
            __typename?: 'TimestampedPoolPrice';
            id: string;
            token0Price: number;
            token1Price: number;
            timestamp: number;
        } | undefined> | undefined;
    } | undefined;
    v3Pool?: {
        __typename?: 'V3Pool';
        id: string;
        priceHistory?: Array<{
            __typename?: 'TimestampedPoolPrice';
            id: string;
            token0Price: number;
            token1Price: number;
            timestamp: number;
        } | undefined> | undefined;
    } | undefined;
    v2Pair?: {
        __typename?: 'V2Pair';
        id: string;
        priceHistory?: Array<{
            __typename?: 'TimestampedPoolPrice';
            id: string;
            token0Price: number;
            token1Price: number;
            timestamp: number;
        } | undefined> | undefined;
    } | undefined;
};
export type PoolVolumeHistoryQueryVariables = Exact<{
    chain: Chain;
    addressOrId: Scalars['String'];
    duration: HistoryDuration;
    isV4: Scalars['Boolean'];
    isV3: Scalars['Boolean'];
    isV2: Scalars['Boolean'];
}>;
export type PoolVolumeHistoryQuery = {
    __typename?: 'Query';
    v4Pool?: {
        __typename?: 'V4Pool';
        id: string;
        historicalVolume?: Array<{
            __typename?: 'TimestampedAmount';
            id: string;
            value: number;
            timestamp: number;
        } | undefined> | undefined;
    } | undefined;
    v3Pool?: {
        __typename?: 'V3Pool';
        id: string;
        historicalVolume?: Array<{
            __typename?: 'TimestampedAmount';
            id: string;
            value: number;
            timestamp: number;
        } | undefined> | undefined;
    } | undefined;
    v2Pair?: {
        __typename?: 'V2Pair';
        id: string;
        historicalVolume?: Array<{
            __typename?: 'TimestampedAmount';
            id: string;
            value: number;
            timestamp: number;
        } | undefined> | undefined;
    } | undefined;
};
export type V2PairQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
}>;
export type V2PairQuery = {
    __typename?: 'Query';
    v2Pair?: {
        __typename?: 'V2Pair';
        id: string;
        protocolVersion: ProtocolVersion;
        address: string;
        token0Supply?: number | undefined;
        token1Supply?: number | undefined;
        txCount?: number | undefined;
        token0?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                markets?: Array<{
                    __typename?: 'TokenProjectMarket';
                    id: string;
                    price?: {
                        __typename?: 'Amount';
                        id: string;
                        value: number;
                    } | undefined;
                } | undefined> | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
            market?: {
                __typename?: 'TokenMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token1?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
                markets?: Array<{
                    __typename?: 'TokenProjectMarket';
                    id: string;
                    price?: {
                        __typename?: 'Amount';
                        id: string;
                        value: number;
                    } | undefined;
                } | undefined> | undefined;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
            market?: {
                __typename?: 'TokenMarket';
                id: string;
                price?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                } | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        volume24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        historicalVolume?: Array<{
            __typename?: 'TimestampedAmount';
            value: number;
            timestamp: number;
        } | undefined> | undefined;
        totalLiquidity?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        totalLiquidityPercentChange24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    } | undefined;
};
export type PoolTransactionTokenFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    symbol?: string | undefined;
    chain: Chain;
    decimals?: number | undefined;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        name?: string | undefined;
        logo?: {
            __typename?: 'Image';
            id: string;
            url: string;
        } | undefined;
    } | undefined;
};
export type V4PoolTransactionsQueryVariables = Exact<{
    chain: Chain;
    poolId: Scalars['String'];
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V4PoolTransactionsQuery = {
    __typename?: 'Query';
    v4Pool?: {
        __typename?: 'V4Pool';
        id: string;
        transactions?: Array<{
            __typename?: 'PoolTransaction';
            timestamp: number;
            hash: string;
            account: string;
            token0Quantity: string;
            token1Quantity: string;
            type: PoolTransactionType;
            token0: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            token1: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            usdValue: {
                __typename?: 'Amount';
                value: number;
            };
        } | undefined> | undefined;
    } | undefined;
};
export type V3PoolTransactionsQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V3PoolTransactionsQuery = {
    __typename?: 'Query';
    v3Pool?: {
        __typename?: 'V3Pool';
        id: string;
        transactions?: Array<{
            __typename?: 'PoolTransaction';
            timestamp: number;
            hash: string;
            account: string;
            token0Quantity: string;
            token1Quantity: string;
            type: PoolTransactionType;
            token0: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            token1: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            usdValue: {
                __typename?: 'Amount';
                value: number;
            };
        } | undefined> | undefined;
    } | undefined;
};
export type V2PairTransactionsQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V2PairTransactionsQuery = {
    __typename?: 'Query';
    v2Pair?: {
        __typename?: 'V2Pair';
        id: string;
        transactions?: Array<{
            __typename?: 'PoolTransaction';
            timestamp: number;
            hash: string;
            account: string;
            token0Quantity: string;
            token1Quantity: string;
            type: PoolTransactionType;
            token0: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            token1: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            usdValue: {
                __typename?: 'Amount';
                value: number;
            };
        } | undefined> | undefined;
    } | undefined;
};
export type QuickTokenBalancePartsFragment = {
    __typename?: 'TokenBalance';
    id: string;
    quantity?: number | undefined;
    denominatedValue?: {
        __typename?: 'Amount';
        id: string;
        value: number;
        currency?: Currency | undefined;
    } | undefined;
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        standard?: TokenStandard | undefined;
    } | undefined;
};
export type PortfolioTokenBalancePartsFragment = {
    __typename?: 'TokenBalance';
    id: string;
    quantity?: number | undefined;
    denominatedValue?: {
        __typename?: 'Amount';
        id: string;
        currency?: Currency | undefined;
        value: number;
    } | undefined;
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        symbol?: string | undefined;
        name?: string | undefined;
        decimals?: number | undefined;
        standard?: TokenStandard | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            logoUrl?: string | undefined;
            isSpam?: boolean | undefined;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    tokenProjectMarket?: {
        __typename?: 'TokenProjectMarket';
        id: string;
        pricePercentChange?: {
            __typename?: 'Amount';
            id: string;
            value: number;
        } | undefined;
        tokenProject: {
            __typename?: 'TokenProject';
            id: string;
            logoUrl?: string | undefined;
            isSpam?: boolean | undefined;
        };
    } | undefined;
};
export type QuickTokenBalancesWebQueryVariables = Exact<{
    ownerAddress: Scalars['String'];
    chains: Array<Chain> | Chain;
}>;
export type QuickTokenBalancesWebQuery = {
    __typename?: 'Query';
    portfolios?: Array<{
        __typename?: 'Portfolio';
        id: string;
        tokenBalances?: Array<{
            __typename?: 'TokenBalance';
            id: string;
            quantity?: number | undefined;
            denominatedValue?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
            token?: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                chain: Chain;
                standard?: TokenStandard | undefined;
            } | undefined;
        } | undefined> | undefined;
    } | undefined> | undefined;
};
export type SearchPopularTokensWebQueryVariables = Exact<{
    chain: Chain;
}>;
export type SearchPopularTokensWebQuery = {
    __typename?: 'Query';
    topTokens?: Array<{
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        name?: string | undefined;
        standard?: TokenStandard | undefined;
        symbol?: string | undefined;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
            pricePercentChange?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
            volume24H?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
        } | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            isSpam?: boolean | undefined;
            logoUrl?: string | undefined;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined> | undefined;
};
export type SearchTokensWebQueryVariables = Exact<{
    searchQuery: Scalars['String'];
    chains?: InputMaybe<Array<Chain> | Chain>;
    tokenSearchV2Enabled?: InputMaybe<Scalars['Boolean']>;
}>;
export type SearchTokensWebQuery = {
    __typename?: 'Query';
    searchTokens?: Array<{
        __typename?: 'Token';
        id: string;
        decimals?: number | undefined;
        name?: string | undefined;
        chain: Chain;
        standard?: TokenStandard | undefined;
        address?: string | undefined;
        symbol?: string | undefined;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
            pricePercentChange?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
            volume24H?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
        } | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            safetyLevel?: SafetyLevel | undefined;
            logoUrl?: string | undefined;
            isSpam?: boolean | undefined;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
        feeData?: {
            __typename?: 'FeeData';
            buyFeeBps?: string | undefined;
            sellFeeBps?: string | undefined;
        } | undefined;
        protectionInfo?: {
            __typename?: 'ProtectionInfo';
            result?: ProtectionResult | undefined;
            attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
            blockaidFees?: {
                __typename?: 'BlockaidFees';
                buy?: number | undefined;
                sell?: number | undefined;
                transfer?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined> | undefined;
};
export type TokenWebQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenWebQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        decimals?: number | undefined;
        name?: string | undefined;
        chain: Chain;
        address?: string | undefined;
        symbol?: string | undefined;
        standard?: TokenStandard | undefined;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            totalValueLocked?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
            price?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
            volume24H?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
            priceHigh52W?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
            priceLow52W?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
        } | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            description?: string | undefined;
            homepageUrl?: string | undefined;
            twitterName?: string | undefined;
            logoUrl?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                id: string;
                chain: Chain;
                address?: string | undefined;
            }>;
            markets?: Array<{
                __typename?: 'TokenProjectMarket';
                id: string;
                fullyDilutedValuation?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                    currency?: Currency | undefined;
                } | undefined;
                marketCap?: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                    currency?: Currency | undefined;
                } | undefined;
            } | undefined> | undefined;
        } | undefined;
    } | undefined;
};
export type TokenProjectWebQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
}>;
export type TokenProjectWebQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        decimals?: number | undefined;
        name?: string | undefined;
        chain: Chain;
        address?: string | undefined;
        symbol?: string | undefined;
        standard?: TokenStandard | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            description?: string | undefined;
            homepageUrl?: string | undefined;
            twitterName?: string | undefined;
            logoUrl?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                id: string;
                chain: Chain;
                address?: string | undefined;
            }>;
        } | undefined;
    } | undefined;
};
export type CandlestickOhlcFragment = {
    __typename?: 'TimestampedOhlc';
    id: string;
    timestamp: number;
    open: {
        __typename?: 'Amount';
        id: string;
        value: number;
    };
    high: {
        __typename?: 'Amount';
        id: string;
        value: number;
    };
    low: {
        __typename?: 'Amount';
        id: string;
        value: number;
    };
    close: {
        __typename?: 'Amount';
        id: string;
        value: number;
    };
};
export type PriceHistoryFallbackFragment = {
    __typename?: 'TimestampedAmount';
    id: string;
    value: number;
    timestamp: number;
};
export type TokenPriceQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
    duration: HistoryDuration;
    fallback?: InputMaybe<Scalars['Boolean']>;
}>;
export type TokenPriceQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            price?: {
                __typename?: 'Amount';
                id: string;
                value: number;
            } | undefined;
            ohlc?: Array<{
                __typename?: 'TimestampedOhlc';
                id: string;
                timestamp: number;
                open: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                };
                high: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                };
                low: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                };
                close: {
                    __typename?: 'Amount';
                    id: string;
                    value: number;
                };
            } | undefined> | undefined;
            priceHistory?: Array<{
                __typename?: 'TimestampedAmount';
                id: string;
                value: number;
                timestamp: number;
            } | undefined> | undefined;
        } | undefined;
    } | undefined;
};
export type TokenHistoricalVolumesQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
    duration: HistoryDuration;
}>;
export type TokenHistoricalVolumesQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            historicalVolume?: Array<{
                __typename?: 'TimestampedAmount';
                id: string;
                timestamp: number;
                value: number;
            } | undefined> | undefined;
        } | undefined;
    } | undefined;
};
export type TokenHistoricalTvlsQueryVariables = Exact<{
    chain: Chain;
    address?: InputMaybe<Scalars['String']>;
    duration: HistoryDuration;
}>;
export type TokenHistoricalTvlsQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        chain: Chain;
        market?: {
            __typename?: 'TokenMarket';
            id: string;
            historicalTvl?: Array<{
                __typename?: 'TimestampedAmount';
                id: string;
                timestamp: number;
                value: number;
            } | undefined> | undefined;
            totalValueLocked?: {
                __typename?: 'Amount';
                id: string;
                value: number;
                currency?: Currency | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type V4TokenTransactionsQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V4TokenTransactionsQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        symbol?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        v4Transactions?: Array<{
            __typename?: 'PoolTransaction';
            id: string;
            chain: Chain;
            protocolVersion: ProtocolVersion;
            timestamp: number;
            hash: string;
            account: string;
            token0Quantity: string;
            token1Quantity: string;
            type: PoolTransactionType;
            token0: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        symbol?: string | undefined;
                        chain: Chain;
                    }>;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            token1: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        symbol?: string | undefined;
                        chain: Chain;
                    }>;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            usdValue: {
                __typename?: 'Amount';
                id: string;
                value: number;
            };
        } | undefined> | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
            }>;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type V3TokenTransactionsQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V3TokenTransactionsQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        symbol?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        v3Transactions?: Array<{
            __typename?: 'PoolTransaction';
            id: string;
            chain: Chain;
            protocolVersion: ProtocolVersion;
            timestamp: number;
            hash: string;
            account: string;
            token0Quantity: string;
            token1Quantity: string;
            type: PoolTransactionType;
            token0: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        symbol?: string | undefined;
                        chain: Chain;
                    }>;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            token1: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        symbol?: string | undefined;
                        chain: Chain;
                    }>;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            usdValue: {
                __typename?: 'Amount';
                id: string;
                value: number;
            };
        } | undefined> | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
            }>;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type V2TokenTransactionsQueryVariables = Exact<{
    chain: Chain;
    address: Scalars['String'];
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V2TokenTransactionsQuery = {
    __typename?: 'Query';
    token?: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        symbol?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        v2Transactions?: Array<{
            __typename?: 'PoolTransaction';
            id: string;
            chain: Chain;
            protocolVersion: ProtocolVersion;
            timestamp: number;
            hash: string;
            account: string;
            token0Quantity: string;
            token1Quantity: string;
            type: PoolTransactionType;
            token0: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        symbol?: string | undefined;
                        chain: Chain;
                    }>;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            token1: {
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
                decimals?: number | undefined;
                project?: {
                    __typename?: 'TokenProject';
                    id: string;
                    name?: string | undefined;
                    tokens: Array<{
                        __typename?: 'Token';
                        id: string;
                        address?: string | undefined;
                        symbol?: string | undefined;
                        chain: Chain;
                    }>;
                    logo?: {
                        __typename?: 'Image';
                        id: string;
                        url: string;
                    } | undefined;
                } | undefined;
            };
            usdValue: {
                __typename?: 'Amount';
                id: string;
                value: number;
            };
        } | undefined> | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
            }>;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    } | undefined;
};
export type TopV4PoolsQueryVariables = Exact<{
    chain: Chain;
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Float']>;
    tokenAddress?: InputMaybe<Scalars['String']>;
}>;
export type TopV4PoolsQuery = {
    __typename?: 'Query';
    topV4Pools?: Array<{
        __typename?: 'V4Pool';
        id: string;
        protocolVersion: ProtocolVersion;
        poolId: string;
        feeTier?: number | undefined;
        txCount?: number | undefined;
        hook?: {
            __typename?: 'V4PoolHook';
            id: string;
            address: string;
        } | undefined;
        totalLiquidity?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        token0?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token1?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        volume24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        volume30d?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    }> | undefined;
};
export type TopV3PoolsQueryVariables = Exact<{
    chain: Chain;
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Float']>;
    tokenAddress?: InputMaybe<Scalars['String']>;
}>;
export type TopV3PoolsQuery = {
    __typename?: 'Query';
    topV3Pools?: Array<{
        __typename?: 'V3Pool';
        id: string;
        protocolVersion: ProtocolVersion;
        address: string;
        feeTier?: number | undefined;
        txCount?: number | undefined;
        totalLiquidity?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        token0?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token1?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        volume24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        volume30d?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    }> | undefined;
};
export type TopV2PairsQueryVariables = Exact<{
    chain: Chain;
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Float']>;
    tokenAddress?: InputMaybe<Scalars['String']>;
}>;
export type TopV2PairsQuery = {
    __typename?: 'Query';
    topV2Pairs?: Array<{
        __typename?: 'V2Pair';
        id: string;
        protocolVersion: ProtocolVersion;
        address: string;
        txCount?: number | undefined;
        totalLiquidity?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        token0?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        token1?: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            name?: string | undefined;
            standard?: TokenStandard | undefined;
            symbol?: string | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                isSpam?: boolean | undefined;
                logoUrl?: string | undefined;
                name?: string | undefined;
                safetyLevel?: SafetyLevel | undefined;
            } | undefined;
            feeData?: {
                __typename?: 'FeeData';
                buyFeeBps?: string | undefined;
                sellFeeBps?: string | undefined;
            } | undefined;
            protectionInfo?: {
                __typename?: 'ProtectionInfo';
                result?: ProtectionResult | undefined;
                attackTypes?: Array<ProtectionAttackType | undefined> | undefined;
                blockaidFees?: {
                    __typename?: 'BlockaidFees';
                    buy?: number | undefined;
                    sell?: number | undefined;
                    transfer?: number | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        volume24h?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
        volume30d?: {
            __typename?: 'Amount';
            value: number;
        } | undefined;
    }> | undefined;
};
export type TransactionTokenFragment = {
    __typename?: 'Token';
    id: string;
    address?: string | undefined;
    symbol?: string | undefined;
    chain: Chain;
    decimals?: number | undefined;
    project?: {
        __typename?: 'TokenProject';
        id: string;
        name?: string | undefined;
        tokens: Array<{
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            symbol?: string | undefined;
            chain: Chain;
        }>;
        logo?: {
            __typename?: 'Image';
            id: string;
            url: string;
        } | undefined;
    } | undefined;
};
export type PoolTxFragment = {
    __typename?: 'PoolTransaction';
    id: string;
    chain: Chain;
    protocolVersion: ProtocolVersion;
    timestamp: number;
    hash: string;
    account: string;
    token0Quantity: string;
    token1Quantity: string;
    type: PoolTransactionType;
    token0: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        symbol?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
            }>;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    };
    token1: {
        __typename?: 'Token';
        id: string;
        address?: string | undefined;
        symbol?: string | undefined;
        chain: Chain;
        decimals?: number | undefined;
        project?: {
            __typename?: 'TokenProject';
            id: string;
            name?: string | undefined;
            tokens: Array<{
                __typename?: 'Token';
                id: string;
                address?: string | undefined;
                symbol?: string | undefined;
                chain: Chain;
            }>;
            logo?: {
                __typename?: 'Image';
                id: string;
                url: string;
            } | undefined;
        } | undefined;
    };
    usdValue: {
        __typename?: 'Amount';
        id: string;
        value: number;
    };
};
export type V4TransactionsQueryVariables = Exact<{
    chain: Chain;
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V4TransactionsQuery = {
    __typename?: 'Query';
    v4Transactions?: Array<{
        __typename?: 'PoolTransaction';
        id: string;
        chain: Chain;
        protocolVersion: ProtocolVersion;
        timestamp: number;
        hash: string;
        account: string;
        token0Quantity: string;
        token1Quantity: string;
        type: PoolTransactionType;
        token0: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            symbol?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                tokens: Array<{
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    symbol?: string | undefined;
                    chain: Chain;
                }>;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        token1: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            symbol?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                tokens: Array<{
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    symbol?: string | undefined;
                    chain: Chain;
                }>;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        usdValue: {
            __typename?: 'Amount';
            id: string;
            value: number;
        };
    }> | undefined;
};
export type V3TransactionsQueryVariables = Exact<{
    chain: Chain;
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V3TransactionsQuery = {
    __typename?: 'Query';
    v3Transactions?: Array<{
        __typename?: 'PoolTransaction';
        id: string;
        chain: Chain;
        protocolVersion: ProtocolVersion;
        timestamp: number;
        hash: string;
        account: string;
        token0Quantity: string;
        token1Quantity: string;
        type: PoolTransactionType;
        token0: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            symbol?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                tokens: Array<{
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    symbol?: string | undefined;
                    chain: Chain;
                }>;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        token1: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            symbol?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                tokens: Array<{
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    symbol?: string | undefined;
                    chain: Chain;
                }>;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        usdValue: {
            __typename?: 'Amount';
            id: string;
            value: number;
        };
    }> | undefined;
};
export type V2TransactionsQueryVariables = Exact<{
    chain: Chain;
    first: Scalars['Int'];
    cursor?: InputMaybe<Scalars['Int']>;
}>;
export type V2TransactionsQuery = {
    __typename?: 'Query';
    v2Transactions?: Array<{
        __typename?: 'PoolTransaction';
        id: string;
        chain: Chain;
        protocolVersion: ProtocolVersion;
        timestamp: number;
        hash: string;
        account: string;
        token0Quantity: string;
        token1Quantity: string;
        type: PoolTransactionType;
        token0: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            symbol?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                tokens: Array<{
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    symbol?: string | undefined;
                    chain: Chain;
                }>;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        token1: {
            __typename?: 'Token';
            id: string;
            address?: string | undefined;
            symbol?: string | undefined;
            chain: Chain;
            decimals?: number | undefined;
            project?: {
                __typename?: 'TokenProject';
                id: string;
                name?: string | undefined;
                tokens: Array<{
                    __typename?: 'Token';
                    id: string;
                    address?: string | undefined;
                    symbol?: string | undefined;
                    chain: Chain;
                }>;
                logo?: {
                    __typename?: 'Image';
                    id: string;
                    url: string;
                } | undefined;
            } | undefined;
        };
        usdValue: {
            __typename?: 'Amount';
            id: string;
            value: number;
        };
    } | undefined> | undefined;
};
export declare const TokenBalanceQuantityPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenBalanceMainPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenBasicInfoPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenBasicProjectPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenFeeDataPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenProtectionInfoPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenBalancePartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenProjectUrlsPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenProjectMarketsPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenMarketPartsFragmentDoc: Apollo.DocumentNode;
export declare const TopTokenPartsFragmentDoc: Apollo.DocumentNode;
export declare const HomeScreenTokenPartsFragmentDoc: Apollo.DocumentNode;
export declare const TransactionPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenAssetPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenTransferPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftAssetPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftTransferPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenApprovalPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftApprovalPartsFragmentDoc: Apollo.DocumentNode;
export declare const NftApproveForAllPartsFragmentDoc: Apollo.DocumentNode;
export declare const SimpleTokenDetailsFragmentDoc: Apollo.DocumentNode;
export declare const OnRampTransferPartsFragmentDoc: Apollo.DocumentNode;
export declare const TransactionDetailsPartsFragmentDoc: Apollo.DocumentNode;
export declare const SwapOrderDetailsPartsFragmentDoc: Apollo.DocumentNode;
export declare const OnRampTransactionDetailsPartsFragmentDoc: Apollo.DocumentNode;
export declare const AssetActivityPartsFragmentDoc: Apollo.DocumentNode;
export declare const TokenPriceFragmentDoc: Apollo.DocumentNode;
export declare const PoolTransactionTokenFragmentDoc: Apollo.DocumentNode;
export declare const QuickTokenBalancePartsFragmentDoc: Apollo.DocumentNode;
export declare const PortfolioTokenBalancePartsFragmentDoc: Apollo.DocumentNode;
export declare const CandlestickOhlcFragmentDoc: Apollo.DocumentNode;
export declare const PriceHistoryFallbackFragmentDoc: Apollo.DocumentNode;
export declare const TransactionTokenFragmentDoc: Apollo.DocumentNode;
export declare const PoolTxFragmentDoc: Apollo.DocumentNode;
export declare const TokenPriceHistoryDocument: Apollo.DocumentNode;
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
export declare function useTokenPriceHistoryQuery(baseOptions: Apollo.QueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>): Apollo.QueryResult<TokenPriceHistoryQuery, Exact<{
    contract: ContractInput;
    duration?: InputMaybe<HistoryDuration>;
    maxHistoryLength?: InputMaybe<number>;
}>>;
export declare function useTokenPriceHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>): Apollo.LazyQueryResultTuple<TokenPriceHistoryQuery, Exact<{
    contract: ContractInput;
    duration?: InputMaybe<HistoryDuration>;
    maxHistoryLength?: InputMaybe<number>;
}>>;
export type TokenPriceHistoryQueryHookResult = ReturnType<typeof useTokenPriceHistoryQuery>;
export type TokenPriceHistoryLazyQueryHookResult = ReturnType<typeof useTokenPriceHistoryLazyQuery>;
export type TokenPriceHistoryQueryResult = Apollo.QueryResult<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>;
export declare const AccountListDocument: Apollo.DocumentNode;
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
export declare function useAccountListQuery(baseOptions: Apollo.QueryHookOptions<AccountListQuery, AccountListQueryVariables>): Apollo.QueryResult<AccountListQuery, Exact<{
    addresses: string | string[];
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains?: InputMaybe<Chain | Chain[]>;
}>>;
export declare function useAccountListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountListQuery, AccountListQueryVariables>): Apollo.LazyQueryResultTuple<AccountListQuery, Exact<{
    addresses: string | string[];
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains?: InputMaybe<Chain | Chain[]>;
}>>;
export type AccountListQueryHookResult = ReturnType<typeof useAccountListQuery>;
export type AccountListLazyQueryHookResult = ReturnType<typeof useAccountListLazyQuery>;
export type AccountListQueryResult = Apollo.QueryResult<AccountListQuery, AccountListQueryVariables>;
export declare const SearchPopularNftCollectionsDocument: Apollo.DocumentNode;
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
export declare function useSearchPopularNftCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<SearchPopularNftCollectionsQuery, SearchPopularNftCollectionsQueryVariables>): Apollo.QueryResult<SearchPopularNftCollectionsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useSearchPopularNftCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPopularNftCollectionsQuery, SearchPopularNftCollectionsQueryVariables>): Apollo.LazyQueryResultTuple<SearchPopularNftCollectionsQuery, Exact<{
    [key: string]: never;
}>>;
export type SearchPopularNftCollectionsQueryHookResult = ReturnType<typeof useSearchPopularNftCollectionsQuery>;
export type SearchPopularNftCollectionsLazyQueryHookResult = ReturnType<typeof useSearchPopularNftCollectionsLazyQuery>;
export type SearchPopularNftCollectionsQueryResult = Apollo.QueryResult<SearchPopularNftCollectionsQuery, SearchPopularNftCollectionsQueryVariables>;
export declare const NftsDocument: Apollo.DocumentNode;
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
export declare function useNftsQuery(baseOptions: Apollo.QueryHookOptions<NftsQuery, NftsQueryVariables>): Apollo.QueryResult<NftsQuery, Exact<{
    ownerAddress: string;
}>>;
export declare function useNftsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftsQuery, NftsQueryVariables>): Apollo.LazyQueryResultTuple<NftsQuery, Exact<{
    ownerAddress: string;
}>>;
export type NftsQueryHookResult = ReturnType<typeof useNftsQuery>;
export type NftsLazyQueryHookResult = ReturnType<typeof useNftsLazyQuery>;
export type NftsQueryResult = Apollo.QueryResult<NftsQuery, NftsQueryVariables>;
export declare const NftItemScreenDocument: Apollo.DocumentNode;
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
export declare function useNftItemScreenQuery(baseOptions: Apollo.QueryHookOptions<NftItemScreenQuery, NftItemScreenQueryVariables>): Apollo.QueryResult<NftItemScreenQuery, Exact<{
    contractAddress: string;
    filter?: InputMaybe<NftAssetsFilterInput>;
    activityFilter?: InputMaybe<NftActivityFilterInput>;
}>>;
export declare function useNftItemScreenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftItemScreenQuery, NftItemScreenQueryVariables>): Apollo.LazyQueryResultTuple<NftItemScreenQuery, Exact<{
    contractAddress: string;
    filter?: InputMaybe<NftAssetsFilterInput>;
    activityFilter?: InputMaybe<NftActivityFilterInput>;
}>>;
export type NftItemScreenQueryHookResult = ReturnType<typeof useNftItemScreenQuery>;
export type NftItemScreenLazyQueryHookResult = ReturnType<typeof useNftItemScreenLazyQuery>;
export type NftItemScreenQueryResult = Apollo.QueryResult<NftItemScreenQuery, NftItemScreenQueryVariables>;
export declare const NftCollectionScreenDocument: Apollo.DocumentNode;
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
export declare function useNftCollectionScreenQuery(baseOptions: Apollo.QueryHookOptions<NftCollectionScreenQuery, NftCollectionScreenQueryVariables>): Apollo.QueryResult<NftCollectionScreenQuery, Exact<{
    contractAddress: string;
    first?: InputMaybe<number>;
    after?: InputMaybe<string>;
}>>;
export declare function useNftCollectionScreenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftCollectionScreenQuery, NftCollectionScreenQueryVariables>): Apollo.LazyQueryResultTuple<NftCollectionScreenQuery, Exact<{
    contractAddress: string;
    first?: InputMaybe<number>;
    after?: InputMaybe<string>;
}>>;
export type NftCollectionScreenQueryHookResult = ReturnType<typeof useNftCollectionScreenQuery>;
export type NftCollectionScreenLazyQueryHookResult = ReturnType<typeof useNftCollectionScreenLazyQuery>;
export type NftCollectionScreenQueryResult = Apollo.QueryResult<NftCollectionScreenQuery, NftCollectionScreenQueryVariables>;
export declare const NftsTabDocument: Apollo.DocumentNode;
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
export declare function useNftsTabQuery(baseOptions: Apollo.QueryHookOptions<NftsTabQuery, NftsTabQueryVariables>): Apollo.QueryResult<NftsTabQuery, Exact<{
    ownerAddress: string;
    first?: InputMaybe<number>;
    after?: InputMaybe<string>;
    filter?: InputMaybe<NftBalancesFilterInput>;
    chains: Chain | Chain[];
}>>;
export declare function useNftsTabLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftsTabQuery, NftsTabQueryVariables>): Apollo.LazyQueryResultTuple<NftsTabQuery, Exact<{
    ownerAddress: string;
    first?: InputMaybe<number>;
    after?: InputMaybe<string>;
    filter?: InputMaybe<NftBalancesFilterInput>;
    chains: Chain | Chain[];
}>>;
export type NftsTabQueryHookResult = ReturnType<typeof useNftsTabQuery>;
export type NftsTabLazyQueryHookResult = ReturnType<typeof useNftsTabLazyQuery>;
export type NftsTabQueryResult = Apollo.QueryResult<NftsTabQuery, NftsTabQueryVariables>;
export declare const PortfolioBalancesDocument: Apollo.DocumentNode;
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
export declare function usePortfolioBalancesQuery(baseOptions: Apollo.QueryHookOptions<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>): Apollo.QueryResult<PortfolioBalancesQuery, Exact<{
    ownerAddress: string;
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains: Chain | Chain[];
}>>;
export declare function usePortfolioBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>): Apollo.LazyQueryResultTuple<PortfolioBalancesQuery, Exact<{
    ownerAddress: string;
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains: Chain | Chain[];
}>>;
export type PortfolioBalancesQueryHookResult = ReturnType<typeof usePortfolioBalancesQuery>;
export type PortfolioBalancesLazyQueryHookResult = ReturnType<typeof usePortfolioBalancesLazyQuery>;
export type PortfolioBalancesQueryResult = Apollo.QueryResult<PortfolioBalancesQuery, PortfolioBalancesQueryVariables>;
export declare const MultiplePortfolioBalancesDocument: Apollo.DocumentNode;
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
export declare function useMultiplePortfolioBalancesQuery(baseOptions: Apollo.QueryHookOptions<MultiplePortfolioBalancesQuery, MultiplePortfolioBalancesQueryVariables>): Apollo.QueryResult<MultiplePortfolioBalancesQuery, Exact<{
    ownerAddresses: string | string[];
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains: Chain | Chain[];
}>>;
export declare function useMultiplePortfolioBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MultiplePortfolioBalancesQuery, MultiplePortfolioBalancesQueryVariables>): Apollo.LazyQueryResultTuple<MultiplePortfolioBalancesQuery, Exact<{
    ownerAddresses: string | string[];
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains: Chain | Chain[];
}>>;
export type MultiplePortfolioBalancesQueryHookResult = ReturnType<typeof useMultiplePortfolioBalancesQuery>;
export type MultiplePortfolioBalancesLazyQueryHookResult = ReturnType<typeof useMultiplePortfolioBalancesLazyQuery>;
export type MultiplePortfolioBalancesQueryResult = Apollo.QueryResult<MultiplePortfolioBalancesQuery, MultiplePortfolioBalancesQueryVariables>;
export declare const SelectWalletScreenDocument: Apollo.DocumentNode;
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
export declare function useSelectWalletScreenQuery(baseOptions: Apollo.QueryHookOptions<SelectWalletScreenQuery, SelectWalletScreenQueryVariables>): Apollo.QueryResult<SelectWalletScreenQuery, Exact<{
    ownerAddresses: string | string[];
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains: Chain | Chain[];
}>>;
export declare function useSelectWalletScreenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectWalletScreenQuery, SelectWalletScreenQueryVariables>): Apollo.LazyQueryResultTuple<SelectWalletScreenQuery, Exact<{
    ownerAddresses: string | string[];
    valueModifiers?: InputMaybe<PortfolioValueModifier | PortfolioValueModifier[]>;
    chains: Chain | Chain[];
}>>;
export type SelectWalletScreenQueryHookResult = ReturnType<typeof useSelectWalletScreenQuery>;
export type SelectWalletScreenLazyQueryHookResult = ReturnType<typeof useSelectWalletScreenLazyQuery>;
export type SelectWalletScreenQueryResult = Apollo.QueryResult<SelectWalletScreenQuery, SelectWalletScreenQueryVariables>;
export declare const TransactionHistoryUpdaterDocument: Apollo.DocumentNode;
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
export declare function useTransactionHistoryUpdaterQuery(baseOptions: Apollo.QueryHookOptions<TransactionHistoryUpdaterQuery, TransactionHistoryUpdaterQueryVariables>): Apollo.QueryResult<TransactionHistoryUpdaterQuery, Exact<{
    addresses: string | string[];
    onRampAuth?: InputMaybe<OnRampTransactionsAuth>;
    chains: Chain | Chain[];
}>>;
export declare function useTransactionHistoryUpdaterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionHistoryUpdaterQuery, TransactionHistoryUpdaterQueryVariables>): Apollo.LazyQueryResultTuple<TransactionHistoryUpdaterQuery, Exact<{
    addresses: string | string[];
    onRampAuth?: InputMaybe<OnRampTransactionsAuth>;
    chains: Chain | Chain[];
}>>;
export type TransactionHistoryUpdaterQueryHookResult = ReturnType<typeof useTransactionHistoryUpdaterQuery>;
export type TransactionHistoryUpdaterLazyQueryHookResult = ReturnType<typeof useTransactionHistoryUpdaterLazyQuery>;
export type TransactionHistoryUpdaterQueryResult = Apollo.QueryResult<TransactionHistoryUpdaterQuery, TransactionHistoryUpdaterQueryVariables>;
export declare const TokenDocument: Apollo.DocumentNode;
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
export declare function useTokenQuery(baseOptions: Apollo.QueryHookOptions<TokenQuery, TokenQueryVariables>): Apollo.QueryResult<TokenQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export declare function useTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenQuery, TokenQueryVariables>): Apollo.LazyQueryResultTuple<TokenQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export type TokenQueryHookResult = ReturnType<typeof useTokenQuery>;
export type TokenLazyQueryHookResult = ReturnType<typeof useTokenLazyQuery>;
export type TokenQueryResult = Apollo.QueryResult<TokenQuery, TokenQueryVariables>;
export declare const TokenDetailsScreenDocument: Apollo.DocumentNode;
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
export declare function useTokenDetailsScreenQuery(baseOptions: Apollo.QueryHookOptions<TokenDetailsScreenQuery, TokenDetailsScreenQueryVariables>): Apollo.QueryResult<TokenDetailsScreenQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export declare function useTokenDetailsScreenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenDetailsScreenQuery, TokenDetailsScreenQueryVariables>): Apollo.LazyQueryResultTuple<TokenDetailsScreenQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export type TokenDetailsScreenQueryHookResult = ReturnType<typeof useTokenDetailsScreenQuery>;
export type TokenDetailsScreenLazyQueryHookResult = ReturnType<typeof useTokenDetailsScreenLazyQuery>;
export type TokenDetailsScreenQueryResult = Apollo.QueryResult<TokenDetailsScreenQuery, TokenDetailsScreenQueryVariables>;
export declare const TokenProjectDescriptionDocument: Apollo.DocumentNode;
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
export declare function useTokenProjectDescriptionQuery(baseOptions: Apollo.QueryHookOptions<TokenProjectDescriptionQuery, TokenProjectDescriptionQueryVariables>): Apollo.QueryResult<TokenProjectDescriptionQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    includeSpanish?: InputMaybe<boolean>;
    includeFrench?: InputMaybe<boolean>;
    includeJapanese?: InputMaybe<boolean>;
    includePortuguese?: InputMaybe<boolean>;
    includeVietnamese?: InputMaybe<boolean>;
    includeChineseSimplified?: InputMaybe<boolean>;
    includeChineseTraditional?: InputMaybe<boolean>;
}>>;
export declare function useTokenProjectDescriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenProjectDescriptionQuery, TokenProjectDescriptionQueryVariables>): Apollo.LazyQueryResultTuple<TokenProjectDescriptionQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    includeSpanish?: InputMaybe<boolean>;
    includeFrench?: InputMaybe<boolean>;
    includeJapanese?: InputMaybe<boolean>;
    includePortuguese?: InputMaybe<boolean>;
    includeVietnamese?: InputMaybe<boolean>;
    includeChineseSimplified?: InputMaybe<boolean>;
    includeChineseTraditional?: InputMaybe<boolean>;
}>>;
export type TokenProjectDescriptionQueryHookResult = ReturnType<typeof useTokenProjectDescriptionQuery>;
export type TokenProjectDescriptionLazyQueryHookResult = ReturnType<typeof useTokenProjectDescriptionLazyQuery>;
export type TokenProjectDescriptionQueryResult = Apollo.QueryResult<TokenProjectDescriptionQuery, TokenProjectDescriptionQueryVariables>;
export declare const TokenProjectsDocument: Apollo.DocumentNode;
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
export declare function useTokenProjectsQuery(baseOptions: Apollo.QueryHookOptions<TokenProjectsQuery, TokenProjectsQueryVariables>): Apollo.QueryResult<TokenProjectsQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export declare function useTokenProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenProjectsQuery, TokenProjectsQueryVariables>): Apollo.LazyQueryResultTuple<TokenProjectsQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export type TokenProjectsQueryHookResult = ReturnType<typeof useTokenProjectsQuery>;
export type TokenProjectsLazyQueryHookResult = ReturnType<typeof useTokenProjectsLazyQuery>;
export type TokenProjectsQueryResult = Apollo.QueryResult<TokenProjectsQuery, TokenProjectsQueryVariables>;
export declare const TransactionListDocument: Apollo.DocumentNode;
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
export declare function useTransactionListQuery(baseOptions: Apollo.QueryHookOptions<TransactionListQuery, TransactionListQueryVariables>): Apollo.QueryResult<TransactionListQuery, Exact<{
    address: string;
    onRampAuth?: InputMaybe<OnRampTransactionsAuth>;
    chains: Chain | Chain[];
    pageSize?: InputMaybe<number>;
}>>;
export declare function useTransactionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionListQuery, TransactionListQueryVariables>): Apollo.LazyQueryResultTuple<TransactionListQuery, Exact<{
    address: string;
    onRampAuth?: InputMaybe<OnRampTransactionsAuth>;
    chains: Chain | Chain[];
    pageSize?: InputMaybe<number>;
}>>;
export type TransactionListQueryHookResult = ReturnType<typeof useTransactionListQuery>;
export type TransactionListLazyQueryHookResult = ReturnType<typeof useTransactionListLazyQuery>;
export type TransactionListQueryResult = Apollo.QueryResult<TransactionListQuery, TransactionListQueryVariables>;
export declare const FeedTransactionListDocument: Apollo.DocumentNode;
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
export declare function useFeedTransactionListQuery(baseOptions: Apollo.QueryHookOptions<FeedTransactionListQuery, FeedTransactionListQueryVariables>): Apollo.QueryResult<FeedTransactionListQuery, Exact<{
    addresses: string | string[];
    chains: Chain | Chain[];
}>>;
export declare function useFeedTransactionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedTransactionListQuery, FeedTransactionListQueryVariables>): Apollo.LazyQueryResultTuple<FeedTransactionListQuery, Exact<{
    addresses: string | string[];
    chains: Chain | Chain[];
}>>;
export type FeedTransactionListQueryHookResult = ReturnType<typeof useFeedTransactionListQuery>;
export type FeedTransactionListLazyQueryHookResult = ReturnType<typeof useFeedTransactionListLazyQuery>;
export type FeedTransactionListQueryResult = Apollo.QueryResult<FeedTransactionListQuery, FeedTransactionListQueryVariables>;
export declare const TopTokensDocument: Apollo.DocumentNode;
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
export declare function useTopTokensQuery(baseOptions?: Apollo.QueryHookOptions<TopTokensQuery, TopTokensQueryVariables>): Apollo.QueryResult<TopTokensQuery, Exact<{
    chain?: InputMaybe<Chain>;
    page?: InputMaybe<number>;
    pageSize?: InputMaybe<number>;
    orderBy?: InputMaybe<TokenSortableField>;
}>>;
export declare function useTopTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopTokensQuery, TopTokensQueryVariables>): Apollo.LazyQueryResultTuple<TopTokensQuery, Exact<{
    chain?: InputMaybe<Chain>;
    page?: InputMaybe<number>;
    pageSize?: InputMaybe<number>;
    orderBy?: InputMaybe<TokenSortableField>;
}>>;
export type TopTokensQueryHookResult = ReturnType<typeof useTopTokensQuery>;
export type TopTokensLazyQueryHookResult = ReturnType<typeof useTopTokensLazyQuery>;
export type TopTokensQueryResult = Apollo.QueryResult<TopTokensQuery, TopTokensQueryVariables>;
export declare const SearchTokensDocument: Apollo.DocumentNode;
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
export declare function useSearchTokensQuery(baseOptions: Apollo.QueryHookOptions<SearchTokensQuery, SearchTokensQueryVariables>): Apollo.QueryResult<SearchTokensQuery, Exact<{
    searchQuery: string;
    chains: Chain | Chain[];
    tokenSearchV2Enabled?: InputMaybe<boolean>;
}>>;
export declare function useSearchTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTokensQuery, SearchTokensQueryVariables>): Apollo.LazyQueryResultTuple<SearchTokensQuery, Exact<{
    searchQuery: string;
    chains: Chain | Chain[];
    tokenSearchV2Enabled?: InputMaybe<boolean>;
}>>;
export type SearchTokensQueryHookResult = ReturnType<typeof useSearchTokensQuery>;
export type SearchTokensLazyQueryHookResult = ReturnType<typeof useSearchTokensLazyQuery>;
export type SearchTokensQueryResult = Apollo.QueryResult<SearchTokensQuery, SearchTokensQueryVariables>;
export declare const ExploreSearchDocument: Apollo.DocumentNode;
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
export declare function useExploreSearchQuery(baseOptions: Apollo.QueryHookOptions<ExploreSearchQuery, ExploreSearchQueryVariables>): Apollo.QueryResult<ExploreSearchQuery, Exact<{
    searchQuery: string;
    nftCollectionsFilter: NftCollectionsFilterInput;
    chains?: InputMaybe<Chain | Chain[]>;
    tokenSearchV2Enabled?: InputMaybe<boolean>;
}>>;
export declare function useExploreSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExploreSearchQuery, ExploreSearchQueryVariables>): Apollo.LazyQueryResultTuple<ExploreSearchQuery, Exact<{
    searchQuery: string;
    nftCollectionsFilter: NftCollectionsFilterInput;
    chains?: InputMaybe<Chain | Chain[]>;
    tokenSearchV2Enabled?: InputMaybe<boolean>;
}>>;
export type ExploreSearchQueryHookResult = ReturnType<typeof useExploreSearchQuery>;
export type ExploreSearchLazyQueryHookResult = ReturnType<typeof useExploreSearchLazyQuery>;
export type ExploreSearchQueryResult = Apollo.QueryResult<ExploreSearchQuery, ExploreSearchQueryVariables>;
export declare const HomeScreenTokensDocument: Apollo.DocumentNode;
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
export declare function useHomeScreenTokensQuery(baseOptions: Apollo.QueryHookOptions<HomeScreenTokensQuery, HomeScreenTokensQueryVariables>): Apollo.QueryResult<HomeScreenTokensQuery, Exact<{
    contracts: ContractInput | ContractInput[];
    chain: Chain;
}>>;
export declare function useHomeScreenTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeScreenTokensQuery, HomeScreenTokensQueryVariables>): Apollo.LazyQueryResultTuple<HomeScreenTokensQuery, Exact<{
    contracts: ContractInput | ContractInput[];
    chain: Chain;
}>>;
export type HomeScreenTokensQueryHookResult = ReturnType<typeof useHomeScreenTokensQuery>;
export type HomeScreenTokensLazyQueryHookResult = ReturnType<typeof useHomeScreenTokensLazyQuery>;
export type HomeScreenTokensQueryResult = Apollo.QueryResult<HomeScreenTokensQuery, HomeScreenTokensQueryVariables>;
export declare const FavoriteTokenCardDocument: Apollo.DocumentNode;
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
export declare function useFavoriteTokenCardQuery(baseOptions: Apollo.QueryHookOptions<FavoriteTokenCardQuery, FavoriteTokenCardQueryVariables>): Apollo.QueryResult<FavoriteTokenCardQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export declare function useFavoriteTokenCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteTokenCardQuery, FavoriteTokenCardQueryVariables>): Apollo.LazyQueryResultTuple<FavoriteTokenCardQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export type FavoriteTokenCardQueryHookResult = ReturnType<typeof useFavoriteTokenCardQuery>;
export type FavoriteTokenCardLazyQueryHookResult = ReturnType<typeof useFavoriteTokenCardLazyQuery>;
export type FavoriteTokenCardQueryResult = Apollo.QueryResult<FavoriteTokenCardQuery, FavoriteTokenCardQueryVariables>;
export declare const WidgetTokensDocument: Apollo.DocumentNode;
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
export declare function useWidgetTokensQuery(baseOptions: Apollo.QueryHookOptions<WidgetTokensQuery, WidgetTokensQueryVariables>): Apollo.QueryResult<WidgetTokensQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export declare function useWidgetTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WidgetTokensQuery, WidgetTokensQueryVariables>): Apollo.LazyQueryResultTuple<WidgetTokensQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export type WidgetTokensQueryHookResult = ReturnType<typeof useWidgetTokensQuery>;
export type WidgetTokensLazyQueryHookResult = ReturnType<typeof useWidgetTokensLazyQuery>;
export type WidgetTokensQueryResult = Apollo.QueryResult<WidgetTokensQuery, WidgetTokensQueryVariables>;
export declare const TokensDocument: Apollo.DocumentNode;
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
export declare function useTokensQuery(baseOptions: Apollo.QueryHookOptions<TokensQuery, TokensQueryVariables>): Apollo.QueryResult<TokensQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export declare function useTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokensQuery, TokensQueryVariables>): Apollo.LazyQueryResultTuple<TokensQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export type TokensQueryHookResult = ReturnType<typeof useTokensQuery>;
export type TokensLazyQueryHookResult = ReturnType<typeof useTokensLazyQuery>;
export type TokensQueryResult = Apollo.QueryResult<TokensQuery, TokensQueryVariables>;
export declare const ConvertDocument: Apollo.DocumentNode;
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
export declare function useConvertQuery(baseOptions: Apollo.QueryHookOptions<ConvertQuery, ConvertQueryVariables>): Apollo.QueryResult<ConvertQuery, Exact<{
    fromCurrency: Currency;
    toCurrency: Currency;
}>>;
export declare function useConvertLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConvertQuery, ConvertQueryVariables>): Apollo.LazyQueryResultTuple<ConvertQuery, Exact<{
    fromCurrency: Currency;
    toCurrency: Currency;
}>>;
export type ConvertQueryHookResult = ReturnType<typeof useConvertQuery>;
export type ConvertLazyQueryHookResult = ReturnType<typeof useConvertLazyQuery>;
export type ConvertQueryResult = Apollo.QueryResult<ConvertQuery, ConvertQueryVariables>;
export declare const RecentTokenTransfersDocument: Apollo.DocumentNode;
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
export declare function useRecentTokenTransfersQuery(baseOptions: Apollo.QueryHookOptions<RecentTokenTransfersQuery, RecentTokenTransfersQueryVariables>): Apollo.QueryResult<RecentTokenTransfersQuery, Exact<{
    address: string;
    chains?: InputMaybe<Chain | Chain[]>;
}>>;
export declare function useRecentTokenTransfersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentTokenTransfersQuery, RecentTokenTransfersQueryVariables>): Apollo.LazyQueryResultTuple<RecentTokenTransfersQuery, Exact<{
    address: string;
    chains?: InputMaybe<Chain | Chain[]>;
}>>;
export type RecentTokenTransfersQueryHookResult = ReturnType<typeof useRecentTokenTransfersQuery>;
export type RecentTokenTransfersLazyQueryHookResult = ReturnType<typeof useRecentTokenTransfersLazyQuery>;
export type RecentTokenTransfersQueryResult = Apollo.QueryResult<RecentTokenTransfersQuery, RecentTokenTransfersQueryVariables>;
export declare const RecentlySearchedAssetsDocument: Apollo.DocumentNode;
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
export declare function useRecentlySearchedAssetsQuery(baseOptions: Apollo.QueryHookOptions<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>): Apollo.QueryResult<RecentlySearchedAssetsQuery, Exact<{
    collectionAddresses: string | string[];
    contracts: ContractInput | ContractInput[];
}>>;
export declare function useRecentlySearchedAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>): Apollo.LazyQueryResultTuple<RecentlySearchedAssetsQuery, Exact<{
    collectionAddresses: string | string[];
    contracts: ContractInput | ContractInput[];
}>>;
export type RecentlySearchedAssetsQueryHookResult = ReturnType<typeof useRecentlySearchedAssetsQuery>;
export type RecentlySearchedAssetsLazyQueryHookResult = ReturnType<typeof useRecentlySearchedAssetsLazyQuery>;
export type RecentlySearchedAssetsQueryResult = Apollo.QueryResult<RecentlySearchedAssetsQuery, RecentlySearchedAssetsQueryVariables>;
export declare const TokenSpotPriceDocument: Apollo.DocumentNode;
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
export declare function useTokenSpotPriceQuery(baseOptions: Apollo.QueryHookOptions<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>): Apollo.QueryResult<TokenSpotPriceQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export declare function useTokenSpotPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>): Apollo.LazyQueryResultTuple<TokenSpotPriceQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export type TokenSpotPriceQueryHookResult = ReturnType<typeof useTokenSpotPriceQuery>;
export type TokenSpotPriceLazyQueryHookResult = ReturnType<typeof useTokenSpotPriceLazyQuery>;
export type TokenSpotPriceQueryResult = Apollo.QueryResult<TokenSpotPriceQuery, TokenSpotPriceQueryVariables>;
export declare const UniswapPricesDocument: Apollo.DocumentNode;
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
export declare function useUniswapPricesQuery(baseOptions: Apollo.QueryHookOptions<UniswapPricesQuery, UniswapPricesQueryVariables>): Apollo.QueryResult<UniswapPricesQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export declare function useUniswapPricesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UniswapPricesQuery, UniswapPricesQueryVariables>): Apollo.LazyQueryResultTuple<UniswapPricesQuery, Exact<{
    contracts: ContractInput | ContractInput[];
}>>;
export type UniswapPricesQueryHookResult = ReturnType<typeof useUniswapPricesQuery>;
export type UniswapPricesLazyQueryHookResult = ReturnType<typeof useUniswapPricesLazyQuery>;
export type UniswapPricesQueryResult = Apollo.QueryResult<UniswapPricesQuery, UniswapPricesQueryVariables>;
export declare const ActivityWebDocument: Apollo.DocumentNode;
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
export declare function useActivityWebQuery(baseOptions: Apollo.QueryHookOptions<ActivityWebQuery, ActivityWebQueryVariables>): Apollo.QueryResult<ActivityWebQuery, Exact<{
    account: string;
    chains: Chain | Chain[];
    onRampTransactionIDs?: InputMaybe<string | string[]>;
    includeOffChain: boolean;
}>>;
export declare function useActivityWebLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityWebQuery, ActivityWebQueryVariables>): Apollo.LazyQueryResultTuple<ActivityWebQuery, Exact<{
    account: string;
    chains: Chain | Chain[];
    onRampTransactionIDs?: InputMaybe<string | string[]>;
    includeOffChain: boolean;
}>>;
export type ActivityWebQueryHookResult = ReturnType<typeof useActivityWebQuery>;
export type ActivityWebLazyQueryHookResult = ReturnType<typeof useActivityWebLazyQuery>;
export type ActivityWebQueryResult = Apollo.QueryResult<ActivityWebQuery, ActivityWebQueryVariables>;
export declare const OnAssetActivityDocument: Apollo.DocumentNode;
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
export declare function useOnAssetActivitySubscription(baseOptions: Apollo.SubscriptionHookOptions<OnAssetActivitySubscription, OnAssetActivitySubscriptionVariables>): Apollo.SubscriptionResult<OnAssetActivitySubscription, Exact<{
    subscriptionId: string;
    account: string;
}>>;
export type OnAssetActivitySubscriptionHookResult = ReturnType<typeof useOnAssetActivitySubscription>;
export type OnAssetActivitySubscriptionResult = Apollo.SubscriptionResult<OnAssetActivitySubscription>;
export declare const AllV3TicksDocument: Apollo.DocumentNode;
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
export declare function useAllV3TicksQuery(baseOptions: Apollo.QueryHookOptions<AllV3TicksQuery, AllV3TicksQueryVariables>): Apollo.QueryResult<AllV3TicksQuery, Exact<{
    chain: Chain;
    address: string;
    skip?: InputMaybe<number>;
    first?: InputMaybe<number>;
}>>;
export declare function useAllV3TicksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllV3TicksQuery, AllV3TicksQueryVariables>): Apollo.LazyQueryResultTuple<AllV3TicksQuery, Exact<{
    chain: Chain;
    address: string;
    skip?: InputMaybe<number>;
    first?: InputMaybe<number>;
}>>;
export type AllV3TicksQueryHookResult = ReturnType<typeof useAllV3TicksQuery>;
export type AllV3TicksLazyQueryHookResult = ReturnType<typeof useAllV3TicksLazyQuery>;
export type AllV3TicksQueryResult = Apollo.QueryResult<AllV3TicksQuery, AllV3TicksQueryVariables>;
export declare const AllV4TicksDocument: Apollo.DocumentNode;
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
export declare function useAllV4TicksQuery(baseOptions: Apollo.QueryHookOptions<AllV4TicksQuery, AllV4TicksQueryVariables>): Apollo.QueryResult<AllV4TicksQuery, Exact<{
    chain: Chain;
    poolId: string;
    skip?: InputMaybe<number>;
    first?: InputMaybe<number>;
}>>;
export declare function useAllV4TicksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllV4TicksQuery, AllV4TicksQueryVariables>): Apollo.LazyQueryResultTuple<AllV4TicksQuery, Exact<{
    chain: Chain;
    poolId: string;
    skip?: InputMaybe<number>;
    first?: InputMaybe<number>;
}>>;
export type AllV4TicksQueryHookResult = ReturnType<typeof useAllV4TicksQuery>;
export type AllV4TicksLazyQueryHookResult = ReturnType<typeof useAllV4TicksLazyQuery>;
export type AllV4TicksQueryResult = Apollo.QueryResult<AllV4TicksQuery, AllV4TicksQueryVariables>;
export declare const FeeTierDistributionDocument: Apollo.DocumentNode;
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
export declare function useFeeTierDistributionQuery(baseOptions: Apollo.QueryHookOptions<FeeTierDistributionQuery, FeeTierDistributionQueryVariables>): Apollo.QueryResult<FeeTierDistributionQuery, Exact<{
    chain: Chain;
    token0: string;
    token1: string;
}>>;
export declare function useFeeTierDistributionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeeTierDistributionQuery, FeeTierDistributionQueryVariables>): Apollo.LazyQueryResultTuple<FeeTierDistributionQuery, Exact<{
    chain: Chain;
    token0: string;
    token1: string;
}>>;
export type FeeTierDistributionQueryHookResult = ReturnType<typeof useFeeTierDistributionQuery>;
export type FeeTierDistributionLazyQueryHookResult = ReturnType<typeof useFeeTierDistributionLazyQuery>;
export type FeeTierDistributionQueryResult = Apollo.QueryResult<FeeTierDistributionQuery, FeeTierDistributionQueryVariables>;
export declare const TokenPromoDocument: Apollo.DocumentNode;
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
export declare function useTokenPromoQuery(baseOptions: Apollo.QueryHookOptions<TokenPromoQuery, TokenPromoQueryVariables>): Apollo.QueryResult<TokenPromoQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export declare function useTokenPromoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPromoQuery, TokenPromoQueryVariables>): Apollo.LazyQueryResultTuple<TokenPromoQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export type TokenPromoQueryHookResult = ReturnType<typeof useTokenPromoQuery>;
export type TokenPromoLazyQueryHookResult = ReturnType<typeof useTokenPromoLazyQuery>;
export type TokenPromoQueryResult = Apollo.QueryResult<TokenPromoQuery, TokenPromoQueryVariables>;
export declare const CollectionPromoDocument: Apollo.DocumentNode;
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
export declare function useCollectionPromoQuery(baseOptions: Apollo.QueryHookOptions<CollectionPromoQuery, CollectionPromoQueryVariables>): Apollo.QueryResult<CollectionPromoQuery, Exact<{
    addresses: string | string[];
}>>;
export declare function useCollectionPromoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionPromoQuery, CollectionPromoQueryVariables>): Apollo.LazyQueryResultTuple<CollectionPromoQuery, Exact<{
    addresses: string | string[];
}>>;
export type CollectionPromoQueryHookResult = ReturnType<typeof useCollectionPromoQuery>;
export type CollectionPromoLazyQueryHookResult = ReturnType<typeof useCollectionPromoLazyQuery>;
export type CollectionPromoQueryResult = Apollo.QueryResult<CollectionPromoQuery, CollectionPromoQueryVariables>;
export declare const DailyProtocolVolumeDocument: Apollo.DocumentNode;
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
export declare function useDailyProtocolVolumeQuery(baseOptions: Apollo.QueryHookOptions<DailyProtocolVolumeQuery, DailyProtocolVolumeQueryVariables>): Apollo.QueryResult<DailyProtocolVolumeQuery, Exact<{
    version: ProtocolVersion;
}>>;
export declare function useDailyProtocolVolumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DailyProtocolVolumeQuery, DailyProtocolVolumeQueryVariables>): Apollo.LazyQueryResultTuple<DailyProtocolVolumeQuery, Exact<{
    version: ProtocolVersion;
}>>;
export type DailyProtocolVolumeQueryHookResult = ReturnType<typeof useDailyProtocolVolumeQuery>;
export type DailyProtocolVolumeLazyQueryHookResult = ReturnType<typeof useDailyProtocolVolumeLazyQuery>;
export type DailyProtocolVolumeQueryResult = Apollo.QueryResult<DailyProtocolVolumeQuery, DailyProtocolVolumeQueryVariables>;
export declare const IsV3SubgraphStaleDocument: Apollo.DocumentNode;
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
export declare function useIsV3SubgraphStaleQuery(baseOptions: Apollo.QueryHookOptions<IsV3SubgraphStaleQuery, IsV3SubgraphStaleQueryVariables>): Apollo.QueryResult<IsV3SubgraphStaleQuery, Exact<{
    chain: Chain;
}>>;
export declare function useIsV3SubgraphStaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsV3SubgraphStaleQuery, IsV3SubgraphStaleQueryVariables>): Apollo.LazyQueryResultTuple<IsV3SubgraphStaleQuery, Exact<{
    chain: Chain;
}>>;
export type IsV3SubgraphStaleQueryHookResult = ReturnType<typeof useIsV3SubgraphStaleQuery>;
export type IsV3SubgraphStaleLazyQueryHookResult = ReturnType<typeof useIsV3SubgraphStaleLazyQuery>;
export type IsV3SubgraphStaleQueryResult = Apollo.QueryResult<IsV3SubgraphStaleQuery, IsV3SubgraphStaleQueryVariables>;
export declare const CollectionSearchDocument: Apollo.DocumentNode;
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
export declare function useCollectionSearchQuery(baseOptions: Apollo.QueryHookOptions<CollectionSearchQuery, CollectionSearchQueryVariables>): Apollo.QueryResult<CollectionSearchQuery, Exact<{
    query: string;
}>>;
export declare function useCollectionSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionSearchQuery, CollectionSearchQueryVariables>): Apollo.LazyQueryResultTuple<CollectionSearchQuery, Exact<{
    query: string;
}>>;
export type CollectionSearchQueryHookResult = ReturnType<typeof useCollectionSearchQuery>;
export type CollectionSearchLazyQueryHookResult = ReturnType<typeof useCollectionSearchLazyQuery>;
export type CollectionSearchQueryResult = Apollo.QueryResult<CollectionSearchQuery, CollectionSearchQueryVariables>;
export declare const NftBalanceDocument: Apollo.DocumentNode;
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
export declare function useNftBalanceQuery(baseOptions: Apollo.QueryHookOptions<NftBalanceQuery, NftBalanceQueryVariables>): Apollo.QueryResult<NftBalanceQuery, Exact<{
    ownerAddress: string;
    filter?: InputMaybe<NftBalancesFilterInput>;
    chains?: InputMaybe<Chain | Chain[]>;
    first?: InputMaybe<number>;
    after?: InputMaybe<string>;
    last?: InputMaybe<number>;
    before?: InputMaybe<string>;
}>>;
export declare function useNftBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftBalanceQuery, NftBalanceQueryVariables>): Apollo.LazyQueryResultTuple<NftBalanceQuery, Exact<{
    ownerAddress: string;
    filter?: InputMaybe<NftBalancesFilterInput>;
    chains?: InputMaybe<Chain | Chain[]>;
    first?: InputMaybe<number>;
    after?: InputMaybe<string>;
    last?: InputMaybe<number>;
    before?: InputMaybe<string>;
}>>;
export type NftBalanceQueryHookResult = ReturnType<typeof useNftBalanceQuery>;
export type NftBalanceLazyQueryHookResult = ReturnType<typeof useNftBalanceLazyQuery>;
export type NftBalanceQueryResult = Apollo.QueryResult<NftBalanceQuery, NftBalanceQueryVariables>;
export declare const V3PoolDocument: Apollo.DocumentNode;
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
export declare function useV3PoolQuery(baseOptions: Apollo.QueryHookOptions<V3PoolQuery, V3PoolQueryVariables>): Apollo.QueryResult<V3PoolQuery, Exact<{
    chain: Chain;
    address: string;
}>>;
export declare function useV3PoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V3PoolQuery, V3PoolQueryVariables>): Apollo.LazyQueryResultTuple<V3PoolQuery, Exact<{
    chain: Chain;
    address: string;
}>>;
export type V3PoolQueryHookResult = ReturnType<typeof useV3PoolQuery>;
export type V3PoolLazyQueryHookResult = ReturnType<typeof useV3PoolLazyQuery>;
export type V3PoolQueryResult = Apollo.QueryResult<V3PoolQuery, V3PoolQueryVariables>;
export declare const V4PoolDocument: Apollo.DocumentNode;
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
export declare function useV4PoolQuery(baseOptions: Apollo.QueryHookOptions<V4PoolQuery, V4PoolQueryVariables>): Apollo.QueryResult<V4PoolQuery, Exact<{
    chain: Chain;
    poolId: string;
}>>;
export declare function useV4PoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V4PoolQuery, V4PoolQueryVariables>): Apollo.LazyQueryResultTuple<V4PoolQuery, Exact<{
    chain: Chain;
    poolId: string;
}>>;
export type V4PoolQueryHookResult = ReturnType<typeof useV4PoolQuery>;
export type V4PoolLazyQueryHookResult = ReturnType<typeof useV4PoolLazyQuery>;
export type V4PoolQueryResult = Apollo.QueryResult<V4PoolQuery, V4PoolQueryVariables>;
export declare const PoolPriceHistoryDocument: Apollo.DocumentNode;
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
export declare function usePoolPriceHistoryQuery(baseOptions: Apollo.QueryHookOptions<PoolPriceHistoryQuery, PoolPriceHistoryQueryVariables>): Apollo.QueryResult<PoolPriceHistoryQuery, Exact<{
    chain: Chain;
    addressOrId: string;
    duration: HistoryDuration;
    isV4: boolean;
    isV3: boolean;
    isV2: boolean;
}>>;
export declare function usePoolPriceHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoolPriceHistoryQuery, PoolPriceHistoryQueryVariables>): Apollo.LazyQueryResultTuple<PoolPriceHistoryQuery, Exact<{
    chain: Chain;
    addressOrId: string;
    duration: HistoryDuration;
    isV4: boolean;
    isV3: boolean;
    isV2: boolean;
}>>;
export type PoolPriceHistoryQueryHookResult = ReturnType<typeof usePoolPriceHistoryQuery>;
export type PoolPriceHistoryLazyQueryHookResult = ReturnType<typeof usePoolPriceHistoryLazyQuery>;
export type PoolPriceHistoryQueryResult = Apollo.QueryResult<PoolPriceHistoryQuery, PoolPriceHistoryQueryVariables>;
export declare const PoolVolumeHistoryDocument: Apollo.DocumentNode;
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
export declare function usePoolVolumeHistoryQuery(baseOptions: Apollo.QueryHookOptions<PoolVolumeHistoryQuery, PoolVolumeHistoryQueryVariables>): Apollo.QueryResult<PoolVolumeHistoryQuery, Exact<{
    chain: Chain;
    addressOrId: string;
    duration: HistoryDuration;
    isV4: boolean;
    isV3: boolean;
    isV2: boolean;
}>>;
export declare function usePoolVolumeHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PoolVolumeHistoryQuery, PoolVolumeHistoryQueryVariables>): Apollo.LazyQueryResultTuple<PoolVolumeHistoryQuery, Exact<{
    chain: Chain;
    addressOrId: string;
    duration: HistoryDuration;
    isV4: boolean;
    isV3: boolean;
    isV2: boolean;
}>>;
export type PoolVolumeHistoryQueryHookResult = ReturnType<typeof usePoolVolumeHistoryQuery>;
export type PoolVolumeHistoryLazyQueryHookResult = ReturnType<typeof usePoolVolumeHistoryLazyQuery>;
export type PoolVolumeHistoryQueryResult = Apollo.QueryResult<PoolVolumeHistoryQuery, PoolVolumeHistoryQueryVariables>;
export declare const V2PairDocument: Apollo.DocumentNode;
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
export declare function useV2PairQuery(baseOptions: Apollo.QueryHookOptions<V2PairQuery, V2PairQueryVariables>): Apollo.QueryResult<V2PairQuery, Exact<{
    chain: Chain;
    address: string;
}>>;
export declare function useV2PairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V2PairQuery, V2PairQueryVariables>): Apollo.LazyQueryResultTuple<V2PairQuery, Exact<{
    chain: Chain;
    address: string;
}>>;
export type V2PairQueryHookResult = ReturnType<typeof useV2PairQuery>;
export type V2PairLazyQueryHookResult = ReturnType<typeof useV2PairLazyQuery>;
export type V2PairQueryResult = Apollo.QueryResult<V2PairQuery, V2PairQueryVariables>;
export declare const V4PoolTransactionsDocument: Apollo.DocumentNode;
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
export declare function useV4PoolTransactionsQuery(baseOptions: Apollo.QueryHookOptions<V4PoolTransactionsQuery, V4PoolTransactionsQueryVariables>): Apollo.QueryResult<V4PoolTransactionsQuery, Exact<{
    chain: Chain;
    poolId: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV4PoolTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V4PoolTransactionsQuery, V4PoolTransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V4PoolTransactionsQuery, Exact<{
    chain: Chain;
    poolId: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V4PoolTransactionsQueryHookResult = ReturnType<typeof useV4PoolTransactionsQuery>;
export type V4PoolTransactionsLazyQueryHookResult = ReturnType<typeof useV4PoolTransactionsLazyQuery>;
export type V4PoolTransactionsQueryResult = Apollo.QueryResult<V4PoolTransactionsQuery, V4PoolTransactionsQueryVariables>;
export declare const V3PoolTransactionsDocument: Apollo.DocumentNode;
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
export declare function useV3PoolTransactionsQuery(baseOptions: Apollo.QueryHookOptions<V3PoolTransactionsQuery, V3PoolTransactionsQueryVariables>): Apollo.QueryResult<V3PoolTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV3PoolTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V3PoolTransactionsQuery, V3PoolTransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V3PoolTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V3PoolTransactionsQueryHookResult = ReturnType<typeof useV3PoolTransactionsQuery>;
export type V3PoolTransactionsLazyQueryHookResult = ReturnType<typeof useV3PoolTransactionsLazyQuery>;
export type V3PoolTransactionsQueryResult = Apollo.QueryResult<V3PoolTransactionsQuery, V3PoolTransactionsQueryVariables>;
export declare const V2PairTransactionsDocument: Apollo.DocumentNode;
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
export declare function useV2PairTransactionsQuery(baseOptions: Apollo.QueryHookOptions<V2PairTransactionsQuery, V2PairTransactionsQueryVariables>): Apollo.QueryResult<V2PairTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV2PairTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V2PairTransactionsQuery, V2PairTransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V2PairTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V2PairTransactionsQueryHookResult = ReturnType<typeof useV2PairTransactionsQuery>;
export type V2PairTransactionsLazyQueryHookResult = ReturnType<typeof useV2PairTransactionsLazyQuery>;
export type V2PairTransactionsQueryResult = Apollo.QueryResult<V2PairTransactionsQuery, V2PairTransactionsQueryVariables>;
export declare const QuickTokenBalancesWebDocument: Apollo.DocumentNode;
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
export declare function useQuickTokenBalancesWebQuery(baseOptions: Apollo.QueryHookOptions<QuickTokenBalancesWebQuery, QuickTokenBalancesWebQueryVariables>): Apollo.QueryResult<QuickTokenBalancesWebQuery, Exact<{
    ownerAddress: string;
    chains: Chain | Chain[];
}>>;
export declare function useQuickTokenBalancesWebLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuickTokenBalancesWebQuery, QuickTokenBalancesWebQueryVariables>): Apollo.LazyQueryResultTuple<QuickTokenBalancesWebQuery, Exact<{
    ownerAddress: string;
    chains: Chain | Chain[];
}>>;
export type QuickTokenBalancesWebQueryHookResult = ReturnType<typeof useQuickTokenBalancesWebQuery>;
export type QuickTokenBalancesWebLazyQueryHookResult = ReturnType<typeof useQuickTokenBalancesWebLazyQuery>;
export type QuickTokenBalancesWebQueryResult = Apollo.QueryResult<QuickTokenBalancesWebQuery, QuickTokenBalancesWebQueryVariables>;
export declare const SearchPopularTokensWebDocument: Apollo.DocumentNode;
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
export declare function useSearchPopularTokensWebQuery(baseOptions: Apollo.QueryHookOptions<SearchPopularTokensWebQuery, SearchPopularTokensWebQueryVariables>): Apollo.QueryResult<SearchPopularTokensWebQuery, Exact<{
    chain: Chain;
}>>;
export declare function useSearchPopularTokensWebLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPopularTokensWebQuery, SearchPopularTokensWebQueryVariables>): Apollo.LazyQueryResultTuple<SearchPopularTokensWebQuery, Exact<{
    chain: Chain;
}>>;
export type SearchPopularTokensWebQueryHookResult = ReturnType<typeof useSearchPopularTokensWebQuery>;
export type SearchPopularTokensWebLazyQueryHookResult = ReturnType<typeof useSearchPopularTokensWebLazyQuery>;
export type SearchPopularTokensWebQueryResult = Apollo.QueryResult<SearchPopularTokensWebQuery, SearchPopularTokensWebQueryVariables>;
export declare const SearchTokensWebDocument: Apollo.DocumentNode;
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
export declare function useSearchTokensWebQuery(baseOptions: Apollo.QueryHookOptions<SearchTokensWebQuery, SearchTokensWebQueryVariables>): Apollo.QueryResult<SearchTokensWebQuery, Exact<{
    searchQuery: string;
    chains?: InputMaybe<Chain | Chain[]>;
    tokenSearchV2Enabled?: InputMaybe<boolean>;
}>>;
export declare function useSearchTokensWebLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTokensWebQuery, SearchTokensWebQueryVariables>): Apollo.LazyQueryResultTuple<SearchTokensWebQuery, Exact<{
    searchQuery: string;
    chains?: InputMaybe<Chain | Chain[]>;
    tokenSearchV2Enabled?: InputMaybe<boolean>;
}>>;
export type SearchTokensWebQueryHookResult = ReturnType<typeof useSearchTokensWebQuery>;
export type SearchTokensWebLazyQueryHookResult = ReturnType<typeof useSearchTokensWebLazyQuery>;
export type SearchTokensWebQueryResult = Apollo.QueryResult<SearchTokensWebQuery, SearchTokensWebQueryVariables>;
export declare const TokenWebDocument: Apollo.DocumentNode;
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
export declare function useTokenWebQuery(baseOptions: Apollo.QueryHookOptions<TokenWebQuery, TokenWebQueryVariables>): Apollo.QueryResult<TokenWebQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export declare function useTokenWebLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenWebQuery, TokenWebQueryVariables>): Apollo.LazyQueryResultTuple<TokenWebQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export type TokenWebQueryHookResult = ReturnType<typeof useTokenWebQuery>;
export type TokenWebLazyQueryHookResult = ReturnType<typeof useTokenWebLazyQuery>;
export type TokenWebQueryResult = Apollo.QueryResult<TokenWebQuery, TokenWebQueryVariables>;
export declare const TokenProjectWebDocument: Apollo.DocumentNode;
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
export declare function useTokenProjectWebQuery(baseOptions: Apollo.QueryHookOptions<TokenProjectWebQuery, TokenProjectWebQueryVariables>): Apollo.QueryResult<TokenProjectWebQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export declare function useTokenProjectWebLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenProjectWebQuery, TokenProjectWebQueryVariables>): Apollo.LazyQueryResultTuple<TokenProjectWebQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
}>>;
export type TokenProjectWebQueryHookResult = ReturnType<typeof useTokenProjectWebQuery>;
export type TokenProjectWebLazyQueryHookResult = ReturnType<typeof useTokenProjectWebLazyQuery>;
export type TokenProjectWebQueryResult = Apollo.QueryResult<TokenProjectWebQuery, TokenProjectWebQueryVariables>;
export declare const TokenPriceDocument: Apollo.DocumentNode;
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
export declare function useTokenPriceQuery(baseOptions: Apollo.QueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>): Apollo.QueryResult<TokenPriceQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    duration: HistoryDuration;
    fallback?: InputMaybe<boolean>;
}>>;
export declare function useTokenPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>): Apollo.LazyQueryResultTuple<TokenPriceQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    duration: HistoryDuration;
    fallback?: InputMaybe<boolean>;
}>>;
export type TokenPriceQueryHookResult = ReturnType<typeof useTokenPriceQuery>;
export type TokenPriceLazyQueryHookResult = ReturnType<typeof useTokenPriceLazyQuery>;
export type TokenPriceQueryResult = Apollo.QueryResult<TokenPriceQuery, TokenPriceQueryVariables>;
export declare const TokenHistoricalVolumesDocument: Apollo.DocumentNode;
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
export declare function useTokenHistoricalVolumesQuery(baseOptions: Apollo.QueryHookOptions<TokenHistoricalVolumesQuery, TokenHistoricalVolumesQueryVariables>): Apollo.QueryResult<TokenHistoricalVolumesQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    duration: HistoryDuration;
}>>;
export declare function useTokenHistoricalVolumesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenHistoricalVolumesQuery, TokenHistoricalVolumesQueryVariables>): Apollo.LazyQueryResultTuple<TokenHistoricalVolumesQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    duration: HistoryDuration;
}>>;
export type TokenHistoricalVolumesQueryHookResult = ReturnType<typeof useTokenHistoricalVolumesQuery>;
export type TokenHistoricalVolumesLazyQueryHookResult = ReturnType<typeof useTokenHistoricalVolumesLazyQuery>;
export type TokenHistoricalVolumesQueryResult = Apollo.QueryResult<TokenHistoricalVolumesQuery, TokenHistoricalVolumesQueryVariables>;
export declare const TokenHistoricalTvlsDocument: Apollo.DocumentNode;
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
export declare function useTokenHistoricalTvlsQuery(baseOptions: Apollo.QueryHookOptions<TokenHistoricalTvlsQuery, TokenHistoricalTvlsQueryVariables>): Apollo.QueryResult<TokenHistoricalTvlsQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    duration: HistoryDuration;
}>>;
export declare function useTokenHistoricalTvlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenHistoricalTvlsQuery, TokenHistoricalTvlsQueryVariables>): Apollo.LazyQueryResultTuple<TokenHistoricalTvlsQuery, Exact<{
    chain: Chain;
    address?: InputMaybe<string>;
    duration: HistoryDuration;
}>>;
export type TokenHistoricalTvlsQueryHookResult = ReturnType<typeof useTokenHistoricalTvlsQuery>;
export type TokenHistoricalTvlsLazyQueryHookResult = ReturnType<typeof useTokenHistoricalTvlsLazyQuery>;
export type TokenHistoricalTvlsQueryResult = Apollo.QueryResult<TokenHistoricalTvlsQuery, TokenHistoricalTvlsQueryVariables>;
export declare const V4TokenTransactionsDocument: Apollo.DocumentNode;
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
export declare function useV4TokenTransactionsQuery(baseOptions: Apollo.QueryHookOptions<V4TokenTransactionsQuery, V4TokenTransactionsQueryVariables>): Apollo.QueryResult<V4TokenTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV4TokenTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V4TokenTransactionsQuery, V4TokenTransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V4TokenTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V4TokenTransactionsQueryHookResult = ReturnType<typeof useV4TokenTransactionsQuery>;
export type V4TokenTransactionsLazyQueryHookResult = ReturnType<typeof useV4TokenTransactionsLazyQuery>;
export type V4TokenTransactionsQueryResult = Apollo.QueryResult<V4TokenTransactionsQuery, V4TokenTransactionsQueryVariables>;
export declare const V3TokenTransactionsDocument: Apollo.DocumentNode;
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
export declare function useV3TokenTransactionsQuery(baseOptions: Apollo.QueryHookOptions<V3TokenTransactionsQuery, V3TokenTransactionsQueryVariables>): Apollo.QueryResult<V3TokenTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV3TokenTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V3TokenTransactionsQuery, V3TokenTransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V3TokenTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V3TokenTransactionsQueryHookResult = ReturnType<typeof useV3TokenTransactionsQuery>;
export type V3TokenTransactionsLazyQueryHookResult = ReturnType<typeof useV3TokenTransactionsLazyQuery>;
export type V3TokenTransactionsQueryResult = Apollo.QueryResult<V3TokenTransactionsQuery, V3TokenTransactionsQueryVariables>;
export declare const V2TokenTransactionsDocument: Apollo.DocumentNode;
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
export declare function useV2TokenTransactionsQuery(baseOptions: Apollo.QueryHookOptions<V2TokenTransactionsQuery, V2TokenTransactionsQueryVariables>): Apollo.QueryResult<V2TokenTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV2TokenTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V2TokenTransactionsQuery, V2TokenTransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V2TokenTransactionsQuery, Exact<{
    chain: Chain;
    address: string;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V2TokenTransactionsQueryHookResult = ReturnType<typeof useV2TokenTransactionsQuery>;
export type V2TokenTransactionsLazyQueryHookResult = ReturnType<typeof useV2TokenTransactionsLazyQuery>;
export type V2TokenTransactionsQueryResult = Apollo.QueryResult<V2TokenTransactionsQuery, V2TokenTransactionsQueryVariables>;
export declare const TopV4PoolsDocument: Apollo.DocumentNode;
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
export declare function useTopV4PoolsQuery(baseOptions: Apollo.QueryHookOptions<TopV4PoolsQuery, TopV4PoolsQueryVariables>): Apollo.QueryResult<TopV4PoolsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
    tokenAddress?: InputMaybe<string>;
}>>;
export declare function useTopV4PoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopV4PoolsQuery, TopV4PoolsQueryVariables>): Apollo.LazyQueryResultTuple<TopV4PoolsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
    tokenAddress?: InputMaybe<string>;
}>>;
export type TopV4PoolsQueryHookResult = ReturnType<typeof useTopV4PoolsQuery>;
export type TopV4PoolsLazyQueryHookResult = ReturnType<typeof useTopV4PoolsLazyQuery>;
export type TopV4PoolsQueryResult = Apollo.QueryResult<TopV4PoolsQuery, TopV4PoolsQueryVariables>;
export declare const TopV3PoolsDocument: Apollo.DocumentNode;
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
export declare function useTopV3PoolsQuery(baseOptions: Apollo.QueryHookOptions<TopV3PoolsQuery, TopV3PoolsQueryVariables>): Apollo.QueryResult<TopV3PoolsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
    tokenAddress?: InputMaybe<string>;
}>>;
export declare function useTopV3PoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopV3PoolsQuery, TopV3PoolsQueryVariables>): Apollo.LazyQueryResultTuple<TopV3PoolsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
    tokenAddress?: InputMaybe<string>;
}>>;
export type TopV3PoolsQueryHookResult = ReturnType<typeof useTopV3PoolsQuery>;
export type TopV3PoolsLazyQueryHookResult = ReturnType<typeof useTopV3PoolsLazyQuery>;
export type TopV3PoolsQueryResult = Apollo.QueryResult<TopV3PoolsQuery, TopV3PoolsQueryVariables>;
export declare const TopV2PairsDocument: Apollo.DocumentNode;
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
export declare function useTopV2PairsQuery(baseOptions: Apollo.QueryHookOptions<TopV2PairsQuery, TopV2PairsQueryVariables>): Apollo.QueryResult<TopV2PairsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
    tokenAddress?: InputMaybe<string>;
}>>;
export declare function useTopV2PairsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopV2PairsQuery, TopV2PairsQueryVariables>): Apollo.LazyQueryResultTuple<TopV2PairsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
    tokenAddress?: InputMaybe<string>;
}>>;
export type TopV2PairsQueryHookResult = ReturnType<typeof useTopV2PairsQuery>;
export type TopV2PairsLazyQueryHookResult = ReturnType<typeof useTopV2PairsLazyQuery>;
export type TopV2PairsQueryResult = Apollo.QueryResult<TopV2PairsQuery, TopV2PairsQueryVariables>;
export declare const V4TransactionsDocument: Apollo.DocumentNode;
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
export declare function useV4TransactionsQuery(baseOptions: Apollo.QueryHookOptions<V4TransactionsQuery, V4TransactionsQueryVariables>): Apollo.QueryResult<V4TransactionsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV4TransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V4TransactionsQuery, V4TransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V4TransactionsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V4TransactionsQueryHookResult = ReturnType<typeof useV4TransactionsQuery>;
export type V4TransactionsLazyQueryHookResult = ReturnType<typeof useV4TransactionsLazyQuery>;
export type V4TransactionsQueryResult = Apollo.QueryResult<V4TransactionsQuery, V4TransactionsQueryVariables>;
export declare const V3TransactionsDocument: Apollo.DocumentNode;
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
export declare function useV3TransactionsQuery(baseOptions: Apollo.QueryHookOptions<V3TransactionsQuery, V3TransactionsQueryVariables>): Apollo.QueryResult<V3TransactionsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV3TransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V3TransactionsQuery, V3TransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V3TransactionsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V3TransactionsQueryHookResult = ReturnType<typeof useV3TransactionsQuery>;
export type V3TransactionsLazyQueryHookResult = ReturnType<typeof useV3TransactionsLazyQuery>;
export type V3TransactionsQueryResult = Apollo.QueryResult<V3TransactionsQuery, V3TransactionsQueryVariables>;
export declare const V2TransactionsDocument: Apollo.DocumentNode;
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
export declare function useV2TransactionsQuery(baseOptions: Apollo.QueryHookOptions<V2TransactionsQuery, V2TransactionsQueryVariables>): Apollo.QueryResult<V2TransactionsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export declare function useV2TransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<V2TransactionsQuery, V2TransactionsQueryVariables>): Apollo.LazyQueryResultTuple<V2TransactionsQuery, Exact<{
    chain: Chain;
    first: number;
    cursor?: InputMaybe<number>;
}>>;
export type V2TransactionsQueryHookResult = ReturnType<typeof useV2TransactionsQuery>;
export type V2TransactionsLazyQueryHookResult = ReturnType<typeof useV2TransactionsLazyQuery>;
export type V2TransactionsQueryResult = Apollo.QueryResult<V2TransactionsQuery, V2TransactionsQueryVariables>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping of union types */
export type ResolversUnionTypes = {
    ActivityDetails: (OffRampTransactionDetails) | (OnRampTransactionDetails) | (SwapOrderDetails) | (Omit<TransactionDetails, 'assetChanges'> & {
        assetChanges: Array<Maybe<ResolversTypes['AssetChange']>>;
    });
    AssetChange: (NftApproval) | (NftApproveForAll) | (NftTransfer) | (OffRampTransfer) | (OnRampTransfer) | (TokenApproval) | (TokenTransfer);
};
/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
    ActivityDetails: (OffRampTransactionDetails) | (OnRampTransactionDetails) | (SwapOrderDetails) | (Omit<TransactionDetails, 'assetChanges'> & {
        assetChanges: Array<Maybe<ResolversParentTypes['AssetChange']>>;
    });
    AssetChange: (NftApproval) | (NftApproveForAll) | (NftTransfer) | (OffRampTransfer) | (OnRampTransfer) | (TokenApproval) | (TokenTransfer);
};
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    AWSJSON: ResolverTypeWrapper<Scalars['AWSJSON']>;
    ActivityDetails: ResolverTypeWrapper<ResolversUnionTypes['ActivityDetails']>;
    ActivityDetailsInput: ActivityDetailsInput;
    ActivityType: ActivityType;
    Amount: ResolverTypeWrapper<Amount>;
    AmountChange: ResolverTypeWrapper<AmountChange>;
    AmountInput: AmountInput;
    ApplicationContract: ResolverTypeWrapper<ApplicationContract>;
    ApplicationContractInput: ApplicationContractInput;
    AssetActivity: ResolverTypeWrapper<Omit<AssetActivity, 'assetChanges' | 'details'> & {
        assetChanges: Array<Maybe<ResolversTypes['AssetChange']>>;
        details: ResolversTypes['ActivityDetails'];
    }>;
    AssetActivityInput: AssetActivityInput;
    AssetActivitySwitch: AssetActivitySwitch;
    AssetChange: ResolverTypeWrapper<ResolversUnionTypes['AssetChange']>;
    AssetChangeInput: AssetChangeInput;
    BlockaidFees: ResolverTypeWrapper<BlockaidFees>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Chain: Chain;
    CollectionSortableField: CollectionSortableField;
    ContractInput: ContractInput;
    Currency: Currency;
    CurrencyAmountInput: CurrencyAmountInput;
    DescriptionTranslations: ResolverTypeWrapper<DescriptionTranslations>;
    Dimensions: ResolverTypeWrapper<Dimensions>;
    DimensionsInput: DimensionsInput;
    FeeData: ResolverTypeWrapper<FeeData>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    HighLow: HighLow;
    HistoryDuration: HistoryDuration;
    IAmount: ResolversTypes['Amount'] | ResolversTypes['TimestampedAmount'];
    IContract: ResolversTypes['ApplicationContract'] | ResolversTypes['NftContract'] | ResolversTypes['Token'];
    ID: ResolverTypeWrapper<Scalars['ID']>;
    IPool: ResolversTypes['V2Pair'] | ResolversTypes['V3Pool'];
    Image: ResolverTypeWrapper<Image>;
    ImageInput: ImageInput;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    MediaType: MediaType;
    Mutation: ResolverTypeWrapper<{}>;
    NetworkFee: ResolverTypeWrapper<NetworkFee>;
    NftActivity: ResolverTypeWrapper<NftActivity>;
    NftActivityConnection: ResolverTypeWrapper<NftActivityConnection>;
    NftActivityEdge: ResolverTypeWrapper<NftActivityEdge>;
    NftActivityFilterInput: NftActivityFilterInput;
    NftActivityType: NftActivityType;
    NftApproval: ResolverTypeWrapper<NftApproval>;
    NftApprovalInput: NftApprovalInput;
    NftApproveForAll: ResolverTypeWrapper<NftApproveForAll>;
    NftApproveForAllInput: NftApproveForAllInput;
    NftAsset: ResolverTypeWrapper<NftAsset>;
    NftAssetConnection: ResolverTypeWrapper<NftAssetConnection>;
    NftAssetEdge: ResolverTypeWrapper<NftAssetEdge>;
    NftAssetInput: NftAssetInput;
    NftAssetRarity: ResolverTypeWrapper<NftAssetRarity>;
    NftAssetSortableField: NftAssetSortableField;
    NftAssetTrait: ResolverTypeWrapper<NftAssetTrait>;
    NftAssetTraitInput: NftAssetTraitInput;
    NftAssetsFilterInput: NftAssetsFilterInput;
    NftBalance: ResolverTypeWrapper<NftBalance>;
    NftBalanceAssetInput: NftBalanceAssetInput;
    NftBalanceConnection: ResolverTypeWrapper<NftBalanceConnection>;
    NftBalanceEdge: ResolverTypeWrapper<NftBalanceEdge>;
    NftBalancesFilterInput: NftBalancesFilterInput;
    NftCollection: ResolverTypeWrapper<NftCollection>;
    NftCollectionBalance: ResolverTypeWrapper<NftCollectionBalance>;
    NftCollectionBalanceConnection: ResolverTypeWrapper<NftCollectionBalanceConnection>;
    NftCollectionBalanceEdge: ResolverTypeWrapper<NftCollectionBalanceEdge>;
    NftCollectionConnection: ResolverTypeWrapper<NftCollectionConnection>;
    NftCollectionEdge: ResolverTypeWrapper<NftCollectionEdge>;
    NftCollectionInput: NftCollectionInput;
    NftCollectionMarket: ResolverTypeWrapper<NftCollectionMarket>;
    NftCollectionMarketplace: ResolverTypeWrapper<NftCollectionMarketplace>;
    NftCollectionTrait: ResolverTypeWrapper<NftCollectionTrait>;
    NftCollectionTraitStats: ResolverTypeWrapper<NftCollectionTraitStats>;
    NftCollectionsFilterInput: NftCollectionsFilterInput;
    NftContract: ResolverTypeWrapper<NftContract>;
    NftContractInput: NftContractInput;
    NftFee: ResolverTypeWrapper<NftFee>;
    NftMarketplace: NftMarketplace;
    NftOrder: ResolverTypeWrapper<NftOrder>;
    NftOrderConnection: ResolverTypeWrapper<NftOrderConnection>;
    NftOrderEdge: ResolverTypeWrapper<NftOrderEdge>;
    NftProfile: ResolverTypeWrapper<NftProfile>;
    NftRarityProvider: NftRarityProvider;
    NftRouteResponse: ResolverTypeWrapper<NftRouteResponse>;
    NftStandard: NftStandard;
    NftTrade: ResolverTypeWrapper<NftTrade>;
    NftTradeInput: NftTradeInput;
    NftTransfer: ResolverTypeWrapper<NftTransfer>;
    NftTransferInput: NftTransferInput;
    OffRampServiceProvider: ResolverTypeWrapper<OffRampServiceProvider>;
    OffRampServiceProviderInput: OffRampServiceProviderInput;
    OffRampTransactionDetails: ResolverTypeWrapper<OffRampTransactionDetails>;
    OffRampTransactionDetailsInput: OffRampTransactionDetailsInput;
    OffRampTransfer: ResolverTypeWrapper<OffRampTransfer>;
    OffRampTransferInput: OffRampTransferInput;
    OnRampServiceProvider: ResolverTypeWrapper<OnRampServiceProvider>;
    OnRampServiceProviderInput: OnRampServiceProviderInput;
    OnRampTransactionDetails: ResolverTypeWrapper<OnRampTransactionDetails>;
    OnRampTransactionDetailsInput: OnRampTransactionDetailsInput;
    OnRampTransactionsAuth: OnRampTransactionsAuth;
    OnRampTransfer: ResolverTypeWrapper<OnRampTransfer>;
    OnRampTransferInput: OnRampTransferInput;
    OrderStatus: OrderStatus;
    OrderType: OrderType;
    PageInfo: ResolverTypeWrapper<PageInfo>;
    PairInput: PairInput;
    PermitDetailsInput: PermitDetailsInput;
    PermitInput: PermitInput;
    PoolInput: PoolInput;
    PoolTransaction: ResolverTypeWrapper<PoolTransaction>;
    PoolTransactionType: PoolTransactionType;
    Portfolio: ResolverTypeWrapper<Portfolio>;
    PortfolioValueModifier: PortfolioValueModifier;
    PriceSource: PriceSource;
    ProtectionAttackType: ProtectionAttackType;
    ProtectionInfo: ResolverTypeWrapper<ProtectionInfo>;
    ProtectionResult: ProtectionResult;
    ProtocolVersion: ProtocolVersion;
    PushNotification: ResolverTypeWrapper<PushNotification>;
    Query: ResolverTypeWrapper<{}>;
    RewardsCampaign: ResolverTypeWrapper<RewardsCampaign>;
    SafetyLevel: SafetyLevel;
    Status: ResolverTypeWrapper<Status>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Subscription: ResolverTypeWrapper<{}>;
    SubscriptionType: SubscriptionType;
    SwapOrderDetails: ResolverTypeWrapper<SwapOrderDetails>;
    SwapOrderDetailsInput: SwapOrderDetailsInput;
    SwapOrderStatus: SwapOrderStatus;
    SwapOrderType: SwapOrderType;
    TimestampedAmount: ResolverTypeWrapper<TimestampedAmount>;
    TimestampedOhlc: ResolverTypeWrapper<TimestampedOhlc>;
    TimestampedPoolPrice: ResolverTypeWrapper<TimestampedPoolPrice>;
    Token: ResolverTypeWrapper<Token>;
    TokenAmount: ResolverTypeWrapper<TokenAmount>;
    TokenAmountInput: TokenAmountInput;
    TokenApproval: ResolverTypeWrapper<TokenApproval>;
    TokenApprovalInput: TokenApprovalInput;
    TokenAssetInput: TokenAssetInput;
    TokenBalance: ResolverTypeWrapper<TokenBalance>;
    TokenInput: TokenInput;
    TokenMarket: ResolverTypeWrapper<TokenMarket>;
    TokenProject: ResolverTypeWrapper<TokenProject>;
    TokenProjectMarket: ResolverTypeWrapper<TokenProjectMarket>;
    TokenSortableField: TokenSortableField;
    TokenStandard: TokenStandard;
    TokenTradeInput: TokenTradeInput;
    TokenTradeRouteInput: TokenTradeRouteInput;
    TokenTradeRoutesInput: TokenTradeRoutesInput;
    TokenTradeType: TokenTradeType;
    TokenTransfer: ResolverTypeWrapper<TokenTransfer>;
    TokenTransferInput: TokenTransferInput;
    TradePoolInput: TradePoolInput;
    Transaction: ResolverTypeWrapper<Transaction>;
    TransactionDetails: ResolverTypeWrapper<Omit<TransactionDetails, 'assetChanges'> & {
        assetChanges: Array<Maybe<ResolversTypes['AssetChange']>>;
    }>;
    TransactionDetailsInput: TransactionDetailsInput;
    TransactionDirection: TransactionDirection;
    TransactionNotification: ResolverTypeWrapper<TransactionNotification>;
    TransactionStatus: TransactionStatus;
    TransactionType: TransactionType;
    V2Pair: ResolverTypeWrapper<V2Pair>;
    V3Pool: ResolverTypeWrapper<V3Pool>;
    V3PoolTick: ResolverTypeWrapper<V3PoolTick>;
    V4Pool: ResolverTypeWrapper<V4Pool>;
    V4PoolHook: ResolverTypeWrapper<V4PoolHook>;
    V4PoolTick: ResolverTypeWrapper<V4PoolTick>;
};
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    AWSJSON: Scalars['AWSJSON'];
    ActivityDetails: ResolversUnionParentTypes['ActivityDetails'];
    ActivityDetailsInput: ActivityDetailsInput;
    Amount: Amount;
    AmountChange: AmountChange;
    AmountInput: AmountInput;
    ApplicationContract: ApplicationContract;
    ApplicationContractInput: ApplicationContractInput;
    AssetActivity: Omit<AssetActivity, 'assetChanges' | 'details'> & {
        assetChanges: Array<Maybe<ResolversParentTypes['AssetChange']>>;
        details: ResolversParentTypes['ActivityDetails'];
    };
    AssetActivityInput: AssetActivityInput;
    AssetChange: ResolversUnionParentTypes['AssetChange'];
    AssetChangeInput: AssetChangeInput;
    BlockaidFees: BlockaidFees;
    Boolean: Scalars['Boolean'];
    ContractInput: ContractInput;
    CurrencyAmountInput: CurrencyAmountInput;
    DescriptionTranslations: DescriptionTranslations;
    Dimensions: Dimensions;
    DimensionsInput: DimensionsInput;
    FeeData: FeeData;
    Float: Scalars['Float'];
    IAmount: ResolversParentTypes['Amount'] | ResolversParentTypes['TimestampedAmount'];
    IContract: ResolversParentTypes['ApplicationContract'] | ResolversParentTypes['NftContract'] | ResolversParentTypes['Token'];
    ID: Scalars['ID'];
    IPool: ResolversParentTypes['V2Pair'] | ResolversParentTypes['V3Pool'];
    Image: Image;
    ImageInput: ImageInput;
    Int: Scalars['Int'];
    Mutation: {};
    NetworkFee: NetworkFee;
    NftActivity: NftActivity;
    NftActivityConnection: NftActivityConnection;
    NftActivityEdge: NftActivityEdge;
    NftActivityFilterInput: NftActivityFilterInput;
    NftApproval: NftApproval;
    NftApprovalInput: NftApprovalInput;
    NftApproveForAll: NftApproveForAll;
    NftApproveForAllInput: NftApproveForAllInput;
    NftAsset: NftAsset;
    NftAssetConnection: NftAssetConnection;
    NftAssetEdge: NftAssetEdge;
    NftAssetInput: NftAssetInput;
    NftAssetRarity: NftAssetRarity;
    NftAssetTrait: NftAssetTrait;
    NftAssetTraitInput: NftAssetTraitInput;
    NftAssetsFilterInput: NftAssetsFilterInput;
    NftBalance: NftBalance;
    NftBalanceAssetInput: NftBalanceAssetInput;
    NftBalanceConnection: NftBalanceConnection;
    NftBalanceEdge: NftBalanceEdge;
    NftBalancesFilterInput: NftBalancesFilterInput;
    NftCollection: NftCollection;
    NftCollectionBalance: NftCollectionBalance;
    NftCollectionBalanceConnection: NftCollectionBalanceConnection;
    NftCollectionBalanceEdge: NftCollectionBalanceEdge;
    NftCollectionConnection: NftCollectionConnection;
    NftCollectionEdge: NftCollectionEdge;
    NftCollectionInput: NftCollectionInput;
    NftCollectionMarket: NftCollectionMarket;
    NftCollectionMarketplace: NftCollectionMarketplace;
    NftCollectionTrait: NftCollectionTrait;
    NftCollectionTraitStats: NftCollectionTraitStats;
    NftCollectionsFilterInput: NftCollectionsFilterInput;
    NftContract: NftContract;
    NftContractInput: NftContractInput;
    NftFee: NftFee;
    NftOrder: NftOrder;
    NftOrderConnection: NftOrderConnection;
    NftOrderEdge: NftOrderEdge;
    NftProfile: NftProfile;
    NftRouteResponse: NftRouteResponse;
    NftTrade: NftTrade;
    NftTradeInput: NftTradeInput;
    NftTransfer: NftTransfer;
    NftTransferInput: NftTransferInput;
    OffRampServiceProvider: OffRampServiceProvider;
    OffRampServiceProviderInput: OffRampServiceProviderInput;
    OffRampTransactionDetails: OffRampTransactionDetails;
    OffRampTransactionDetailsInput: OffRampTransactionDetailsInput;
    OffRampTransfer: OffRampTransfer;
    OffRampTransferInput: OffRampTransferInput;
    OnRampServiceProvider: OnRampServiceProvider;
    OnRampServiceProviderInput: OnRampServiceProviderInput;
    OnRampTransactionDetails: OnRampTransactionDetails;
    OnRampTransactionDetailsInput: OnRampTransactionDetailsInput;
    OnRampTransactionsAuth: OnRampTransactionsAuth;
    OnRampTransfer: OnRampTransfer;
    OnRampTransferInput: OnRampTransferInput;
    PageInfo: PageInfo;
    PairInput: PairInput;
    PermitDetailsInput: PermitDetailsInput;
    PermitInput: PermitInput;
    PoolInput: PoolInput;
    PoolTransaction: PoolTransaction;
    Portfolio: Portfolio;
    PortfolioValueModifier: PortfolioValueModifier;
    ProtectionInfo: ProtectionInfo;
    PushNotification: PushNotification;
    Query: {};
    RewardsCampaign: RewardsCampaign;
    Status: Status;
    String: Scalars['String'];
    Subscription: {};
    SwapOrderDetails: SwapOrderDetails;
    SwapOrderDetailsInput: SwapOrderDetailsInput;
    TimestampedAmount: TimestampedAmount;
    TimestampedOhlc: TimestampedOhlc;
    TimestampedPoolPrice: TimestampedPoolPrice;
    Token: Token;
    TokenAmount: TokenAmount;
    TokenAmountInput: TokenAmountInput;
    TokenApproval: TokenApproval;
    TokenApprovalInput: TokenApprovalInput;
    TokenAssetInput: TokenAssetInput;
    TokenBalance: TokenBalance;
    TokenInput: TokenInput;
    TokenMarket: TokenMarket;
    TokenProject: TokenProject;
    TokenProjectMarket: TokenProjectMarket;
    TokenTradeInput: TokenTradeInput;
    TokenTradeRouteInput: TokenTradeRouteInput;
    TokenTradeRoutesInput: TokenTradeRoutesInput;
    TokenTransfer: TokenTransfer;
    TokenTransferInput: TokenTransferInput;
    TradePoolInput: TradePoolInput;
    Transaction: Transaction;
    TransactionDetails: Omit<TransactionDetails, 'assetChanges'> & {
        assetChanges: Array<Maybe<ResolversParentTypes['AssetChange']>>;
    };
    TransactionDetailsInput: TransactionDetailsInput;
    TransactionNotification: TransactionNotification;
    V2Pair: V2Pair;
    V3Pool: V3Pool;
    V3PoolTick: V3PoolTick;
    V4Pool: V4Pool;
    V4PoolHook: V4PoolHook;
    V4PoolTick: V4PoolTick;
};
export type Aws_Api_KeyDirectiveArgs = {};
export type Aws_Api_KeyDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_Api_KeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type Aws_AuthDirectiveArgs = {
    cognito_groups?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export type Aws_AuthDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type Aws_Cognito_User_PoolsDirectiveArgs = {
    cognito_groups?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export type Aws_Cognito_User_PoolsDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_Cognito_User_PoolsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type Aws_IamDirectiveArgs = {};
export type Aws_IamDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_IamDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type Aws_LambdaDirectiveArgs = {};
export type Aws_LambdaDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_LambdaDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type Aws_OidcDirectiveArgs = {};
export type Aws_OidcDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_OidcDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type Aws_PublishDirectiveArgs = {
    subscriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export type Aws_PublishDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_PublishDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type Aws_SubscribeDirectiveArgs = {
    mutations?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export type Aws_SubscribeDirectiveResolver<Result, Parent, ContextType = any, Args = Aws_SubscribeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type DeferDirectiveArgs = {};
export type DeferDirectiveResolver<Result, Parent, ContextType = any, Args = DeferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export interface AwsjsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSJSON'], any> {
    name: 'AWSJSON';
}
export type ActivityDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityDetails'] = ResolversParentTypes['ActivityDetails']> = {
    __resolveType: TypeResolveFn<'OffRampTransactionDetails' | 'OnRampTransactionDetails' | 'SwapOrderDetails' | 'TransactionDetails', ParentType, ContextType>;
};
export type AmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Amount'] = ResolversParentTypes['Amount']> = {
    currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type AmountChangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AmountChange'] = ResolversParentTypes['AmountChange']> = {
    absolute?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    percentage?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type ApplicationContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplicationContract'] = ResolversParentTypes['ApplicationContract']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type AssetActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetActivity'] = ResolversParentTypes['AssetActivity']> = {
    addresses?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
    assetChanges?: Resolver<Array<Maybe<ResolversTypes['AssetChange']>>, ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    details?: Resolver<ResolversTypes['ActivityDetails'], ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['ActivityType'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type AssetChangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetChange'] = ResolversParentTypes['AssetChange']> = {
    __resolveType: TypeResolveFn<'NftApproval' | 'NftApproveForAll' | 'NftTransfer' | 'OffRampTransfer' | 'OnRampTransfer' | 'TokenApproval' | 'TokenTransfer', ParentType, ContextType>;
};
export type BlockaidFeesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockaidFees'] = ResolversParentTypes['BlockaidFees']> = {
    buy?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sell?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    transfer?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type DescriptionTranslationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DescriptionTranslations'] = ResolversParentTypes['DescriptionTranslations']> = {
    descriptionEnUs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionEs419?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionEsEs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionEsUs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionFrFr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionHiIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionIdId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionJaJp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionMsMy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionNlNl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionPtPt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionRuRu?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionThTh?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionTrTr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionUkUa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionUrPk?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionViVn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionZhHans?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionZhHant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type DimensionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dimensions'] = ResolversParentTypes['Dimensions']> = {
    height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type FeeDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeeData'] = ResolversParentTypes['FeeData']> = {
    buyFeeBps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    externalTransferFailed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    feeTakenOnTransfer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    sellFeeBps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sellReverted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type IAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['IAmount'] = ResolversParentTypes['IAmount']> = {
    __resolveType: TypeResolveFn<'Amount' | 'TimestampedAmount', ParentType, ContextType>;
    currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
    value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};
export type IContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['IContract'] = ResolversParentTypes['IContract']> = {
    __resolveType: TypeResolveFn<'ApplicationContract' | 'NftContract' | 'Token', ParentType, ContextType>;
    address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
};
export type IPoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['IPool'] = ResolversParentTypes['IPool']> = {
    __resolveType: TypeResolveFn<'V2Pair' | 'V3Pool', ParentType, ContextType>;
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    createdAtTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    cumulativeVolume?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<IPoolCumulativeVolumeArgs, 'duration'>>;
    historicalVolume?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<IPoolHistoricalVolumeArgs, 'duration'>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    priceHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedPoolPrice']>>>, ParentType, ContextType, RequireFields<IPoolPriceHistoryArgs, 'duration'>>;
    protocolVersion?: Resolver<ResolversTypes['ProtocolVersion'], ParentType, ContextType>;
    token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token0Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token1Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    totalLiquidity?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    totalLiquidityPercentChange24h?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<IPoolTransactionsArgs, 'first'>>;
    txCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};
export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
    dimensions?: Resolver<Maybe<ResolversTypes['Dimensions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    assetActivity?: Resolver<ResolversTypes['AssetActivity'], ParentType, ContextType, RequireFields<MutationAssetActivityArgs, 'input'>>;
    heartbeat?: Resolver<ResolversTypes['Status'], ParentType, ContextType, RequireFields<MutationHeartbeatArgs, 'subscriptionId' | 'type'>>;
    unsubscribe?: Resolver<ResolversTypes['Status'], ParentType, ContextType, RequireFields<MutationUnsubscribeArgs, 'subscriptionId' | 'type'>>;
};
export type NetworkFeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NetworkFee'] = ResolversParentTypes['NetworkFee']> = {
    quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tokenAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tokenChain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tokenSymbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftActivity'] = ResolversParentTypes['NftActivity']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    asset?: Resolver<Maybe<ResolversTypes['NftAsset']>, ParentType, ContextType>;
    fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    marketplace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    toAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    transactionHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<ResolversTypes['NftActivityType'], ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftActivityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftActivityConnection'] = ResolversParentTypes['NftActivityConnection']> = {
    edges?: Resolver<Array<ResolversTypes['NftActivityEdge']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftActivityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftActivityEdge'] = ResolversParentTypes['NftActivityEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<ResolversTypes['NftActivity'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftApprovalResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftApproval'] = ResolversParentTypes['NftApproval']> = {
    approvedAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['NftAsset'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    nftStandard?: Resolver<ResolversTypes['NftStandard'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftApproveForAllResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftApproveForAll'] = ResolversParentTypes['NftApproveForAll']> = {
    approved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['NftAsset'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    nftStandard?: Resolver<ResolversTypes['NftStandard'], ParentType, ContextType>;
    operatorAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftAsset'] = ResolversParentTypes['NftAsset']> = {
    animationUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    chain?: Resolver<Maybe<ResolversTypes['Chain']>, ParentType, ContextType>;
    collection?: Resolver<Maybe<ResolversTypes['NftCollection']>, ParentType, ContextType>;
    creator?: Resolver<Maybe<ResolversTypes['NftProfile']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    flaggedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isSpam?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    listings?: Resolver<Maybe<ResolversTypes['NftOrderConnection']>, ParentType, ContextType, Partial<NftAssetListingsArgs>>;
    mediaType?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
    metadataUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    nftContract?: Resolver<Maybe<ResolversTypes['NftContract']>, ParentType, ContextType>;
    originalImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    ownerAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    protectionInfo?: Resolver<Maybe<ResolversTypes['ProtectionInfo']>, ParentType, ContextType>;
    rarities?: Resolver<Maybe<Array<ResolversTypes['NftAssetRarity']>>, ParentType, ContextType>;
    smallImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    smallImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    suspiciousFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    thumbnail?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    traits?: Resolver<Maybe<Array<ResolversTypes['NftAssetTrait']>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftAssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftAssetConnection'] = ResolversParentTypes['NftAssetConnection']> = {
    edges?: Resolver<Array<ResolversTypes['NftAssetEdge']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftAssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftAssetEdge'] = ResolversParentTypes['NftAssetEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<ResolversTypes['NftAsset'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftAssetRarityResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftAssetRarity'] = ResolversParentTypes['NftAssetRarity']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    provider?: Resolver<Maybe<ResolversTypes['NftRarityProvider']>, ParentType, ContextType>;
    rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftAssetTraitResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftAssetTrait'] = ResolversParentTypes['NftAssetTrait']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    rarity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftBalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftBalance'] = ResolversParentTypes['NftBalance']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    lastPrice?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType>;
    listedMarketplaces?: Resolver<Maybe<Array<ResolversTypes['NftMarketplace']>>, ParentType, ContextType>;
    listingFees?: Resolver<Maybe<Array<Maybe<ResolversTypes['NftFee']>>>, ParentType, ContextType>;
    ownedAsset?: Resolver<Maybe<ResolversTypes['NftAsset']>, ParentType, ContextType>;
    quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftBalanceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftBalanceConnection'] = ResolversParentTypes['NftBalanceConnection']> = {
    edges?: Resolver<Array<ResolversTypes['NftBalanceEdge']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftBalanceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftBalanceEdge'] = ResolversParentTypes['NftBalanceEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<ResolversTypes['NftBalance'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollection'] = ResolversParentTypes['NftCollection']> = {
    bannerImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    bannerImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    collectionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    creator?: Resolver<Maybe<ResolversTypes['NftProfile']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    discordUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    homepageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    instagramName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    markets?: Resolver<Maybe<Array<ResolversTypes['NftCollectionMarket']>>, ParentType, ContextType, RequireFields<NftCollectionMarketsArgs, 'currencies'>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    nftContracts?: Resolver<Maybe<Array<ResolversTypes['NftContract']>>, ParentType, ContextType>;
    numAssets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    openseaUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    traits?: Resolver<Maybe<Array<ResolversTypes['NftCollectionTrait']>>, ParentType, ContextType>;
    twitterName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionBalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionBalance'] = ResolversParentTypes['NftCollectionBalance']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    balance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    logoImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionBalanceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionBalanceConnection'] = ResolversParentTypes['NftCollectionBalanceConnection']> = {
    edges?: Resolver<Array<ResolversTypes['NftCollectionBalanceEdge']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionBalanceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionBalanceEdge'] = ResolversParentTypes['NftCollectionBalanceEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<ResolversTypes['NftCollectionBalance'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionConnection'] = ResolversParentTypes['NftCollectionConnection']> = {
    edges?: Resolver<Array<ResolversTypes['NftCollectionEdge']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionEdge'] = ResolversParentTypes['NftCollectionEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<ResolversTypes['NftCollection'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionMarketResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionMarket'] = ResolversParentTypes['NftCollectionMarket']> = {
    floorPrice?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType>;
    floorPricePercentChange?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType, Partial<NftCollectionMarketFloorPricePercentChangeArgs>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    listings?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType>;
    marketplaces?: Resolver<Maybe<Array<ResolversTypes['NftCollectionMarketplace']>>, ParentType, ContextType, Partial<NftCollectionMarketMarketplacesArgs>>;
    nftContracts?: Resolver<Maybe<Array<ResolversTypes['NftContract']>>, ParentType, ContextType>;
    owners?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    percentListed?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType>;
    percentUniqueOwners?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType>;
    sales?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType, Partial<NftCollectionMarketSalesArgs>>;
    totalVolume?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType>;
    volume?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType, Partial<NftCollectionMarketVolumeArgs>>;
    volume24h?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    volumePercentChange?: Resolver<Maybe<ResolversTypes['TimestampedAmount']>, ParentType, ContextType, Partial<NftCollectionMarketVolumePercentChangeArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionMarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionMarketplace'] = ResolversParentTypes['NftCollectionMarketplace']> = {
    floorPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    listings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    marketplace?: Resolver<Maybe<ResolversTypes['NftMarketplace']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionTraitResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionTrait'] = ResolversParentTypes['NftCollectionTrait']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stats?: Resolver<Maybe<Array<ResolversTypes['NftCollectionTraitStats']>>, ParentType, ContextType>;
    values?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftCollectionTraitStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftCollectionTraitStats'] = ResolversParentTypes['NftCollectionTraitStats']> = {
    assets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    listings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftContract'] = ResolversParentTypes['NftContract']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    standard?: Resolver<Maybe<ResolversTypes['NftStandard']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    totalSupply?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftFeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftFee'] = ResolversParentTypes['NftFee']> = {
    basisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    payoutAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftOrder'] = ResolversParentTypes['NftOrder']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    auctionType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    endAt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    maker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    marketplace?: Resolver<ResolversTypes['NftMarketplace'], ParentType, ContextType>;
    marketplaceUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    orderHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    poolPrices?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
    price?: Resolver<ResolversTypes['Amount'], ParentType, ContextType>;
    protocolParameters?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType>;
    quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    startAt?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
    taker?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<ResolversTypes['OrderType'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftOrderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftOrderConnection'] = ResolversParentTypes['NftOrderConnection']> = {
    edges?: Resolver<Array<ResolversTypes['NftOrderEdge']>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftOrderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftOrderEdge'] = ResolversParentTypes['NftOrderEdge']> = {
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    node?: Resolver<ResolversTypes['NftOrder'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftProfile'] = ResolversParentTypes['NftProfile']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    profileImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftRouteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftRouteResponse'] = ResolversParentTypes['NftRouteResponse']> = {
    calldata?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    route?: Resolver<Maybe<Array<ResolversTypes['NftTrade']>>, ParentType, ContextType>;
    sendAmount?: Resolver<ResolversTypes['TokenAmount'], ParentType, ContextType>;
    toAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftTradeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftTrade'] = ResolversParentTypes['NftTrade']> = {
    amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    marketplace?: Resolver<ResolversTypes['NftMarketplace'], ParentType, ContextType>;
    price?: Resolver<ResolversTypes['TokenAmount'], ParentType, ContextType>;
    quotePrice?: Resolver<Maybe<ResolversTypes['TokenAmount']>, ParentType, ContextType>;
    tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    tokenType?: Resolver<Maybe<ResolversTypes['NftStandard']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type NftTransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftTransfer'] = ResolversParentTypes['NftTransfer']> = {
    asset?: Resolver<ResolversTypes['NftAsset'], ParentType, ContextType>;
    direction?: Resolver<ResolversTypes['TransactionDirection'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    nftStandard?: Resolver<ResolversTypes['NftStandard'], ParentType, ContextType>;
    recipient?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    sender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type OffRampServiceProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['OffRampServiceProvider'] = ResolversParentTypes['OffRampServiceProvider']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    logoDarkUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    logoLightUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    serviceProvider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    supportUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type OffRampTransactionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OffRampTransactionDetails'] = ResolversParentTypes['OffRampTransactionDetails']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    offRampTransfer?: Resolver<ResolversTypes['OffRampTransfer'], ParentType, ContextType>;
    senderAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type OffRampTransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['OffRampTransfer'] = ResolversParentTypes['OffRampTransfer']> = {
    amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    destinationAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    destinationCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    externalSessionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    networkFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    serviceProvider?: Resolver<ResolversTypes['OffRampServiceProvider'], ParentType, ContextType>;
    token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    tokenStandard?: Resolver<ResolversTypes['TokenStandard'], ParentType, ContextType>;
    totalFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    transactionFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    transactionReferenceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type OnRampServiceProviderResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnRampServiceProvider'] = ResolversParentTypes['OnRampServiceProvider']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    logoDarkUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    logoLightUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    serviceProvider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    supportUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type OnRampTransactionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnRampTransactionDetails'] = ResolversParentTypes['OnRampTransactionDetails']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    onRampTransfer?: Resolver<ResolversTypes['OnRampTransfer'], ParentType, ContextType>;
    receiverAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type OnRampTransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnRampTransfer'] = ResolversParentTypes['OnRampTransfer']> = {
    amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    externalSessionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    networkFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    serviceProvider?: Resolver<ResolversTypes['OnRampServiceProvider'], ParentType, ContextType>;
    sourceAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    sourceCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    tokenStandard?: Resolver<ResolversTypes['TokenStandard'], ParentType, ContextType>;
    totalFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    transactionFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    transactionReferenceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
    endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type PoolTransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTransaction'] = ResolversParentTypes['PoolTransaction']> = {
    account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    protocolVersion?: Resolver<ResolversTypes['ProtocolVersion'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    token0Quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    token1Quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['PoolTransactionType'], ParentType, ContextType>;
    usdValue?: Resolver<ResolversTypes['Amount'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type PortfolioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Portfolio'] = ResolversParentTypes['Portfolio']> = {
    assetActivities?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssetActivity']>>>, ParentType, ContextType, Partial<PortfolioAssetActivitiesArgs>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    nftBalances?: Resolver<Maybe<Array<Maybe<ResolversTypes['NftBalance']>>>, ParentType, ContextType>;
    ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    tokenBalances?: Resolver<Maybe<Array<Maybe<ResolversTypes['TokenBalance']>>>, ParentType, ContextType>;
    tokensTotalDenominatedValue?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    tokensTotalDenominatedValueChange?: Resolver<Maybe<ResolversTypes['AmountChange']>, ParentType, ContextType, Partial<PortfolioTokensTotalDenominatedValueChangeArgs>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type ProtectionInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProtectionInfo'] = ResolversParentTypes['ProtectionInfo']> = {
    attackTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProtectionAttackType']>>>, ParentType, ContextType>;
    blockaidFees?: Resolver<Maybe<ResolversTypes['BlockaidFees']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['ProtectionResult']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type PushNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PushNotification'] = ResolversParentTypes['PushNotification']> = {
    contents?: Resolver<ResolversTypes['AWSJSON'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    notifyAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    signerHeader?: Resolver<ResolversTypes['AWSJSON'], ParentType, ContextType>;
    viewerHeader?: Resolver<ResolversTypes['AWSJSON'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    convert?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<QueryConvertArgs, 'fromAmount' | 'toCurrency'>>;
    dailyProtocolTvl?: Resolver<Maybe<Array<ResolversTypes['TimestampedAmount']>>, ParentType, ContextType, RequireFields<QueryDailyProtocolTvlArgs, 'chain' | 'version'>>;
    historicalProtocolVolume?: Resolver<Maybe<Array<ResolversTypes['TimestampedAmount']>>, ParentType, ContextType, RequireFields<QueryHistoricalProtocolVolumeArgs, 'chain' | 'duration' | 'version'>>;
    isV3SubgraphStale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryIsV3SubgraphStaleArgs, 'chain'>>;
    nftActivity?: Resolver<Maybe<ResolversTypes['NftActivityConnection']>, ParentType, ContextType, Partial<QueryNftActivityArgs>>;
    nftAssets?: Resolver<Maybe<ResolversTypes['NftAssetConnection']>, ParentType, ContextType, RequireFields<QueryNftAssetsArgs, 'address'>>;
    nftBalances?: Resolver<Maybe<ResolversTypes['NftBalanceConnection']>, ParentType, ContextType, RequireFields<QueryNftBalancesArgs, 'ownerAddress'>>;
    nftCollectionBalances?: Resolver<Maybe<ResolversTypes['NftCollectionBalanceConnection']>, ParentType, ContextType, RequireFields<QueryNftCollectionBalancesArgs, 'ownerAddress'>>;
    nftCollections?: Resolver<Maybe<ResolversTypes['NftCollectionConnection']>, ParentType, ContextType, Partial<QueryNftCollectionsArgs>>;
    nftRoute?: Resolver<Maybe<ResolversTypes['NftRouteResponse']>, ParentType, ContextType, RequireFields<QueryNftRouteArgs, 'nftTrades' | 'senderAddress'>>;
    portfolios?: Resolver<Maybe<Array<Maybe<ResolversTypes['Portfolio']>>>, ParentType, ContextType, RequireFields<QueryPortfoliosArgs, 'ownerAddresses'>>;
    searchTokens?: Resolver<Maybe<Array<Maybe<ResolversTypes['Token']>>>, ParentType, ContextType, RequireFields<QuerySearchTokensArgs, 'searchQuery'>>;
    token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenArgs, 'chain'>>;
    tokenProjects?: Resolver<Maybe<Array<Maybe<ResolversTypes['TokenProject']>>>, ParentType, ContextType, RequireFields<QueryTokenProjectsArgs, 'contracts'>>;
    tokens?: Resolver<Maybe<Array<Maybe<ResolversTypes['Token']>>>, ParentType, ContextType, RequireFields<QueryTokensArgs, 'contracts'>>;
    topCollections?: Resolver<Maybe<ResolversTypes['NftCollectionConnection']>, ParentType, ContextType, Partial<QueryTopCollectionsArgs>>;
    topTokens?: Resolver<Maybe<Array<Maybe<ResolversTypes['Token']>>>, ParentType, ContextType, Partial<QueryTopTokensArgs>>;
    topV2Pairs?: Resolver<Maybe<Array<ResolversTypes['V2Pair']>>, ParentType, ContextType, RequireFields<QueryTopV2PairsArgs, 'chain' | 'first'>>;
    topV3Pools?: Resolver<Maybe<Array<ResolversTypes['V3Pool']>>, ParentType, ContextType, RequireFields<QueryTopV3PoolsArgs, 'chain' | 'first'>>;
    topV4Pools?: Resolver<Maybe<Array<ResolversTypes['V4Pool']>>, ParentType, ContextType, RequireFields<QueryTopV4PoolsArgs, 'chain' | 'first'>>;
    transactionNotification?: Resolver<Maybe<ResolversTypes['TransactionNotification']>, ParentType, ContextType, RequireFields<QueryTransactionNotificationArgs, 'address' | 'chain' | 'transactionHash'>>;
    v2Pair?: Resolver<Maybe<ResolversTypes['V2Pair']>, ParentType, ContextType, RequireFields<QueryV2PairArgs, 'address' | 'chain'>>;
    v2Transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<QueryV2TransactionsArgs, 'chain' | 'first'>>;
    v3Pool?: Resolver<Maybe<ResolversTypes['V3Pool']>, ParentType, ContextType, RequireFields<QueryV3PoolArgs, 'address' | 'chain'>>;
    v3PoolsForTokenPair?: Resolver<Maybe<Array<ResolversTypes['V3Pool']>>, ParentType, ContextType, RequireFields<QueryV3PoolsForTokenPairArgs, 'chain' | 'token0' | 'token1'>>;
    v3Transactions?: Resolver<Maybe<Array<ResolversTypes['PoolTransaction']>>, ParentType, ContextType, RequireFields<QueryV3TransactionsArgs, 'chain' | 'first'>>;
    v4Pool?: Resolver<Maybe<ResolversTypes['V4Pool']>, ParentType, ContextType, RequireFields<QueryV4PoolArgs, 'chain' | 'poolId'>>;
    v4PoolsForTokenPair?: Resolver<Maybe<Array<ResolversTypes['V4Pool']>>, ParentType, ContextType, RequireFields<QueryV4PoolsForTokenPairArgs, 'chain' | 'token0' | 'token1'>>;
    v4Transactions?: Resolver<Maybe<Array<ResolversTypes['PoolTransaction']>>, ParentType, ContextType, RequireFields<QueryV4TransactionsArgs, 'chain' | 'first'>>;
};
export type RewardsCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['RewardsCampaign'] = ResolversParentTypes['RewardsCampaign']> = {
    boostedApr?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    distributedRewards?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    endTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    startTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    totalRewardAllocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
    success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
    onAssetActivity?: SubscriptionResolver<Maybe<ResolversTypes['AssetActivity']>, "onAssetActivity", ParentType, ContextType, RequireFields<SubscriptionOnAssetActivityArgs, 'addresses' | 'subscriptionId'>>;
};
export type SwapOrderDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SwapOrderDetails'] = ResolversParentTypes['SwapOrderDetails']> = {
    encodedOrder?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    expiry?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    inputToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    inputTokenQuantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    offerer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    outputToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    outputTokenQuantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['SwapOrderStatus'], ParentType, ContextType>;
    swapOrderStatus?: Resolver<ResolversTypes['SwapOrderStatus'], ParentType, ContextType>;
    swapOrderType?: Resolver<ResolversTypes['SwapOrderType'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TimestampedAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimestampedAmount'] = ResolversParentTypes['TimestampedAmount']> = {
    currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TimestampedOhlcResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimestampedOhlc'] = ResolversParentTypes['TimestampedOhlc']> = {
    close?: Resolver<ResolversTypes['Amount'], ParentType, ContextType>;
    high?: Resolver<ResolversTypes['Amount'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    low?: Resolver<ResolversTypes['Amount'], ParentType, ContextType>;
    open?: Resolver<ResolversTypes['Amount'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TimestampedPoolPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TimestampedPoolPrice'] = ResolversParentTypes['TimestampedPoolPrice']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    token0Price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    token1Price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
    address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    decimals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    feeData?: Resolver<Maybe<ResolversTypes['FeeData']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    market?: Resolver<Maybe<ResolversTypes['TokenMarket']>, ParentType, ContextType, Partial<TokenMarketArgs>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    project?: Resolver<Maybe<ResolversTypes['TokenProject']>, ParentType, ContextType>;
    protectionInfo?: Resolver<Maybe<ResolversTypes['ProtectionInfo']>, ParentType, ContextType>;
    standard?: Resolver<Maybe<ResolversTypes['TokenStandard']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    v2Transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<TokenV2TransactionsArgs, 'first'>>;
    v3Transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<TokenV3TransactionsArgs, 'first'>>;
    v4Transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<TokenV4TransactionsArgs, 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAmount'] = ResolversParentTypes['TokenAmount']> = {
    currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenApprovalResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenApproval'] = ResolversParentTypes['TokenApproval']> = {
    approvedAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    tokenStandard?: Resolver<ResolversTypes['TokenStandard'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenBalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBalance'] = ResolversParentTypes['TokenBalance']> = {
    blockNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    blockTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    denominatedValue?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isHidden?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    tokenProjectMarket?: Resolver<Maybe<ResolversTypes['TokenProjectMarket']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenMarketResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenMarket'] = ResolversParentTypes['TokenMarket']> = {
    fullyDilutedValuation?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    historicalTvl?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<TokenMarketHistoricalTvlArgs, 'duration'>>;
    historicalVolume?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<TokenMarketHistoricalVolumeArgs, 'duration'>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    ohlc?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedOhlc']>>>, ParentType, ContextType, RequireFields<TokenMarketOhlcArgs, 'duration'>>;
    price?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    priceHighLow?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<TokenMarketPriceHighLowArgs, 'duration' | 'highLow'>>;
    priceHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<TokenMarketPriceHistoryArgs, 'duration'>>;
    pricePercentChange?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<TokenMarketPricePercentChangeArgs, 'duration'>>;
    priceSource?: Resolver<ResolversTypes['PriceSource'], ParentType, ContextType>;
    token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    totalValueLocked?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    volume?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<TokenMarketVolumeArgs, 'duration'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenProject'] = ResolversParentTypes['TokenProject']> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    descriptionTranslations?: Resolver<Maybe<ResolversTypes['DescriptionTranslations']>, ParentType, ContextType>;
    homepageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    isSpam?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    logo?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    logoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    markets?: Resolver<Maybe<Array<Maybe<ResolversTypes['TokenProjectMarket']>>>, ParentType, ContextType, RequireFields<TokenProjectMarketsArgs, 'currencies'>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    safetyLevel?: Resolver<Maybe<ResolversTypes['SafetyLevel']>, ParentType, ContextType>;
    smallLogo?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
    spamCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType>;
    twitterName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenProjectMarketResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenProjectMarket'] = ResolversParentTypes['TokenProjectMarket']> = {
    currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
    fullyDilutedValuation?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    marketCap?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    priceHigh52w?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    priceHighLow?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<TokenProjectMarketPriceHighLowArgs, 'duration' | 'highLow'>>;
    priceHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<TokenProjectMarketPriceHistoryArgs, 'duration'>>;
    priceLow52w?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    pricePercentChange?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<TokenProjectMarketPricePercentChangeArgs, 'duration'>>;
    pricePercentChange24h?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    tokenProject?: Resolver<ResolversTypes['TokenProject'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TokenTransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTransfer'] = ResolversParentTypes['TokenTransfer']> = {
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    direction?: Resolver<ResolversTypes['TransactionDirection'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    recipient?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    sender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    tokenStandard?: Resolver<ResolversTypes['TokenStandard'], ParentType, ContextType>;
    transactedValue?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
    blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    maxFeePerGas?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
    to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TransactionDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionDetails'] = ResolversParentTypes['TransactionDetails']> = {
    application?: Resolver<Maybe<ResolversTypes['ApplicationContract']>, ParentType, ContextType>;
    assetChanges?: Resolver<Array<Maybe<ResolversTypes['AssetChange']>>, ParentType, ContextType>;
    from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    networkFee?: Resolver<Maybe<ResolversTypes['NetworkFee']>, ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
    to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    transactionStatus?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['TransactionType'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type TransactionNotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionNotification'] = ResolversParentTypes['TransactionNotification']> = {
    hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    push?: Resolver<Array<ResolversTypes['PushNotification']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type V2PairResolvers<ContextType = any, ParentType extends ResolversParentTypes['V2Pair'] = ResolversParentTypes['V2Pair']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    createdAtTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    cumulativeVolume?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<V2PairCumulativeVolumeArgs, 'duration'>>;
    historicalVolume?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<V2PairHistoricalVolumeArgs, 'duration'>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    priceHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedPoolPrice']>>>, ParentType, ContextType, RequireFields<V2PairPriceHistoryArgs, 'duration'>>;
    protocolVersion?: Resolver<ResolversTypes['ProtocolVersion'], ParentType, ContextType>;
    token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token0Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token1Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    totalLiquidity?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    totalLiquidityPercentChange24h?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<V2PairTransactionsArgs, 'first'>>;
    txCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type V3PoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['V3Pool'] = ResolversParentTypes['V3Pool']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    createdAtTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    cumulativeVolume?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<V3PoolCumulativeVolumeArgs, 'duration'>>;
    feeTier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    historicalVolume?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<V3PoolHistoricalVolumeArgs, 'duration'>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    priceHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedPoolPrice']>>>, ParentType, ContextType, RequireFields<V3PoolPriceHistoryArgs, 'duration'>>;
    protocolVersion?: Resolver<ResolversTypes['ProtocolVersion'], ParentType, ContextType>;
    ticks?: Resolver<Maybe<Array<Maybe<ResolversTypes['V3PoolTick']>>>, ParentType, ContextType, Partial<V3PoolTicksArgs>>;
    token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token0Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token1Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    totalLiquidity?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    totalLiquidityPercentChange24h?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<V3PoolTransactionsArgs, 'first'>>;
    txCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type V3PoolTickResolvers<ContextType = any, ParentType extends ResolversParentTypes['V3PoolTick'] = ResolversParentTypes['V3PoolTick']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    liquidityGross?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    liquidityNet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price0?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tickIdx?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type V4PoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['V4Pool'] = ResolversParentTypes['V4Pool']> = {
    chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
    createdAtTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    cumulativeVolume?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType, RequireFields<V4PoolCumulativeVolumeArgs, 'duration'>>;
    feeTier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    historicalVolume?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedAmount']>>>, ParentType, ContextType, RequireFields<V4PoolHistoricalVolumeArgs, 'duration'>>;
    hook?: Resolver<Maybe<ResolversTypes['V4PoolHook']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    poolId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    priceHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimestampedPoolPrice']>>>, ParentType, ContextType, RequireFields<V4PoolPriceHistoryArgs, 'duration'>>;
    protocolVersion?: Resolver<ResolversTypes['ProtocolVersion'], ParentType, ContextType>;
    rewardsCampaign?: Resolver<Maybe<ResolversTypes['RewardsCampaign']>, ParentType, ContextType>;
    ticks?: Resolver<Maybe<Array<Maybe<ResolversTypes['V4PoolTick']>>>, ParentType, ContextType, Partial<V4PoolTicksArgs>>;
    token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token0Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    token1Supply?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    totalLiquidity?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    totalLiquidityPercentChange24h?: Resolver<Maybe<ResolversTypes['Amount']>, ParentType, ContextType>;
    transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PoolTransaction']>>>, ParentType, ContextType, RequireFields<V4PoolTransactionsArgs, 'first'>>;
    txCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type V4PoolHookResolvers<ContextType = any, ParentType extends ResolversParentTypes['V4PoolHook'] = ResolversParentTypes['V4PoolHook']> = {
    address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type V4PoolTickResolvers<ContextType = any, ParentType extends ResolversParentTypes['V4PoolTick'] = ResolversParentTypes['V4PoolTick']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    liquidityGross?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    liquidityNet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price0?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tickIdx?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};
export type Resolvers<ContextType = any> = {
    AWSJSON?: GraphQLScalarType;
    ActivityDetails?: ActivityDetailsResolvers<ContextType>;
    Amount?: AmountResolvers<ContextType>;
    AmountChange?: AmountChangeResolvers<ContextType>;
    ApplicationContract?: ApplicationContractResolvers<ContextType>;
    AssetActivity?: AssetActivityResolvers<ContextType>;
    AssetChange?: AssetChangeResolvers<ContextType>;
    BlockaidFees?: BlockaidFeesResolvers<ContextType>;
    DescriptionTranslations?: DescriptionTranslationsResolvers<ContextType>;
    Dimensions?: DimensionsResolvers<ContextType>;
    FeeData?: FeeDataResolvers<ContextType>;
    IAmount?: IAmountResolvers<ContextType>;
    IContract?: IContractResolvers<ContextType>;
    IPool?: IPoolResolvers<ContextType>;
    Image?: ImageResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    NetworkFee?: NetworkFeeResolvers<ContextType>;
    NftActivity?: NftActivityResolvers<ContextType>;
    NftActivityConnection?: NftActivityConnectionResolvers<ContextType>;
    NftActivityEdge?: NftActivityEdgeResolvers<ContextType>;
    NftApproval?: NftApprovalResolvers<ContextType>;
    NftApproveForAll?: NftApproveForAllResolvers<ContextType>;
    NftAsset?: NftAssetResolvers<ContextType>;
    NftAssetConnection?: NftAssetConnectionResolvers<ContextType>;
    NftAssetEdge?: NftAssetEdgeResolvers<ContextType>;
    NftAssetRarity?: NftAssetRarityResolvers<ContextType>;
    NftAssetTrait?: NftAssetTraitResolvers<ContextType>;
    NftBalance?: NftBalanceResolvers<ContextType>;
    NftBalanceConnection?: NftBalanceConnectionResolvers<ContextType>;
    NftBalanceEdge?: NftBalanceEdgeResolvers<ContextType>;
    NftCollection?: NftCollectionResolvers<ContextType>;
    NftCollectionBalance?: NftCollectionBalanceResolvers<ContextType>;
    NftCollectionBalanceConnection?: NftCollectionBalanceConnectionResolvers<ContextType>;
    NftCollectionBalanceEdge?: NftCollectionBalanceEdgeResolvers<ContextType>;
    NftCollectionConnection?: NftCollectionConnectionResolvers<ContextType>;
    NftCollectionEdge?: NftCollectionEdgeResolvers<ContextType>;
    NftCollectionMarket?: NftCollectionMarketResolvers<ContextType>;
    NftCollectionMarketplace?: NftCollectionMarketplaceResolvers<ContextType>;
    NftCollectionTrait?: NftCollectionTraitResolvers<ContextType>;
    NftCollectionTraitStats?: NftCollectionTraitStatsResolvers<ContextType>;
    NftContract?: NftContractResolvers<ContextType>;
    NftFee?: NftFeeResolvers<ContextType>;
    NftOrder?: NftOrderResolvers<ContextType>;
    NftOrderConnection?: NftOrderConnectionResolvers<ContextType>;
    NftOrderEdge?: NftOrderEdgeResolvers<ContextType>;
    NftProfile?: NftProfileResolvers<ContextType>;
    NftRouteResponse?: NftRouteResponseResolvers<ContextType>;
    NftTrade?: NftTradeResolvers<ContextType>;
    NftTransfer?: NftTransferResolvers<ContextType>;
    OffRampServiceProvider?: OffRampServiceProviderResolvers<ContextType>;
    OffRampTransactionDetails?: OffRampTransactionDetailsResolvers<ContextType>;
    OffRampTransfer?: OffRampTransferResolvers<ContextType>;
    OnRampServiceProvider?: OnRampServiceProviderResolvers<ContextType>;
    OnRampTransactionDetails?: OnRampTransactionDetailsResolvers<ContextType>;
    OnRampTransfer?: OnRampTransferResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    PoolTransaction?: PoolTransactionResolvers<ContextType>;
    Portfolio?: PortfolioResolvers<ContextType>;
    ProtectionInfo?: ProtectionInfoResolvers<ContextType>;
    PushNotification?: PushNotificationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    RewardsCampaign?: RewardsCampaignResolvers<ContextType>;
    Status?: StatusResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    SwapOrderDetails?: SwapOrderDetailsResolvers<ContextType>;
    TimestampedAmount?: TimestampedAmountResolvers<ContextType>;
    TimestampedOhlc?: TimestampedOhlcResolvers<ContextType>;
    TimestampedPoolPrice?: TimestampedPoolPriceResolvers<ContextType>;
    Token?: TokenResolvers<ContextType>;
    TokenAmount?: TokenAmountResolvers<ContextType>;
    TokenApproval?: TokenApprovalResolvers<ContextType>;
    TokenBalance?: TokenBalanceResolvers<ContextType>;
    TokenMarket?: TokenMarketResolvers<ContextType>;
    TokenProject?: TokenProjectResolvers<ContextType>;
    TokenProjectMarket?: TokenProjectMarketResolvers<ContextType>;
    TokenTransfer?: TokenTransferResolvers<ContextType>;
    Transaction?: TransactionResolvers<ContextType>;
    TransactionDetails?: TransactionDetailsResolvers<ContextType>;
    TransactionNotification?: TransactionNotificationResolvers<ContextType>;
    V2Pair?: V2PairResolvers<ContextType>;
    V3Pool?: V3PoolResolvers<ContextType>;
    V3PoolTick?: V3PoolTickResolvers<ContextType>;
    V4Pool?: V4PoolResolvers<ContextType>;
    V4PoolHook?: V4PoolHookResolvers<ContextType>;
    V4PoolTick?: V4PoolTickResolvers<ContextType>;
};
export type DirectiveResolvers<ContextType = any> = {
    aws_api_key?: Aws_Api_KeyDirectiveResolver<any, any, ContextType>;
    aws_auth?: Aws_AuthDirectiveResolver<any, any, ContextType>;
    aws_cognito_user_pools?: Aws_Cognito_User_PoolsDirectiveResolver<any, any, ContextType>;
    aws_iam?: Aws_IamDirectiveResolver<any, any, ContextType>;
    aws_lambda?: Aws_LambdaDirectiveResolver<any, any, ContextType>;
    aws_oidc?: Aws_OidcDirectiveResolver<any, any, ContextType>;
    aws_publish?: Aws_PublishDirectiveResolver<any, any, ContextType>;
    aws_subscribe?: Aws_SubscribeDirectiveResolver<any, any, ContextType>;
    defer?: DeferDirectiveResolver<any, any, ContextType>;
};
//# sourceMappingURL=types-and-hooks.d.ts.map