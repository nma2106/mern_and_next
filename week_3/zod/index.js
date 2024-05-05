const express = require("express");
const zod  = require("zod");
const app = express();
app.listen(3010);
app.use(express.json());


const schema = zod.object({
    kidney: zod.array(zod.number())
});


app.post("/", function(req, res) {
    const kidney = req.body.kidney;
    const validationResult = schema.safeParse(kidney);
    if (validationResult.success) {
        res.send(validationResult.data);
    } else {
        res.status(400).send({ error: validationResult.error });
    }
});
