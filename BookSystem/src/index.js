
const express = require('express')
const app = express()
app.use(express.json())


const userdata = require("./conrollers/user.controller")
app.use("userlink",userdata)

const bookdata = require("./conrollers/book.controller")
app.use("booklink",bookdata)

const commentdata = require("./conrollers/comment.controller")
app.use("commentlink",commentdata)

const connect = require('./configs/db')



app.listen(5000,async function(){
    try{
        console.log("Server start")
      await connect()  
    }
    catch(err){console}
})