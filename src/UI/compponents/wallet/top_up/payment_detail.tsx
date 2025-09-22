import { X } from "lucide-react"
import type React from "react";

interface PaymentDetail {
    onClose: () => void;
}

const PaymentDetail: React.FC<PaymentDetail> = ({ onClose }) => {
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

                </div>
            </div>
        </div>
    )
}