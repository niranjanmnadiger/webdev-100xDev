//useCounter() hook
import { useState } from "react"

// custom Hook
function useCounter(){
// a custom hook is a function only which uses use as the keyword and uses another hook inside and returns value 
//which changes based on the hook used inside the function

const [count, setCount] = useState(0);

  function IncreaseCount(){

    setCount(count + 1)
    //setCount(count => count +1);

  }

return(

  //return the state variable and the function in an object 
  {
    count: count,
    IncreaseCount: IncreaseCount
  }
)


}

function App() {
  
  const {count , IncreaseCount} = useCounter(); //destructure the object here and use it 
  // remember this is an object and image - array but the object....

  return (

    <div>
      <button onClick={IncreaseCount}>click {count}</button>
    </div>
    
  )
}

export default App
