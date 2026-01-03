export const tradeQueue = [];

export const isNewTrade = (txHash) => {
    return !tradeQueue.some(trade => trade.transactionHash === txHash);
};