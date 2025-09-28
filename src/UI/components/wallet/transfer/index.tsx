import "./transfer.css"
import { X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import TransferInput from "./trsndfer_input";
import ConfirmationTransfer from "./confirmaition_tf";
import TransferSuccess from "./transfer_success";

interface UserBalances {
  unicoin: number;
  rupiah: number;
}

interface TransferIndexUserProps {
  onClose: () => void;
  isOpen: boolean;
  userBalances?: UserBalances;
}

interface Currency {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  color: string;
  icon: string;
  transferable: boolean;
}

type TransferableCurrency = 'unicoin' | 'rupiah';

const TransferIndexUser: React.FC<TransferIndexUserProps> = ({ onClose, isOpen, userBalances = { unicoin: 560, rupiah: 125000 } }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<TransferableCurrency>('unicoin');
  const [amount, setAmount] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [processingTime, setProcessingTime] = useState<number>(0);

  // Currency configurations - hanya UniCoin dan Rupiah yang transferable
  const currencies: Record<string, Currency> = {
    unicoin: {
      id: 'unicoin',
      name: 'UniCoin',
      symbol: 'UC',
      balance: userBalances.unicoin,
      color: 'from-yellow-400 to-orange-500',
      icon: 'UC',
      transferable: true
    },
    rupiah: {
      id: 'rupiah',
      name: 'Rupiah',
      symbol: 'Rp',
      balance: userBalances.rupiah,
      color: 'from-green-500 to-emerald-500',
      icon: 'Rp',
      transferable: true
    }
  };

  const transferableCurrencies = Object.values(currencies).filter(c => c.transferable);
  const selectedCurrencyData = currencies[selectedCurrency];

  const getTransferFee = (): number => {
    const numAmount = parseFloat(amount) || 0;
    switch (selectedCurrency) {
      case 'unicoin':
        return 0; // No fee for UC transfer
      case 'rupiah':
        return Math.min(numAmount * 0.001, 5000); // 0.1% fee, max Rp 5,000
      default:
        return 0;
    }
  };

  const handleTransfer = async (): Promise<void> => {
    setStep(3); // Processing
    setProcessingTime(0);

    // Simulate processing time
    const interval = setInterval(() => {
      setProcessingTime(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          setStep(4); // Success
          return 3;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const resetModal = (): void => {
    setStep(1);
    setAmount('');
    setRecipient('');
    setNote('');
    setSelectedCurrency('unicoin');
    setProcessingTime(0);
  };

  useEffect(() => {
    if (isOpen) {
      resetModal();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="topup-card rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto custom-scroll">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold unicoin-yellow">Transfer</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {
            step === 1 && (
              <TransferInput
                currencies={currencies}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
                amount={amount}
                setAmount={setAmount}
                recipient={recipient}
                setRecipient={setRecipient}
                note={note}
                setNote={setNote}
                setStep={setStep}
                transferableCurrencies={transferableCurrencies}
                selectedCurrencyData={selectedCurrencyData}
                getTransferFee={getTransferFee}
              />
            )
          }

          {
            step === 2 && (
              <ConfirmationTransfer
                getTransferFee={getTransferFee}
                selectedCurrency={selectedCurrency}
                amount={amount}
                recipient={recipient}
                note={note}
                selectedCurrencyData={selectedCurrencyData}
                setStep={setStep}
                handleTransfer={handleTransfer}
              />
            )
          }

          {step === 3 && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <h3 className="text-lg font-semibold">Processing Transfer</h3>
              <p className="text-gray-400 text-sm">Sending your {selectedCurrencyData?.name}...</p>
              <div className="text-sm text-gray-300">
                Step {processingTime}/3: {
                  processingTime === 0 ? 'Validating transfer...' :
                    processingTime === 1 ? 'Verifying recipient...' :
                      processingTime === 2 ? 'Completing transfer...' :
                        'Transfer completed!'
                }
              </div>
            </div>
          )}

          {
            step === 4 && (
              <TransferSuccess
                selectedCurrencyData={selectedCurrencyData}
                amount={amount}
                recipient={recipient}
                getTransferFee={getTransferFee}
              />
            )
          }

          {(step === 3 || step === 4) && (
            <div className="p-4 border-t border-gray-700 flex-shrink-0">
              <button
                onClick={onClose}
                className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                {step === 3 ? 'Close' : 'Done'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransferIndexUser;
