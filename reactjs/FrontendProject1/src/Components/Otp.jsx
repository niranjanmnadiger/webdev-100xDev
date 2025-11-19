import { useRef } from "react";

export function Otp() {
    const inputsRef = useRef([]);

    const focusInput = (index) => {
        const el = inputsRef.current[index];
        if (el) el.focus();
    };

    const handleChange = (e, index) => {
        // keep only digits
        let value = e.target.value.replace(/\D/g, "");

        // only 1 digit max
        if (value.length > 1) value = value.slice(-1);

        // set sanitized value back to the input
        e.target.value = value;

        // if a digit is present, move to next
        if (value && index < 5) {
            focusInput(index + 1);
        }
    };

    const handleKeyDown = (e, index) => {
        // backspace on empty → go to previous
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            focusInput(index - 1);
        }
    };

    return (
        <div className="flex gap-4 justify-center items-center">
            {Array.from({ length: 6 }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    maxLength={1}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    type="text"
                    inputMode="numeric"   // mobile: show numeric keyboard
                    pattern="[0-9]*"      // extra hint for browsers
                    className="w-[40px] h-[50px] rounded-xl bg-blue-50 px-3.5 text-center text-black"
                />
            ))}

            <button
                className="bg-blue-700 rounded-xl px-3 py-2 text-white"
                onClick={() => {
                    const code = inputsRef.current.map((el) => el.value).join("");
                    console.log("OTP:", code);
                }}
            >
                check otp
            </button>
        </div>
    );
}
