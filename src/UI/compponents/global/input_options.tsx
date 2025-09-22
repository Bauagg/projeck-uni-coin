import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectGlobalProps {
  label: string;
  name: string;
  options: Option[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  errorMessage?: string;
  showError?: boolean;
}

const SelectGlobal: React.FC<SelectGlobalProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  errorMessage,
  showError = false,
}) => {
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-white mb-1">
        {label} {required && "*"}
      </label>

<div className="relative">
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full pl-4 pr-10 py-2 rounded-lg border-2 border-yellow-400/20 bg-black text-white appearance-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none"
      >
        <option value="">Pilih {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

       {/* Custom arrow biar rapih */}
     <span className="pointer-events-none text-[10px] absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400">
  ▼
</span>
</div>

      {showError && errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default SelectGlobal;
