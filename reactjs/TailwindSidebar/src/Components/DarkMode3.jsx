import { useState } from "react";

export const DarkMode3 = () => {
    const [dark, setDark] = useState(true);

    return (
        <div
            className={`flex h-screen w-screen 
        ${dark ? "bg-stone-900 text-white" : "bg-blue-100 text-red-600"}`}
        >
            hello there
            <div className="bg-amber-300 rounded-xl px-10 my-10 mx-10">
                child div
            </div>
            <div className="bg-amber-300 rounded-xl px-10 my-10 mx-10">
                child div
            </div>
            <div className="bg-amber-300 rounded-xl px-10 my-10 mx-10">
                child div
            </div>

            <button
                className="fixed bottom-6 right-6 bg-red-200 px-4 py-2 rounded"
                onClick={() => setDark(d => !d)}
            >
                DarkMode
            </button>
        </div>
    );
};
