const express= require("express");
const app = express();

app.use(express.json());

app.post("/health", function(req,res){
    const kidney = req.body.kidney;
    const kidneyylenght = kidney.length;

    res.send("you have "+ kidneyylenght+" kidneyf")

});

app.listen(3000);