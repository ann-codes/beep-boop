import React from "react";

export interface ButtonProps {
    colorBg?: string;
    colorText?: string;
    label: string;
    onClick?: (event?: any) => void;
}

export const Button = ({ colorBg, colorText, label = "Sample", onClick }: ButtonProps) => {
    //
    return (
        <button onClick={onClick} style={{backgroundColor: colorBg}} className="py-2 px-4 rounded-full">
            <span style={{color:`${colorText}`}}>{label}</span>
        </button>
    );
};
