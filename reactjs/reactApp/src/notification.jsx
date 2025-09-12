import React , { useState } from  "react";


function App() {
    const [count, setCount] = useState(0);

    

    function increment(){
        setCount(count + 1);
        
    }

    return(
    <div>
        <button onClick={increment}> click here</button>
        <div style={{backgroundColor: "red", height: 15, width: 15, borderRadius:50, alignContent: "center"}}>
            {count}
        </div>
        
       
        <div>
            <img src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg=" alt="bell icon"
             width={30}
            />
        </div>
    </div>
    )
}

// Export App Component
export default App;
