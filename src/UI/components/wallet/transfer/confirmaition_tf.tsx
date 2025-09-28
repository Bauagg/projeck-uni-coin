import { AlertCircle } from "lucide-react";
import type React from "react"

interface Currency {
    id: string;
    name: string;
    symbol: string;
    balance: number;
    color: string;
    icon: string;
    transferable: boolean;
}

interface ConfirmationTransferProps {
    selectedCurrency: string;
    amount: string;
    recipient: string;
    note: string;
    selectedCurrencyData: Currency;
    getTransferFee: () => number;
    setStep: (step: number) => void;
    handleTransfer: () => void;
}

const ConfirmationTransfer: React.FC<ConfirmationTransferProps> = ({ selectedCurrency, amount, recipient, note, selectedCurrencyData, getTransferFee, setStep, handleTransfer }) => {

    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-sm">Confirm Transfer</h3>

            <div className="gradient-card rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">To</span>
                    <span className="font-mono">{recipient}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Currency</span>
                    <span>{selectedCurrencyData?.name}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Amount</span>
                    <span>{amount} {selectedCurrencyData?.symbol}</span>
                </div>

                {getTransferFee() > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Transfer Fee</span>
                        <span className="text-orange-400">Rp {getTransferFee().toLocaleString()}</span>
                    </div>
                )}

                {note && (
                    <div className="border-t border-gray-600 pt-2">
                        <div className="text-sm">
                            <span className="text-gray-400 block mb-1">Note:</span>
                            <span className="italic">"{note}"</span>
                        </div>
                    </div>
                )}

                <div className="border-t border-gray-600 pt-2">
                    <div className="flex justify-between text-sm font-semibold">
                        <span>Total Deducted</span>
                        <span className="unicoin-yellow">
                            {selectedCurrency === 'rupiah'
                                ? `Rp ${(parseFloat(amount) + getTransferFee()).toLocaleString()}`
                                : `${amount} ${selectedCurrencyData?.symbol}`
                            }
                        </span>
                    </div>
                </div>
            </div>

            <div className="gradient-card rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                    <AlertCircle size={16} className="text-red-400" />
                    <span className="text-sm font-semibold text-red-400">Important Notice</span>
                </div>
                <div className="text-xs text-gray-300">
                    This transfer is instant and cannot be reversed. Please verify the recipient details carefully.
                </div>
            </div>

            <div className="p-4 border-t border-gray-700 flex-shrink-0">
                <div className="flex gap-2">
                    <button
                        onClick={() => setStep(1)}
                        className="flex-1 transfer-card py-3 rounded-lg font-semibold text-sm"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleTransfer}
                        className="flex-1 floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                    >
                        Send Now
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ConfirmationTransfer;