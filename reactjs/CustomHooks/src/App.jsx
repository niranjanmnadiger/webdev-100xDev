import { useEffect, useState } from "react"

const useDebounce = (value , delay) => {

const [timerr, setTimerr] = useState(value);

useEffect(()=>{


  const clocks = setTimeout(() => {

    setTimerr(value);
    
  }, delay);

  return() => {
    clearTimeout(clocks);
  }
  
  

},[value, delay ])


return timerr;
}



function App(){

  const [inptus, setInputs] = useState("");
  const debouncedHook = useDebounce(inptus, 200);
  
  function servers(e){

   setInputs(e.target.value );

  }

  useEffect(()=>{

    fetch("api.nirus.com");
    console.log("frontend it hitting the api correctly");


  },[debouncedHook]);

  

  return(
    <div>
      <input type="text" onChange={servers} />
    </div>
  )
}





export default App