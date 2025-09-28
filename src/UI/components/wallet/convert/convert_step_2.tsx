// ConvertStep2.tsx
import React from 'react';
import { RefreshCw } from 'lucide-react';

// Type definitions
interface Currency {
    id: string;
    name: string;
    symbol: string;
    balance: number;
    color: string;
    icon: string;
}

// interface ConversionData {
//     rate: number;
//     fee: number;
//     formula: string;
// }

type CurrencyKey = 'unicoinMini' | 'unicoin' | 'rupiah';

interface ConvertStep2Props {
    currencies: Record<CurrencyKey, Currency>;
    fromCurrency: CurrencyKey;
    toCurrency: CurrencyKey;
    amount: string;
    conversionKey: string;
    // conversionData: ConversionData | undefined;
    calculateFee: () => number;
    calculateReceived: () => number;
}

const ConvertStep2: React.FC<ConvertStep2Props> = ({
    currencies,
    fromCurrency,
    toCurrency,
    amount,
    conversionKey,
    // conversionData,
    calculateFee,
    calculateReceived
}) => {
    const fromCurrencyData = currencies[fromCurrency];
    const toCurrencyData = currencies[toCurrency];

    const getConversionRuleText = (): string => {
        switch (conversionKey) {
            case 'unicoinMini_unicoin':
                return 'UniCoin Mini can only convert to UniCoin';
            case 'unicoin_rupiah':
                return 'UniCoin converts to Rupiah with 1% fee';
            case 'rupiah_unicoin':
                return 'Rupiah converts to UniCoin with no fee';
            default:
                return 'Invalid conversion';
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-sm">Confirm Conversion</h3>

            <div className="gradient-card rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">From</span>
                    <span>{fromCurrencyData?.name}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">To</span>
                    <span>{toCurrencyData?.name}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Amount</span>
                    <span>{amount} {fromCurrencyData?.symbol}</span>
                </div>

                {calculateFee() > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Conversion Fee</span>
                        <span className="text-orange-400">Rp {calculateFee().toLocaleString()}</span>
                    </div>
                )}

                <div className="border-t border-gray-600 pt-2">
                    <div className="flex justify-between text-sm font-semibold">
                        <span>You'll Receive</span>
                        <span className="unicoin-yellow">
                            {calculateReceived()} {toCurrencyData?.symbol}
                        </span>
                    </div>
                </div>
            </div>

            <div className="gradient-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                    <RefreshCw size={16} className="text-blue-400" />
                    <span className="text-sm font-semibold">Conversion Rules</span>
                </div>
                <div className="text-xs text-gray-300">
                    {getConversionRuleText()}
                </div>
            </div>
        </div>
    );
};

export default ConvertStep2;