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
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<DetailProduct />} />
          <Route path="/list-product" element={<ListLaptop />} />
          <Route path="/category-brand" element={<CategoryBrand />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-status" element={<OrderSuccess />} />
          <Route path="/order-cancel" element={<OrderCancel />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/detail-order" element={<DetailOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
