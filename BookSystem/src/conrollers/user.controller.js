const User = require('../models/user.model')
const express = require('express')
const router = express.Router()



router.post("/",
body("firstName")
.trim()
.not()
.isEmpty()
.islength({min:3},{max:30}),


body("lastName")
.trim()
.not()
.isEmpty()
.islength({min:3},{max:30}),


body("age")
.not()
.isEmpty()
.withMessage("Age cannot be empty")
.isNumeric()
.withMessage("Age must be a number between 1 and 150")
.custom((val) => {
  if (val < 1 || val > 150) {
    throw new Error("Incorrect age provided");
  }
  return true;
}),
async function (req, res){
    try{
     let userdata = await User.create(req.body)
     console.log(userdata)
     return res.send(userdata)
    }
    catch(err){
     res.send(err)
    }
 });


module.exports = router ;