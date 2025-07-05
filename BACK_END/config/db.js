const mongoose = require('mongoose');

const connectDB=async()=>{
    try
    {
        const conn = await mongoose.connect("mongodb+srv://rudraksh1510:ULV51GZdgVTZIEtT@cluster0.7nisanb.mongodb.net/Products?retryWrites=true&w=majority&appName=Cluster0");

        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }
    catch(error)
    {
        console.error(`ERROR:${error.message}`);
        process.exit(1);//1 code means exit with failure and 0 means success
    }
}
module.exports=connectDB;