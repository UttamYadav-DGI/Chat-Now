import mongoose from "mongoose";
import { DB_NAME } from "../../constraints.js"

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n mongodb Connected host at ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("something went wrong while db not connected",error);
        process.exit(1);
    }
}
export default connectDB;
