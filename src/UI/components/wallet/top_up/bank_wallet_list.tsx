import { Building, CreditCard, Smartphone} from "lucide-react";
import "./top_up.css";
import type React from "react";
import { useState } from "react";

interface BankWalletListProps {
  onClose: () => void;
  amount: string;
  selectedWalletData: any;
  calculateReceived: () => void;
  setOpenTopUp: () => void;
  setIsOpenPaymentDetail: (paymentMethod: any) => void;
}

const BankWalletList: React.FC<BankWalletListProps> = ({
  onClose,
  amount,
  selectedWalletData,
  calculateReceived,
  setOpenTopUp,
  setIsOpenPaymentDetail,
}) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const paymentMethods = [
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      icon: Building,
      methods: [
        { id: "bca", name: "BCA Virtual Account", fee: 0, icon: "🏦" },
        { id: "mandiri", name: "Mandiri Virtual Account", fee: 0, icon: "🏦" },
        { id: "bni", name: "BNI Virtual Account", fee: 0, icon: "🏦" },
        { id: "bri", name: "BRI Virtual Account", fee: 0, icon: "🏦" },
      ],
    },
    {
      id: "e_wallet",
      name: "E-Wallet",
      icon: Smartphone,
      methods: [
        { id: "gopay", name: "GoPay", fee: 0, icon: "💚" },
        { id: "ovo", name: "OVO", fee: 0, icon: "💜" },
        { id: "dana", name: "DANA", fee: 0, icon: "💙" },
        { id: "shopeepay", name: "ShopeePay", fee: 0, icon: "🧡" },
      ],
    },
    {
      id: "credit_card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      methods: [
        { id: "visa", name: "Visa", fee: 2.5, icon: "💳" },
        { id: "mastercard", name: "Mastercard", fee: 2.5, icon: "💳" },
      ],
    },
  ];

  const handleMidtransPayment = async () => {
    if (!selectedMethod) return;

    // Find the selected payment method data
    const selectedPaymentData = paymentMethods
      .flatMap(category =>
        category.methods.map(method => ({
          ...method,
          category: category.id
        }))
      )
      .find(method => method.id === selectedMethod);

    if (selectedPaymentData) {
      setIsOpenPaymentDetail(selectedPaymentData);
    }
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        {/* Order Summary */}
        <div className="gradient-card rounded-lg p-4">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Amount</span>
              <span>Rp {parseFloat(amount).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Wallet</span>
              <span>{selectedWalletData?.name}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-gray-400">You'll receive</span>
              <span className="unicoin-yellow">
                {calculateReceived()} {selectedWalletData?.symbol}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold mb-3">Select Payment Method</h3>
          <div className="space-y-4">
            {paymentMethods.map((category) => (
              <div key={category.id}>
                <div className="flex items-center gap-2 mb-2">
                  <category.icon size={16} className="unicoin-yellow" />
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <div className="space-y-2 ml-6">
                  {category.methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full topup-card rounded-lg p-3 text-left flex items-center justify-between ${
                        selectedMethod === method.id ? "selected" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{method.icon}</span>
                        <span className="font-medium">{method.name}</span>
                      </div>
                      <div className="text-right">
                        {method.fee > 0 ? (
                          <span className="text-xs text-orange-400">
                            +{method.fee}% fee
                          </span>
                        ) : (
                          <span className="text-xs text-green-400">Free</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              setOpenTopUp();
              onClose();
            }}
            className="flex-1 topup-card py-3 rounded-lg font-semibold"
          >
            Back
          </button>
          <button
            onClick={handleMidtransPayment}
            disabled={!selectedMethod}
            className="flex-1 floating-action text-black py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankWalletList;
