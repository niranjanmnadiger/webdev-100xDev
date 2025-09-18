import { createContext, useContext, useState } from "react"

const BulbContext = createContext(); //context created and storted in BulbContext

//wrapper function for all the clusmy part in ContextAPI.jsx
function StateProvider({ children }){  

    //here {children} looks like {children = <Light /> }
    
const [bulbOn, setBulbOn] = useState(true);

return (
<BulbContext.Provider value={{

        bulbOn: bulbOn,
        setBulbOn: setBulbOn

      }}>
      {children}
      </BulbContext.Provider>

)

}

function App() {
  

  return(
    <div>
      <StateProvider>
         <Light />
      </StateProvider>

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
