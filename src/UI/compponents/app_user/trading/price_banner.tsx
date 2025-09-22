import React from "react";
import { TrendingUp, TrendingDown, Wallet, BarChart3, Clock, Coffee } from 'lucide-react';
import TabButton from "../../global/tab_button";

interface PriceBannerProps {
    currentPrice: number;
    priceChange: number;
    activeTab: string;
    setActiveTab: (val: string) => void;
}

const PriceBanner: React.FC<PriceBannerProps> = ({ currentPrice, priceChange, activeTab, setActiveTab }) => {
    return (
        <div>
            {/* Banner Harga */}
            <div className="floating-action text-black w-full">
                <div className="max-w-6xl mx-auto px-4 py-3 sm:py-6">
                    <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">

                        {/* Harga */}
                        <div className="flex flex-row items-center space-x-4 sm:space-x-8">
                            <div>
                                <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                                    Rp {currentPrice.toFixed(2)}
                                </h2>
                                <p className="text-black/70 font-medium text-xs sm:text-base">
                                    1 UniCoin
                                </p>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                {priceChange > 0 ? (
                                    <TrendingUp size={18} className="sm:size-6" />
                                ) : (
                                    <TrendingDown size={18} className="sm:size-6" />
                                )}
                                <span
                                    className={`font-semibold text-sm sm:text-lg ${priceChange > 0 ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {priceChange > 0 ? "+" : ""}
                                    {priceChange.toFixed(2)}%
                                </span>
                            </div>
                        </div>

                        {/* Volume */}
                        <div className="text-right text-black/80">
                            <p className="text-[10px] sm:text-sm font-medium">24h Volume</p>
                            <p className="text-base sm:text-2xl font-bold leading-tight">
                                Rp 2,450,000
                            </p>
                            <p className="text-[10px] sm:text-xs">from 145 UMKM merchants</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Navigation Tabs */}
            <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
                <div className="flex space-x-2 overflow-x-auto overflow-y-hidden pb-2 custom-scroll">
                    <TabButton
                        id="trade"
                        label="Trading"
                        icon={BarChart3}
                        activeTab={activeTab}
                        onClick={setActiveTab}
                    />
                    <TabButton
                        id="portfolio"
                        label="Portfolio"
                        icon={Wallet}
                        activeTab={activeTab}
                        onClick={setActiveTab}
                    />
                    <TabButton
                        id="history"
                        label="History"
                        icon={Clock}
                        activeTab={activeTab}
                        onClick={setActiveTab}
                    />
                    <TabButton
                        id="events"
                        label="UMKM Events"
                        icon={Coffee}
                        activeTab={activeTab}
                        onClick={setActiveTab}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceBanner;
