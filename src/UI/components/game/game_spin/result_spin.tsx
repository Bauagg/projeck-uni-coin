import type React from "react"

interface SpinResult {
    prize: string;
    amount: number;
    color: string;
    icon: React.ReactNode;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface ResultSpinnerProps {
    result: SpinResult;
    setShowResult: (show: boolean) => void;
}

const ResultSpinner: React.FC<ResultSpinnerProps> = ({ result, setShowResult }) => {
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="gradient-card rounded-xl w-full max-w-xs p-4 text-center">

                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center`}>
                    {result.icon}
                </div>

                <h3 className="text-lg font-bold mb-2 unicoin-yellow">
                    {result.amount > 0 ? 'Congratulations!' : 'Better Luck Next Time!'}
                </h3>

                {result.amount > 0 ? (
                    <div>
                        <p className="text-gray-400 text-xs mb-2">You won</p>
                        <div className="text-2xl font-bold text-purple-400 mb-2">
                            +{result.amount} UCM
                        </div>
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold border ${getRarityStyle(result.rarity)}`}>
                            {result.rarity.toUpperCase()}
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-400 text-xs">Try spinning again!</p>
                )}

                <button
                    onClick={() => setShowResult(false)}
                    className="mt-4 floating-action text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full text-sm"
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default ResultSpinner;  