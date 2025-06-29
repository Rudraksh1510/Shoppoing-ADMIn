const express = require("express");
const mongoose = require('mongoose');

const {getProducts,
       createProduct,
       deleteProduct,
       updateProduct} = require("../controllers/product.controller");
const router=express.Router();



router.get("/",getProducts);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);
router.put("/:id",updateProduct);

module.exports = router;