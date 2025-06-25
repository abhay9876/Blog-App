const generateToken = require('../libs/utils');
const User = require('../Models/userModel');

const login = async (req ,res )=>{
       const {email ,password} = req.body;
       const user = await User.findOne({email});
       if(!user){
         return res.status(400).json({message:"Invalid User ! hihihi"});
       }

       const isMatch = await bcrypt.compare(password,user.password)
       if(!isMatch){
        return res.status(400).json({message:"Wrong Password !"})
       }

       generateToken(user._id,res);

       return res.status(200).json({
        success:true,
        message:"Login Successfully !"
       })


       
}

const signup = async (req , res)=>{
       const {name,email,password} = req.body;
       
       const existingUser = await User.findOne({email});
       if(existingUser){
        return res.status(400).json({messege:"User is already exists !"})
       }

       //hash karo password ko 
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password,salt);

       const newUser = await User.create({
        name,
        email,
        password:hashedPassword
       })
       generateToken(newUser._id,res);

       res.status(201).json({success:true,message:"User created Successfully"});
}




const logout =async(req ,res)=>{
     res.cookie("jwt","",{maxAge:0});
     res.status(200).json({message:"Logout SuccessFully !"})
}

const  passwordReset =(req ,res) =>{
       
}

module.exports ={login,signup, logout, passwordReset}