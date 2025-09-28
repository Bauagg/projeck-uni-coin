// ConvertStep1.tsx
import React from 'react';
import { AlertCircle, Calculator, CheckCircle, Info } from 'lucide-react';

// Type definitions
interface Currency {
    id: string;
    name: string;
    symbol: string;
    balance: number;
    color: string;
    icon: string;
}

interface ConversionData {
    rate: number;
    fee: number;
    formula: string;
}

type CurrencyKey = 'unicoinMini' | 'unicoin' | 'rupiah';

interface ConvertStep1Props {
    currencies: Record<CurrencyKey, Currency>;
    fromCurrency: CurrencyKey;
    toCurrency: CurrencyKey;
    amount: string;
    setFromCurrency: (currency: CurrencyKey) => void;
    setToCurrency: (currency: CurrencyKey) => void;
    setAmount: (amount: string) => void;
    conversionRules: Record<CurrencyKey, CurrencyKey[]>;
    conversionKey: string;
    conversionData: ConversionData | undefined;
    getMinAmount: () => number;
    calculateFee: () => number;
    calculateReceived: () => number;
    // isAmountValid: () => boolean;
}

const ConvertStep1: React.FC<ConvertStep1Props> = ({
    currencies,
    fromCurrency,
    toCurrency,
    amount,
    setFromCurrency,
    setToCurrency,
    setAmount,
    conversionRules,
    conversionKey,
    conversionData,
    getMinAmount,
    calculateFee,
    calculateReceived,
    // isAmountValid
}) => {
    const fromCurrencyData = currencies[fromCurrency];
    const toCurrencyData = currencies[toCurrency];

    const handleFromCurrencyChange = (newFromCurrency: CurrencyKey): void => {
        setFromCurrency(newFromCurrency);
        // Auto-select first valid "to" currency
        const validToCurrencies = conversionRules[newFromCurrency];
        if (validToCurrencies && validToCurrencies.length > 0) {
            setToCurrency(validToCurrencies[0]);
        }
        setAmount(''); // Reset amount when changing currency
    };

    const handleMaxAmount = (): void => {
        if (fromCurrencyData?.balance) {
            setAmount(fromCurrencyData.balance.toString());
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setAmount(e.target.value);
    };

    return (
        <div className="space-y-4">
            {/* From Currency */}
            <div>
                <h3 className="font-semibold mb-3 text-sm">From</h3>
                <div className="grid grid-cols-3 gap-2">
                    {Object.values(currencies).map((currency: Currency) => (
                        <button
                            key={currency.id}
                            onClick={() => handleFromCurrencyChange(currency.id as CurrencyKey)}
                            disabled={currency.balance === 0}
                            className={`convert-card rounded-lg p-3 text-center text-xs ${fromCurrency === currency.id ? 'selected' : ''
                                } ${currency.balance === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <div className={`w-6 h-6 bg-gradient-to-r ${currency.color} rounded-lg mx-auto mb-1 flex items-center justify-center`}>
                                <span className="text-white font-bold text-xs">{currency.icon}</span>
                            </div>
                            <div className="font-medium">{currency.name}</div>
                            <div className="text-gray-400">{currency.balance} {currency.symbol}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Amount Input */}
            <div>
                <h3 className="font-semibold mb-3 text-sm">Amount to Convert</h3>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        {fromCurrencyData?.symbol}
                    </span>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="0"
                        max={fromCurrencyData?.balance}
                        className="w-full pl-10 pr-4 py-2.5 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm font-semibold"
                    />
                </div>

                {/* Max Button */}
                <button
                    onClick={handleMaxAmount}
                    className="mt-2 text-xs text-unicoin-yellow hover:text-unicoin-orange"
                    type="button"
                >
                    Max: {fromCurrencyData?.balance} {fromCurrencyData?.symbol}
                </button>

                {/* Validation Messages */}
                {amount && (
                    <div className="mt-2 text-xs">
                        {parseFloat(amount) < getMinAmount() ? (
                            <div className="text-red-400 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Minimum: {getMinAmount()} {fromCurrencyData?.symbol}
                            </div>
                        ) : parseFloat(amount) > (fromCurrencyData?.balance || 0) ? (
                            <div className="text-red-400 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Insufficient balance
                            </div>
                        ) : (
                            <div className="text-green-400 flex items-center gap-1">
                                <CheckCircle size={12} />
                                Valid amount
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Convert To Section */}
            <div>
                <h3 className="font-semibold mb-3 text-sm">Convert To</h3>
                <div className="grid grid-cols-1 gap-2">
                    {conversionRules[fromCurrency]?.map((currencyId: CurrencyKey) => {
                        const currency = currencies[currencyId];
                        if (!currency) return null;

                        return (
                            <div
                                key={currency.id}
                                className={`convert-card rounded-lg p-3 ${toCurrency === currency.id ? 'selected' : ''
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-8 h-8 bg-gradient-to-r ${currency.color} rounded-lg flex items-center justify-center`}>
                                            <span className="text-white font-bold text-xs">{currency.icon}</span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{currency.name}</div>
                                            <div className="text-xs text-gray-400">Balance: {currency.balance} {currency.symbol}</div>
                                        </div>
                                    </div>
                                    <div className="text-right text-xs">
                                        <div className="unicoin-yellow font-medium">
                                            {conversionKey === 'unicoinMini_unicoin' && '100:1'}
                                            {conversionKey === 'unicoin_rupiah' && '1:100'}
                                            {conversionKey === 'rupiah_unicoin' && '100:1'}
                                        </div>
                                        <div className="text-gray-400">
                                            {conversionData && conversionData.fee > 0 ? `${conversionData.fee}% fee` : 'No fee'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Conversion Preview */}
            {amount && (
                <div className="gradient-card rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Calculator size={16} className="text-blue-400" />
                        <span className="font-semibold text-sm">Conversion Preview</span>
                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">You pay</span>
                            <span>{amount} {fromCurrencyData?.symbol}</span>
                        </div>

                        {calculateFee() > 0 && (
                            <div className="flex justify-between">
                                <span className="text-gray-400">Fee (1%)</span>
                                <span className="text-orange-400">-Rp {calculateFee().toLocaleString()}</span>
                            </div>
                        )}

                        <div className="border-t border-gray-600 pt-2">
                            <div className="flex justify-between font-semibold">
                                <span className="text-gray-400">You receive</span>
                                <span className="unicoin-yellow">
                                    {calculateReceived()} {toCurrencyData?.symbol}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Conversion Rates Info */}
            <div className="gradient-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                    <Info size={16} className="text-blue-400" />
                    <span className="font-semibold text-sm">Current Rates</span>
                </div>
                <div className="space-y-1 text-xs text-gray-300">
                    <div>• 100 UCM = 1 UC (no fee)</div>
                    <div>• 1 UC = Rp 100 (1% fee)</div>
                    <div>• Rp 100 = 1 UC (no fee)</div>
                </div>
            </div>
        </div>
    );
};

export default ConvertStep1;