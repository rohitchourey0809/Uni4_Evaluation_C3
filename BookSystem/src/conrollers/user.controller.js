const User = require('../models/user.model')
const express = require('express')
const router = express.Router()

router.post("/",async function (req, res){
   try{
    let userdata = await User.create(req.body)
    console.log(userdata)
    return res.send(userdata)
   }
   catch(err){
    res.send(err)
   }
})

module.exports = router ;