const dotenv = require('dotenv')
dotenv.config();
const express = require('express')

const authRoutes = require('./Routes/authRoutes')



const app = express();

app.use(express.json());
app.use(cors());

// auth ka routing 
app.use('/api/auth',authRoutes)

// for testing
app.get('/',(req,res)=>{
    res.send("hellllllllloooooo")
})
PORT= process.env.PORT
app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${PORT}`);
})