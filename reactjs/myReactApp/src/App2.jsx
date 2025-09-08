// counter using props

import React from "react";

function App(){
  const [count,setCount] = React.useState(0);

  return( //sending count and setCount as props or properties from parent(App) and <Button /> is a custom component with name Button
    <div>
      <Button count={count} setCount={setCount}></Button> 
    </div>
  )
}

function Button(props){
    
  function onButtonClick(){
        props.setCount(props.count + 1); // utilizing and updating the props on button click process and triggering the re-rendering 
    
  }
      return <button onClick={onButtonClick}>counter {props.count}</button>
}

export default App

