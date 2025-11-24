import { useState } from "react";

export const DarkMode2 = () => {
    const [dark, setDark] = useState(true);

    function click() {
        setDark(prev => !prev); // simpler toggle
    }

    return (
        <div className={`h-screen w-screen flex flex-col`}>
            {/* main area */}
            <div className="flex-1">
                {dark ? <Black /> : <White />}
            </div>

            {/* button area */}
            <div className="p-4">
                <button
                    className="bg-red-200 px-4 py-2 rounded"
                    onClick={click}
                >
                    Toggle Dark Mode
                </button>
            </div>
        </div>
    );
};

function Black() {
    return (
        <div className="flex bg-stone-900 h-full w-full text-white">
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
        </div>
    );
}

function White() {
    return (
        <div className="flex bg-blue-300 h-full w-full text-white">
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
        </div>
    );
}
