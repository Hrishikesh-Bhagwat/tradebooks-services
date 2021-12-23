const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.send("<h1>Hello</h1>");
});
app.post("/", (req, res) => {
    return res.send("Hello");
});
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
})
