import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';


const Products = () => {
   const [mydata, setMydata]= useState([]);

   const dispatch= useDispatch();
   const cursorPointer={
      cursor:'pointer'
   }

   const loadData=async ()=>{
       try {
         let api="http://localhost:8000/products/productdisplay";
         const response= await axios.get(api);
         setMydata(response.data)
         console.log(response.data);
       } catch (error) {
          console.log(error);
       }
   }

   useEffect(()=>{
      loadData();
   }, [])


   const proDisplay=(id)=>{
      navigate(`/viewProduct/${id}`)
   }

   const proAns= mydata.map((item)=> (
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <i>
                   <img  onClick={()=>{proDisplay(item._id)}} src={`http://localhost:8000/${item.defaultImage}`}  style={{height:'200px'}}/>
                        </i>
                     <h3>{item.productname}</h3>
                     <span>{item.productprice}</span>
                     <br/>
                     <Button variant="success" 
                 onClick={()=>{dispatch(addtoCart({id:item._id, name:item.productname, brand:item.productbrand, category:item.productcategory, price:item.productprice, image:item.defaultImage,qnty:1}))}}    > Add to Cart</Button>
                  </div>
               </div> 
                ))

  const navigate = useNavigate();   

  return (
    <>
    <div id='data'>
     <h1>All product </h1>

     </div>
     <div id='datacom'>
      { proAns  }
      
      </div>
   
    </>
  );
};

export default Products;