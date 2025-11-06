//practicing debounce 

import { useRef } from "react";


function useDebounce(serverFn,delay){

    const timerClock = useRef();

    const Fn = () =>{

        clearTimeout(timerClock.current);

        timerClock.current = setTimeout(serverFn,delay);

    }

    return Fn;
}

function App(){

    const serverSide = () => {

        fetch("api.nirus.com");
        console.log("server is  hit");


    }

    const Debounced = useDebounce(serverSide, 200)

    return(
        <div> 
            <input type="text" onChange={Debounced}/>

        </div>
    )
}

export default App;