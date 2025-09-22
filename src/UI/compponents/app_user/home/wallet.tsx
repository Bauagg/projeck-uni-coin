import "./home.css"
import React from "react";

interface WalletHomeProps {
    isOpenTopUp: boolean;
    setOpenTopUp: (val: boolean) => void;
}

const WalletHome: React.FC<WalletHomeProps> = ({ isOpenTopUp, setOpenTopUp }) => {
    // const [wallet, setWallet] = useState({
    //     unicoinBalance: 560, 
    //     unicoinMiniBalance: 1250,
    //     rupiahBalance: 125000, 
    //     totalValue: 300470, 
    //     dailyEarning: 47
    // });

    const wallet = {
        unicoinBalance: 560, // UC
        unicoinMiniBalance: 1250, // UCM
        rupiahBalance: 125000, // RP
        totalValue: 300470, // dalam Rupiah (total semua wallet)
        dailyEarning: 47
    }

    // Primary payment method info
    const primaryCard = {
        type: "VISA",
        number: "**** **** **** 1234",
        bank: "BCA",
        status: "active"
    };

    return (
        <div className="p-4 space-y-4">
            {/* Main Wallet Card */}
            <div className="gradient-card rounded-2xl p-6 coin-glow">
                <div className="text-center mb-4 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                    <h3 className="text-sm text-gray-300 mb-2">Total Saldo</h3>
                    <div className="text-3xl font-bold text-yellow-400 mb-1">
                        Rp {wallet.totalValue.toLocaleString('id-ID')}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-green-400">
                            +{wallet.dailyEarning} hari ini
                        </span>
                    </div>
                </div>

                {/* Multiple Wallet Balances */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* UniCoin */}
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl text-black">
                        <div className="flex items-center gap-1 mb-1">
                            <i className="fas fa-coins text-sm"></i>
                            <span className="text-xs font-medium">UniCoin</span>
                        </div>
                        <div className="text-lg font-bold">{wallet.unicoinBalance} UC</div>
                        <div className="text-xs opacity-80">≈ Rp {(wallet.unicoinBalance * 100).toLocaleString('id-ID')}</div>
                    </div>

                    {/* UniCoin Mini */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white">
                        <div className="flex items-center gap-1 mb-1">
                            <i className="fas fa-star text-sm"></i>
                            <span className="text-xs font-medium">UC Mini</span>
                        </div>
                        <div className="text-lg font-bold">{wallet.unicoinMiniBalance} UCM</div>
                        <div className="text-xs opacity-80">≈ Rp {wallet.unicoinMiniBalance.toLocaleString('id-ID')}</div>
                    </div>

                    {/* Rupiah */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-white">
                        <div className="flex items-center gap-1 mb-1">
                            <i className="fas fa-money-bill text-sm"></i>
                            <span className="text-xs font-medium">Rupiah</span>
                        </div>
                        <div className="text-lg font-bold">Rp {(wallet.rupiahBalance / 1000).toFixed(0)}K</div>
                        <div className="text-xs opacity-80">Cash Balance</div>
                    </div>
                </div>

                {/* Primary Card Info */}
                <div className="bg-white/5 rounded-xl p-3 mb-4 border border-white/10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{primaryCard.type}</span>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white">{primaryCard.number}</div>
                                <div className="text-xs text-gray-400">{primaryCard.bank} - Primary</div>
                            </div>
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-4 gap-2">
                    <button onClick={() => setOpenTopUp(!isOpenTopUp)} className="bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-orange-500 transition-all">
                        <i className="fas fa-plus mb-1 block text-sm"></i>
                        <span className="text-xs">Top Up</span>
                    </button>
                    <button className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all">
                        <i className="fas fa-arrow-up mb-1 block text-sm"></i>
                        <span className="text-xs">Withdraw</span>
                    </button>
                    <button className="bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-all">
                        <i className="fas fa-exchange-alt mb-1 block text-sm"></i>
                        <span className="text-xs">Convert</span>
                    </button>
                    <button className="bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all">
                        <i className="fas fa-paper-plane mb-1 block text-sm"></i>
                        <span className="text-xs">Transfer</span>
                    </button>
                </div>
            </div>

            {/* Quick Actions - Updated */}
            <div className="grid grid-cols-4 gap-3">
                {[
                    { icon: "fas fa-qrcode", label: "Scan QR", color: "from-green-500 to-emerald-500" },
                    { icon: "fas fa-store", label: "Merchant", color: "from-blue-500 to-indigo-500" },
                    { icon: "fas fa-credit-card", label: "Cards", color: "from-purple-500 to-pink-500" },
                    { icon: "fas fa-history", label: "History", color: "from-orange-500 to-red-500" }
                ].map((action, idx) => (
                    <button key={idx} className="gradient-card rounded-xl p-4 text-center hover:scale-105 transition-transform">
                        <div className={`w-8 h-8 bg-gradient-to-r ${action.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                            <i className={`${action.icon} text-white text-sm`}></i>
                        </div>
                        <span className="text-xs text-gray-300">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default WalletHome