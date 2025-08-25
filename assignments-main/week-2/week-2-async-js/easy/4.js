const fs = require('fs');

let data = "read from program and written on the file";

function expensive(){
    let sum = 0;
    for(let i = 0; i<= 1000000; i++){
        sum += i;
        console.clear();
        console.log(i);
    }
    
    console.log("expensive operaton completed ");

}

fs.writeFile('a.txt', data ,(err)=>{
    if(err){
        console.log('error', err);
        return;

    }
    console.log('data is written to a.txt');

});