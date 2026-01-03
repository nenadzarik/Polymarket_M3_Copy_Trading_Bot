import * as dotenv from 'dotenv';
dotenv.config();

const requiredEnvVars = [
    'COPY_ADDRESS',
    'PERSONAL_WALLET',
    'PRIVATE_KEY',
    'CLOB_HTTP_URL',
    'CLOB_WS_URL',
    'RPC_URL',
    'USDC_CONTRACT_ADDRESS'
];

for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        throw new Error(`CRITICAL ERROR: ${envVar} is not defined in your .env file`);
    }
}

export const ENV = {
    COPY_PACK: process.env.COPY_ADDRESS,
    GETTER_PACK: process.env.PERSONAL_WALLET,
    DERIVATE_HASH: process.env.PRIVATE_KEY,
    CLOB_HTTP_URL: process.env.CLOB_HTTP_URL,
    CLOB_WS_URL: process.env.CLOB_WS_URL,
    RPC_URL: process.env.RPC_URL,
    USDC_CONTRACT_ADDRESS: process.env.USDC_CONTRACT_ADDRESS,
    FETCH_INTERVAL: parseInt(process.env.FETCH_INTERVAL || '1', 10),
};