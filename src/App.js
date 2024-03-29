import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import RequireAuth from "./Pages/LoginPage/RequireAuth";
import SignIn from "./Pages/LoginPage/SignIn";
import SignUp from "./Pages/LoginPage/SignUp";
import About from "./Pages/OtherPage/About";
import Blogs from "./Pages/OtherPage/Blogs";
import AddProducts from "./Pages/ProductPage/AddProducts";
import ManageProducts from "./Pages/ProductPage/ManageProducts";
import MyProducts from "./Pages/ProductPage/MyProducts";
import ProductCheckout from "./Pages/ProductPage/ProductCheckout";
import ProductDetail from "./Pages/ProductPage/ProductDetail";
import Products from "./Pages/ProductPage/Products";
import RestockProducts from "./Pages/ProductPage/RestockProducts";
import Footer from "./Pages/SharedPage/Footer";
import Header from "./Pages/SharedPage/Header";
import NotFound from "./Pages/SharedPage/NotFound";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>

        <Route path="/product/:productId" element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
            {/* <RestockProducts></RestockProducts> */}
          </RequireAuth>}></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>

        <Route path="/addProducts" element={
          <RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>}></Route>

        <Route path="/manageProducts" element={<ManageProducts></ManageProducts>}></Route>
        <Route path="/myProducts" element={<MyProducts></MyProducts>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
