import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vipinchauhan14567:vipin123@cluster0.xosri.mongodb.net/food-del').then(() =>{
        console.log("DB Connected");
        
    })
}

// mongodb me food-del wala project me hai ye