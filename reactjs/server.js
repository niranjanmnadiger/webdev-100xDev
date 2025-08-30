const express = require("express");
const app = express();

var users = [{ //array of objects
    name : "nirus",
    kidneys:[{
        health:false
    }]
}]

app.use(express.json());  //middleware

//get route handelerz

app.get('/',function(req,res){
    //write the logic
    const niruskidney = users[0].kidneys;
    const numberofkidneys = niruskidney.length;
    let numberofhealthykidneys = 0 ;
    for(let i =0 ; i<niruskidney.length;i++){
        if(niruskidney[i].health){
            numberofhealthykidneys = numberofhealthykidneys +1;
        }
    }

    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})

//post route handeler

app.post('/',function (req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        health : isHealthy
    })
    res.json({
        msg: "done!"
    })
})


//put route handeler

app.put('/',function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].health = true;  //this logic update every kidneys to be healthy 
    }
    res.json({})

    } else{
        res.status(411).json({ //status(411) shows up in the postman 
            msg:"all kidneys are healthy "
        })
    }

    
})

//delete route handler

app.delete('/',function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        const newkidneys = [];
    for(let i =0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].health){ //store only the healthy kidneys in the new array 
            newkidneys.push({
                health: true
            })
        }
    }
    users[0].kidneys= newkidneys;
    res.json({msg:"delete done"})

    } else {
        res.status(411).json({  //status(411) shows up in the postman 
            msg: "you have no bad kidneys"
        })
            
        }
    
    
})


function isThereAtleastOneUnhealthyKidney(){  //checks weather atleast one unhealthy kidney should be present before required operations

    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].health){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}



app.listen(3000,()=>{
    console.log('express is running on local host port 3000')
})