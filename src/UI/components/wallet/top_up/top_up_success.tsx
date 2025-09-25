import { CheckCheck } from "lucide-react";

interface TopUpSuccessProps {
  calculateReceived: () => void;
  selectedWalletData: any;
  selectedMethodData: any;
}

const TopUpSuccess: React.FC<TopUpSuccessProps> = ({
  calculateReceived,
  selectedMethodData,
  selectedWalletData,
}) => {
  return (
    <div className="text-center py-6 space-y-4">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        <CheckCheck size={32} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold">Top Up Successful!</h3>
      <p className="text-gray-400 text-sm">
        {calculateReceived()} {selectedWalletData?.symbol} has been added to
        your wallet
      </p>
      <div className="gradient-card rounded-lg p-3 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Transaction ID</span>
          <span className="font-mono">
            TXN{Date.now().toString().slice(-8)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Payment Method</span>
          <span>{selectedMethodData?.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Amount</span>
          <span className="unicoin-yellow font-semibold">
            {calculateReceived()} {selectedWalletData?.symbol}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopUpSuccess;
