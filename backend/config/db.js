import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://samargupta952:yemTbQRF1yNfHiRI@cluster0.h5mt3ou.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}