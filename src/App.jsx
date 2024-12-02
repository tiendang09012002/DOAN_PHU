import { useState } from "react";
import "./App.css";
import Home from "./pages/User/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import DetailProduct from "./pages/User/DetailProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListLaptop from "./pages/User/ListLaptop";
import Contact from "./pages/User/Contact";
import Introduce from "./pages/User/Introduce";
import CategoryBrand from "./pages/User/CategoryBrand";
import Cart from "./pages/User/Cart";
import BuyNow from "./pages/User/BuyNow";
import DetailOrder from "./pages/User/DetailOrder";
import OrderSuccess from "./pages/User/OrderSuccess";
import OrderCancel from "./pages/User/OrderCancel";
import Compare from "./pages/User/CompareProduct";
import Dashboard from "./pages/Admin/Dashboard";
import Product from "./pages/Admin/Product";
import Config from "./pages/Admin/Config";
import Category from "./pages/Admin/Category";
import Brand from "./pages/Admin/Brand";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import Order from "./pages/Admin/Order";
import OrderDetail from "./pages/Admin/OrderDetail";
import ListLaptopOffice from "./pages/User/ListLaptopOffice";
import ListLaptopGraphic from "./pages/User/ListLaptopGraphic";
import CategoryBrand1 from "./pages/User/CategoryBrand1";
import CategoryBrand2 from "./pages/User/CategoryBrand2";
import CategoryBrand3 from "./pages/User/CategoryBrand3";
import CategoryBrand4 from "./pages/User/CategoryBrand4";
function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  return (
    <>
      <BrowserRouter>
        {currentUser && currentUser.role === 0 ? (
          <>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product-detail" element={<DetailProduct />} />
              <Route path="/list-product" element={<ListLaptop />} />
              <Route path="/list-product-office" element={<ListLaptopOffice />} />
              <Route path="/list-product-graphic" element={<ListLaptopGraphic />} />
              <Route path="/category-brand-lenovo" element={<CategoryBrand />} />
              <Route path="/category-brand-dell" element={<CategoryBrand3 />} />
              <Route path="/category-brand-hp" element={<CategoryBrand4 />} />
              <Route path="/category-brand-asus" element={<CategoryBrand1 />} />
              <Route path="/category-brand-acer" element={<CategoryBrand2 />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/order-status" element={<OrderSuccess />} />
              <Route path="/order-cancel" element={<OrderCancel />} />
              <Route path="/buy-now" element={<BuyNow />} />
              <Route path="/detail-order" element={<DetailOrder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/introduce" element={<Introduce />} />
              <Route path="/compare-product" element={<Compare />} />
              {/*Admin*/}
            </Routes>
            <Footer></Footer>
          </>
        ) : currentUser && currentUser.role === 1 ? (
          // Giao diện cho Admin
          <>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin/products" element={<Product />} />
              <Route path="/admin/configs" element={<Config />} />
              <Route path="/admin/categories" element={<Category />} />
              <Route path="/admin/brands" element={<Brand />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/admin/edit-product" element={<EditProduct />} />
              <Route path="/admin/orders" element={<Order />} />
              <Route path="/admin/order-detail" element={<OrderDetail />} />

            </Routes>
          </>
        ) : (
          // Giao diện khi chưa đăng nhập
          <>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product-detail" element={<DetailProduct />} />
              <Route path="/list-product" element={<ListLaptop />} />
              <Route path="/list-product-office" element={<ListLaptopOffice />} />
              <Route path="/list-product-graphic" element={<ListLaptopGraphic />} />
              <Route path="/category-brand" element={<CategoryBrand />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-status" element={<OrderSuccess />} />
              <Route path="/order-cancel" element={<OrderCancel />} />
              <Route path="/buy-now" element={<BuyNow />} />
              <Route path="/detail-order" element={<DetailOrder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/introduce" element={<Introduce />} />
              <Route path="/compare-product" element={<Compare />} />
              {/*Admin*/}
            </Routes>
            <Footer></Footer>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
