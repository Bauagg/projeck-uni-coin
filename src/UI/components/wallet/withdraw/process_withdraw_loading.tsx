import type React from "react";
import { useEffect } from "react";

interface ProcessingWithdrawLoadingProps {
  processingStep: number;
  setProcessingStep: React.Dispatch<React.SetStateAction<number>>;
  setStep: (step: number) => void;
}

const ProcessingWithdrawLoading: React.FC<ProcessingWithdrawLoadingProps> = ({
  processingStep,
  setProcessingStep,
  setStep
}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setProcessingStep((prev) => {
        if (prev >= 3) {
          clearInterval(timer);
          setTimeout(() => setStep(6), 1000); // Go to success after 1 second
          return prev;
        }
        return prev + 1;
      });
    }, 1500); // Each step takes 1.5 seconds

    return () => clearInterval(timer);
  }, [setProcessingStep, setStep]);

  const getStepMessage = (step: number) => {
    switch (step) {
      case 0:
        return 'Validating request...';
      case 1:
        return 'Verifying account details...';
      case 2:
        return 'Initiating transfer...';
      case 3:
        return 'Processing complete!';
      default:
        return 'Validating request...';
    }
  };

  return (
    <div className="text-center py-8 space-y-4">
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <h3 className="text-lg font-semibold">Processing Withdrawal</h3>
      <p className="text-gray-400 text-sm">Please wait while we process your request...</p>
      <div className="text-sm text-gray-300">
        Step {Math.min(processingStep + 1, 3)}/3: {getStepMessage(processingStep)}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs mx-auto bg-gray-700 rounded-full h-2">
        <div
          className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${Math.min((processingStep + 1) * 33.33, 100)}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProcessingWithdrawLoading;