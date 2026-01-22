const express = require("express")
const app = express()

app.get("/",(req,res)=> {
    console.log("Hello from simple server")
})


const PORT = 4000

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))