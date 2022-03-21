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

router.post("/",
body("firstName")
.trim()
.not()
.isEmpty()
.islength({min:3},{max:30}))

router.post("/",
body("lastName")
.trim()
.not()
.isEmpty()
.islength({min:3},{max:30}))

router.post("/",
body("age")
.trim()
.not()
.isEmpty()
.islength({min:1},{max:150}))


module.exports = router ;