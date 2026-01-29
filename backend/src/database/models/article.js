const mongoose=require('mongoose');
const articleSchema = new mongoose.Schema({
    id:Number,
    name:String,
    phone:Number,
    email:String,
    password:String,
    date:{type:Date,default:()=>Date.now()},
    token:String,
    uid:String
})

const article = mongoose.model("Article",articleSchema);