import {
    ENV
} from './config/env.js';
import createClobClient from './utils/createClobClient.js';
import tradeExecutor from './services/tradeExecutor.js';
import tradeMonitor from './services/tradeMonitor.js';

const main = async () => {
    console.log('--- Polymarket AI M3 Bot Starting ---');
    console.log(`Copy Address: ${ENV.COPY_PACK}`);
    console.log(`Personal Wallet: ${ENV.GETTER_PACK}`);

    const clobClient = await createClobClient();

    tradeMonitor();
    tradeExecutor(clobClient);
};

main();