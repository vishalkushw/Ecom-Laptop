import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {message} from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AdminLogin=()=>{
    const [adminuser, setAdminUser] = useState("");
    const [adminpassword, setAdminPassword]=useState("");
    const navigate= useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
             let api="http://localhost:8000/admin/adminlogin";
             const response= await axios.post(api, {adminuser:adminuser, adminpassword:adminpassword});  
             if (response.status==200)
             {
                  message.success("Login Succesfully!");
                  localStorage.setItem("adminid",response.data.adminid);
                  navigate("./admindashboard");
             }
             console.log(response);
        } catch (error) { 
              message.error(error.response.data.msg);
        }
     }
    return(
        <>
        <div id="adminForm">
     <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID</Form.Label>
        <Form.Control type="text"  name="adminid" value={adminuser} onChange={(e)=>{setAdminUser(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="adminpassword" value={adminpassword} onChange={(e)=>{setAdminPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default AdminLogin;