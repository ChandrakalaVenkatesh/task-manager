let mongoose=require("mongoose")

//mongoose gives us schema and stores data in db and let us have the validation for data
let TaskSchema= new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true})
module.exports=mongoose.model("task",TaskSchema)