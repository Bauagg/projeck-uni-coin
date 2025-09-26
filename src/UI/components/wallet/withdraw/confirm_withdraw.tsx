import { Clock } from "lucide-react";
import type React from "react";

interface WithdrawConfirmUserProps {
  amount: string;
  selectedWallet: string;
  selectedWalletData: any;
  selectedMethod: string;
  bankDetails: {
    accountNumber: string;
    accountName: string;
    bankName: string;
  };
  setStep: (step: number) => void;
  startProcessing: () => void;
}

const WithdrawConfirmUser: React.FC<WithdrawConfirmUserProps> = ({
  amount,
  selectedWallet,
  selectedWalletData,
  selectedMethod,
  bankDetails,
  setStep,
  startProcessing
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
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-sm">Confirm Withdrawal</h3>

      <div className="gradient-card rounded-lg p-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Withdraw Amount</span>
          <span>
            {amount} {selectedWalletData?.symbol}
          </span>
        </div>

        {selectedWallet === "unicoin" && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Converted Amount</span>
            <span>Rp {(parseFloat(amount) * 100).toLocaleString()}</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Method</span>
          <span>{selectedMethodData?.name}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Fee</span>
          <span className="text-orange-400">
            {selectedMethodData && selectedMethodData.fee > 0
              ? `Rp ${selectedMethodData.fee.toLocaleString()}`
              : "Free"}
          </span>
        </div>

        <div className="border-t border-gray-600 pt-2">
          <div className="flex justify-between text-sm font-semibold">
            <span>You'll Receive</span>
            <span className="unicoin-yellow">
              Rp {calculateReceived().toLocaleString()}
            </span>
          </div>
        </div>

        {/* Bank details if bank transfer */}
        {selectedMethodData?.id &&
          withdrawMethods[0].methods.find(
            (m) => m.id === selectedMethodData.id
          ) && (
            <div className="border-t border-gray-600 pt-2 space-y-2">
              <div className="text-xs text-gray-400">Destination Account:</div>
              <div className="text-sm">{bankDetails.bankName}</div>
              <div className="text-sm">{bankDetails.accountNumber}</div>
              <div className="text-sm">{bankDetails.accountName}</div>
            </div>
          )}
      </div>

      <div className="gradient-card rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          <Clock size={16} className="text-blue-400" />
          <span className="text-sm font-semibold">Processing Time</span>
        </div>
        <div className="text-xs text-gray-300">
          {
            withdrawMethods.find((wm) =>
              wm.methods.find((m) => m.id === selectedMethod)
            )?.processingTime
          }
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setStep(3)}
          className="flex-1 withdraw-card py-3 rounded-lg font-semibold text-sm"
        >
          Back
        </button>
        <button
          onClick={startProcessing}
          className="flex-1 floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
        >
          Confirm Withdraw
        </button>
      </div>
    </div>
  );
};

export default WithdrawConfirmUser;
