import { useRef } from "react"

function useDebounce(OriginalFn){
  const clockTimer = useRef();

  const Fn = () => {
    clearTimeout(clockTimer.current)
    clockTimer.current = setTimeout(OriginalFn,200)

  }

  return Fn

}

function App() {

  function hitBackend(){
    fetch("api.amazon.com")

  
  }

  const DeboundFunction = useDebounce(hitBackend);
  


  return (
    <div>
     <input type="text" onChange={DeboundFunction}/>
    </div>
  )
}


export default App
