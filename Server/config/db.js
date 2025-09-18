import mongoose from 'mongoose';


 const connectDB = async( req , res) =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the mongodb URL")
    }
    catch(error){
        console.log(error.message , "failed connecting to the server")
    }
}

export default connectDB;