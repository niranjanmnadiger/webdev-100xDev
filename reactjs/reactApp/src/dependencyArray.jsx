import React , { useEffect, useState } from  "react";


function App() {
    const [count, setCount] = useState(0);

    

    function increment(){
        setCount(function(currentvalue){
                return currentvalue +1;
        })

        //you can also write is like 
        //setCount(currentvalue=> currentvalue + 1);  -- arrow function   
    }

    useEffect(function(){
        setInterval(increment,1000);
    },[]);
    

    // this useEffect runs every time when the count changes - as count is the dependency array for this use effect
    // this runs - when the component mounts(renders for the 1st time ) and aslo runs when count changes
    useEffect(function(){ 
            console.log("this runs every time count changes " + count);
    },[count]);
    
    
    return(
    <div>
        <div style={{backgroundColor: "red", height: 40, width: 40, borderRadius:50, alignContent: "center", fontSize: 30}}>
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
