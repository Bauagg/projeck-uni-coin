// ConvertIndexUser.tsx
import "./convert.css";
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ConvertStep1 from './input_nominal';
import ConvertStep2 from './convert_step_2';
import ConvertStep3 from './convert_step_3';
import ConvertStep4 from './conver_step_4';

// Type definitions
interface UserBalances {
  unicoin: number;      // Balance in UniCoin (UC)
  unicoinMini: number;  // Balance in UniCoin Mini (UCM)
  rupiah: number;       // Balance in Rupiah (RP)
}

interface ConvertIndexUserProps {
  isOpen: boolean;
  onClose: () => void;
  userBalances?: UserBalances;
}

interface Currency {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  color: string;
  icon: string;
}

interface ConversionData {
  rate: number;
  fee: number;
  formula: string;
}

type CurrencyKey = 'unicoinMini' | 'unicoin' | 'rupiah';
type ConversionKey = 'unicoinMini_unicoin' | 'unicoin_rupiah' | 'rupiah_unicoin';

const ConvertIndexUser: React.FC<ConvertIndexUserProps> = ({
  isOpen,
  onClose,
  userBalances = { unicoin: 560, unicoinMini: 1250, rupiah: 125000 }
}) => {
  const [fromCurrency, setFromCurrency] = useState<CurrencyKey>('unicoinMini');
  const [toCurrency, setToCurrency] = useState<CurrencyKey>('unicoin');
  const [amount, setAmount] = useState<string>('');
  const [step, setStep] = useState<number>(1); // 1: Input, 2: Confirm, 3: Processing, 4: Success
  const [processingTime, setProcessingTime] = useState<number>(0);

  // Currency configurations with proper typing
  const currencies: Record<CurrencyKey, Currency> = {
    unicoinMini: {
      id: 'unicoinMini',
      name: 'UniCoin Mini',
      symbol: 'UCM',
      balance: userBalances.unicoinMini,
      color: 'from-purple-500 to-pink-500',
      icon: 'M'
    },
    unicoin: {
      id: 'unicoin',
      name: 'UniCoin',
      symbol: 'UC',
      balance: userBalances.unicoin,
      color: 'from-yellow-400 to-orange-500',
      icon: 'UC'
    },
    rupiah: {
      id: 'rupiah',
      name: 'Rupiah',
      symbol: 'Rp',
      balance: userBalances.rupiah,
      color: 'from-green-500 to-emerald-500',
      icon: 'Rp'
    }
  };

  // Conversion rules with proper typing
  const conversionRules: Record<CurrencyKey, CurrencyKey[]> = {
    unicoinMini: ['unicoin'], // UCM can only convert to UC
    unicoin: ['rupiah'], // UC can only convert to Rupiah
    rupiah: ['unicoin'] // Rupiah can only convert to UC
  };

  // Conversion rates with proper typing
  const conversionRates: Record<ConversionKey, ConversionData> = {
    'unicoinMini_unicoin': { rate: 100, fee: 0, formula: 'amount / 100' }, // 100 UCM = 1 UC
    'unicoin_rupiah': { rate: 100, fee: 1, formula: 'amount * 100 * 0.99' }, // 1 UC = Rp 100 (1% fee)
    'rupiah_unicoin': { rate: 100, fee: 0, formula: 'amount / 100' } // Rp 100 = 1 UC (no fee)
  };

  const conversionKey = `${fromCurrency}_${toCurrency}` as ConversionKey;
  const conversionData = conversionRates[conversionKey];

  const calculateReceived = (): number => {
    if (!amount || !conversionData) return 0;
    const numAmount = parseFloat(amount);

    switch (conversionKey) {
      case 'unicoinMini_unicoin':
        return Math.floor(numAmount / 100); // 100 UCM = 1 UC
      case 'unicoin_rupiah':
        return Math.floor(numAmount * 100 * 0.99); // 1 UC = Rp 100 (1% fee)
      case 'rupiah_unicoin':
        return Math.floor(numAmount / 100); // Rp 100 = 1 UC
      default:
        return 0;
    }
  };

  const calculateFee = (): number => {
    if (!amount || !conversionData) return 0;
    if (conversionKey === 'unicoin_rupiah') {
      const numAmount = parseFloat(amount);
      return Math.floor(numAmount * 100 * 0.01); // 1% fee in Rupiah
    }
    return 0;
  };

  const isAmountValid = (): boolean => {
    if (!amount) return false;
    const numAmount = parseFloat(amount);
    const minAmount = getMinAmount();
    const fromCurrencyData = currencies[fromCurrency];
    return numAmount >= minAmount && numAmount <= fromCurrencyData.balance;
  };

  const getMinAmount = (): number => {
    switch (conversionKey) {
      case 'unicoinMini_unicoin':
        return 100; // minimum 100 UCM
      case 'unicoin_rupiah':
        return 1; // minimum 1 UC
      case 'rupiah_unicoin':
        return 100; // minimum Rp 100
      default:
        return 1;
    }
  };

  const handleConvert = async (): Promise<void> => {
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
    setFromCurrency('unicoinMini');
    setToCurrency('unicoin');
    setProcessingTime(0);
  };

  const handleContinue = (): void => {
    setStep(2);
  };

  const handleBack = (): void => {
    setStep(1);
  };

  const handleClose = (): void => {
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      resetModal();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="convert-card rounded-xl w-full max-w-md max-h-[85vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
          <h2 className="text-lg font-bold unicoin-yellow">Convert Currency</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white"
            type="button"
            aria-label="Close convert modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 custom-scroll">

          {/* Step 1: Input & Selection */}
          {step === 1 && (
            <ConvertStep1
              currencies={currencies}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              amount={amount}
              setFromCurrency={setFromCurrency}
              setToCurrency={setToCurrency}
              setAmount={setAmount}
              conversionRules={conversionRules}
              conversionKey={conversionKey}
              conversionData={conversionData}
              getMinAmount={getMinAmount}
              calculateFee={calculateFee}
              calculateReceived={calculateReceived}
            />
          )}

          {/* Step 2: Confirmation */}
          {step === 2 && (
            <ConvertStep2
              currencies={currencies}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              amount={amount}
              conversionKey={conversionKey}
              // conversionData={conversionData}
              calculateFee={calculateFee}
              calculateReceived={calculateReceived}
            />
          )}

          {/* Step 3: Processing */}
          {step === 3 && (
            <ConvertStep3 processingTime={processingTime} />
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <ConvertStep4
              currencies={currencies}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              amount={amount}
              calculateFee={calculateFee}
              calculateReceived={calculateReceived}
            />
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-700 flex-shrink-0">
          {step === 1 && (
            <button
              onClick={handleContinue}
              disabled={!isAmountValid()}
              className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              type="button"
            >
              Continue
            </button>
          )}

          {step === 2 && (
            <div className="flex gap-2">
              <button
                onClick={handleBack}
                className="flex-1 convert-card py-3 rounded-lg font-semibold text-sm"
                type="button"
              >
                Back
              </button>
              <button
                onClick={handleConvert}
                className="flex-1 floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                type="button"
              >
                Confirm Convert
              </button>
            </div>
          )}

          {(step === 3 || step === 4) && (
            <button
              onClick={handleClose}
              className="w-full floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
              type="button"
            >
              {step === 3 ? 'Close' : 'Done'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConvertIndexUser;