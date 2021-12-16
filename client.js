
const express = require('express')
const app = new express()

app.get('/new', (request,response) => {
    response.send("Welcome new user")
    console.log(request.ip)
})

app.post("/postresponse",(req,res)=>{
    res.json({
        message: "I would like to add a movie.",
        
    })
})
//get/post for client side//

app.listen(8080, () => {
    console.log("server started")
})
