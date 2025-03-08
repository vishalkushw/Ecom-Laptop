import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const [input, setInput] = useState({});
    const navigate= useNavigate();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
      
        let api="http://localhost:8000/users/userlogin";
      const response= await axios.post(api, input);
      console.log(response.data);
      message.success("You are succesfully login!");
      localStorage.setItem("username", response.data.name);
      localStorage.setItem("useremail", response.data.email);
      localStorage.setItem("userid", response.data._id);
      navigate("/");
      } catch (error) {
        message.error(error.response.data.msg);
      }
      
    }
    return(
        <>
        <div style={{width:"500px", margin:"auto"}} id='login'>
          <h1> User Login</h1>
          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
    <br/> <br/>
    </div>
        </>
    )
}

export default Login;