const mongoose = require('mongoose');

const connectDB=async()=>{
    try
    {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }
    catch(error)
    {
        console.error(`ERROR:${error.message}`);
        process.exit(1);//1 code means exit with failure and 0 means success
    }
}
module.exports=connectDB;