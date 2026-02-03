import clsx from "clsx";

export const Button = ({ children, disabled = false, onClick, className = "", type = "button" }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
            className={clsx(
                "inline-flex items-center justify-center py-2 px-10 font-bold rounded-2xl",
                disabled ? "bg-blue-200 cursor-not-allowed opacity-60" : "bg-green-300 hover:bg-green-500",
                className
            )}
        >
            {children}
        </button>
    );
};