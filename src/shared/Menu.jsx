import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Menu = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="list-group col-lg-3 col-md-4 col-sm-12">
        <div id="main-menu">
          {/* Quản lý Admin */}
          <a
            href="#admin-menu"
            className="list-group-item list-group-item-action "
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="admin-menu"
          >
            ADMIN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.64816 0.970521C6.83569 0.78305 7.09 0.677734 7.35516 0.677734C7.62033 0.677734 7.87463 0.78305 8.06216 0.970521L13.7192 6.62752C13.9013 6.81612 14.0021 7.06873 13.9998 7.33092C13.9976 7.59312 13.8924 7.84393 13.707 8.02934C13.5216 8.21475 13.2708 8.31992 13.0086 8.3222C12.7464 8.32447 12.4938 8.22368 12.3052 8.04152L7.35516 3.09152L2.40516 8.04152C2.21656 8.22368 1.96396 8.32447 1.70176 8.3222C1.43956 8.31992 1.18875 8.21475 1.00334 8.02934C0.817934 7.84393 0.712765 7.59312 0.710487 7.33092C0.708209 7.06873 0.809003 6.81612 0.991161 6.62752L6.64816 0.970521Z"
                fill="#E82F35"
              />
            </svg>
          </a>
          <div className="show" id="admin-menu">
            <Link
              to="/"
              className={`list-group-item ${
                activeLink === "/" ? "list-group-item-action" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Quản lý Admin
            </Link>
            <Link
              to="/admin/configs"
              className={`list-group-item ${
                activeLink === "/admin/configs" ? "list-group-item-action" : ""
              }`}
              onClick={() => handleLinkClick("/admin/configs")}
            >
              Thông tin trang web
            </Link>
          </div>
          {/* Quản lý Danh mục sản phẩm */}
          <a
            href="#product-category-menu"
            className="list-group-item list-group-item-action "
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="product-category-menu"
          >
            QUẢN LÝ DANH MỤC SẢN PHẨM{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.64816 0.970521C6.83569 0.78305 7.09 0.677734 7.35516 0.677734C7.62033 0.677734 7.87463 0.78305 8.06216 0.970521L13.7192 6.62752C13.9013 6.81612 14.0021 7.06873 13.9998 7.33092C13.9976 7.59312 13.8924 7.84393 13.707 8.02934C13.5216 8.21475 13.2708 8.31992 13.0086 8.3222C12.7464 8.32447 12.4938 8.22368 12.3052 8.04152L7.35516 3.09152L2.40516 8.04152C2.21656 8.22368 1.96396 8.32447 1.70176 8.3222C1.43956 8.31992 1.18875 8.21475 1.00334 8.02934C0.817934 7.84393 0.712765 7.59312 0.710487 7.33092C0.708209 7.06873 0.809003 6.81612 0.991161 6.62752L6.64816 0.970521Z"
                fill="#E82F35"
              />
            </svg>
          </a>
          <div className="show" id="product-category-menu">
          <Link
              to="/admin/categories"
              className={`list-group-item ${
                activeLink === "/admin/categories" ? "list-group-item-action" : ""
              }`}
              onClick={() => handleLinkClick("/admin/categories")}
            >
              Danh mục laptop
            </Link>
            <Link
              to="/admin/brands"
              className={`list-group-item ${
                activeLink === "/admin/brands" ? "list-group-item-action" : ""
              }`}
              onClick={() => handleLinkClick("/admin/brands")}
            >
              Danh mục hãng
            </Link>
          </div>
          {/* Quản lý Bài viết sản phẩm */}
          <a
            href="#product-post-menu"
            className="list-group-item list-group-item-action "
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="product-post-menu"
          >
            QUẢN LÝ BÀI VIẾT SẢN PHẨM{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.64816 0.970521C6.83569 0.78305 7.09 0.677734 7.35516 0.677734C7.62033 0.677734 7.87463 0.78305 8.06216 0.970521L13.7192 6.62752C13.9013 6.81612 14.0021 7.06873 13.9998 7.33092C13.9976 7.59312 13.8924 7.84393 13.707 8.02934C13.5216 8.21475 13.2708 8.31992 13.0086 8.3222C12.7464 8.32447 12.4938 8.22368 12.3052 8.04152L7.35516 3.09152L2.40516 8.04152C2.21656 8.22368 1.96396 8.32447 1.70176 8.3222C1.43956 8.31992 1.18875 8.21475 1.00334 8.02934C0.817934 7.84393 0.712765 7.59312 0.710487 7.33092C0.708209 7.06873 0.809003 6.81612 0.991161 6.62752L6.64816 0.970521Z"
                fill="#E82F35"
              />
            </svg>
          </a>
          <div className="show" id="product-post-menu">
          <Link
              to="/admin/products"
              className={`list-group-item ${
                activeLink === "/admin/products" ? "list-group-item-action" : ""
              }`}
              onClick={() => handleLinkClick("/admin/products")}
            >
              Danh sách sản phẩm
            </Link>
            <Link
              to="/admin/add-product"
              className={`list-group-item ${
                activeLink === "/admin/add-product" ? "list-group-item-action" : ""
              }`}
              onClick={() => handleLinkClick("/admin/add-product")}
            >
              Thêm mới sản phẩm
            </Link>
          </div>
          {/* Quản lý Đơn hàng */}
          <a
            href="#order-menu"
            className="list-group-item list-group-item-action "
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="order-menu"
          >
            QUẢN LÝ ĐƠN HÀNG{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.64816 0.970521C6.83569 0.78305 7.09 0.677734 7.35516 0.677734C7.62033 0.677734 7.87463 0.78305 8.06216 0.970521L13.7192 6.62752C13.9013 6.81612 14.0021 7.06873 13.9998 7.33092C13.9976 7.59312 13.8924 7.84393 13.707 8.02934C13.5216 8.21475 13.2708 8.31992 13.0086 8.3222C12.7464 8.32447 12.4938 8.22368 12.3052 8.04152L7.35516 3.09152L2.40516 8.04152C2.21656 8.22368 1.96396 8.32447 1.70176 8.3222C1.43956 8.31992 1.18875 8.21475 1.00334 8.02934C0.817934 7.84393 0.712765 7.59312 0.710487 7.33092C0.708209 7.06873 0.809003 6.81612 0.991161 6.62752L6.64816 0.970521Z"
                fill="#E82F35"
              />
            </svg>
          </a>
          <div className="show" id="order-menu">
          <Link
              to="/admin/orders"
              className={`list-group-item ${
                activeLink === "/admin/orders" ? "list-group-item-action" : ""
              }`}
              onClick={() => handleLinkClick("/admin/orders")}
            >
              Danh sách đơn hàng
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
