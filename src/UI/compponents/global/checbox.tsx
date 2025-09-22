import React from "react";

interface CheckboxGlobalProps {
    name: string;
    required?: boolean;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    width?: string | number;
    height?: string | number;
}

const CheckboxGlobal: React.FC<CheckboxGlobalProps> = ({
    name,
    required = false,
    checked,
    onChange,
    label,
    width,
    height,
}) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                id={name}
                name={name}
                type="checkbox"
                required={required}
                checked={checked}
                onChange={onChange}
                style={{
                    width: width ? (typeof width === "number" ? `${width}px` : width) : undefined,
                    height: height ? (typeof height === "number" ? `${height}px` : height) : undefined,
                }}
                className="accent-yellow-400 cursor-pointer"
            />
            {label && <span className="text-white text-sm">{label}</span>}
        </label>
    );
};

export default CheckboxGlobal;
