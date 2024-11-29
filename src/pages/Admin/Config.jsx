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

const Config = () => {
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
              <h4>Thông tin trang wev</h4>
              <div className="config col-lg-12 col-md-12 col-sm-12">
                <table class="table table-configs">
                  <tbody>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Logo</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <span>Kích thước khuyến nghị 150x44px</span>
                        <img
                          className="logo"
                          src="../../../public/images/Group.png"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo"> Logo Footer</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <span>Kích thước khuyến nghị 238x70px</span>
                        <img
                          className="logo"
                          src="../../../public/images/Group (1).png"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Favicon</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <span>Kích thước khuyến nghị 16x16px</span>
                        <img
                          className="favicon logo"
                          src="../../../public/images/Group (2).png"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="">Ảnh slider</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <ul>
                          <li>Kích thước khuyến nghị 852x426px</li>
                          <li>
                            Chọn ảnh dạng (jpg, jpeg, png, gif) dưới 4MB, tối đa
                            10 ảnh
                          </li>
                          <li>Ảnh đầu tiên sẽ là ảnh đại diện</li>
                        </ul>
                        <div style={{ display: "flex", gap: "16px" }}>
                          <img
                            className=""
                            src="../../../public/images/image (19).png"
                            alt=""
                          />
                          <img
                            className=""
                            src="../../../public/images/image (20).png"
                            alt=""
                          />
                          <img
                            className=""
                            src="../../../public/images/image (21).png"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="">Ảnh banner</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <ul>
                          <li>Kích thước khuyến nghị 508x271px</li>
                          <li>
                            Chọn ảnh dạng (jpg, jpeg, png, gif) dưới 4MB, chọn 2
                            ảnh
                          </li>
                        </ul>
                        <div style={{ display: "flex", gap: "16px" }}>
                          <img
                            className=""
                            src="../../../public/images/image (22).png"
                            alt=""
                          />
                          <img
                            className=""
                            src="../../../public/images/image (23).png"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Thẻ title</label>
                      </td>
                      <td>
                        <p
                          style={{
                            display: "flex",
                            width: "238px",
                            height: "31px",
                            padding: "10px",
                            alignItems: "center",
                            gap: "10px",
                            flexShrink: "0".at,
                            borderRadius: "3px",
                            border: "1px solid rgba(0, 0, 0, 0.27)",
                            marginTop: "-3px",
                          }}
                        >
                          Laptop cũ “ĐẸP-CHẤT”
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Thông tin liên hệ</label>
                      </td>
                      <td>
                        <CKEditor
                          editor={ClassicEditor}
                          config={{
                            toolbar: {
                              items: ["undo", "redo", "|", "bold", "italic"],
                            },
                            plugins: [
                              Bold,
                              Essentials,
                              Italic,
                              Mention,
                              Paragraph,
                              Undo,
                            ],
                            mention: {
                              // Mention configuration
                            },
                            initialData:
                             ""
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*	End Body	*/}
    </>
  );
};

export default Config;
