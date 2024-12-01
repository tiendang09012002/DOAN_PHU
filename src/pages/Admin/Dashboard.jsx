const Dashboard = () => {
  return (
    <>
      {/*    Header    */}
      <h2 id="title">HỆ THỐNG QUẢN TRỊ WEBSITE</h2>
      {/*	Body	*/}
      <div id="body">
        <div className="container">
          <div className="row">
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
                  <a href="/" className="list-group-item-action">
                    Quản lý Admin
                  </a>
                  <a href="/admin/configs" className="list-group-item">
                    Thông tin trang web
                  </a>
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
                  <a href="/admin/categories" className="list-group-item">
                    Danh mục laptop
                  </a>
                  <a href="/admin/brands" className="list-group-item">
                    Danh mục hãng
                  </a>
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
                  <a href="/admin/products" className="list-group-item">
                    Danh sách sản phẩm
                  </a>
                  <a href="/admin/add-product" className="list-group-item">
                    Thêm mới sản phẩm
                  </a>
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
                  <a href="/admin/orders" className="list-group-item">
                    Danh sách đơn đặt hàng
                  </a>
                </div>
              </div>
            </div>
            <div className="main col-lg-8 col-md-8 col-sm-12">
              <h4>Danh sách quản trị viên</h4>
              <div className="main-item">
                <div className="form-add col-lg-4 col-md-8 col-sm-12">
                  <h5>Thêm mới tài khoản</h5>
                  <input type="text" placeholder="Nhập tài khoản" />
                  <input type="text" placeholder="Nhập mật khẩu" />
                  <button>Thêm mới</button>
                </div>
                <div className="list-user col-lg-8 col-md-8 col-sm-12">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên đăng nhập</th>
                        <th>Mật khẩu</th>
                        <th>Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><input id="edit-info" type="text" placeholder="kythuat_02" /></td>
                        <td>abcdefg</td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="27"
                            viewBox="0 0 26 27"
                            fill="none"
                          >
                            <path
                              d="M13 0.5C5.81912 0.5 0 6.32075 0 13.5C0 20.6793 5.81912 26.5 13 26.5C20.1809 26.5 26 20.6793 26 13.5C26 6.32075 20.1809 0.5 13 0.5ZM19.0239 17.2261C19.3286 17.5308 19.4998 17.9441 19.4998 18.375C19.4998 18.8059 19.3286 19.2192 19.0239 19.5239C18.7192 19.8286 18.3059 19.9998 17.875 19.9998C17.4441 19.9998 17.0308 19.8286 16.7261 19.5239L13 15.7977L9.27387 19.5239C9.12331 19.6753 8.9443 19.7955 8.74714 19.8775C8.54997 19.9595 8.33854 20.0017 8.125 20.0017C7.91146 20.0017 7.70003 19.9595 7.50286 19.8775C7.3057 19.7955 7.12669 19.6753 6.97613 19.5239C6.67148 19.2191 6.50035 18.8059 6.50035 18.375C6.50035 17.9441 6.67148 17.5309 6.97613 17.2261L10.7023 13.5L6.97613 9.77387C6.67142 9.46917 6.50025 9.05591 6.50025 8.625C6.50025 8.19409 6.67142 7.78083 6.97613 7.47613C7.28083 7.17142 7.69409 7.00025 8.125 7.00025C8.55591 7.00025 8.96917 7.17142 9.27387 7.47613L13 11.2023L16.7261 7.47613C17.0308 7.17142 17.4441 7.00025 17.875 7.00025C18.3059 7.00025 18.7192 7.17142 19.0239 7.47613C19.3286 7.78083 19.4998 8.19409 19.4998 8.625C19.4998 9.05591 19.3286 9.46917 19.0239 9.77387L15.2977 13.5L19.0239 17.2261Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>kythuat_03</td>
                        <td>abcdefg</td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="27"
                            viewBox="0 0 26 27"
                            fill="none"
                          >
                            <path
                              d="M13 0.5C5.81912 0.5 0 6.32075 0 13.5C0 20.6793 5.81912 26.5 13 26.5C20.1809 26.5 26 20.6793 26 13.5C26 6.32075 20.1809 0.5 13 0.5ZM19.0239 17.2261C19.3286 17.5308 19.4998 17.9441 19.4998 18.375C19.4998 18.8059 19.3286 19.2192 19.0239 19.5239C18.7192 19.8286 18.3059 19.9998 17.875 19.9998C17.4441 19.9998 17.0308 19.8286 16.7261 19.5239L13 15.7977L9.27387 19.5239C9.12331 19.6753 8.9443 19.7955 8.74714 19.8775C8.54997 19.9595 8.33854 20.0017 8.125 20.0017C7.91146 20.0017 7.70003 19.9595 7.50286 19.8775C7.3057 19.7955 7.12669 19.6753 6.97613 19.5239C6.67148 19.2191 6.50035 18.8059 6.50035 18.375C6.50035 17.9441 6.67148 17.5309 6.97613 17.2261L10.7023 13.5L6.97613 9.77387C6.67142 9.46917 6.50025 9.05591 6.50025 8.625C6.50025 8.19409 6.67142 7.78083 6.97613 7.47613C7.28083 7.17142 7.69409 7.00025 8.125 7.00025C8.55591 7.00025 8.96917 7.17142 9.27387 7.47613L13 11.2023L16.7261 7.47613C17.0308 7.17142 17.4441 7.00025 17.875 7.00025C18.3059 7.00025 18.7192 7.17142 19.0239 7.47613C19.3286 7.78083 19.4998 8.19409 19.4998 8.625C19.4998 9.05591 19.3286 9.46917 19.0239 9.77387L15.2977 13.5L19.0239 17.2261Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>kythuat_04</td>
                        <td>abcdefg</td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="27"
                            viewBox="0 0 26 27"
                            fill="none"
                          >
                            <path
                              d="M13 0.5C5.81912 0.5 0 6.32075 0 13.5C0 20.6793 5.81912 26.5 13 26.5C20.1809 26.5 26 20.6793 26 13.5C26 6.32075 20.1809 0.5 13 0.5ZM19.0239 17.2261C19.3286 17.5308 19.4998 17.9441 19.4998 18.375C19.4998 18.8059 19.3286 19.2192 19.0239 19.5239C18.7192 19.8286 18.3059 19.9998 17.875 19.9998C17.4441 19.9998 17.0308 19.8286 16.7261 19.5239L13 15.7977L9.27387 19.5239C9.12331 19.6753 8.9443 19.7955 8.74714 19.8775C8.54997 19.9595 8.33854 20.0017 8.125 20.0017C7.91146 20.0017 7.70003 19.9595 7.50286 19.8775C7.3057 19.7955 7.12669 19.6753 6.97613 19.5239C6.67148 19.2191 6.50035 18.8059 6.50035 18.375C6.50035 17.9441 6.67148 17.5309 6.97613 17.2261L10.7023 13.5L6.97613 9.77387C6.67142 9.46917 6.50025 9.05591 6.50025 8.625C6.50025 8.19409 6.67142 7.78083 6.97613 7.47613C7.28083 7.17142 7.69409 7.00025 8.125 7.00025C8.55591 7.00025 8.96917 7.17142 9.27387 7.47613L13 11.2023L16.7261 7.47613C17.0308 7.17142 17.4441 7.00025 17.875 7.00025C18.3059 7.00025 18.7192 7.17142 19.0239 7.47613C19.3286 7.78083 19.4998 8.19409 19.4998 8.625C19.4998 9.05591 19.3286 9.46917 19.0239 9.77387L15.2977 13.5L19.0239 17.2261Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>kythuat_05</td>
                        <td>abcdefg</td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="27"
                            viewBox="0 0 26 27"
                            fill="none"
                          >
                            <path
                              d="M13 0.5C5.81912 0.5 0 6.32075 0 13.5C0 20.6793 5.81912 26.5 13 26.5C20.1809 26.5 26 20.6793 26 13.5C26 6.32075 20.1809 0.5 13 0.5ZM19.0239 17.2261C19.3286 17.5308 19.4998 17.9441 19.4998 18.375C19.4998 18.8059 19.3286 19.2192 19.0239 19.5239C18.7192 19.8286 18.3059 19.9998 17.875 19.9998C17.4441 19.9998 17.0308 19.8286 16.7261 19.5239L13 15.7977L9.27387 19.5239C9.12331 19.6753 8.9443 19.7955 8.74714 19.8775C8.54997 19.9595 8.33854 20.0017 8.125 20.0017C7.91146 20.0017 7.70003 19.9595 7.50286 19.8775C7.3057 19.7955 7.12669 19.6753 6.97613 19.5239C6.67148 19.2191 6.50035 18.8059 6.50035 18.375C6.50035 17.9441 6.67148 17.5309 6.97613 17.2261L10.7023 13.5L6.97613 9.77387C6.67142 9.46917 6.50025 9.05591 6.50025 8.625C6.50025 8.19409 6.67142 7.78083 6.97613 7.47613C7.28083 7.17142 7.69409 7.00025 8.125 7.00025C8.55591 7.00025 8.96917 7.17142 9.27387 7.47613L13 11.2023L16.7261 7.47613C17.0308 7.17142 17.4441 7.00025 17.875 7.00025C18.3059 7.00025 18.7192 7.17142 19.0239 7.47613C19.3286 7.78083 19.4998 8.19409 19.4998 8.625C19.4998 9.05591 19.3286 9.46917 19.0239 9.77387L15.2977 13.5L19.0239 17.2261Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button>Cập nhật</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*	End Body	*/}
    </>
  );
};

export default Dashboard;
