import React from "react";

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string | number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string; // error message dari React Hook Form
    className?: string;
}

const InputSecundary: React.FC<InputFieldProps> = ({
    label,
    name,
    type = "text",
    value,
    placeholder,
    onChange,
    disabled = false,
    required = false,
    error,
    className = "",
}) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm text-gray-400 mb-2">
                {label}{" "}
                {required && <span className="text-red-400">*</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                required={required}
                className={`w-full px-3 py-2 bg-unicoin-gray border rounded-md focus:ring-2 focus:ring-unicoin-yellow focus:border-transparent text-white disabled:opacity-50 
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-600"}
          ${className}`}
            />
            {error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    );
};

export default InputSecundary;
