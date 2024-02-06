import React from "react";
import Loader from "../loader";

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    label?: string;
    loading?: boolean;
    onClick?: () => void;
}
export default function CommonButton({className, label, loading,children,onClick}: ButtonProps){
    return(
        <button className={`w-full rounded-md py-[13px] ${className}`} onClick={onClick}>
             {loading ? <Loader/> : children}
            </button>
    )
}
