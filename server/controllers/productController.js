const ProductModel= require("../models/productModel");

const productDisplay=async(req, res)=>{

    try {
         const Product= await ProductModel.find();
         res.status(200).json(Product);
    } catch (error) {
         console.log(error);
    }
   
}

const productDataShow=async(req, res)=>{
    const Product=await ProductModel.findById(req.body.id);
    res.status(200).send(Product);
}
module.exports={
    productDisplay,
    productDataShow
}