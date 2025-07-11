const mongoose = require('mongoose')


const connectDB =async ()=>{
    try{
            await mongoose.connect(process.env.MONGODB_URI)
            console.log(`MongoDB Connected !${mongoose.connection.host}`)
    }
    catch(err){
         console.log(`${error}`)
    }
}

module.exports = {connectDB};