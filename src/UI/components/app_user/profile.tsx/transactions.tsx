const TransactionProfile = () => {
    const recentTransactions = [
        { id: 1, type: 'earn', merchant: 'Kopi Nusantara', amount: '+25', time: '2 jam lalu' },
        { id: 2, type: 'spend', merchant: 'Warung Makan Sari', amount: '-50', time: '5 jam lalu' },
        { id: 3, type: 'earn', merchant: 'Airdrop Event', amount: '+100', time: '1 hari lalu' },
        { id: 4, type: 'trade', merchant: 'Trading Profit', amount: '+15', time: '2 hari lalu' },
        { id: 5, type: 'spend', merchant: 'Salon Kecantikan Ayu', amount: '-75', time: '3 hari lalu' },
    ];

    return (
        <div className="space-y-6">
            <div className="profile-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">Recent Transactions</h3>
                <div className="space-y-3">
                    {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-3 gradient-card rounded-lg">
                            <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${transaction.type === 'earn' ? 'bg-green-500/20 text-green-400' :
                                    transaction.type === 'spend' ? 'bg-red-500/20 text-red-400' :
                                        'bg-blue-500/20 text-blue-400'
                                    }`}>
                                    {transaction.type === 'earn' ? '+' :
                                        transaction.type === 'spend' ? '-' :
                                            '↔'}
                                </div>
                                <div>
                                    <div className="font-medium">{transaction.merchant}</div>
                                    <div className="text-sm text-gray-400">{transaction.time}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className={`font-semibold ${transaction.type === 'earn' || transaction.type === 'trade'
                                    ? 'text-green-400'
                                    : 'text-red-400'
                                    }`}>
                                    {transaction.amount} UC
                                </div>
                                <div className="text-xs text-gray-400 capitalize">{transaction.type}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-4 py-2 px-4 floating-action text-black rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    View All Transactions
                </button>
            </div>
        </div>
    )
}

export default TransactionProfile