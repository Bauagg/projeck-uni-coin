import "./home.css"
import { useState } from "react";

const RecentTransaction = () => {
    const [recentTransactions] = useState([
        { id: 1, type: "earned", amount: 47, source: "Warung Makan Sari", time: "2 jam lalu" },
        { id: 2, type: "spent", amount: -120, source: "Kopi Nusantara", time: "5 jam lalu" },
        { id: 3, type: "airdrop", amount: 200, source: "Event Weekend", time: "1 hari lalu" },
        { id: 4, type: "earned", amount: 35, source: "Bakso Malang Pak Joko", time: "2 hari lalu" }
    ]);

    return (
        <div className="px-5 mt-5 pb-20">
            <h3 className="text-xl font-bold mb-4">Transaksi Terakhir</h3>
            <div className="space-y-3">
                {recentTransactions.map((tx) => (
                    <div key={tx.id} className="gradient-card rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'earned' ? 'bg-green-500/20 text-green-400' :
                                tx.type === 'spent' ? 'bg-red-500/20 text-red-400' :
                                    'bg-yellow-400/20 text-yellow-400'
                                }`}>
                                <i className={`fas ${tx.type === 'earned' ? 'fa-plus' :
                                    tx.type === 'spent' ? 'fa-minus' :
                                        'fa-gift'
                                    }`}></i>
                            </div>
                            <div>
                                <div className="font-medium">{tx.source}</div>
                                <div className="text-sm text-gray-400">{tx.time}</div>
                            </div>
                        </div>
                        <div className={`font-bold ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                            {tx.amount > 0 ? '+' : ''}{tx.amount} UC
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentTransaction