// ConvertStep4.tsx
import React from 'react';
import { CheckCircle, Copy, Download, Share2 } from 'lucide-react';

// Type definitions
interface Currency {
    id: string;
    name: string;
    symbol: string;
    balance: number;
    color: string;
    icon: string;
}

type CurrencyKey = 'unicoinMini' | 'unicoin' | 'rupiah';

interface ConvertStep4Props {
    currencies: Record<CurrencyKey, Currency>;
    fromCurrency: CurrencyKey;
    toCurrency: CurrencyKey;
    amount: string;
    calculateFee: () => number;
    calculateReceived: () => number;
}

const ConvertStep4: React.FC<ConvertStep4Props> = ({
    currencies,
    fromCurrency,
    toCurrency,
    amount,
    calculateFee,
    calculateReceived
}) => {
    const fromCurrencyData = currencies[fromCurrency];
    const toCurrencyData = currencies[toCurrency];

    const generateTransactionId = (): string => {
        return `CV${Date.now().toString().slice(-8)}`;
    };

    const getCurrentDateTime = (): string => {
        const now = new Date();
        return now.toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const copyTransactionId = (transactionId: string): void => {
        navigator.clipboard.writeText(transactionId);
        // You can add a toast notification here
    };

    const transactionId = generateTransactionId();
    const dateTime = getCurrentDateTime();

    return (
        <div className="text-center py-6 space-y-6">
            {/* Success Icon */}
            <div className="relative">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={40} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xs">UC</span>
                </div>
            </div>

            {/* Success Message */}
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-green-400">Conversion Successful!</h3>
                <p className="text-gray-400 text-sm">
                    Your {fromCurrencyData?.name} has been converted to {toCurrencyData?.name}
                </p>
            </div>

            {/* Transaction Details Card */}
            <div className="gradient-card rounded-lg p-4 space-y-3 text-left">
                {/* Transaction ID */}
                <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Transaction ID</span>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-sm">{transactionId}</span>
                        <button
                            onClick={() => copyTransactionId(transactionId)}
                            className="text-unicoin-yellow hover:text-unicoin-orange"
                            type="button"
                            aria-label="Copy transaction ID"
                        >
                            <Copy size={14} />
                        </button>
                    </div>
                </div>

                {/* Date & Time */}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Date & Time</span>
                    <span>{dateTime}</span>
                </div>

                {/* Conversion Details */}
                <div className="border-t border-gray-600 pt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Converted</span>
                        <span>{amount} {fromCurrencyData?.symbol}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Received</span>
                        <span className="unicoin-yellow font-semibold">
                            {calculateReceived()} {toCurrencyData?.symbol}
                        </span>
                    </div>

                    {calculateFee() > 0 && (
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Fee Paid</span>
                            <span className="text-orange-400">Rp {calculateFee().toLocaleString()}</span>
                        </div>
                    )}
                </div>

                {/* Exchange Rate */}
                <div className="border-t border-gray-600 pt-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Exchange Rate</span>
                        <span className="text-sm">
                            {fromCurrency === 'unicoinMini' && '100 UCM = 1 UC'}
                            {fromCurrency === 'unicoin' && '1 UC = Rp 100'}
                            {fromCurrency === 'rupiah' && 'Rp 100 = 1 UC'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Updated Balances Preview */}
            <div className="gradient-card rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-3 text-left">Updated Balances</h4>
                <div className="grid grid-cols-3 gap-2">
                    {/* UniCoin Mini */}
                    <div className="text-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">M</span>
                        </div>
                        <div className="text-xs text-gray-400">UCM</div>
                        <div className="text-sm font-semibold">
                            {fromCurrency === 'unicoinMini'
                                ? currencies.unicoinMini.balance - parseFloat(amount)
                                : currencies.unicoinMini.balance}
                        </div>
                    </div>

                    {/* UniCoin */}
                    <div className="text-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mx-auto mb-1 flex items-center justify-center">
                            <span className="text-black font-bold text-xs">UC</span>
                        </div>
                        <div className="text-xs text-gray-400">UC</div>
                        <div className="text-sm font-semibold">
                            {fromCurrency === 'unicoin'
                                ? currencies.unicoin.balance - parseFloat(amount)
                                : fromCurrency === 'unicoinMini'
                                    ? currencies.unicoin.balance + calculateReceived()
                                    : toCurrency === 'unicoin'
                                        ? currencies.unicoin.balance + calculateReceived()
                                        : currencies.unicoin.balance}
                        </div>
                    </div>

                    {/* Rupiah */}
                    <div className="text-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">Rp</span>
                        </div>
                        <div className="text-xs text-gray-400">Rupiah</div>
                        <div className="text-sm font-semibold">
                            {fromCurrency === 'rupiah'
                                ? currencies.rupiah.balance - parseFloat(amount)
                                : toCurrency === 'rupiah'
                                    ? currencies.rupiah.balance + calculateReceived()
                                    : currencies.rupiah.balance}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
                <button
                    className="flex items-center justify-center gap-2 py-2 px-4 gradient-card rounded-lg text-sm hover:border-unicoin-yellow transition-colors"
                    type="button"
                >
                    <Download size={16} />
                    Download Receipt
                </button>

                <button
                    className="flex items-center justify-center gap-2 py-2 px-4 gradient-card rounded-lg text-sm hover:border-unicoin-yellow transition-colors"
                    type="button"
                >
                    <Share2 size={16} />
                    Share
                </button>
            </div>

            {/* Next Steps */}
            <div className="gradient-card rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2 text-left">What's Next?</h4>
                <div className="text-xs text-gray-300 text-left space-y-1">
                    <div>• Your new balance is immediately available</div>
                    <div>• Check your transaction history for records</div>
                    <div>• Use your {toCurrencyData?.name} for payments or trading</div>
                </div>
            </div>
        </div>
    );
};

export default ConvertStep4;