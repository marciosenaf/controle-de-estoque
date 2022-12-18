import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sales from "./pages/sales/Sales";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import Inventory from "./pages/inventory/Inventory";
import SidebarConfig from "./components/sidebarconfig/SidebarConf";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import ChangePassword from "./pages/changePassword/ChangePassword";
import AddProduct from "./pages/add/AddProduct";
import AddSales from "./pages/add/AddSales";
import SalesDetail from "./components/sales/salesDetail/SalesDetail";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import EditProduct from "./pages/edit/EditProduct";
import EditSales from "./pages/edit/EditSales";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />


        <Route
          path="/edit-profile"
          element={
            <SidebarConfig>
              <Layout title="Edit Profile">
                <EditProfile />
              </Layout>
            </SidebarConfig>
          }
        />
        <Route
          path="/change-password"
          element={
            <SidebarConfig>
              <Layout title="Change Password">
                <ChangePassword/>
              </Layout>
            </SidebarConfig>
          }
        />
        <Route
          path="/contact-us"
          element={
            <SidebarConfig>
              <Layout title="Contact Us">
                <Contact />
              </Layout>
            </SidebarConfig>
          }
        />
        <Route
          path="/how-to-use"
          element={
            <SidebarConfig>
              <Layout title="How to Use">
              </Layout>
            </SidebarConfig>
          }
        />

        <Route
          path="/sales"
          element={
            <Sidebar>
              <Layout >
                <Sales />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/sales-detail/:id"
          element={
            <Sidebar>
              <Layout title="Sales Detail">
                <SalesDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-sales/:id"
          element={
            <Sidebar>
              <Layout title="Edit Sales">
                <EditSales />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/inventory"
          element={
            <Sidebar>
              <Layout title="Inventory">
                <Inventory />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <Sidebar>
              <Layout title="Product Detail">
                <ProductDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <Sidebar>
              <Layout title="Edit Product">
                <EditProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout title="Profile" >
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
