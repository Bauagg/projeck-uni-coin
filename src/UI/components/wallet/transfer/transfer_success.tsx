import { CheckCircle, Copy, Send, Share2 } from "lucide-react"
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

interface TransferSuccessProps {
    selectedCurrencyData: Currency;
    amount: string;
    recipient: string;
    getTransferFee: () => number;
}

const TransferSuccess: React.FC<TransferSuccessProps> = ({ selectedCurrencyData, amount, recipient, getTransferFee }) => {

    const generateTransactionId = (): string => {
        return `TF${Date.now.toString().slice(-8)}`;
    };

    const copyTransactionId = (transactionId: string): void => {
        navigator.clipboard.writeText(transactionId);
    };

    return (
        <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold">Transfer Successful!</h3>
            <p className="text-gray-400 text-sm">
                Your {selectedCurrencyData?.name} has been sent successfully
            </p>
            <div className="gradient-card rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Transaction ID</span>
                    <div className="flex items-center gap-2">
                        <span className="font-mono">{generateTransactionId()}</span>
                        <button
                            onClick={() => copyTransactionId(generateTransactionId())}
                            className="text-unicoin-yellow hover:text-unicoin-orange"
                        >
                            <Copy size={14} />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sent To</span>
                    <span className="font-mono">{recipient}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Amount</span>
                    <span className="unicoin-yellow">{amount} {selectedCurrencyData?.symbol}</span>
                </div>
                {getTransferFee() > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Fee</span>
                        <span className="text-orange-400">Rp {getTransferFee().toLocaleString()}</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <button
                    className="flex items-center justify-center gap-2 py-2 px-4 gradient-card rounded-lg text-sm hover:border-unicoin-yellow transition-colors"
                    type="button"
                >
                    <Share2 size={16} />
                    Share Receipt
                </button>

                <button
                    className="flex items-center justify-center gap-2 py-2 px-4 gradient-card rounded-lg text-sm hover:border-unicoin-yellow transition-colors"
                    type="button"
                >
                    <Send size={16} />
                    Send Again
                </button>
            </div>
        </div>
    )
}

export default TransferSuccess;