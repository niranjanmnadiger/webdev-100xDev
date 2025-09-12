import React , { useEffect, useState } from  "react";


function App() {
    const [count, setCount] = useState(0);

    

    function increment(){
        setCount(function(currentvalue){
            console.log("count value"+ count);
            return currentvalue + 1;
        });

        //you can also write is like 
        //setCount(currentvalue=> currentvalue + 1);  -- arrow function
        
    }
    useEffect(function(){
        console.log("rendering "+ count);
            setInterval(increment,1000);
    }, [])
    
    
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
