//without using props

//remember to change it to app3x in main.jsx before run

import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //hook -> useState hook
  //any function that starts with "use" is a hook in react

  function onClickHandler(){
    setCount(count + 1);
  }

  return (
    <div>
      <button id = "btn" onClick={onClickHandler}>
        Counter {count}
      </button>
    </div>
  )
}

export default App