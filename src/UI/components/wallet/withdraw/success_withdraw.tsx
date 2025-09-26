import { CheckCircle } from "lucide-react";
import type React from "react";

interface SuccessWithdrawProps {
  amount: string;
  selectedWallet: string;
  selectedWalletData: any;
  selectedMethod: string;
  bankDetails: {
    accountNumber: string;
    accountName: string;
    bankName: string;
  };
  onClose: () => void;
}

const SuccessWithdraw: React.FC<SuccessWithdrawProps> = ({
  amount,
  selectedWallet,
  selectedWalletData,
  selectedMethod,
  bankDetails,
  onClose
}) => {

  const withdrawMethods = [
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      processingTime: "1-3 business days",
      methods: [
        { id: "bca", name: "Bank BCA", fee: 2500 },
        { id: "mandiri", name: "Bank Mandiri", fee: 2500 },
        { id: "bni", name: "Bank BNI", fee: 2500 },
        { id: "bri", name: "Bank BRI", fee: 2500 },
        { id: "other_banks", name: "Bank Lainnya", fee: 6500 },
      ],
    },
    {
      id: "e_wallet",
      name: "E-Wallet",
      processingTime: "Instant",
      methods: [
        { id: "gopay", name: "GoPay", fee: 0 },
        { id: "ovo", name: "OVO", fee: 1000 },
        { id: "dana", name: "DANA", fee: 1000 },
        { id: "shopeepay", name: "ShopeePay", fee: 1500 },
      ],
    },
  ];

  const selectedMethodData = withdrawMethods
    .flatMap(category => category.methods)
    .find(method => method.id === selectedMethod);

  const calculateReceived = () => {
    if (!amount || !selectedMethodData) return 0;
    let total = parseFloat(amount);
    if (selectedWallet === "unicoin") {
      total = total * 100; // Convert UniCoin to Rupiah
    }
    return total - (selectedMethodData?.fee || 0);
  };

  const selectedCategory = withdrawMethods.find(wm =>
    wm.methods.find(m => m.id === selectedMethod)
  );

  const isBankTransfer = selectedCategory?.id === "bank_transfer";

  return (
    <div className="text-center py-6 space-y-4">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle size={32} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold">Withdrawal Successful!</h3>
      <p className="text-gray-400 text-sm">
        Your withdrawal request has been submitted successfully
      </p>

      <div className="gradient-card rounded-lg p-3 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Transaction ID</span>
          <span className="font-mono">WD{Date.now().toString().slice(-8)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Amount</span>
          <span>
            {amount} {selectedWalletData?.symbol}
            {selectedWallet === "unicoin" && (
              <span className="text-gray-400"> (Rp {(parseFloat(amount) * 100).toLocaleString()})</span>
            )}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Method</span>
          <span>{selectedMethodData?.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Fee</span>
          <span>{selectedMethodData && selectedMethodData.fee > 0 ? `Rp ${selectedMethodData.fee.toLocaleString()}` : "Free"}</span>
        </div>
        <div className="flex justify-between text-sm font-semibold border-t border-gray-600 pt-2">
          <span>You'll Receive</span>
          <span className="unicoin-yellow">Rp {calculateReceived().toLocaleString()}</span>
        </div>

        {/* Bank details if bank transfer */}
        {isBankTransfer && (
          <div className="border-t border-gray-600 pt-2 space-y-2">
            <div className="text-xs text-gray-400">Destination Account:</div>
            <div className="text-sm">{bankDetails.bankName}</div>
            <div className="text-sm">{bankDetails.accountNumber}</div>
            <div className="text-sm">{bankDetails.accountName}</div>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Status</span>
          <span className="text-yellow-400">Processing</span>
        </div>
      </div>

      <div className="text-xs text-gray-400">
        You'll receive the funds within {selectedCategory?.processingTime.toLowerCase()}
      </div>

      <button
        onClick={onClose}
        className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
      >
        Done
      </button>
    </div>
  );
};

export default SuccessWithdraw;