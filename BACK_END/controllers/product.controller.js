const Product = require('../models/Product');
const mongoose = require('mongoose');

const getProducts=async (req,res)=>{
    try {
            const products=await Product.find({});
            res.status(200).json({success:true,data:products});
    } catch (error) {
        console.error(error.message)
        res.status(500).json({success:false,message:"Server error"});
    }
}

const createProduct=async (req,res)=>{
    const product=req.body; //User will send this data

    if(!product.name || !product.price || !product.image)
    {
        return res.status(400).json({success:false, message:"Please Provide all fields"});
    }

    const newProduct=new Product(product)
    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    }
    catch(error){
        console.error("Error in creating product : ",error.message);
        res.status(500).json({success:false,message:"Server Error"});
    }
}

const deleteProduct=async (req,res)=>{
    const{id}=req.params;   //We use the term in {name} which is written in "/:name"
    console.log(id);
    try{
        await Product.findByIdAndDelete(id);
        res.status(201).json({seccess:true,message:"Product deleted"})
    }
    catch(error)
    {
        console.error("Error in deleting: ",error.message);
        res.status(404).json({success:false,message:"Product not Found"});
    }
}

const updateProduct=async (req,res)=>{
    const {id} = req.params;
    const product=req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({success:false,message:"Product not found"});
    }
    try {
        const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
}
module.exports={
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct};