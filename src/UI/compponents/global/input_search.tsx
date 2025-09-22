import React from "react";

interface InputSearchGlobalProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    icon?: string; // icon kiri (default: search)
    className?: string;
    disabled?: boolean; // tambahin disable
    onClear?: () => void; // optional clear button
}

const InputSearchGlobal: React.FC<InputSearchGlobalProps> = ({
    value,
    onChange,
    placeholder = "Cari sesuatu...",
    icon = "fas fa-search",
    className = "",
    disabled = false,
    onClear,
}) => {
    return (
        <div className="relative">
            {/* Icon kiri */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className={icon}></i>
            </div>

            {/* Input */}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
            />

            {/* Clear Button */}
            {onClear && value && !disabled && (
                <button
                    type="button"
                    onClick={onClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                    <i className="fas fa-times"></i>
                </button>
            )}
        </div>
    );
};

export default InputSearchGlobal;
