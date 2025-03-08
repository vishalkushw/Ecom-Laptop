const express = require("express");
const route = express.Router();
const multer = require('multer');
const path = require('path');

const AdminController = require("../controllers/adminController");

// Set storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');             // Set the folder where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);      // Save file with a unique name
  },
});

// File filter for allowed extensions (optional)
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|pdf/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
  }
};

// Multer middleware configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
});




route.post("/adminlogin", AdminController.adminLogin);
route.post("/productsave", upload.array('files', 10), AdminController.productSave);
route.get("/orderdetail", AdminController.orderDetail);


module.exports = route;