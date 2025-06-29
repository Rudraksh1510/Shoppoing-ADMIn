const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamps:true //CreatedAt and UpdatedAt
});

const product = mongoose.model('Product',productSchema);



module.exports=product;

