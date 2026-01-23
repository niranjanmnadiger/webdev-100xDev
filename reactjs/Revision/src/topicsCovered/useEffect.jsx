import { useEffect, useState } from "react"

export const USEeffect = () => {

    const [fetch, setFetch] = useState(0);

    function timeIncrement() {

        setInterval(() => {
            setFetch(fetch => fetch + 1);
            console.log("after 5 secs " + { fetch });
        }, 1000);
    }

    useEffect(() => { timeIncrement() }, []);

    return (

        <div>
            program started
            {fetch}
            <br />

            <div>
                <button> Fetch data from end point</button>
            </div>
        </div>


    )
}