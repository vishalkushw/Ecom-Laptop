import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "react-bootstrap";


const CheckOut = () => {
  const [mydata, setMydata] = useState({});
  const navigate = useNavigate();
  const Product = useSelector(state => state.mycart.cart);
  
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      message.error("You are not Loged in !")
      navigate("/cart")
    }
    loadData();
  }, [])

  const loadData = async () => {
    let api = "http://localhost:8000/users/getuserdetail";
    try {
      const response = await axios.post(api, { id: localStorage.getItem("userid") });
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const initPay = (data) => {
    const options = {
      key: "rzp_test_pzkHWxo3sRdVQW",
      amount: data.amount,
      currency: data.currency,
      name: productName,
      description: "Test",
      image: `http://localhost:8000/${myimg}`,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "https://localhost:8000/api/payment/verify";
          const { data } = await axios.post(verifyURL, response);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
    try {
      const orderURL = "http://localhost:8000/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: totalAmount, productname: productName, customername: mydata.name, address: mydata.address, email: mydata.email, id: mydata._id });
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  let totalAmount = 0;
  let productName = "";
  let myimg = "";
  const ans = Product.map((key) => {
    totalAmount += key.price * key.qnty;
    productName += key.name + ",";
    myimg = key.image;
    return (
      <>
        <h3> { }  </h3>
      </>
    )
  })


  return (
    <>

      <div id="chekout">

        <h1> User CheckOut</h1>

        <h2>Your Total Pay Amount : {totalAmount} </h2>
        <h4 > Your Shipping Address :{mydata.address} </h4>
        <h4 > Your Products : {productName} </h4>

        <Button variant="primary" onClick={handlePay}> Pay Now!</Button>


      </div>

    </>
  )
}

export default CheckOut;