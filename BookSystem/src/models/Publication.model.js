const mongoose = require('mongoose');

const publicationschema = new  mongoose.Schema(
    {
        name : {type:String, required:true},
        user_id:{type:mongoose.Schema.Types.ObjectId, required:true,ref:"user"}
    },
    {
        versionKey : false,
        timeStamps : true,
    })

    const Publication = mongoose.model("publication",publicationschema)
     module.exports = Publication