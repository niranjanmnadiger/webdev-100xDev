function App(){

    // if you can see this function renders other two fucntions listed below <ProfileCard /> and <PostComponent />
    return(
        <div style={{background: "#dfe6e9", //wrapping every other component in a div 
        height:"100vh", 
        display: "flex", 
        justifyContent: "center", 
        padding: 10
        }}>

            <div style={{display: "flex"}}> 
                <ProfileCard />  
            
            </div>

            <div style={{
                display: "flex",
                //justifyContent: "center",
                paddingLeft: 20,
                paddingRight: 20
                }}>
                <div>
                  <div><PostComponent /><br /></div> 
                  <div><PostComponent /><br /></div> 
                  <div><PostComponent /><br /></div> 
                </div>
            </div>   
        </div>
        
    )
}

//this "style" is to do  styling for the PostComponent()
const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor : "grey", borderWidth: 1, padding: 20, alignItems: "center" } 
//
function PostComponent(){

    return <div style={style}>
        <div style={{display: "flex"}}>
            <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} 
            style = {{
                width : 30,
                height: 30,
                borderRadius: 20
            }}/>
            <div style={{fontSize: 12, marginLeft: 10}}>
                <b>
                    100xDevs
                </b>
                <div>
                    23,000 followers
                </div>
                <div>12 mins</div>
                    
            </div>
        </div>
        <div style={{fontSize: 14}}>what to learn web , click the link in description to know more!!</div>

    </div>
    
}

//this "profilecardStyle" is to do  styling for the  ProfileCard()
const profilecardStyle = {
  width: 200,
  height: 200,
  background: "#636e72",
  borderRadius: 10,
  borderWidth: 1,
  display: "flex",          // enable flex
  flexDirection: "column",  // stack children vertically
  alignItems: "center",     // center horizontally
  justifyContent: "center", // center vertically
  textAlign: "center",      // center the text inside
  padding: 10
}

function ProfileCard(){
  return (
    <div style={profilecardStyle}>
      <img 
        src="https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" 
        style={{ width: 50, height: 50, borderRadius: "50%", marginBottom: 10 }}
      />   
      <div style={{ fontSize: 14 }}><b>Niranjan M Nadiger</b></div>
      <div style={{ fontSize: 12 }}>Frontend Developer</div>
      <div style={{ fontSize: 10 }}>
        aspiring fullstack dev with interest in web3 tech etc etc etc
      </div>      
    </div>
  )
}

 

export default App