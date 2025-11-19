import clsx from "clsx"

export const Button = ({ children, disabled, onClick }) => {

    return (
        <span onClick={onClick} className={clsx(" inline-flex items-center justify-center py-2 px-10 text-shadow-white font-bold rounded-2xl  ",

            {
                "bg-blue-200 cursor-not-allowed": disabled,
                "bg-green-300 hover:bg-green-500": !disabled
            }
        )}

        >
            {children}


        </span>
    )
}