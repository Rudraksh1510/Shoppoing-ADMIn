const express = require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const productRoutes=require('./Routes/product')

dotenv.config();
const app = express();

app.use(express.json());//allows us to accept json data into req.body

app.use("/api/products",productRoutes);

app.listen(5000,()=>{
    connectDB();
    console.log('Server started at http://localhost:5000');
})