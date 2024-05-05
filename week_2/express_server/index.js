const express = require("express");
const app = express();
app.listen(3000);

// ABOVE ARE THE CONSTANT LINES THW\AT WE WILL WRITE

// WE HAVE TO GIVE ROUTE PARAM


function sum(n){
    let ans =0;
    for(let i =1;i<=n;i++)
    {
        ans = ans+i;
    }
    return ans;
}


app.get("/",function(req, res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi there your sum is "+ ans);
})