import React, { useState } from "react";

interface Option {
    value: string;
    label: string;
}

interface SelectSearchGlobalProps {
    name: string; // ✅ dipakai untuk react-hook-form
    label: string;
    options: Option[];
    value?: string;
    onChange: (value: string) => void;
    required?: boolean;
    placeholder?: string;
    onSearch?: (query: string) => void;
    disabled?: boolean;
    error?: string;
    className?: string;
}

const SelectSearchSecundary: React.FC<SelectSearchGlobalProps> = ({
    name,
    label,
    options,
    value,
    onChange,
    required = false,
    placeholder = "Cari...",
    onSearch,
    disabled = false,
    error,
    className = "",
}) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const selectedLabel = options.find((opt) => opt.value === value)?.label || "";

    return (
        <div className="w-full relative">
            {/* Label */}
            <label htmlFor={name} className="block text-sm text-gray-400 mb-2">
                {label} {required && <span className="text-red-400">*</span>}
            </label>

            {/* Input utama */}
            <div
                id={name}
                onClick={() => !disabled && setOpen((prev) => !prev)}
                className={`w-full px-3 py-2 rounded-md border bg-unicoin-gray text-white flex justify-between items-center cursor-pointer select-none
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-2 focus:ring-unicoin-yellow"}
          ${className}`}
            >
                <span className={`${!selectedLabel ? "text-gray-400" : ""}`}>
                    {selectedLabel || `Pilih ${label}`}
                </span>

                {value ? (
                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange("");
                        }}
                        className="text-yellow-400 cursor-pointer text-xs"
                    >
                        ✕
                    </span>
                ) : (
                    <span className="text-yellow-400 text-xs">▼</span>
                )}
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute w-full mt-1 rounded-md border border-gray-600 bg-unicoin-gray shadow-lg max-h-48 overflow-auto z-50">
                    {/* Search box */}
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            onSearch?.(e.target.value);
                        }}
                        placeholder={placeholder}
                        className="w-full px-3 py-2 bg-unicoin-gray text-white text-sm outline-none border-b border-gray-600"
                    />

                    {/* Options */}
                    {options.length > 0 ? (
                        options.map((opt) => (
                            <div
                                key={opt.value}
                                onClick={() => {
                                    onChange(opt.value);
                                    setOpen(false);
                                }}
                                className={`px-4 py-2 text-white cursor-pointer hover:bg-yellow-400/20 ${value === opt.value ? "bg-yellow-400/30" : ""
                                    }`}
                            >
                                {opt.label}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-gray-400 text-sm">
                            Tidak ada data
                        </div>
                    )}
                </div>
            )}

            {/* Error message */}
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default SelectSearchSecundary;
