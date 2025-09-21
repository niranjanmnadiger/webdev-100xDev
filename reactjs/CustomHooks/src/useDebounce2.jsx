import { useEffect, useState } from "react"

function useDebounce(value,delay){

  const[debounceValue, setDebounceValue] = useState(value);


  useEffect(() => {
    const timers = setTimeout(() => {  //timer code to start the clock
      setDebounceValue(value);
    }, delay);

      return () => { //clean up code to stop the clock
        clearTimeout(timers);
        
      }


  },[value, delay])

  return debounceValue
  
}

function App() {

  const [inputVal, setInputVal] = useState("");
  const deboounceValue = useDebounce(inputVal , 200);

  function change(e){
    setInputVal(e.target.value); //this one line code will put whats inside the input box insider inputVal state variable 
    //whenever and event takes place in input box - this represents "e", onchange of event "e" , target the event and get the value
    // this is similar to document.getElementById("").value
  }

  useEffect(() => {
    //do the expensive operation 
    //fecth
    fetch("api.amazon.com")
    console.log("expensive operation")

  },[deboounceValue])

  return (
    <div>
     <input type="text" onChange={change}/>
    </div>
  )
}


export default App
