import React, { useState } from "react";

interface InputGlobalProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  showError?: boolean;
  disabled?: boolean;
}

const InputGlobal: React.FC<InputGlobalProps> = ({
  label,
  name,
  placeholder = "",
  type = "text",
  required = false,
  value,
  onChange,
  errorMessage,
  showError = false,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-white mb-1">
        {label} {required && "*"}
      </label>

      <div className="relative">
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`w-full px-4 py-2 rounded-lg border-2 border-yellow-400/20 bg-black/40 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 outline-none ${type === "password" ? "pr-10" : ""
            }`}
        />

        {/* ICON FONT AWESOME */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center p-0 m-0 bg-transparent border-none focus:outline-none"
          >
            <i
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-white hover:text-yellow-400 cursor-pointer`}
            ></i>
          </button>
        )}
      </div>

      {showError && errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputGlobal;
