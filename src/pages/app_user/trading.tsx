import "../..//UI/compponents/app_user/trading/trading.css"
import ImagesLogo from "../../assets/image/logo-unicoin-mini.svg"
import { useState } from "react";
import NavbarUserApp from "../../UI/compponents/app_user/navbar";
import PriceBanner from "../../UI/compponents/app_user/trading/price_banner";
import ActiveTabTrading from "../../UI/compponents/app_user/trading/active_tab_trading";
import PortofolioTreding from "../../UI/compponents/app_user/trading/portofolio";
import HistoryTrading from "../../UI/compponents/app_user/trading/history_trading";
import UMKMEventTrading from "../../UI/compponents/app_user/trading/umkm_event_trading";

const UniCoinTradingApp = () => {
    const [currentPrice, setCurrentPrice] = useState(100);
    const [priceChange, setPriceChange] = useState(2.5);
    const [userBalance, setUserBalance] = useState(1250);
    const [userUniCoin, setUserUniCoin] = useState(850);
    const [activeTab, setActiveTab] = useState('trade');

    const recentTrades = [
        { id: 1, type: 'buy', amount: 50, price: 99.5, time: '14:25' },
        { id: 2, type: 'sell', amount: 30, price: 100.2, time: '14:20' },
        { id: 3, type: 'buy', amount: 75, price: 98.8, time: '14:15' },
    ];


    return (
        <div className="min-h-screen bg-unicoin-dark text-white flex flex-col pb-24">
            {/* Header */}
            <div className="gradient-card border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Logo & Title */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12">
                                <img alt="Logo Unicoin" src={ImagesLogo} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-white">
                                    UniCoin Trading
                                </h1>
                                <p className="text-xs sm:text-sm unicoin-yellow">
                                    Everyday Life Cryptocurrency
                                </p>
                            </div>
                        </div>

                        {/* Wallet Info */}
                        <div className=" flex w-full gap-3 justify-between sm:justify-between sm:w-auto sm:text-right sm:gap-6 lg:w-auto lg:justify-end lg:text-right lg:gap-6">
                            <div>
                                <p className="text-xs sm:text-sm text-gray-400">Wallet Balance</p>
                                <p className="font-semibold text-base sm:text-lg">
                                    Rp {userBalance.toLocaleString()}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs sm:text-sm text-gray-400">UniCoin</p>
                                <p className="font-semibold text-base sm:text-lg unicoin-yellow">
                                    {userUniCoin} UC
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Banner */}
            <PriceBanner
                priceChange={priceChange}
                currentPrice={currentPrice}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 pb-8 w-full">
                {/* Left Column - Chart & Trading */}
                <div className="lg:col-span-2 space-y-6">
                    {
                        activeTab === 'trade' && (
                            <ActiveTabTrading currentPrice={currentPrice} />
                        )
                    }

                    {
                        activeTab === 'portfolio' && (
                            <PortofolioTreding currentPrice={currentPrice} userUniCoin={userUniCoin} />
                        )
                    }

                    {
                        activeTab === 'history' && (
                            <HistoryTrading />
                        )
                    }

                    {
                        activeTab === 'events' && (
                            <UMKMEventTrading />
                        )
                    }
                </div>
            </div>

            <div className="space-y-6 px-[63px]">
                <div className="trading-card rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4 unicoin-yellow">Market Stats</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Market Cap</span>
                            <span className="font-medium">Rp 2.1B</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">24h Volume</span>
                            <span className="font-medium">Rp 2.45M</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Active Merchants</span>
                            <span className="font-medium">145</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Total Users</span>
                            <span className="font-medium">12,450</span>
                        </div>
                    </div>
                </div>

                <div className="trading-card rounded-xl p-6 mt-5">
                    <h3 className="text-lg font-semibold mb-4 unicoin-yellow">Live Trading</h3>
                    <div className="space-y-2">
                        {recentTrades.slice(0, 5).map(trade => (
                            <div key={trade.id} className="flex justify-between text-sm">
                                <span className={trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}>
                                    {trade.type === 'buy' ? '↗' : '↘'} {trade.amount} UC
                                </span>
                                <span className="text-gray-400">Rp {trade.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="trading-card rounded-xl p-6 mt-5">
                    <h3 className="text-lg font-semibold mb-4 unicoin-yellow">Quick Actions</h3>
                    <div className="space-y-2">
                        <button className="w-full py-2 px-4 floating-action text-black rounded-md hover:opacity-90 transition-opacity font-semibold">
                            Find UMKM Near Me
                        </button>
                        <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-semibold">
                            Join Next Airdrop Event
                        </button>
                        <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold">
                            Withdraw to Bank
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className="fixed bottom-0 left-0 right-0 lg:relative">
                <NavbarUserApp />
            </div>
        </div>
    )
}

export default UniCoinTradingApp