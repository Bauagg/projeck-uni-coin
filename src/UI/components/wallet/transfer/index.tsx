import { X } from "lucide-react";
import type React from "react";

interface TransferIndexUserProps {
  onClose: () => void;
}

const TransferIndexUser: React.FC<TransferIndexUserProps> = ({ onClose }) => {
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
      </div>
    </div>
  );
};

export default TransferIndexUser;
