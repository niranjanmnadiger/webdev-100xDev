import React  from  "react";


function App() {
    
    // this return will give out the inner content box button of the card 
    return(
        <div style={{display: "flex"}}>
            <Card>
                <div>First Child </div>
            </Card>
            <Card>
                <div>second Child</div>
            </Card>

        </div>
    )
   
}


function Card({ children }){
    // this returns only the card outline - like background colour of the card - padding - margin etc etc like that 
    return(
        <div style={{backgroundColor: "#636e72", borderRadius: 10, padding: 10, margin: 10, width : 80, height : 80}}> 
        
        {children}

        </div>
    )
}

// Export App Component
export default App;
