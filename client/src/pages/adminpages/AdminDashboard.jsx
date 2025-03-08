import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard=()=>{
  const [adminuser, setAdminUser] = useState("");

  useEffect(()=>{
    setAdminUser(localStorage.getItem("adminid"));
  }, [])
    return(
        <>
          <div id="namedisplay">
              Welcome : {adminuser}  Logout
          </div>
          <div id="mainData">
              <div id="mainLeftMenu"> 
          
                 <Link to="uploadproduct">Upload Product </Link>
                 <br /> <br />
                 <Link to="customerorder">Customer Orders </Link>
              </div>
              <div id="mainRightData"> 
                 
                    <Outlet />

              </div>
          </div>
        </>
    )
}

export default AdminDashboard;