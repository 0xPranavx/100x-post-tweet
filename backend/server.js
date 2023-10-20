const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3500;

app.use(express.json())

app.use(cors({
    origin : "*",
    methods : ['POST'],
}))

app.post("/post", (req,res) =>{
    res.setHeader('Content-Type', 'application/json');
    let {tweet} = req.body;
    if(!tweet){
        return res.status(418).send({message:'we need a tweet'})
    }
    
    res.status(200).send({
        tweet_posted : tweet 
    })

})

app.listen(PORT, function(){
    console.log(`its alive on http://localhost:${PORT}`)
})