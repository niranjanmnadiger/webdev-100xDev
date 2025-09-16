//import { useState } from 'react'
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


function App() {
  

  return(
    //<a></a> is a bad way to navigate to diffrent parts of Single page application - coz this will fetch the whole page
    // instead use the Link tag -- you cannot use links outside the  <BrowserRouter>
    <div>
      
     <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element={<LandingPage />} />
              <Route path="/neet/class-11-online-coaching" element={<Class11Program />} />
              <Route path="/neet/class-12-online-coaching" element={<Class12Program />} />
              <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
     </BrowserRouter>
    </div>
  )

}

function Layout(){
  
  // this is exactly where layout comes into picture when we use <Outlet /> tag

  return(
    <div style={{height: "100vh", backgroundColor: "yellow"}}>
       <Link to="/">LANDING PAGE</Link> | 
        <Link to="/neet/class-11-online-coaching">CLASS 11</Link> | 
        <Link to="/neet/class-12-online-coaching">CLASS 12</Link> {/* this bar appears on all pages */}
      <div style={{height: "90vh", backgroundColor:"#d63031"}}>
        <Outlet  />
      </div>
      
      foooter
    </div>
  )
}


function LandingPage(){


  return(

  // even this <Link> works, which will navigate you  to the desired location which is set inside the link tag
    <div>
      you are in the landing page
      <Link to="/neet/class-11-online-coaching"><button>CLASS 11</button></Link>
      <Link to="/neet/class-12-online-coaching"><button>CLASS 12</button></Link>
    </div>
  )
}

function Class11Program(){
  const navigate = useNavigate();

  useEffect(()=>{ // this will push back the user or send back the user on the landing page after 5 seconds just like payment gateway!!!
     setTimeout(redirectUser,5000)
  })

  function redirectUser(){
    navigate("/")
  }

  return(
    <div>
      neet program for 11th class
    </div>
  )
}

function Class12Program(){
     const navigate = useNavigate();

     function redirectUser(){
        navigate("/");
     }

  return(
    <div>
      neet program for 12th class
      <br />
      <button onClick={redirectUser}>click for home page</button>
    </div>
  )

}

function ErrorPage(){ // this one for error page - 404 page, when people try to hit unknown routes - and "*" inside does that all 

  return(
    <div>
      error page , please go back 
      <br />
      <Link to="/"><button>Home page</button></Link>
    </div>
  )
}
export default App
