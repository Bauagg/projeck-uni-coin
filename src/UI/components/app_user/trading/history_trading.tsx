const HistoryTrading = () => {
    const recentTrades = [
        { id: 1, type: 'buy', amount: 50, price: 99.5, time: '14:25' },
        { id: 2, type: 'sell', amount: 30, price: 100.2, time: '14:20' },
        { id: 3, type: 'buy', amount: 75, price: 98.8, time: '14:15' },
    ];

    return (
        <div className="trading-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 unicoin-yellow">Trading History</h3>
            <div className="space-y-3">
                {recentTrades.map(trade => (
                    <div key={trade.id} className="flex justify-between items-center p-3 gradient-card rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className={`px-2 py-1 rounded text-xs font-medium ${trade.type === 'buy'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                                }`}>
                                {trade.type.toUpperCase()}
                            </div>
                            <span>{trade.amount} UC</span>
                        </div>
                        <div className="text-right">
                            <div className="font-medium">Rp {trade.price}</div>
                            <div className="text-sm text-gray-400">{trade.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HistoryTrading