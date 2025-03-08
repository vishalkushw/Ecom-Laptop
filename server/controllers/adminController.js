const AdminModel = require ("../models/adminModel");
const ProductModel = require("../models/productModel");
const OrderModel = require("../models/orderModel");


const adminLogin = async (req, res) => {
    const { adminuser, adminpassword } = req.body;
    
    const Admin = await AdminModel.findOne({adminid:adminuser});
        console.log(Admin);

    res.send("ook");
    try {
        const Admin = await AdminModel.findOne({ adminid: adminuser });
        console.log(Admin);

        if (!Admin) {
            res.status(400).json({ msg: "Invalid ID!" });
        }

        if (Admin.adminpassword != adminpassword) {
            res.status(400).json({ msg: "Invalid Password!" });
        }

        res.status(200).json(Admin);

    } catch (error) {
        console.log(error);
    }
}


const productSave = async (req, res) => {
    console.log(req.files);
    const imageUrls = req.files.map(file => file.path);
    const Product = await ProductModel.create({
        productname: req.body.productname,
        productbrand: req.body.productbrand,
        productcategory: req.body.productcategory,
        productdescription: req.body.productdescription,
        productprice: req.body.productprice,
        images: imageUrls,
        defaultImage: imageUrls[0]
    })
    console.log(req.body.productname);
    res.send("data save!!!");
}

const orderDetail = async (req, res) => {
    const Order = await OrderModel.find();
    res.status(200).send(Order);
}


module.exports = {
    adminLogin,
    productSave,
    orderDetail
}