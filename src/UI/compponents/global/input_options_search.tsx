import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectSearchGlobalProps {
  label: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SelectSearchGlobal: React.FC<SelectSearchGlobalProps> = ({
  label,
  options,
  value,
  onChange,
  required = false,
  placeholder = "Cari...",
  onSearch,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "";

  return (
    <div className="w-full relative">
      <label className="block text-sm font-medium text-white mb-1">
        {label} {required && "*"}
      </label>

      {/* Input utama */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-full px-4 py-2 rounded-lg border-2 border-yellow-400/20 bg-black text-white flex justify-between items-center cursor-pointer"
      >
        <span>{selectedLabel || `Pilih ${label}`}</span>
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
        <div
          className="absolute w-full mt-1 rounded-lg border border-yellow-400/20 bg-black shadow-lg max-h-48 overflow-auto z-50 custom-scroll"
        >
          {/* Search box */}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              onSearch?.(e.target.value);
            }}
            placeholder={placeholder}
            className="w-full px-3 py-2 bg-black text-white text-sm outline-none border-b border-yellow-400/20"
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
                className={`px-4 py-2 text-white cursor-pointer hover:bg-yellow-400/20 ${
                  value === opt.value ? "bg-yellow-400/30" : ""
                }`}
              >
                {opt.label}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-400 text-sm">Tidak ada data</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectSearchGlobal;
