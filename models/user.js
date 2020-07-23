const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

 const userSchema = new mongoose.Schema({
     name:{
        type:String,
         require:true
    },
     email:{
        type:String,
         require:true
   },
     password:{
         
        type:String,
        required:true
     },
     pic:{
        type:String,
        default: "https://res.cloudinary.com/mohamedamine/image/upload/v1595416479/images_1_gjv5fb.jpg"
     },
     followers:[{type:ObjectId,ref:"User"}],
     following:[{type:ObjectId,ref:"User"}]
 })

  mongoose.model("User",userSchema)