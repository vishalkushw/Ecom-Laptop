
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct=()=>{
  const [files, setFiles] = useState([]);
  const [input, setInput]= useState({});

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

const handleInput=(e)=>{
     let name= e.target.name;
     let value= e.target.value;

     setInput(values=>({...values, [name]:value}));
     console.log(input);
}


  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in input) {
         formData.append(key, input[key]);
      }

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }


    try {
      let api="http://localhost:8000/admin/productsave";
      const response = await axios.post(api, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
       alert("file upload!!!");
    } catch (error) {
       console.log(error)
    }
  };




    return(
        <>
           <h1> Upload New Arrive Product</h1>
           <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name </Form.Label>
        <Form.Control type="text" name="productname" value={input.productname} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Product Brand </Form.Label>
        <Form.Select aria-label="Default select example" name="productbrand" value={input.productbrand} onChange={handleInput}>
      <option>Select Product Brand</option>
      <option value="Apple">HP</option>
      <option value="Sony">Dell</option>
      <option value="Samsung">Lenevo</option>
      <option value="Vivo">Apple</option>
      <option value="Oppo">Lava</option>
      <option value="Oppo">Nokia</option>
      <option value="Oppo">LG</option>
      <option value="Oppo">Acer</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Select aria-label="Default select example" name="productcategory" value={input.productcategory} onChange={handleInput}>
      <option>Open this select menu</option>
      <option value="Keypad">Apple mack book</option>
      <option value="Smartphone">Notebook aka laptop</option>
      <option value="Android">Tablet as a laptop</option>
      <option value="IOS">Gaming Laptop</option>
      <option value="Tablet">Ultra book</option>
      <option value="Tablet">Chromebook</option>
      <option value="Tablet">Business laptop</option>
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Decription</Form.Label>
        <Form.Control type="text" name="productdescription" value={input.productdescription} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name="productprice" value={input.productprice} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Images</Form.Label>
        <Form.Control type="file" multiple onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleUpload}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default UploadProduct