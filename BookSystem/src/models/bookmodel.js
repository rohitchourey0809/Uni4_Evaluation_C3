const mongoose = require('mongoose');

const bookschema = new mongoose.Schema(
    {
        likes: {type:Number, required:true,mindefault:0,},
        coverimage :{type:String, required:true},
        content :{type:String, required:true},
        user_id:{type:mongoose.Schema.Types.ObjectId, required:true,ref:"user"},
        pub_id : {type:mongoose.Schema.Types.ObjectId, required:true,ref:"publication"}
        
    },
    {
        versionKey : false,
        timeStamps : true,
    }
)

const Book = mongoose.model("book",bookschema)
module.exports = Book
