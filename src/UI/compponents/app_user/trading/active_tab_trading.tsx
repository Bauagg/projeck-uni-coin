import type React from "react";



interface ActiveTabTradingProps {
    currentPrice: number;
}

const ActiveTabTrading: React.FC<ActiveTabTradingProps> = ({ currentPrice }) => {
    const marketData = [
        { time: '09:00', price: 98 },
        { time: '10:00', price: 99 },
        { time: '11:00', price: 101 },
        { time: '12:00', price: 100.5 },
        { time: '13:00', price: 102 },
        { time: '14:00', price: currentPrice },
    ];

    return (
        <>
            {/* Price Chart */}
            <div className="trading-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">UniCoin Price Chart</h3>
                <div className="h-64 bg-unicoin-gray/50 rounded-lg flex items-center justify-center relative">
                    <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute">
                        <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ffc107" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#ffc107" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>

                        {/* Chart Line */}
                        <path
                            d={`M 20 ${200 - ((marketData[0].price - 95) / 10) * 160} ${marketData.map((point, index) =>
                                `L ${20 + (index * 60)} ${200 - ((point.price - 95) / 10) * 160}`
                            ).join(' ')}`}
                            fill="none"
                            stroke="#ffc107"
                            strokeWidth="3"
                        />

                        {/* Fill Area */}
                        <path
                            d={`M 20 200 L 20 ${200 - ((marketData[0].price - 95) / 10) * 160} ${marketData.map((point, index) =>
                                `L ${20 + (index * 60)} ${200 - ((point.price - 95) / 10) * 160}`
                            ).join(' ')} L ${20 + (marketData.length - 1) * 60} 200 Z`}
                            fill="url(#chartGradient)"
                        />
                    </svg>

                    {/* Time labels */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 text-xs text-gray-400">
                        {marketData.map(point => <span key={point.time}>{point.time}</span>)}
                    </div>
                </div>
            </div>

            {/* Trading Interface */}
            <div className="trading-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">Quick Trade</h3>
                <div className="grid grid-cols-2 gap-4">

                    {/* Buy */}
                    <div className="border border-green-500/30 rounded-lg p-4 bg-green-500/10">
                        <h4 className="font-semibold text-green-400 mb-3">Buy UniCoin</h4>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm text-gray-300">Amount (Rupiah)</label>
                                <input
                                    type="number"
                                    placeholder="100000"
                                    className="w-full mt-1 px-3 py-2 bg-unicoin-gray border border-gray-600 rounded-md focus:ring-2 focus:ring-unicoin-yellow focus:border-transparent text-white"
                                />
                            </div>
                            <div className="text-sm text-gray-400">
                                ≈ {(100000 / currentPrice).toFixed(2)} UniCoin
                            </div>
                            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors font-semibold">
                                Buy UniCoin
                            </button>
                        </div>
                    </div>

                    {/* Sell */}
                    <div className="border border-red-500/30 rounded-lg p-4 bg-red-500/10">
                        <h4 className="font-semibold text-red-400 mb-3">Sell UniCoin</h4>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm text-gray-300">Amount (UniCoin)</label>
                                <input
                                    type="number"
                                    placeholder="100"
                                    className="w-full mt-1 px-3 py-2 bg-unicoin-gray border border-gray-600 rounded-md focus:ring-2 focus:ring-unicoin-yellow focus:border-transparent text-white"
                                />
                            </div>
                            <div className="text-sm text-gray-400">
                                ≈ Rp {(100 * currentPrice).toFixed(0)}
                            </div>
                            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors font-semibold">
                                Sell UniCoin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActiveTabTrading