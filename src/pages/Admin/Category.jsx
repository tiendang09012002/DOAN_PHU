import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

const Category = () => {
  return (
    <>
      {/*    Header    */}
      <h2 id="title">HỆ THỐNG QUẢN TRỊ WEBSITE</h2>
      {/*	Body	*/}
      <div id="body">
        <div className="container contaier-admin">
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
                <div className="collapse" id="admin-menu">
                  <a href="#" className="list-group-item-action">
                    Quản lý Admin
                  </a>
                  <a href="#" className="list-group-item">
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
                <div className="collapse" id="product-category-menu">
                  <a href="#" className="list-group-item">
                    Danh mục laptop
                  </a>
                  <a href="#" className="list-group-item">
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
                <div className="collapse" id="product-post-menu">
                  <a href="#" className="list-group-item">
                    Danh sách sản phẩm
                  </a>
                  <a href="#" className="list-group-item">
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
                <div className="collapse" id="order-menu">
                  <a href="#" className="list-group-item">
                    Danh sách đơn đặt hàng
                  </a>
                </div>
              </div>
            </div>
            <div className="main col-lg-8 col-md-8 col-sm-12">
              <h4>Danh mục laptop</h4>
              <div className="config col-lg-12 col-md-12 col-sm-12">
                <table className="table table-configs">
                  <tbody>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Tên danh mục</label>
                      </td>
                      <td>
                        <input
                          style={{ width: "300px", marginTop: "5px" }}
                          type="text"
                          name=""
                          id=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Ảnh biểu tượng</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <span>Kích thước khuyến nghị 150x44px</span>
                        <div
                          style={{
                            width: "174px",
                            height: "77px",
                            background: "#F3F3F3",
                            marginTop: "10px",
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Ảnh banner</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <span>Kích thước khuyến nghị 1370x171px</span>
                        <div
                          style={{
                            width: "695px",
                            height: "88px",
                            background: "#F3F3F3",
                            marginTop: "10px",
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="">Thẻ title</label>
                      </td>
                      <td>
                        <input type="text" name="" id="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  style={{
                    borderRadius: "3px",
                    background: "rgba(48, 48, 48, 0.30)",
                    display: "flex",
                    width: "112px",
                    height: "35px",
                    padding: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    marginLeft: "30%",
                    marginBottom: "80px",
                    marginTop: "50px",
                    color: "#FFF",
                    border: "none",
                  }}
                >
                  Thêm mới
                </button>
                <p>Danh sách danh mục laptop</p>
                <div className="list-category col-lg-12 col-md-12 col-sm-12">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th style={{ width: "200px" }}>Tên danh mục</th>
                        <th>Ảnh banner</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                      <tr>
                        <td>
                          <p>1</p>
                        </td>
                        <td>
                          <p style={{ marginLeft: "25px" }}>Laptop văn phòng</p>
                        </td>
                        <td>
                          <button
                            style={{
                              borderRadius: "3px",
                              padding: "3px",
                              marginRight: "5px",
                              marginLeft: "50px",
                            }}
                          >
                            Chọn tệp
                          </button>
                          <span style={{ color: "#000" }}>
                            Kích thước khuyến nghị 150x44px
                          </span>
                          <img
                            style={{
                              width: "400px",
                              marginLeft: "50px",
                              marginTop: "10px",
                            }}
                            src="../../../public/images/image (24).png"
                            alt=""
                          />
                        </td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              d="M13 0C5.81912 0 0 5.82075 0 13C0 20.1793 5.81912 26 13 26C20.1809 26 26 20.1793 26 13C26 5.82075 20.1809 0 13 0ZM19.0239 16.7261C19.3286 17.0308 19.4998 17.4441 19.4998 17.875C19.4998 18.3059 19.3286 18.7192 19.0239 19.0239C18.7192 19.3286 18.3059 19.4998 17.875 19.4998C17.4441 19.4998 17.0308 19.3286 16.7261 19.0239L13 15.2977L9.27387 19.0239C9.12331 19.1753 8.9443 19.2955 8.74714 19.3775C8.54997 19.4595 8.33854 19.5017 8.125 19.5017C7.91146 19.5017 7.70003 19.4595 7.50286 19.3775C7.3057 19.2955 7.12669 19.1753 6.97613 19.0239C6.67148 18.7191 6.50035 18.3059 6.50035 17.875C6.50035 17.4441 6.67148 17.0309 6.97613 16.7261L10.7023 13L6.97613 9.27387C6.67142 8.96917 6.50025 8.55591 6.50025 8.125C6.50025 7.69409 6.67142 7.28083 6.97613 6.97613C7.28083 6.67142 7.69409 6.50025 8.125 6.50025C8.55591 6.50025 8.96917 6.67142 9.27387 6.97613L13 10.7023L16.7261 6.97613C17.0308 6.67142 17.4441 6.50025 17.875 6.50025C18.3059 6.50025 18.7192 6.67142 19.0239 6.97613C19.3286 7.28083 19.4998 7.69409 19.4998 8.125C19.4998 8.55591 19.3286 8.96917 19.0239 9.27387L15.2977 13L19.0239 16.7261Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>2</p>
                        </td>
                        <td>
                          <input style={{marginLeft:"25px", width:"150px"}} type="text" placeholder="Laptop" name="" id="" />
                        </td>
                        <td>
                          <button
                            style={{
                              borderRadius: "3px",
                              padding: "3px",
                              marginRight: "5px",
                              marginLeft: "50px",
                            }}
                          >
                            Chọn tệp
                          </button>
                          <span style={{ color: "#000" }}>
                            Kích thước khuyến nghị 150x44px
                          </span>
                          <img
                            style={{
                              width: "400px",
                              marginLeft: "50px",
                              marginTop: "10px",
                            }}
                            src="../../../public/images/image (25).png"
                            alt=""
                          />
                        </td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              d="M13 0C5.81912 0 0 5.82075 0 13C0 20.1793 5.81912 26 13 26C20.1809 26 26 20.1793 26 13C26 5.82075 20.1809 0 13 0ZM19.0239 16.7261C19.3286 17.0308 19.4998 17.4441 19.4998 17.875C19.4998 18.3059 19.3286 18.7192 19.0239 19.0239C18.7192 19.3286 18.3059 19.4998 17.875 19.4998C17.4441 19.4998 17.0308 19.3286 16.7261 19.0239L13 15.2977L9.27387 19.0239C9.12331 19.1753 8.9443 19.2955 8.74714 19.3775C8.54997 19.4595 8.33854 19.5017 8.125 19.5017C7.91146 19.5017 7.70003 19.4595 7.50286 19.3775C7.3057 19.2955 7.12669 19.1753 6.97613 19.0239C6.67148 18.7191 6.50035 18.3059 6.50035 17.875C6.50035 17.4441 6.67148 17.0309 6.97613 16.7261L10.7023 13L6.97613 9.27387C6.67142 8.96917 6.50025 8.55591 6.50025 8.125C6.50025 7.69409 6.67142 7.28083 6.97613 6.97613C7.28083 6.67142 7.69409 6.50025 8.125 6.50025C8.55591 6.50025 8.96917 6.67142 9.27387 6.97613L13 10.7023L16.7261 6.97613C17.0308 6.67142 17.4441 6.50025 17.875 6.50025C18.3059 6.50025 18.7192 6.67142 19.0239 6.97613C19.3286 7.28083 19.4998 7.69409 19.4998 8.125C19.4998 8.55591 19.3286 8.96917 19.0239 9.27387L15.2977 13L19.0239 16.7261Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>3</p>
                        </td>
                        <td>
                          <p style={{ marginLeft: "25px" }}>Laptop đồ hoạ</p>
                        </td>
                        <td>
                          <button
                            style={{
                              borderRadius: "3px",
                              padding: "3px",
                              marginRight: "5px",
                              marginLeft: "50px",
                            }}
                          >
                            Chọn tệp
                          </button>
                          <span style={{ color: "#000" }}>
                            Kích thước khuyến nghị 150x44px
                          </span>
                          <img
                            style={{
                              width: "400px",
                              marginLeft: "50px",
                              marginTop: "10px",
                            }}
                            src="../../../public/images/image (26).png"
                            alt=""
                          />
                        </td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              d="M13 0C5.81912 0 0 5.82075 0 13C0 20.1793 5.81912 26 13 26C20.1809 26 26 20.1793 26 13C26 5.82075 20.1809 0 13 0ZM19.0239 16.7261C19.3286 17.0308 19.4998 17.4441 19.4998 17.875C19.4998 18.3059 19.3286 18.7192 19.0239 19.0239C18.7192 19.3286 18.3059 19.4998 17.875 19.4998C17.4441 19.4998 17.0308 19.3286 16.7261 19.0239L13 15.2977L9.27387 19.0239C9.12331 19.1753 8.9443 19.2955 8.74714 19.3775C8.54997 19.4595 8.33854 19.5017 8.125 19.5017C7.91146 19.5017 7.70003 19.4595 7.50286 19.3775C7.3057 19.2955 7.12669 19.1753 6.97613 19.0239C6.67148 18.7191 6.50035 18.3059 6.50035 17.875C6.50035 17.4441 6.67148 17.0309 6.97613 16.7261L10.7023 13L6.97613 9.27387C6.67142 8.96917 6.50025 8.55591 6.50025 8.125C6.50025 7.69409 6.67142 7.28083 6.97613 6.97613C7.28083 6.67142 7.69409 6.50025 8.125 6.50025C8.55591 6.50025 8.96917 6.67142 9.27387 6.97613L13 10.7023L16.7261 6.97613C17.0308 6.67142 17.4441 6.50025 17.875 6.50025C18.3059 6.50025 18.7192 6.67142 19.0239 6.97613C19.3286 7.28083 19.4998 7.69409 19.4998 8.125C19.4998 8.55591 19.3286 8.96917 19.0239 9.27387L15.2977 13L19.0239 16.7261Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </td>
                      </tr>
                            
                    </tbody>
                  </table>
                </div>
                <button
                  style={{
                    borderRadius: "3px",
                    background: "rgba(48, 48, 48, 0.30)",
                    display: "flex",
                    width: "112px",
                    height: "35px",
                    padding: "6px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    marginLeft: "44%",
                    marginBottom: "80px",
                    marginTop: "50px",
                    color: "#FFF",
                    border: "none",
                  }}
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*	End Body	*/}
    </>
  );
};

export default Category;