import React from "react";

interface ButtonPrimaryProps {
    type?: "button" | "submit" | "reset";
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    type = "button",
    label,
    disabled = false,
    onClick,
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return e.preventDefault();
        if (type === "button" && onClick) onClick(); // hanya trigger kalau type=button
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={handleClick}
            className={`w-full py-3 mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl shadow text-lg flex items-center justify-center gap-2 transition-all 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
        >
            {label}
        </button>
    );
};

export default ButtonPrimary;
