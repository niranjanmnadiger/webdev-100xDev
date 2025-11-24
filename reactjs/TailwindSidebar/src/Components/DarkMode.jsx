import { useState } from "react"

export const DarkMode = () => {

    const [dark, setDark] = useState(true);

    function click() {
        if (dark === true) {
            setDark(false)
        } else {
            setDark(true)
        }

    }

    return (

        <div className="h-screen w-screen">

            {dark ? <Black /> : <White />}

            <button className="bg-red-200 align-self mx-20 my-80 " onClick={click}>DarkMode</button>

        </div>


    )
}

function Black() {

    return (
        <div className=" flex bg-stone-900  text-white ">
            hello there
            <div className="bg-amber-300  h-30 w-30 rounded-xl px-10 my-10 mx-10">
                child div
            </div>
            <div className="bg-amber-300  h-30 w-30 rounded-xl px-10 my-10 mx-10">
                child div
            </div>
            <div className="bg-amber-300  h-30 w-30 rounded-xl px-10  my-10 mx-10">
                child div
            </div>

        </div>
    )
}

function White() {

    return (
        <div className=" flex bg-blue-300  text-white ">
            hello there
            <div className="bg-amber-300  h-30 w-30 rounded-xl px-10 my-10 mx-10">
                child div
            </div>
            <div className="bg-amber-300  h-30 w-30 rounded-xl px-10 my-10 mx-10">
                child div
            </div>
            <div className="bg-amber-300  h-30 w-30 rounded-xl px-10  my-10 mx-10">
                child div
            </div>

        </div>
    )
}