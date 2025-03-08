import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Product"
import Contact from "./pages/Contact"
import ViewProduct from "./pages/ViewProduct"
import Cart from "./pages/Cart"
import AdminHome from "./pages/adminpages/AdminHome"
import AdminLogin from "./pages/adminpages/AdminLogin"
import AdminDashboard from "./pages/adminpages/AdminDashboard"
import UploadProduct from "./pages/adminpages/UploadProduct"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import CheckOut from "./pages/CheckOut"
import CustomerOrders from "./pages/adminpages/CustomerOrders"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="viewProduct/:id" element={<ViewProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/admin" element={<AdminHome />} >
            <Route index element={<AdminLogin />} />
            <Route path="admindashboard" element={<AdminDashboard />}>
            <Route path="uploadproduct" element={<UploadProduct />} />
            <Route path="customerorder" element={<CustomerOrders/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}
export default App