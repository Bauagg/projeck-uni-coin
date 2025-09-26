import { Shield } from "lucide-react";
import type React from "react";

interface PaymentDetailWithdrawUserProps {
  bankDetails: {
    accountNumber: string;
    accountName: string;
    bankName: string;
  };
  setBankDetails: React.Dispatch<React.SetStateAction<{
    accountNumber: string;
    accountName: string;
    bankName: string;
  }>>;
  setStep: (step: number) => void;
}

const PaymentDetailWithdrawUser: React.FC<
  PaymentDetailWithdrawUserProps
> = ({ bankDetails, setBankDetails, setStep }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-sm">Enter Bank Details</h3>

      <div className="space-y-3">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Bank Name</label>
          <input
            type="text"
            value={bankDetails.bankName}
            onChange={(e) =>
              setBankDetails((prev) => ({ ...prev, bankName: e.target.value }))
            }
            placeholder="e.g. Bank BCA"
            className="w-full px-3 py-2 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            Account Number
          </label>
          <input
            type="text"
            value={bankDetails.accountNumber}
            onChange={(e) =>
              setBankDetails((prev) => ({
                ...prev,
                accountNumber: e.target.value,
              }))
            }
            placeholder="Enter account number"
            className="w-full px-3 py-2 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            Account Holder Name
          </label>
          <input
            type="text"
            value={bankDetails.accountName}
            onChange={(e) =>
              setBankDetails((prev) => ({
                ...prev,
                accountName: e.target.value,
              }))
            }
            placeholder="As registered in bank"
            className="w-full px-3 py-2 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm"
          />
        </div>
      </div>

      <div className="gradient-card rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Shield size={16} className="text-blue-400" />
          <span className="text-sm font-semibold">Security Notice</span>
        </div>
        <div className="text-xs text-gray-300">
          Please ensure the account details are correct. Funds sent to wrong
          accounts cannot be recovered.
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setStep(2)}
          className="flex-1 withdraw-card py-3 rounded-lg font-semibold text-sm"
        >
          Back
        </button>
        <button
          onClick={() => setStep(4)}
          disabled={!bankDetails.bankName || !bankDetails.accountNumber || !bankDetails.accountName}
          className="flex-1 floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentDetailWithdrawUser;
