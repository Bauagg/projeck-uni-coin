// ConvertStep3.tsx
import React from 'react';

interface ConvertStep3Props {
    processingTime: number;
    fromCurrency?: string;
    toCurrency?: string;
    amount?: string;
}

const ConvertStep3: React.FC<ConvertStep3Props> = ({
    processingTime,
    fromCurrency = '',
    toCurrency = '',
    amount = ''
}) => {
    const getProcessingText = (time: number): string => {
        switch (time) {
            case 0:
                return 'Validating conversion request...';
            case 1:
                return 'Calculating exchange rates...';
            case 2:
                return 'Updating wallet balances...';
            case 3:
                return 'Conversion completed successfully!';
            default:
                return 'Processing conversion...';
        }
    };

    const getProgressPercentage = (time: number): number => {
        return Math.min((time / 3) * 100, 100);
    };

    return (
        <div className="text-center py-8 space-y-6">
            {/* Loading Spinner */}
            <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-600 border-t-yellow-400 rounded-full animate-spin mx-auto"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-sm">UC</span>
                    </div>
                </div>
            </div>

            {/* Processing Status */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Processing Conversion</h3>
                <p className="text-gray-400 text-sm">
                    Converting your {fromCurrency || 'currency'}...
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{Math.round(getProgressPercentage(processingTime))}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${getProgressPercentage(processingTime)}%` }}
                    ></div>
                </div>
            </div>

            {/* Step Indicator */}
            <div className="space-y-3">
                <div className="text-sm font-medium text-gray-300">
                    Step {Math.min(processingTime + 1, 3)}/3: {getProcessingText(processingTime)}
                </div>

                {/* Processing Steps */}
                <div className="flex justify-center space-x-4">
                    {[1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-500 ${step <= processingTime + 1
                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                                    : 'bg-gray-600 text-gray-400'
                                }`}
                        >
                            {step <= processingTime ? '✓' : step}
                        </div>
                    ))}
                </div>
            </div>

            {/* Security Message */}
            <div className="gradient-card rounded-lg p-3 max-w-sm mx-auto">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-xs">🔒</span>
                    </div>
                    <span>Your transaction is secured with end-to-end encryption</span>
                </div>
            </div>

            {/* Conversion Details */}
            {amount && (
                <div className="text-xs text-gray-400 space-y-1">
                    <div>Converting {amount} {fromCurrency?.toUpperCase()}</div>
                    <div>to {toCurrency?.toUpperCase()}</div>
                </div>
            )}
        </div>
    );
};

export default ConvertStep3;