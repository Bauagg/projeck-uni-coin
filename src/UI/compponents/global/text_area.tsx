import React from "react";

interface TextAreaGlobalProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  showError?: boolean;
  minHeight?: string; // biar bisa custom tinggi kalau perlu
}

const TextAreaGlobal: React.FC<TextAreaGlobalProps> = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  errorMessage,
  showError = false,
  minHeight = "60px",
}) => {
  return (
    <div className="flex-1">
      <label htmlFor={name} className="block text-sm font-medium text-white mb-1">
        {label} {required && "*"}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-lg border-2 border-yellow-400/20 bg-black/40 text-white 
        focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none`}
        style={{ minHeight }}
      />
      {showError && errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextAreaGlobal;
