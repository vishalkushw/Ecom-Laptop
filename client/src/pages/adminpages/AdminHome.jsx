import { Outlet } from "react-router-dom";


const AdminHome=()=>{
    return(
        <>
           <div id="adminHeader">
                    <h1> Welcome To Admin Panel </h1>
           </div>
           <div id="adminData">
           
            <Outlet/>

           </div>
           <div id="adminFooter">
                www.myEcomm.com
           </div>
        </>
    )
}

export default AdminHome;