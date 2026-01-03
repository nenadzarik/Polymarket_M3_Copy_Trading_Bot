import {
    ENV
} from '../config/env.js';
import fetchData from '../utils/fetchData.js';
import {
    tradeQueue,
    isNewTrade
} from './state.js';

const fetchTradeData = async () => {
    try {
        const url = `https://data-api.polymarket.com/activity?user=${ENV.COPY_PACK}&limit=10&type=TRADE`;
        const activities = await fetchData(url);

        for (const activity of activities) {
            if (isNewTrade(activity.transactionHash)) {
                console.log(`[MONITOR] New Activity: ${activity.transactionHash}`);

                tradeQueue.push({
                    ...activity,
                    processed: false,
                    retryCount: 0
                });
            }
        }
    } catch (e) {
        console.error('Monitor polling error');
    }
};

const tradeMonitor = () => {
    console.log('Monitoring target in-memory...');
    setInterval(fetchTradeData, ENV.FETCH_INTERVAL * 1000);
};

export default tradeMonitor;