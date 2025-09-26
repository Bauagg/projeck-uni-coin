import { Building, ChevronDown, ChevronUp, Smartphone } from "lucide-react";

interface WithdrawMethodProps {
  amount: string;
  selectedWallet: string;
  selectedWalletData: any;
  openAccordion: string;
  setOpenAccordion: (val: string) => void;
  setSelectedMethod: (val: string) => void;
  setStep: (val: number) => void;
}

const WithdrawMethod: React.FC<WithdrawMethodProps> = ({
  amount,
  selectedWallet,
  selectedWalletData,
  openAccordion,
  setOpenAccordion,
  setSelectedMethod,
  setStep,
}) => {
  const withdrawMethods = [
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      icon: Building,
      processingTime: "1-3 business days",
      methods: [
        { id: "bca", name: "Bank BCA", fee: 2500, logo: "🏦" },
        { id: "mandiri", name: "Bank Mandiri", fee: 2500, logo: "🏦" },
        { id: "bni", name: "Bank BNI", fee: 2500, logo: "🏦" },
        { id: "bri", name: "Bank BRI", fee: 2500, logo: "🏦" },
        { id: "other_banks", name: "Bank Lainnya", fee: 6500, logo: "🏦" },
      ],
    },
    {
      id: "e_wallet",
      name: "E-Wallet",
      icon: Smartphone,
      processingTime: "Instant",
      methods: [
        { id: "gopay", name: "GoPay", fee: 0, logo: "💚" },
        { id: "ovo", name: "OVO", fee: 1000, logo: "💜" },
        { id: "dana", name: "DANA", fee: 1000, logo: "💙" },
        { id: "shopeepay", name: "ShopeePay", fee: 1500, logo: "🧡" },
      ],
    },
  ];

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordion(openAccordion === accordionId ? "" : accordionId);
  };

  return (
    <div className="space-y-4">
      {/* Withdraw Summary */}
      <div className="gradient-card rounded-lg p-3">
        <h3 className="font-semibold mb-2 text-sm">Withdrawal Summary</h3>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Amount</span>
            <span>
              {amount} {selectedWalletData?.symbol}
            </span>
          </div>
          {selectedWallet === "unicoin" && (
            <div className="flex justify-between">
              <span className="text-gray-400">Converted to</span>
              <span>Rp {(parseFloat(amount) * 100).toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>

      {/* Withdrawal Methods Accordion */}
      <div>
        <h3 className="font-semibold mb-3 text-sm">Select Withdrawal Method</h3>
        <div className="space-y-3">
          {withdrawMethods.map((category) => (
            <div key={category.id}>
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(category.id)}
                className="w-full withdraw-card rounded-lg p-3 flex items-center justify-between hover:border-yellow-400"
              >
                <div className="flex items-center gap-2">
                  <category.icon size={16} className="unicoin-yellow" />
                  <div className="text-left">
                    <div className="text-sm font-medium">{category.name}</div>
                    <div className="text-xs text-gray-400">
                      {category.processingTime}
                    </div>
                  </div>
                </div>
                {openAccordion === category.id ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>

              {/* Accordion Content */}
              {(openAccordion === category.id ||
                (openAccordion === "" && category.id === "bank_transfer")) && (
                <div className="mt-2 ml-4 space-y-2">
                  {category.methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => {
                        setSelectedMethod(method.id);
                        if (category.id === "bank_transfer") {
                          setStep(3); // Go to bank details
                        } else {
                          setStep(4); // Go to confirmation
                        }
                      }}
                      className="w-full withdraw-card rounded-lg p-3 text-left flex items-center justify-between hover:border-yellow-400"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{method.logo}</span>
                        <span className="text-sm font-medium">
                          {method.name}
                        </span>
                      </div>
                      <div className="text-right">
                        {method.fee > 0 ? (
                          <span className="text-xs text-orange-400">
                            Fee: Rp {method.fee.toLocaleString()}
                          </span>
                        ) : (
                          <span className="text-xs text-green-400">Free</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setStep(1)}
        className="flex-1 withdraw-card py-3 rounded-lg font-semibold text-sm w-full"
      >
        Back to Amount
      </button>
    </div>
  );
};

export default WithdrawMethod;
