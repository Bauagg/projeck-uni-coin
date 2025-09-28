import "../../UI/components/game/game_spin/game_spin.css"
import React, { useState } from 'react';
import { ArrowLeft, RotateCcw, Gift, Star, Coins, Trophy, Zap } from 'lucide-react';
import ResultSpinner from "../../UI/components/game/game_spin/result_spin";
import GameSpinner from "../../UI/components/game/game_spin/game_spinner";
import PrizeTableSpinner from "../../UI/components/game/game_spin/prize_table_spinner";
import { useNavigate } from "react-router-dom";

interface SpinResult {
    prize: string;
    amount: number;
    color: string;
    icon: React.ReactNode;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface UserStats {
    totalSpins: number;
    unicoinMini: number;
    dailySpins: number;
    lastSpinTime: string;
}

const UniCoinSpinGame: React.FC = () => {
    const [result, setResult] = useState<SpinResult | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [userStats, setUserStats] = useState<UserStats>({
        totalSpins: 147,
        unicoinMini: 2840,
        dailySpins: 0,
        lastSpinTime: new Date().toISOString()
    });

    const navigation = useNavigate()

    // Prize configuration
    const prizeConfig: Record<string, SpinResult> = {
        "5 UCM": { prize: "5 UCM", amount: 5, color: "from-purple-500 to-pink-500", icon: <Coins size={12} />, rarity: "common" },
        "10 UCM": { prize: "10 UCM", amount: 10, color: "from-blue-500 to-cyan-500", icon: <Coins size={12} />, rarity: "common" },
        "25 UCM": { prize: "25 UCM", amount: 25, color: "from-green-500 to-emerald-500", icon: <Star size={12} />, rarity: "rare" },
        "50 UCM": { prize: "50 UCM", amount: 50, color: "from-yellow-500 to-orange-500", icon: <Star size={12} />, rarity: "rare" },
        "100 UCM": { prize: "100 UCM", amount: 100, color: "from-red-500 to-pink-500", icon: <Gift size={12} />, rarity: "epic" },
        "250 UCM": { prize: "250 UCM", amount: 250, color: "from-indigo-500 to-purple-500", icon: <Trophy size={12} />, rarity: "epic" },
        "JACKPOT!": { prize: "JACKPOT!", amount: 500, color: "from-yellow-400 to-orange-500", icon: <Zap size={12} />, rarity: "legendary" },
        "Try Again": { prize: "Try Again", amount: 0, color: "from-gray-600 to-gray-700", icon: <RotateCcw size={12} />, rarity: "common" }
    };

    const remainingSpins = 5 - userStats.dailySpins;

    return (
        <div className="min-h-screen bg-unicoin-dark text-white">
            <div className="container mx-auto px-4 py-6 sm:py-8">

                {/* Header with Back Button */}
                <div className="relative mb-4 sm:mb-6">
                    {/* Absolute Back Button */}
                    <button
                        onClick={() => navigation("/home")}
                        className="absolute left-0 top-0 flex items-center gap-1 sm:gap-2 spin-card px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:border-yellow-400 transition-colors z-10"
                    >
                        <ArrowLeft size={14} className="sm:hidden" />
                        <ArrowLeft size={16} className="hidden sm:block" />
                        <span className="text-xs sm:text-sm">Back</span>
                    </button>

                    {/* Perfectly Centered Title */}
                    <div className="text-center px-16 sm:px-20">
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold unicoin-yellow mb-1">
                            UniCoin Mini Spin
                        </h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Spin the wheel to win UniCoin Mini!</p>
                    </div>
                </div>

                {/* Stats Card */}
                <div className="max-w-sm mx-auto mb-4 sm:mb-6 px-4">
                    <div className="gradient-card rounded-lg p-3">
                        <h3 className="font-semibold mb-2 text-xs unicoin-yellow">Your Stats</h3>
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                                <div className="text-sm sm:text-base font-bold text-purple-400">{userStats.unicoinMini}</div>
                                <div className="text-xs text-gray-400">UCM</div>
                            </div>
                            <div>
                                <div className="text-sm sm:text-base font-bold unicoin-yellow">{userStats.totalSpins}</div>
                                <div className="text-xs text-gray-400">Total</div>
                            </div>
                            <div>
                                <div className={`text-sm sm:text-base font-bold ${remainingSpins > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {remainingSpins}/5
                                </div>
                                <div className="text-xs text-gray-400">Daily</div>
                            </div>
                        </div>
                    </div>
                </div>

                <GameSpinner
                    setResult={setResult}
                    setShowResult={setShowResult}
                    userStats={userStats}
                    setUserStats={setUserStats}
                    prizeConfig={prizeConfig}
                    remainingSpins={remainingSpins
                    }
                />

                <PrizeTableSpinner prizeConfig={prizeConfig} />
            </div>

            {
                showResult && result && (
                    <ResultSpinner result={result} setShowResult={setShowResult} />
                )
            }
        </div>
    );
};

export default UniCoinSpinGame;