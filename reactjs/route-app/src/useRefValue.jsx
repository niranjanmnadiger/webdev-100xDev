import { useRef, useState } from "react";



function App(){
  const [currenCount, setCurrentCount] = useState(0);
  const timer = useRef();



  function StartClock(){
    let value = setInterval(() => {
      setCurrentCount(c => c + 1);
      
    }, 1000);
    timer.current = value;  
    // here we are storing the Value thingy inside the current variable of useRef variable - that is timer
    //as we know useRef gives out an object will Null current value and once u do timer.current = value
    // it will be like timer = {current: value}
  }

  function StopClock(){

    clearInterval(timer.current);

  }

  return(

    <div>
      {currenCount}
      <br />
      <button onClick={StartClock}>start</button>
      <button onClick={StopClock}>stop</button>
    </div>

  )
}


export default App
