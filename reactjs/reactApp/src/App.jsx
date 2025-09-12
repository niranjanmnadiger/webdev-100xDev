import React , { useEffect, useState } from  "react";


function App() {
    const [showTimer, setShowTimer] = useState(true);

    useEffect(()=>{
        setInterval(() => {
            setShowTimer(showTimer => !showTimer);
        }, 5000);
    },[])
    
    return(
        <div>
            {showTimer? <Timer /> : null}
        </div>
    )
    

}

const Timer = () => {
    const[second, setSecond] = useState(0);

    useEffect(()=>{
       let clock = setInterval(() => {    // here the setinterval value is placed inside the clock variable
            console.log("from inside clock- clock is runnning");
            setSecond(prev => prev +1);
        }, 1000);
        //when the inside clock dosen't stops - that is when cleanup function comes into picture

        //cleanup code(function)
        return function() {
            clearInterval(clock); // the setinteval clock stops when u call it inside a clearinterval operation
        }

    },[]);

    return(
         <div> {second} seconds gone</div>
    )
   

}

// Export App Component
export default App;
