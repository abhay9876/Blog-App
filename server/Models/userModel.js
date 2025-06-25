const mongoose = require('mongoose')

const userSchema = moongoose.Schema({
    name:{
        type:String,
        requied:[true,"Name is required !"],
        trim:true,
        minlength:[4,"Name At least 4 Characters long !"]
    },
    email:{
        type:String,
        requied:[true,"Email is required !"],
        trim:true,
        lowercase:true,
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    'Please fill a valid email address']
    },
    password:{
        type:String,
        requied:[true,"Password is Required !"],
        minlength:[6,"Password must be atleast 6 characters long"],

    }
},{timestamps:true}
)

const User = mongoose.model("User",userSchema)
module.exports = User