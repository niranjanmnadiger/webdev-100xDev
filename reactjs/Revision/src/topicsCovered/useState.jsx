import { useState } from "react";

export const USEstate = () => {

    const [count, setCount] = useState(0);


    function increment() {
        setCount(count + 1);
    }

    function decrement() {

        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={increment}>Increase {count}</button>
            <button onClick={decrement}>Decrease {count}</button>
        </div>
    )
}