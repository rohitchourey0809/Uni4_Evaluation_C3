const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String, required:true,minlength:3, maxLength:30},
        lastName:{type:String, required:true,minlength:3, maxLength:30},
        age:{type:Number, required:true,min:1 ,max:150}, 
        email:{type:String, required:true,unique:true},
        profileimages:{type:String, required:true}
    },
    {
        versionKey : false,
        timeStamps : true,
    })

    const User = mongoose.model("user",userSchema)
    module.exports = User