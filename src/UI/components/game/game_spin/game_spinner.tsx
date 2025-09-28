import type React from "react"
import { useState } from "react";
import { Wheel } from 'react-custom-roulette-r19';

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

interface GameSpinnerProps {
    setResult: (result: SpinResult | null) => void;
    setShowResult: (show: boolean) => void;
    userStats: UserStats;
    setUserStats: (stats: UserStats | ((prev: UserStats) => UserStats)) => void;
    prizeConfig: Record<string, SpinResult>;
    remainingSpins?: number;
    onSpin?: () => void;
}

const GameSpinner: React.FC<GameSpinnerProps> = ({ setResult, setShowResult, userStats, setUserStats, prizeConfig, remainingSpins, onSpin }) => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    // Wheel data configuration for react-custom-roulette-r19
    const wheelData = [
        { option: '5 UCM', style: { backgroundColor: '#8b5cf6', textColor: '#ffffff' } },
        { option: 'Try Again', style: { backgroundColor: '#6b7280', textColor: '#ffffff' } },
        { option: '10 UCM', style: { backgroundColor: '#06b6d4', textColor: '#ffffff' } },
        { option: 'Try Again', style: { backgroundColor: '#6b7280', textColor: '#ffffff' } },
        { option: '25 UCM', style: { backgroundColor: '#10b981', textColor: '#ffffff' } },
        { option: 'Try Again', style: { backgroundColor: '#6b7280', textColor: '#ffffff' } },
        { option: '50 UCM', style: { backgroundColor: '#f59e0b', textColor: '#000000' } },
        { option: '100 UCM', style: { backgroundColor: '#ef4444', textColor: '#ffffff' } },
        { option: '250 UCM', style: { backgroundColor: '#7c3aed', textColor: '#ffffff' } },
        { option: 'JACKPOT!', style: { backgroundColor: '#fbbf24', textColor: '#000000' } },
        { option: '5 UCM', style: { backgroundColor: '#8b5cf6', textColor: '#ffffff' } },
        { option: '10 UCM', style: { backgroundColor: '#06b6d4', textColor: '#ffffff' } }
    ];

    const spinsLeft = typeof remainingSpins === 'number' ? remainingSpins : (5 - userStats.dailySpins);
    const handleSpinClick = () => {
        if (!mustSpin && spinsLeft > 0) {
            const newPrizeNumber = Math.floor(Math.random() * wheelData.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
            setShowResult(false);
            setResult(null);
            if (onSpin) onSpin();
        }
    };

    const handleStopSpinning = () => {
        setMustSpin(false);
        const winnerOption = wheelData[prizeNumber].option;
        const selectedPrize = prizeConfig[winnerOption];

        setResult(selectedPrize);
        setUserStats((prev: UserStats) => ({
            ...prev,
            totalSpins: prev.totalSpins + 1,
            dailySpins: prev.dailySpins + 1,
            unicoinMini: prev.unicoinMini + selectedPrize.amount,
            lastSpinTime: new Date().toISOString()
        }));

        setTimeout(() => setShowResult(true), 500);
    };

    const resetDailySpins = () => {
        setUserStats((prev: UserStats) => ({ ...prev, dailySpins: 0 }));
    };

    const canSpin = !mustSpin && spinsLeft > 0;

    return (
        <div>
            {/* Spin Wheel Container */}
            <div className="flex justify-center mb-4 sm:mb-6 px-4">
                <div className="relative">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={wheelData}
                        onStopSpinning={handleStopSpinning}
                        backgroundColors={wheelData.map(item => item.style.backgroundColor)}
                        textColors={wheelData.map(item => item.style.textColor)}
                        outerBorderColor="#ffc107"
                        outerBorderWidth={8}
                        innerBorderColor="#ffc107"
                        innerBorderWidth={40}
                        radiusLineColor="#ffffff"
                        radiusLineWidth={2}
                        fontSize={14}
                        spinDuration={0.8}
                    />


                    {/* Center Spin Button */}
                    <button
                        onClick={handleSpinClick}
                        disabled={!canSpin}
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-3 border-white font-bold transition-all duration-300 ${canSpin
                            ? 'floating-action text-black hover:scale-110'
                            : 'bg-gray-700 border-gray-500 text-gray-400 cursor-not-allowed opacity-50'
                            }`}
                    >
                        {mustSpin ? (
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
                        ) : canSpin ? (
                            <div className="text-center">
                                <div className="text-xs font-bold">SPIN</div>
                            </div>
                        ) : (
                            <div className="text-xs text-center">
                                <div>No</div>
                                <div>Spins</div>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Action Button */}
            <div className="text-center mb-4 sm:mb-6 px-4">
                {canSpin ? (
                    <button
                        onClick={handleSpinClick}
                        disabled={mustSpin}
                        className="floating-action text-black px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 text-sm"
                    >
                        {mustSpin ? 'Spinning...' : `SPIN NOW! (${spinsLeft} left)`}
                    </button>
                ) : (
                    <div className="space-y-2">
                        <div className="gradient-card rounded-lg p-3 text-center max-w-xs mx-auto">
                            <h3 className="font-semibold text-sm unicoin-yellow mb-1">Daily Limit Reached!</h3>
                            <p className="text-xs text-gray-400 mb-2">You've used all 5 daily spins</p>
                            <div className="text-xs text-gray-500">Come back tomorrow for more spins</div>
                        </div>
                        <button
                            onClick={resetDailySpins}
                            className="spin-card px-4 py-2 rounded-lg text-xs hover:border-yellow-400 transition-colors"
                        >
                            Reset for Demo
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GameSpinner;