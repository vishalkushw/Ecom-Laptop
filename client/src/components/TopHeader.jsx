import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TopHeader = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedUserEmail = localStorage.getItem("useremail");
    if (storedUsername && storedUserEmail) {
      setUsername(storedUsername);
      setUserEmail(storedUserEmail);
      setIsLogin(true);
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <>
      <Container id='cont' fluid style={{ backgroundColor: 'rgb(59, 58, 51)' }}>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md="auto">
            <div className="d-flex">
              <a href="#" className="mr-3" style={{ backgroundColor: 'rgb(59, 58, 51)', padding: '0.5rem', borderRadius: '50%' }}>
                <FaFacebookF size={25} color="white" />
              </a>
              <a href="#" className="mr-3" style={{ backgroundColor: 'rgb(59, 58, 51)', padding: '0.5rem', borderRadius: '50%' }}>
                <FaTwitter size={25} color="white" />
              </a>
              <a href="#" className="mr-3" style={{ backgroundColor: 'rgb(59, 58, 51)', padding: '0.5rem', borderRadius: '50%' }}>
                <FaInstagram size={25} color="white" />
              </a>
              <a href="#" className="mr-3" style={{ backgroundColor: 'rgb(59, 58, 51)', padding: '0.5rem', borderRadius: '50%' }}>
                <FaLinkedin size={25} color="white" />
              </a>
            </div>
          </Col>
          <Col xs={12} md="auto">
            <div className="text-right">
              <p className="text" style={{  color: 'white' }}>
                {isLogin ? (
                  <>
                   <span> Welcome : {username} email : {useremail} </span>
                   <button className="logout-button" onClick={userLogout}>Logout</button>
                  </>
                ) : (
                  <> </>
                )}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopHeader;