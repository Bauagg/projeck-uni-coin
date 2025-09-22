import { X } from "lucide-react"
import "./top_up.css"
import type React from "react";
import { useState } from "react";

interface TopUpInputNominalProps {
    onClose: () => void;
    setIsOpenBankWallet: () => void;
    amount: string;
    setAmount: (val: string) => void;
    calculateReceived: () => void;
    walletTypes: any[];
    selectedWalletData: any;
}

const TopUpInputNominal: React.FC<TopUpInputNominalProps> = ({ onClose, amount, setAmount, setIsOpenBankWallet, calculateReceived, walletTypes, selectedWalletData }) => {
    const [selectedWallet, setSelectedWallet] = useState("unicoin");


    const quickAmounts = [50000, 100000, 200000, 500000, 1000000];

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="topup-card rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto custom-scroll">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <h2 className="text-xl font-bold unicoin-yellow">Top Up Wallet</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    <div className="space-y-6">
                        {/* Wallet Selection */}
                        <div>
                            <h3 className="font-semibold mb-3">Select Wallet</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {walletTypes.map(wallet => (
                                    <button
                                        key={wallet.id}
                                        onClick={() => setSelectedWallet(wallet.id)}
                                        className={`topup-card rounded-lg p-3 text-left ${selectedWallet === wallet.id ? 'selected' : ''
                                            }`}
                                    >
                                        <div className={`w-8 h-8 bg-gradient-to-r ${wallet.color} rounded-lg mb-2 flex items-center justify-center`}>
                                            <span className="text-white font-bold text-sm">
                                                {wallet.symbol === 'Rp' ? 'Rp' : wallet.symbol}
                                            </span>
                                        </div>
                                        <div className="font-medium text-sm">{wallet.name}</div>
                                        <div className="text-xs text-gray-400">{wallet.description}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Amount Input */}
                        <div>
                            <h3 className="font-semibold mb-3">Top Up Amount</h3>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">Rp</span>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0"
                                    className="w-full pl-8 pr-4 py-3 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-lg font-semibold"
                                />
                            </div>

                            {/* Quick Amount Buttons */}
                            <div className="grid grid-cols-3 gap-2 mt-3">
                                {quickAmounts.map(quickAmount => (
                                    <button
                                        key={quickAmount}
                                        onClick={() => setAmount(quickAmount.toString())}
                                        className="topup-card rounded-lg py-2 px-3 text-sm hover:border-yellow-400"
                                    >
                                        Rp {(quickAmount / 1000)}K
                                    </button>
                                ))}
                            </div>

                            {/* Conversion Preview */}
                            {amount && (
                                <div className="mt-3 p-3 gradient-card rounded-lg">
                                    <div className="text-sm text-gray-400">You will receive:</div>
                                    <div className="text-lg font-bold unicoin-yellow">
                                        {calculateReceived()} {selectedWalletData?.symbol}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Continue Button */}
                        <button
                            onClick={() => {
                                onClose()
                                setIsOpenBankWallet()
                            }}
                            disabled={!amount || parseFloat(amount) < 10000}
                            className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Continue
                        </button>

                        <div className="text-xs text-gray-400 text-center">
                            Minimum top up: Rp 10,000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUpInputNominal