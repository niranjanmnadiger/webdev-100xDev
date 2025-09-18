import { createContext, useContext, useState } from "react"

const BulbContext = createContext(); //context created and storted in BulbContext

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return(
    <div>
      <BulbContext.Provider value={{

        bulbOn: bulbOn,
        setBulbOn: setBulbOn

      }}>
         <Light />
        
      </BulbContext.Provider>
     

    </div>
  )
}

function Light(){
  

  return(
    <div>
      <LightBulb />
      <LightSwitch />
      
    </div>
    
  )
}

function LightBulb(){ // this shows the bulb on off state 
    
    const {bulbOn} = useContext(BulbContext); // this is how you consume the prop values here
  
  return(

    <>
    {bulbOn ? "bulb is on" : " bulb is off"}
    </>
  )


}
 
function LightSwitch(){ // this decides the bulb on off state 

    const {setBulbOn,bulbOn} = useContext(BulbContext); // this is how you consume the prop values here
  function toggle(){

      setBulbOn(!bulbOn); 
      
  }
  return(

    <div>
      <button onClick={toggle}>toggle</button>
    </div>

  )


}



export default App
