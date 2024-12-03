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
import Menu from "../../shared/Menu";

const Config = () => {
  return (
    <>
      {/*    Header    */}
      <h2 id="title">HỆ THỐNG QUẢN TRỊ WEBSITE</h2>
      {/*	Body	*/}
      <div id="body">
        <div className="container contaier-admin">
          <div className="row">
            <Menu></Menu>
            <div className="main col-lg-8 col-md-8 col-sm-12">
              <h4>Thông tin trang web</h4>
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
                          style={{ height: "200px" }}
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
                            initialData: "",
                            placeholder: "Nhập thông tin liên hệ...",
                            ui: {
                              viewportOffset: {
                                top: 50,
                                right: 50,
                              },
                            },
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Thông tin Footer</label>
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
                            initialData: "",
                            placeholder: "Nhập thông tin liên hệ...",
                            ui: {
                              viewportOffset: {
                                top: 50,
                                right: 50,
                              },
                            },
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Facebook</label>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Zalo</label>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Tiktok</label>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Youtube</label>
                      </td>
                      <td>
                        <input type="text" />
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

export default Config;
