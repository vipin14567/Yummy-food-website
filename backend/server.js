import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRouter.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartroute.js';
import orderRouter from './routes/orderRoute.js';


// app config

const app = express()
const port = 4000;

// middleware

app.use(express.json());
app.use(cors());

// add db connection 

connectDB();

// api end point

app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order" , orderRouter);

// to get the method

app.get('/' ,(req ,res) => {
    res.send('API working');
})

app.listen(port , ()=>{
    console.log("server is running on the port number 4000")
})