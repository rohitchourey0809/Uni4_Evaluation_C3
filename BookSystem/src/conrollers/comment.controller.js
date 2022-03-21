const Comment = require('../models/comment.model')
const express = require('express')
const router = express.Router()

router.post("/",async function (req, res){
   try{
    let commentdata = await Comment.create(req.body)
    res.send(commentdata)
   }
   catch(err){
    res.send(err)
   }
})

module.exports = router ;