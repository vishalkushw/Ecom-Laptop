const express = require("express")
const app = express()
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const adminRoute = require("./routes/adminRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/usersRoute");
const paymentRoute = require("./routes/payment");
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use("/uploads", express.static("uploads"));
mongoose.connect(process.env.DBCON).then(() => {
    console.log("DB connected!!!");
})
let PORT = process.env.PORT || 8000


app.use(bodyparser.urlencoded({ extended: true }))     // Body-parser middleware
app.use(bodyparser.json())
app.use("/admin", adminRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);

app.use("/api/payment/", paymentRoute);    //Payement Routing

app.listen(PORT, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT: ", PORT)
})