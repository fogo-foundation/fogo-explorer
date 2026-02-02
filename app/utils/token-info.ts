import { Connection, PublicKey } from '@solana/web3.js';
import { ChainId, Client, Token, UtlConfig } from '@solflare-wallet/utl-sdk';

import { Cluster } from './cluster';

type TokenExtensions = {
    readonly address?: string;
    readonly assetContract?: string;
    readonly bridgeContract?: string;
    readonly coingeckoId?: string;
    readonly description?: string;
    readonly discord?: string;
    readonly explorer?: string;
    readonly github?: string;
    readonly imageUrl?: string;
    readonly medium?: string;
    readonly tgann?: string;
    readonly tggroup?: string;
    readonly twitter?: string;
    readonly website?: string;
};
export type FullLegacyTokenInfo = {
    readonly address: string;
    readonly chainId: number;
    readonly decimals: number;
    readonly extensions?: TokenExtensions;
    readonly logoURI?: string;
    readonly name: string;
    readonly symbol: string;
    readonly tags?: string[];
};
export type FullTokenInfo = FullLegacyTokenInfo & {
    readonly verified: boolean;
};

function getChainId(cluster: Cluster): ChainId | undefined {
    if (cluster === Cluster.Mainnet) return ChainId.MAINNET;
    else if (cluster === Cluster.Testnet) return ChainId.TESTNET;
    else if (cluster === Cluster.Devnet) return ChainId.DEVNET;
    else return undefined;
}

function makeUtlClient(cluster: Cluster, connectionString: string): Client | undefined {
    const chainId = getChainId(cluster);
    if (!chainId) return undefined;

    const config: UtlConfig = new UtlConfig({
        chainId,
        connection: new Connection(connectionString),
    });

    return new Client(config);
}

export function getTokenInfoSwrKey(address: string, cluster: Cluster, connectionString: string) {
    return ['get-token-info', address, cluster, connectionString];
}

export async function getTokenInfo(
    address: PublicKey,
    cluster: Cluster,
    connectionString: string
): Promise<Token | undefined> {
    const client = makeUtlClient(cluster, connectionString);
    if (!client) return undefined;
    const [token] = await client.getFromMetaplex([address]);
    return token;
}

/**
 * Get the full token info using on-chain Metaplex data
 * @param address Public key of the token
 * @param cluster Cluster to fetch the token info for
 */
export async function getFullTokenInfo(
    address: PublicKey,
    cluster: Cluster,
    connectionString: string
): Promise<FullTokenInfo | undefined> {
    const chainId = getChainId(cluster);
    if (!chainId) return undefined;

    const sdkTokenInfo = await getTokenInfo(address, cluster, connectionString);

    if (!sdkTokenInfo) {
        return undefined;
    }

    let tags: string[] = [];
    if (sdkTokenInfo.tags) tags = Array.from(sdkTokenInfo.tags);

    return {
        address: sdkTokenInfo.address,
        chainId,
        decimals: sdkTokenInfo.decimals ?? 0,
        logoURI: sdkTokenInfo.logoURI ?? undefined,
        name: sdkTokenInfo.name,
        symbol: sdkTokenInfo.symbol,
        tags,
        verified: sdkTokenInfo.verified ?? false,
    };
}

export async function getTokenInfos(
    addresses: PublicKey[],
    cluster: Cluster,
    connectionString: string
): Promise<Token[] | undefined> {
    const client = makeUtlClient(cluster, connectionString);
    if (!client) return undefined;
    const tokens = await client.fetchMints(addresses);
    return tokens;
}
