const axios = require("axios");

/*
async function main() {
  const response = await fetch( "http://127.0.0.1:3000/");
  const json = await response.json();
      console.log("total kidneys:", json.numberofkidneys);
      console.log("healthy kidneys:", json.numberofhealthykidneys);
      console.log("unhealthy kidneys:", json.numberofunhealthykidneys);
}
*/

async function main () {
const response = await axios.get( "http://127.0.0.1:3000/");
// response.data
    console.log("total kidneys:", response.data.numberofkidneys);
    console.log("healthy kidneys:", response.data.numberofhealthykidneys);
    console.log("unhealthy kidneys:", response.data.numberofunhealthykidneys);
}

//post 
async function posts(){
  const response = await axios.post("https://webhook.site/4a9114c1-572d-4808-a40c-acd60d3fe3ee/");

    console.log("total kidneys:", response.data);
   
  
}

main();
posts();