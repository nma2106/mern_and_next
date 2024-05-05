const express =  require("express");
const app =  expressf();
app.listen(3202);
app.use(express.json());

 app.get("/health-checkup",(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username!="naman" || password!="password"){
        res.status(403).json({
            msg: "User does not exist",
        });
        return;
    }

    if (kidneyId!=1 && kidneyId!=2)
    {
        res.status(411).json({
            msg: "wrong input",
        });
        return;
    }

    res.send("your kidney is healthy ");
 });