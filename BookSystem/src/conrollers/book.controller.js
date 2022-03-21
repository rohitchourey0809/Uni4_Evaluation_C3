const Book = require('../models/bookmodel')
const express = require('express')
const router = express.Router()

router.post("/",async function (req, res){
    try{
     let bookdata = await Book.create(req.body)
     res.send(bookdata)
    }
    catch(err){
     res.send(err)
    }
 })
 
 module.exports = router ;