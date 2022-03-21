const mongoose = require('mongoose');

const commentschema = new mongoose.Schema(
    {
        body :{type:String,required:true},
        user_id:{type:mongoose.Schema.Types.ObjectId, required:true,ref:"user"},
        book_id :{type:mongoose.Schema.Types.ObjectId, required:true,ref:"book"},
    },
    { 
        versionKey : false,
        timeStamps : true,  
    }
)

const Comment = mongoose.model("comment",commentschema)
module.exports = Comment