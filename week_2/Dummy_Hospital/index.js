
const express = require("express");
const app = express();
app.listen(3201);
app.use(express.json());
//AARAY OF OBJECTS

 const user =[{
    name:"john",
    kidney: [{
        healthy: false
    }]
 }];

 app.get("/",function(req, res){
    const johnkidney = user[0].kidney;
    const numofkidney = johnkidney.length;
    // console.log(johnkidney)
    // res.send(johnkidney);
    let numofhealthykidney =0;
    for(let i =0; i<johnkidney.length;i++)
    {
        if (johnkidney[i].healthy)
        {
            numofhealthykidney = numofhealthykidney+1;
        }
    }
    numofunhealthykidney = numofkidney - numofhealthykidney;

    res.json({
        numofkidney,
        numofhealthykidney,
        numofunhealthykidney
    })
 })

 app.post("/",function(req,res){
    const ishealthy =req.body.ishealthy;
    user[0].kidney.push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done"
    })
 })

 app.put("/",function(req,res){
    for(let i =0;i<user[0].kidney.lenght;i++)
    {
        user[0].kidney[i].healthy=true;
    }
    res.json({
        msg:"Done"
    })
 })

 app.delete("/",function(req,res){
    // for(let i =0;i<user[0].kidney.lenght;i++)
    // {
    //     user[0].kidney[i].healthy=true;
    // }
    // res.json({
    //     msg:"Done"
    // })

    //CREATE A NW ARRAY;
    //WHATEVER KIDNEY IS HEALTHY PUSH IT TO NEW ARRY AND REPLACE THE NEW ONNE 
    //RES.JSON
 })

 