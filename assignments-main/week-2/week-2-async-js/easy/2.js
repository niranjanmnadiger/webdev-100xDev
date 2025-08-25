let ctr =1 ;

function callback (){
    console.clear();
    console.log(ctr);
    ctr +=1;
    setTimeout(callback, 1000);  // this will call the callback function again and again

}

setTimeout(callback, 1000); // this works as the initatior of the callback function
