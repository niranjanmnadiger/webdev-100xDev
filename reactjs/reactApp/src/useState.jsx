import React , { useState } from  "react";
function App() {
  // Array of post data (instead of hardcoded JSX)
  

  return (
    <div>
        <ToggleMessage />
        <ToggleMessage />
        <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false); //defining a new state variable 
    //here isVisible is being the actucal state variable and setIsVisible is how can u update the state variable
    //when the value of the state variable changes 
    //the component which uses the state variable re-renders

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};


// Export App Component
export default App;
