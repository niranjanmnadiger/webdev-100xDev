import React from "react";

function App(){
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(c => c + 1);


  return(
    <Buz count = {count} onPress={increment} />
  )
}

function Buz(props){
  return <button onClick={props.onPress}> counter {props.count}</button>
}

export default App
