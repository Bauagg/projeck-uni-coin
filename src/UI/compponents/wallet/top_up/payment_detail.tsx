import { Copy, Timer } from "lucide-react";
import type React from "react";

interface PaymentDetail {
  paymentDetails: any;
  timeLeft: number;
  formatTime: (time: number) => string;
  copyToClipboard: (text: string) => void;
  setStep: (step: number) => void;
}

const PaymentDetail: React.FC<PaymentDetail> = ({
  paymentDetails,
  formatTime,
  copyToClipboard,
  setStep,
  timeLeft,
}) => {
  return (
    <div className="space-y-4">
      {/* Timer */}
      <div className="gradient-card rounded-lg p-3 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Timer size={16} className="text-red-400" />
          <span className="text-sm font-semibold text-red-400">
            Time Remaining
          </span>
        </div>
        <div className="text-lg font-bold text-red-400">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Bank Transfer Details */}
      {paymentDetails.type === "bank_transfer" && (
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Transfer to Virtual Account</h3>

          <div className="gradient-card rounded-lg p-3 space-y-3">
            <div>
              <div className="text-xs text-gray-400 mb-1">Bank</div>
              <div className="text-sm font-semibold">
                {paymentDetails.bankName}
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-400 mb-1">
                Virtual Account Number
              </div>
              <div className="flex items-center justify-between bg-unicoin-gray rounded-lg p-2">
                <span className="font-mono text-sm font-bold">
                  {paymentDetails.virtualAccount}
                </span>
                <button
                  onClick={() => copyToClipboard(paymentDetails.virtualAccount)}
                  className="text-unicoin-yellow hover:text-unicoin-orange"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-400 mb-1">
                Amount to Transfer
              </div>
              <div className="text-lg font-bold unicoin-yellow">
                Rp {paymentDetails.amount.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="gradient-card rounded-lg p-3">
            <h4 className="font-semibold text-sm mb-2">How to Pay:</h4>
            <div className="space-y-1 text-xs text-gray-300">
              <div>1. Open your banking app or ATM</div>
              <div>2. Select "Transfer to Virtual Account"</div>
              <div>3. Enter the Virtual Account number above</div>
              <div>
                4. Enter the exact amount: Rp{" "}
                {paymentDetails.amount.toLocaleString()}
              </div>
              <div>5. Confirm your transfer</div>
              <div>6. Your UniCoin will be credited automatically</div>
            </div>
          </div>
        </div>
      )}

      {/* E-Wallet Details */}
      {paymentDetails.type === "e_wallet" && (
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">
            Pay with {paymentDetails.providerName}
          </h3>

          <div className="gradient-card rounded-lg p-4 text-center space-y-3">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
              <div className="text-xs text-gray-600">QR Code Placeholder</div>
            </div>

            <div>
              <div className="text-xs text-gray-400 mb-1">Amount to Pay</div>
              <div className="text-lg font-bold unicoin-yellow">
                Rp {paymentDetails.amount.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => window.open(paymentDetails.deeplink)}
              className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              Open {paymentDetails.providerName} App
            </button>

            <div className="gradient-card rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">How to Pay:</h4>
              <div className="space-y-1 text-xs text-gray-300">
                <div>1. Scan the QR code above or tap "Open App"</div>
                <div>
                  2. Confirm payment in your {paymentDetails.providerName} app
                </div>
                <div>3. Your UniCoin will be credited automatically</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simulate payment completion */}
      <div className="flex justify-between gap-3">
        <button
          onClick={() => setStep(2)}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
        >
          Change Method
        </button>

        <button
          onClick={() => setStep(4)}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
        >
          ✓ Simulate Payment Success
        </button>
      </div>
    </div>
  );
};

export default PaymentDetail;
