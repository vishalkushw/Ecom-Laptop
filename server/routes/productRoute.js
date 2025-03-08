const express= require("express");
const route = express.Router();
const productController= require("../controllers/productController");
route.get("/productdisplay", productController.productDisplay);
route.post("/productdatashow", productController.productDataShow);


module.exports= route