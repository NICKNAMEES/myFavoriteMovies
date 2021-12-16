const express = require('express') 
const app = new express() 
const db = require('better-sqlite3')('movies')
app.use(express.static("public"))
app.get("/movies",(req,res) => {
    const user = db.prepare("SELECT * FROM movies") //named movies//
        .get(req.body.list)    
})

app.post("/addmovie",(req,res)=>{
    res.json({
        message: "You added this movie.",
        listId: 1
    })
})
//used listed to see the port(8080)//
app.listen(8080,() => { 
    console.log("server started")
})
