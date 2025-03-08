import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';

const Products = () => {
   const [mydata, setMydata] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      const loadData = async () => {
         try {
            let api = "http://localhost:8000/products/productdisplay";
            const response = await axios.get(api);
            setMydata(response.data);
         } catch (error) {
            console.log(error);
         }
      };
      loadData();
   }, []);

   const proDisplay = (id) => {
      navigate(`/viewProduct/${id}`);
   };

   const filteredData = mydata.filter((item) =>
      item.productname.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <>
         <div id='data'>
            <h1>All Products</h1>
            <input id='search'
               type="text" 
               placeholder="Search by compony name" 
               value={searchTerm} 
               onChange={(e) => setSearchTerm(e.target.value)}
               style={{ marginBottom: '10px', padding: '5px', width: '22%',borderRadius:"10px",fontSize:"25px" }}
            />
         </div>
         <div id='datacom' className="row">
            {filteredData.map((item) => (
               <div key={item._id} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                     <img 
                        onClick={() => proDisplay(item._id)} 
                        src={`http://localhost:8000/${item.defaultImage}`} 
                        style={{ height: '200px', cursor: 'pointer' }} 
                        alt={item.productname}
                     />
                     <h3>{item.productname}</h3>
                     <span>{item.productprice}</span>
                     <br />
                     <Button 
                        variant="success" 
                        onClick={() => dispatch(addtoCart({
                           id: item._id,
                           name: item.productname,
                           brand: item.productbrand,
                           category: item.productcategory,
                           price: item.productprice,
                           image: item.defaultImage,
                           qnty: 1
                        }))}
                     >
                        Add to Cart
                     </Button>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default Products;
