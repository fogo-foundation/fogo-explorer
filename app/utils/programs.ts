import { Cluster } from './cluster';

export enum PROGRAM_NAMES {
    // native built-ins
    ADDRESS_LOOKUP_TABLE = 'Address Lookup Table Program',
    COMPUTE_BUDGET = 'Compute Budget Program',
    CONFIG = 'Config Program',
    STAKE = 'Stake Program',
    SYSTEM = 'System Program',
    VOTE = 'Vote Program',

    // native precompiles
    SECP256K1 = 'Secp256k1 SigVerify Precompile',
    ED25519 = 'Ed25519 SigVerify Precompile',

    // spl
    ASSOCIATED_TOKEN = 'Associated Token Program',
    ACCOUNT_COMPRESSION = 'State Compression Program',
    FEATURE_PROPOSAL = 'Feature Proposal Program',
    LENDING = 'Lending Program',
    MEMO_1 = 'Memo Program v1',
    MEMO = 'Memo Program',
    NAME = 'Name Service Program',
    STAKE_POOL = 'Stake Pool Program',
    SWAP = 'Swap Program',
    TOKEN = 'Token Program',
    TOKEN_2022 = 'Token-2022 Program',
    TOKEN_METADATA = 'Token Metadata Program',
    TOKEN_VAULT = 'Token Vault Program',

    // other
    BREAK_SOLANA = 'Break Program',
    METAPLEX = 'Metaplex Program',
    PYTH_DEVNET = 'Pyth Oracle Program',
    PYTH_TESTNET = 'Pyth Oracle Program',
    PYTH_MAINNET = 'Pyth Oracle Program',
    WORMHOLE = 'Wormhole Program',
    WORMHOLE_CORE = 'Wormhole Core Bridge',
    WORMHOLE_TOKEN = 'Wormhole Token Bridge',
    WORMHOLE_NFT = 'Wormhole NFT Bridge',
    SESSION_MANAGER = 'Session Manager Program',
    SESSION_DOMAIN_REGISTRY = 'Session Domain Registry Program',
    INTENT_TRANSFER = 'Intent Transfer Program',
    PYTH_ORACLE = 'Pyth Oracle Program',
    VALIANT_SWAP = 'Valiant Swap Program',
    FOGO_FISHING = 'Fogo Fishing Program',
    PYRON = 'Pyron Program',
    FOGO_LEND = 'Fogo Lend Program',
    SQUADS = 'Squads V3 Multisig Program',

    // ZK Compression
    ZK_LIGHT_SYSTEM_PROGRAM = 'Light System Program',
    ZK_COMPRESSED_TOKEN_PROGRAM = 'ZK Compressed Token Program',
    ZK_ACCOUNT_COMPRESSION_PROGRAM = 'ZK Account Compression Program',

    // Lighthouse
    LIGHTHOUSE_PROGRAM = 'Lighthouse Program',
}

const ALL_CLUSTERS = [Cluster.Custom, Cluster.Devnet, Cluster.Testnet, Cluster.Mainnet];

const LIVE_CLUSTERS = [Cluster.Devnet, Cluster.Testnet, Cluster.Mainnet];

export const LOADER_IDS: { [key: string]: string } = {
    BPFLoader1111111111111111111111111111111111: 'BPF Loader',
    BPFLoader2111111111111111111111111111111111: 'BPF Loader 2',
    BPFLoaderUpgradeab1e11111111111111111111111: 'BPF Upgradeable Loader',
    MoveLdr111111111111111111111111111111111111: 'Move Loader',
    NativeLoader1111111111111111111111111111111: 'Native Loader',
} as const;

export type LoaderName = (typeof LOADER_IDS)[keyof typeof LOADER_IDS];

export type ProgramInfo = {
    name: string;
    deployments: Cluster[];
};

export const PROGRAM_INFO_BY_ID: { [address: string]: ProgramInfo } = {
    '11111111111111111111111111111111': {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.SYSTEM,
    },
    // spl
    ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.ASSOCIATED_TOKEN,
    },
    // native built-ins
    AddressLookupTab1e1111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.ADDRESS_LOOKUP_TABLE,
    },
    // other
    ComputeBudget111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.COMPUTE_BUDGET,
    },
    Config1111111111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.CONFIG,
    },
    Ed25519SigVerify111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.ED25519,
    },
    KeccakSecp256k11111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.SECP256K1,
    },
    MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.MEMO,
    },
    Stake11111111111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.STAKE,
    },
    TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.TOKEN,
    },
    TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.TOKEN_2022,
    },
    Vote111111111111111111111111111111111111111: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.VOTE,
    },
    metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s: {
        deployments: LIVE_CLUSTERS,
        name: PROGRAM_NAMES.TOKEN_METADATA,
    },
    tbr7Qje6qBzPwfM52csL5KFi8ps5c5vDyiVVBLYVdRf: {
        deployments: [Cluster.Mainnet],
        name: PROGRAM_NAMES.WORMHOLE,
    },
    vnt1u7PzorND5JjweFWmDawKe2hLWoTwHU6QKz6XX98: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.VALIANT_SWAP,
    },
    SesswvJ7puvAgpyqp7N8HnjNnvpnS8447tKNF3sPgbC: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.SESSION_MANAGER,
    },
    pythWSnswVUd12oZpeFP8e9CVaEqJg25g1Vtc2biRsT: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.PYTH_ORACLE,
    },
    SEAyjT1FUx3JyXJnWt5NtjELDwuU9XsoZeZVPVvweU4: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.FOGO_FISHING,
    },
    PyRon8FBSDSk6MxNKsZj2uZweBsa2nH5amyKnN6eN57: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.FOGO_FISHING,
    },
    FLendK9s673E2ch3p3C1iR9mZY2Lf8tPH8fos8C3ydpZ: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.FOGO_LEND,
    },
    DomaLfEueNY6JrQSEFjuXeUDiohFmSrFeTNTPamS2yog: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.SESSION_DOMAIN_REGISTRY,
    },
    Xfry4dW9m42ncAqm8LyEnyS5V6xu5DSJTMRQLiGkARD: {
        deployments: ALL_CLUSTERS,
        name: PROGRAM_NAMES.INTENT_TRANSFER,
    },
    SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu: {
        deployments: [Cluster.Mainnet],
        name: PROGRAM_NAMES.SQUADS,
    }
};

export const SPECIAL_IDS: { [key: string]: string } = {
    '1nc1nerator11111111111111111111111111111111': 'Incinerator',
    Sysvar1111111111111111111111111111111111111: 'SYSVAR',
};

export const SYSVAR_IDS: { [key: string]: string } = {
    Sysvar1nstructions1111111111111111111111111: 'Sysvar: Instructions',
    SysvarC1ock11111111111111111111111111111111: 'Sysvar: Clock',
    SysvarEpochSchedu1e111111111111111111111111: 'Sysvar: Epoch Schedule',
    SysvarFees111111111111111111111111111111111: 'Sysvar: Fees',
    SysvarRecentB1ockHashes11111111111111111111: 'Sysvar: Recent Blockhashes',
    SysvarRent111111111111111111111111111111111: 'Sysvar: Rent',
    SysvarRewards111111111111111111111111111111: 'Sysvar: Rewards',
    SysvarS1otHashes111111111111111111111111111: 'Sysvar: Slot Hashes',
    SysvarS1otHistory11111111111111111111111111: 'Sysvar: Slot History',
    SysvarStakeHistory1111111111111111111111111: 'Sysvar: Stake History',
};

export const TOKEN_IDS: { [key: string]: string } = {
    TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: 'Token Program',
    TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb: 'Token-2022 Program',
} as const;

export type TokenProgram = 'spl-token' | 'spl-token-2022';
export function assertIsTokenProgram(program: string): asserts program is TokenProgram {
    if (program !== 'spl-token' && program !== 'spl-token-2022')
        throw new Error('Expected token program name of `spl-token` or `spl-token-2022`');
}
export function isTokenProgram(program: string): program is TokenProgram {
    try {
        assertIsTokenProgram(program);
        return true;
    } catch (e) {
        return false;
    }
}
