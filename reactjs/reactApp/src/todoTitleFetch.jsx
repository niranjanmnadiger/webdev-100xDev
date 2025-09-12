import React , { useEffect, useState } from  "react";


function App() {
    const[currentTab,setCurrentTab] = useState(1);
    const[tabData, setTabData] = useState({});
    const[loading, setLoading] = useState(true); // this is a loader - which loads the data before 

    useEffect(function(){
        setLoading(true); //loading logic 

        fetch("https://jsonplaceholder.typicode.com/todos/1" + currentTab) // got api from https://jsonplaceholder.typicode.com/
        .then(async res => {
            const json = await res.json();
            setTabData(json);
            setLoading(false); //loading logic become false
        });

    },[currentTab]);

    return(
        <div>
            <button onClick={function(){
                setCurrentTab(1);
            }} style={{color: currentTab == 1 ? "red" : "black"}}>todo #1</button>

            <button onClick={()=> setCurrentTab(2)} style={{color: currentTab == 2 ? "red" : "black"}}>todo #2</button>
            <button onClick={()=> setCurrentTab(3)} style={{color: currentTab == 3 ? "red" : "black"}}>todo #3</button>
            <button onClick={()=> setCurrentTab(4)} style={{color: currentTab == 4 ? "red" : "black"}}>todo #4</button>
            <br />
            {loading ? "loading.... plz wait" : tabData.title}
        </div>
    )
}

// Export App Component
export default App;
