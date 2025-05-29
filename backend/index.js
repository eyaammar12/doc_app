//setup server
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js"
import doctorRoute from "./Routes/doctor.js"
import reviewRoute from "./Routes/review.js"
import bookingRoute from "./Routes/booking.js"


dotenv.config()

const app=express()
const port=process.env.PORT || 8000

const corsOptions = {
    origin:"http://localhost:5173"
}

app.get('/',(req,res)=>{
    res.send('api is working')
})

//connect database
mongoose.set('strictQuery',false)
   //db connection function
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log('db is connected')
    } catch (error) {
        console.error('db is not connected:', error.message);
    }
}

//middlware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)
app.use('/api/v1/bookings',bookingRoute)


//test a server
app.listen(port,()=>{
    console.log('is running' + port)
    connectDB();
})
