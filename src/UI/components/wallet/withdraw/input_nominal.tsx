import { AlertCircle, CheckCircle } from "lucide-react";
import type React from "react";

interface InputNominalWithdrawUserProps {
  amount: string;
  setAmount: (val: string) => void;
  calculateReceived: () => number;
  walletTypes: any[];
  selectedWalletData: any;
  selectedWallet: string;
  setSelectedWallet: (val: string) => void;
  setStep: (val: number) => void;
}

const InputNominalWithdrawUser: React.FC<InputNominalWithdrawUserProps> = ({
  amount,
  setAmount,
  walletTypes,
  selectedWalletData,
  selectedWallet,
  setSelectedWallet,
  setStep,
}) => {

    const isAmountValid = () => {
        if (!amount || !selectedWalletData) return false;
        const numAmount = parseFloat(amount);
        return numAmount >= selectedWalletData.minWithdraw && numAmount <= selectedWalletData.balance;
      };
    

  return (
    <div className="space-y-4">
      {/* Wallet Selection */}
      <div>
        <h3 className="font-semibold mb-3 text-sm">Select Wallet</h3>
        <div className="grid grid-cols-2 gap-2">
          {walletTypes.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => setSelectedWallet(wallet.id)}
              className={`withdraw-card rounded-lg p-3 text-left text-sm ${
                selectedWallet === wallet.id ? "selected" : ""
              }`}
            >
              <div
                className={`w-6 h-6 bg-gradient-to-r ${wallet.color} rounded-lg mb-2 flex items-center justify-center`}
              >
                <span className="text-white font-bold text-xs">
                  {wallet.symbol === "Rp" ? "Rp" : wallet.symbol}
                </span>
              </div>
              <div className="font-medium text-xs">{wallet.name}</div>
              <div className="text-xs text-gray-400">
                Balance: {wallet.balance} {wallet.symbol}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Amount Input */}
      <div>
        <h3 className="font-semibold mb-3 text-sm">Withdraw Amount</h3>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            {selectedWalletData?.symbol}
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            max={selectedWalletData?.balance}
            className="w-full pl-8 pr-4 py-2.5 bg-unicoin-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white text-sm font-semibold"
          />
        </div>

        {/* Max Button */}
        <button
          onClick={() => setAmount(selectedWalletData?.balance.toString())}
          className="mt-2 text-xs text-unicoin-yellow hover:text-unicorn-orange"
        >
          Max: {selectedWalletData?.balance} {selectedWalletData?.symbol}
        </button>

        {/* Validation Messages */}
        {amount && (
          <div className="mt-2 text-xs">
            {parseFloat(amount) < selectedWalletData?.minWithdraw ? (
              <div className="text-red-400 flex items-center gap-1">
                <AlertCircle size={12} />
                Minimum withdraw: {selectedWalletData?.minWithdraw}{" "}
                {selectedWalletData?.symbol}
              </div>
            ) : parseFloat(amount) > selectedWalletData?.balance ? (
              <div className="text-red-400 flex items-center gap-1">
                <AlertCircle size={12} />
                Insufficient balance
              </div>
            ) : (
              <div className="text-green-400 flex items-center gap-1">
                <CheckCircle size={12} />
                Valid amount
              </div>
            )}
          </div>
        )}

        {/* Conversion Preview */}
        {amount && selectedWallet === "unicoin" && (
          <div className="mt-3 p-3 gradient-card rounded-lg">
            <div className="text-xs text-gray-400">Will be converted to:</div>
            <div className="text-sm font-bold unicoin-yellow">
              Rp {(parseFloat(amount) * 100).toLocaleString()}
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-gray-400">
        • Withdrawal fees may apply based on selected method
        <br />
        • Processing time varies by method
      </div>
      <button
              onClick={() => setStep(2)}
              disabled={!isAmountValid()}
              className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Continue
            </button>
    </div>
  );
};

export default InputNominalWithdrawUser;