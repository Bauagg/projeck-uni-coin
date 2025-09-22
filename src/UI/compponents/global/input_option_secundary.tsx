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
    disabled?: boolean;
    error?: string; // konsisten dengan InputSecundary
    className?: string;
}

const SelectSecundary: React.FC<SelectGlobalProps> = ({
    label,
    name,
    options,
    value,
    onChange,
    required = false,
    disabled = false,
    error,
    className = "",
}) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm text-gray-400 mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </label>

            <div className="relative">
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className={`w-full px-3 py-2 pr-10 bg-unicoin-gray border rounded-md focus:ring-2 focus:border-transparent text-white disabled:opacity-50 appearance-none
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-600"}
          ${className}`}
                >
                    <option value="">Pilih {label}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>

                {/* Custom arrow */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs">
                    ▼
                </span>
            </div>

            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default SelectSecundary;
