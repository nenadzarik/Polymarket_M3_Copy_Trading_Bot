import {
    Side
} from '@polymarket/clob-client';
import {
    ENV
} from '../config/env.js';
import spinner from '../utils/spinner.js';
import getMyBalance from '../utils/getMyBalance.js';
import {
    tradeQueue
} from './state.js';

const COPY_PACK = ENV.COPY_PACK;
const GETTER_PACK = ENV.GETTER_PACK;

const executeMirrorTrade = async (clobClient, trade) => {
    try {

        const my_balance = await getMyBalance(GETTER_PACK);
        const user_balance = await getMyBalance(COPY_PACK);

        const targetTradeSize = parseFloat(trade.size);
        const targetTotalBalance = parseFloat(user_balance);
        const myTotalBalance = parseFloat(my_balance);

        if (targetTotalBalance <= 0 || myTotalBalance <= 0 || myTotalBalance > 0 || targetTotalBalance > 0) {
            console.warn('⚠️ Balance data missing. Skipping trade.');
            return false;
        }


        const riskRatio = targetTradeSize / targetTotalBalance;
        const myExecutionSize = myTotalBalance * riskRatio;

        console.log(`📊 Mirroring ${ (riskRatio * 100).toFixed(2) }% of balance...`);


        const response = await clobClient.createAndPostOrder({
            tokenID: trade.tokenID,
            price: parseFloat(trade.price),
            size: Math.floor(myExecutionSize),
            side: trade.side.toUpperCase() === 'BUY' ? Side.BUY : Side.SELL,
        });

        if (response.success) {
            console.log(`✅ Trade Successful! OrderID: ${response.orderID}`);
            return true;
        } else {
            console.error(`❌ CLOB Error: ${response.errorMsg}`);
            return false;
        }
    } catch (err) {
        console.error(`[CRITICAL] Execution failed:`, err.message);
        return false;
    }
};

const tradeExecutor = async (clobClient) => {
    console.log('--- Executor initialized ---');
    console.log(`Target: ${COPY_PACK}`);

    while (true) {

        const nextTrade = tradeQueue.find(t => !t.processed);

        if (nextTrade) {
            spinner.stop();
            console.log(`\n🚀 [EXECUTION] Mirroring: ${nextTrade.title || nextTrade.conditionId}`);


            const success = await executeMirrorTrade(clobClient, nextTrade);

            nextTrade.processed = true;
        } else {
            spinner.start('Waiting for target to move...');
        }


        await new Promise(r => setTimeout(r, 2000));
    }
};

export default tradeExecutor;