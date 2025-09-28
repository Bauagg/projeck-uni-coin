import type React from "react";

interface Prize {
    prize: string;
    amount: number;
    color: string;
    icon: React.ReactNode;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface PrizeTableSpinnerProps {
    prizeConfig: Record<string, Prize>;
}

const PrizeTableSpinner: React.FC<PrizeTableSpinnerProps> = ({ prizeConfig }) => {

    const getRarityStyle = (rarity: string) => {
        switch (rarity) {
            case 'common': return 'border-gray-500/50 text-gray-300';
            case 'rare': return 'border-blue-500/50 text-blue-300';
            case 'epic': return 'border-purple-500/50 text-purple-300';
            case 'legendary': return 'border-yellow-400 text-yellow-400';
            default: return 'border-gray-500/50 text-gray-300';
        }
    };

    return (
        <div>
            <div className="max-w-md mx-auto">
                <div className="gradient-card rounded-xl p-4">
                    <h3 className="font-semibold mb-3 text-sm unicoin-yellow">Prize Table</h3>
                    <div className="space-y-2">
                        {Object.values(prizeConfig).filter(p => p.amount > 0).map((prize, index) => (
                            <div key={index} className={`flex items-center justify-between p-2 rounded-lg border ${getRarityStyle(prize.rarity)}`}>
                                <div className="flex items-center gap-2">
                                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${prize.color} flex items-center justify-center`}>
                                        {prize.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">{prize.amount} UCM</div>
                                        <div className="text-xs text-gray-400 capitalize">{prize.rarity}</div>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                    {prize.rarity === 'legendary' ? '5%' :
                                        prize.rarity === 'epic' ? '10%' :
                                            prize.rarity === 'rare' ? '20%' : '30%'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-md mx-auto mt-6">
                <div className="gradient-card rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-2 unicoin-yellow">Game Rules</h4>
                    <div className="space-y-1 text-xs text-gray-300">
                        <div>• 5 free spins per day</div>
                        <div>• All prizes are instantly added to your balance</div>
                        <div>• Higher rarity = better rewards</div>
                        <div>• Daily reset at midnight UTC</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrizeTableSpinner;