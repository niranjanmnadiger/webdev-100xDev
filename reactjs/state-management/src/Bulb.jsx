import { useState } from "react"


function App() {
  

  return(
    <div>
      
      <LightBulb />

    </div>
  )
}

function LightBulb(){
  const [bulbOn, setBulbOn] = useState(true);
  
  return(
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
      
    </div>
    
  )
}

function BulbState({bulbOn}){ // this shows the bulb on off state 

  
  return(

    <>
    {bulbOn ? "bulb is on" : " bulb is off"}
    </>
  )


}
 
function ToggleBulbState({setBulbOn , bulbOn}){ // this decides the bulb on off state 

  function toggle(){

      setBulbOn(!bulbOn); // !true = false and !false = true
      //it says set the state to opposite value of the state - like Flip the state.(if true -> !true = false)

      //you can also do
      //setBulbOn(currentState => !currentState);
      
  }
  return(

    <div>
      <button onClick={toggle}>toggle</button>
    </div>

  )


}



export default App
