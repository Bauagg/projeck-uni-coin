import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import TopUpInputNominal from "./top_up/input_nominal";
import BankWalletList from "./top_up/bank_wallet_list";
import PaymentDetail from "./top_up/payment_detail";

interface TopUpWalletUserProps {
  onClose: () => void;
}

const TopUpWalletUser: React.FC<TopUpWalletUserProps> = ({ onClose }) => {
  const [isOpenIndex, setIsOpenIndex] = useState(1);
  const [amount, setAmount] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("unicoin");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<any>(null);

  const walletTypes = [
    {
      id: "unicoin",
      name: "UniCoin",
      symbol: "UC",
      rate: 100,
      color: "from-yellow-400 to-orange-500",
      description: "Main cryptocurrency for trading & purchases",
    },
    {
      id: "rupiah",
      name: "Rupiah",
      symbol: "Rp",
      rate: 1,
      color: "from-green-500 to-emerald-500",
      description: "Cash balance for instant transactions",
    },
  ];

  const selectedWalletData = walletTypes.find((w) => w.id === selectedWallet);

  const calculateReceived = () => {
    if (!amount || !selectedWalletData) return 0;
    const numAmount = parseFloat(amount);
    if (selectedWallet === "unicoin") {
      return Math.floor(numAmount / selectedWalletData.rate);
    }
    return numAmount;
  };

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

        {isOpenIndex === 1 && (
          <TopUpInputNominal
            amount={amount}
            setAmount={setAmount}
            setIsOpenBankWallet={() => setIsOpenIndex(2)}
            calculateReceived={calculateReceived}
            walletTypes={walletTypes}
            selectedWalletData={selectedWalletData}
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
          />
        )}

        {isOpenIndex === 2 && (
          <BankWalletList
            amount={amount}
            onClose={onClose}
            selectedWalletData={selectedWalletData}
            calculateReceived={calculateReceived}
            setIsOpenPaymentDetail={(paymentMethod: any) => {
              setSelectedPaymentMethod(paymentMethod);
              setIsOpenIndex(3);
            }}
            setOpenTopUp={() => setIsOpenIndex(1)}
          />
        )}

        {isOpenIndex === 3 && selectedPaymentMethod && (
          <div className="p-6">
            <div className="space-y-6">
              <PaymentDetail
                paymentDetails={{
                  type:
                    selectedPaymentMethod.category === "bank_transfer"
                      ? "bank_transfer"
                      : "e_wallet",
                  bankName:
                    selectedPaymentMethod.category === "bank_transfer"
                      ? selectedPaymentMethod.name
                      : undefined,
                  providerName:
                    selectedPaymentMethod.category === "e_wallet"
                      ? selectedPaymentMethod.name
                      : undefined,
                  virtualAccount:
                    selectedPaymentMethod.category === "bank_transfer"
                      ? `88077${Math.random().toString().slice(2, 12)}`
                      : undefined,
                  deeplink:
                    selectedPaymentMethod.category === "e_wallet"
                      ? `${selectedPaymentMethod.id}://pay?amount=${amount}`
                      : undefined,
                  amount: parseFloat(amount),
                }}
                timeLeft={15 * 60} // 15 minutes in seconds
                formatTime={(time) => {
                  const minutes = Math.floor(time / 60);
                  const seconds = time % 60;
                  return `${minutes.toString().padStart(2, "0")}:${seconds
                    .toString()
                    .padStart(2, "0")}`;
                }}
                copyToClipboard={(text) => {
                  navigator.clipboard.writeText(text);
                  alert("Copied to clipboard");
                }}
                setStep={(step) => setIsOpenIndex(step === 4 ? 1 : step)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopUpWalletUser;
