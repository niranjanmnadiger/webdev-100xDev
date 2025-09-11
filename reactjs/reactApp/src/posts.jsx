import React , { useState } from  "react";
import { PostComponent } from "./post";

function App() {
    const [posts,setPosts] = useState([]);

  const postComponent= posts.map((post => <PostComponent  
   name={post.name}
   subtitle={post.subtitle}
   time={post.time}
   image={post.image}
   description={post.description}
   image2={post.image2}
  /> ));
  

 function addPost(){
     setPosts([...posts,{
        name: "niranjan",
        subtitle: "20 followers",
        time: "26 mins ago",
        image: "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg",
        description: "hello from nirus 2",
        image2: 
        "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"

     }])
    }

 
  return (
    <div style={{height:"100vh", background:"#2d3436"}}>
        <button onClick={addPost}>add post </button>
       <div style={{ display:"flex",flexDirection: "column", justifyContent:"center",   alignItems: "center"}}>
                {postComponent}
       </div>
    </div>
  );
}

// Export App Component
export default App;
