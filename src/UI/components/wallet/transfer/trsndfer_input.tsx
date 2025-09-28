import { AlertCircle, CheckCircle, User } from "lucide-react";
import type React from "react";

interface Currency {
    id: string;
    name: string;
    symbol: string;
    balance: number;
    color: string;
    icon: string;
    transferable: boolean;
}

interface TransferInputProps {
    currencies: Record<TransferableCurrency, Currency>;
    setSelectedCurrency: (currency: TransferableCurrency) => void;
    selectedCurrency: TransferableCurrency;
    amount: string;
    setAmount: (val: string) => void;
    recipient: string;
    setRecipient: (val: string) => void;
    note: string;
    setNote: (val: string) => void;
    setStep: (step: number) => void;
    transferableCurrencies: Currency[];
    selectedCurrencyData: Currency;
    getTransferFee: () => number;
}

type TransferableCurrency = 'unicoin' | 'rupiah';

const TransferInput: React.FC<TransferInputProps> = ({ transferableCurrencies, selectedCurrencyData, selectedCurrency, setSelectedCurrency, amount, setAmount, recipient, note, setNote, setRecipient, setStep, getTransferFee }) => {
    const isRecipientValid = (): boolean => {
        // Validasi format - bisa email, phone, atau username
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

        return emailRegex.test(recipient) || phoneRegex.test(recipient) || usernameRegex.test(recipient);
    };

    const getMinAmount = (): number => {
        switch (selectedCurrency) {
            case 'unicoin':
                return 1; // minimum 1 UC
            case 'rupiah':
                return 1000; // minimum Rp 1,000
            default:
                return 1;
        }
    };

    const isAmountValid = (): boolean => {
        if (!amount) return false;
        const numAmount = parseFloat(amount);
        const minAmount = getMinAmount();
        const maxAmount = selectedCurrencyData.balance - getTransferFee();
        return numAmount >= minAmount && numAmount <= maxAmount;
    };


    return (
        <div className="space-y-4">
            {/* Currency Selection */}
            <div>
                <h3 className="font-semibold mb-3 text-sm">Select Currency</h3>
                <div className="grid grid-cols-2 gap-3">
                    {transferableCurrencies.map(currency => (
                        <button
                            key={currency.id}
                            onClick={() => setSelectedCurrency(currency.id as TransferableCurrency)}
                            className={`transfer-card rounded-lg p-3 text-left ${selectedCurrency === currency.id ? 'selected' : ''
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 bg-gradient-to-r ${currency.color} rounded-lg flex items-center justify-center`}>
                                    <span className="text-white font-bold text-xs">{currency.icon}</span>
                                </div>
                                <div>
                                    <div className="font-medium text-sm">{currency.name}</div>
                                    <div className="text-xs text-gray-400">{currency.balance} {currency.symbol}</div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Recipient Input */}
            <div>
                <h3 className="font-semibold mb-3 text-sm">Send To</h3>
                <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="Email, phone, or username"
                        className="w-full pl-10 pr-4 py-2.5 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm"
                    />
                </div>

                {recipient && !isRecipientValid() && (
                    <div className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />
                        Invalid recipient format
                    </div>
                )}
            </div>

            {/* Amount Input */}
            <div>
                <h3 className="font-semibold mb-3 text-sm">Amount</h3>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        {selectedCurrencyData?.symbol}
                    </span>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0"
                        className="w-full pl-10 pr-4 py-2.5 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm font-semibold"
                    />
                </div>

                {/* Max Button */}
                <button
                    onClick={() => setAmount((selectedCurrencyData.balance - getTransferFee()).toString())}
                    className="mt-2 text-xs text-unicoin-yellow hover:text-unicoin-orange"
                >
                    Max: {selectedCurrencyData?.balance - getTransferFee()} {selectedCurrencyData?.symbol}
                </button>

                {/* Validation Messages */}
                {amount && (
                    <div className="mt-2 text-xs">
                        {parseFloat(amount) < getMinAmount() ? (
                            <div className="text-red-400 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Minimum: {getMinAmount()} {selectedCurrencyData?.symbol}
                            </div>
                        ) : parseFloat(amount) > (selectedCurrencyData?.balance - getTransferFee()) ? (
                            <div className="text-red-400 flex items-center gap-1">
                                <AlertCircle size={12} />
                                Insufficient balance (including fee)
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

            {/* Transfer Fee Display */}
            {amount && (
                <div className="gradient-card rounded-lg p-3">
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Transfer Amount</span>
                            <span>{amount} {selectedCurrencyData?.symbol}</span>
                        </div>
                        {getTransferFee() > 0 && (
                            <div className="flex justify-between">
                                <span className="text-gray-400">Transfer Fee</span>
                                <span className="text-orange-400">Rp {getTransferFee().toLocaleString()}</span>
                            </div>
                        )}
                        <div className="border-t border-gray-600 pt-2">
                            <div className="flex justify-between font-semibold">
                                <span className="text-gray-400">Total Deducted</span>
                                <span className="unicoin-yellow">
                                    {selectedCurrency === 'rupiah'
                                        ? `Rp ${(parseFloat(amount) + getTransferFee()).toLocaleString()}`
                                        : `${amount} ${selectedCurrencyData?.symbol}`
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Note (Optional) */}
            <div>
                <h3 className="font-semibold mb-3 text-sm">Note (Optional)</h3>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a message..."
                    maxLength={100}
                    className="w-full px-3 py-2 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm resize-none"
                    rows={3}
                />
                <div className="text-xs text-gray-400 mt-1">{note.length}/100</div>
            </div>

            {/* Transfer Rules */}
            <div className="gradient-card rounded-lg p-3">
                <h4 className="font-semibold text-sm mb-2">Transfer Rules</h4>
                <div className="space-y-1 text-xs text-gray-300">
                    <div>• Only UniCoin and Rupiah can be transferred</div>
                    <div>• UniCoin Mini cannot be transferred</div>
                    <div>• Transfers are instant and irreversible</div>
                    <div>• {selectedCurrency === 'rupiah' ? 'Rupiah transfers have 0.1% fee (max Rp 5,000)' : 'UniCoin transfers are free'}</div>
                </div>
            </div>

            <div className="p-4 border-t border-gray-700 flex-shrink-0">
                <button
                    onClick={() => setStep(2)}
                    disabled={!isAmountValid() || !isRecipientValid()}
                    className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default TransferInput;