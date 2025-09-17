import { useRef } from "react";



function App(){

const inputRef = useRef();

  function FocousOnInput(){
    inputRef.current.focus()
  }
  return(
   
    <div>
      sign up form
      <input ref={inputRef} type="text"></input>
      <input  type="text"></input>
      <button onClick={FocousOnInput}>submit</button>
    </div>
  )

}


export default App
