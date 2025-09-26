import "./withdraw.css"
import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import InputNominalWithdrawUser from "./input_nominal";
import WithdrawMethod from "./withdraw_method";
import PaymentDetailWithdrawUser from "./payment_detail";
import WithdrawConfirmUser from "./confirm_withdraw";
import ProcessingWithdrawLoading from "./process_withdraw_loading";
import SuccessWithdraw from "./success_withdraw";

interface WithdrawIndexUserProps {
  onClose: () => void;
}

const WithdrawIndexUser:React.FC<WithdrawIndexUserProps> = ({onClose}) => {
  const [selectedWallet, setSelectedWallet] = useState('unicoin');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [step, setStep] = useState(1); // 1: Select, 2: Choose Method, 3: Bank Details, 4: Confirm, 5: Processing, 6: Success
  const [openAccordion, setOpenAccordion] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '1234567890',
    accountName: 'Aladdin95',
    bankName: 'Bank BCA'
  });
  const [processingStep, setProcessingStep] = useState(0);

  // Reset processing step when starting new withdrawal
  const startProcessing = () => {
    setProcessingStep(0);
    setStep(5);
  };

  const walletTypes = [
    { 
      id: 'unicoin', 
      name: 'UniCoin', 
      symbol: 'UC', 
      rate: 100, 
      color: 'from-yellow-400 to-orange-500',
      balance: 560,
      minWithdraw: 10 // minimum 10 UC
    },
    { 
      id: 'rupiah', 
      name: 'Rupiah', 
      symbol: 'Rp', 
      rate: 1, 
      color: 'from-green-500 to-emerald-500',
      balance: 125000,
      minWithdraw: 50000 // minimum Rp 50,000
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="topup-card rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto custom-scroll">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold unicoin-yellow">Withdraw</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {step === 1 && (
            <InputNominalWithdrawUser
              amount={amount}
              setAmount={setAmount}
              walletTypes={walletTypes}
              selectedWalletData={walletTypes.find(w => w.id === selectedWallet)}
              selectedWallet={selectedWallet}
              setSelectedWallet={setSelectedWallet}
              calculateReceived={() => {
                if (!amount) return 0;
                const numAmount = parseFloat(amount);
                const wallet = walletTypes.find(w => w.id === selectedWallet);
                if (!wallet) return 0;
                return Math.floor(numAmount / wallet.rate);
              }}
              setStep={setStep}
            />
          )}

          {step === 2 && (
            <WithdrawMethod
              amount={amount}
              selectedWallet={selectedWallet}
              selectedWalletData={walletTypes.find(w => w.id === selectedWallet)}
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
              setSelectedMethod={setSelectedMethod}
              setStep={setStep}
            />
          )}

          {step === 3 && (
            <PaymentDetailWithdrawUser
              bankDetails={bankDetails}
              setBankDetails={setBankDetails}
              setStep={setStep}
            />
          )}

          {step === 4 && (
            <WithdrawConfirmUser
              amount={amount}
              selectedWallet={selectedWallet}
              selectedWalletData={walletTypes.find(w => w.id === selectedWallet)}
              selectedMethod={selectedMethod}
              bankDetails={bankDetails}
              setStep={setStep}
              startProcessing={startProcessing}
            />
          )}

          {step === 5 && (
            <ProcessingWithdrawLoading
              processingStep={processingStep}
              setProcessingStep={setProcessingStep}
              setStep={setStep}
            />
          )}

          {step === 6 && (
            <SuccessWithdraw
              amount={amount}
              selectedWallet={selectedWallet}
              selectedWalletData={walletTypes.find(w => w.id === selectedWallet)}
              selectedMethod={selectedMethod}
              bankDetails={bankDetails}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawIndexUser;
