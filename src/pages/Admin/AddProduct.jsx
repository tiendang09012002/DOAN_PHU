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

const AddProduct = () => {
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
              <h4>Thêm mới sản phẩm</h4>
              <div className="config col-lg-12 col-md-12 col-sm-12">
                <table class="table table-configs">
                  <tbody>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Danh mục laptop</label>
                      </td>
                      <td style={{ display: "flex", gap: "20px" }}>
                        <select id="">
                          <option value=""></option>
                          <option value="1">Laptop gaming</option>
                          <option value="2">Laptop văn phòng</option>
                        </select>
                        <label style={{ marginTop: "5px" }} htmlFor="logo">
                          Danh mục hãng
                        </label>
                        <select id="" style={{ width: "150px" }}>
                          <option value=""></option>
                          <option value="1">Dell</option>
                          <option value="2">Acer</option>
                          <option value="1">MSI</option>
                          <option value="2">Lenovo</option>
                          <option value="1">Asus</option>
                          <option value="2">HP</option>
                        </select>
                        <input
                          type="checkbox"
                          style={{ width: "20px" }}
                          name=""
                          id=""
                        />
                        <label
                          style={{ marginLeft: "-15px", marginTop: "5px" }}
                          htmlFor=""
                        >
                          Sản phẩm hot
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Tiêu đề</label>
                      </td>
                      <td>
                        <input type="text" name="" id="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Thẻ tiêu đề</label>
                      </td>
                      <td>
                        <input type="text" name="" id="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="">Thông tin ngắn về sản phẩm</label>
                      </td>
                      <td>
                        <textarea
                          style={{ width: "97%", height: "100px" }}
                          name=""
                          id=""
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="">Ảnh sản phẩm</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <ul>
                          <li>
                            Chọn ảnh dạng (jpg, jpeg, png, gif) dưới 4MB, chọn 2
                            ảnh
                          </li>
                          <li>Ảnh đầu tiên sẽ là ảnh đại diện</li>
                        </ul>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <img
                            className=""
                            src="../../../public/images/image (27).png"
                            alt=""
                          />
                          <img
                            className=""
                            src="../../../public/images/image (28).png"
                            alt=""
                          />
                          <img
                            className=""
                            src="../../../public/images/image (29).png"
                            alt=""
                          />
                          <img
                            className=""
                            src="../../../public/images/image (30).png"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="">Ảnh hóa đơn mua bán SP</label>
                      </td>
                      <td>
                        <button>Chọn tệp</button>
                        <ul>
                          <li>
                            Chọn ảnh dạng (jpg, jpeg, png, gif) dưới 4MB, chọn 2
                            ảnh
                          </li>
                        </ul>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <img
                            className=""
                            src="../../../public/images/hoadon.png"
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Tình trạng cũ</label>
                      </td>
                      <td style={{ display: "flex", gap: "20px" }}>
                        <input
                          style={{ width: "150px" }}
                          type="text"
                          name=""
                          id=""
                        />
                        <label style={{ marginTop: "5px" }} htmlFor="logo">
                          Màu sắc
                        </label>
                        <input
                          style={{ width: "150px" }}
                          type="text"
                          name=""
                          id=""
                        />
                        <label style={{ marginTop: "5px" }} htmlFor="logo">
                          Số lượng tồn kho
                        </label>
                        <input
                          style={{ width: "100px" }}
                          type="text"
                          name=""
                          id=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="title">
                        <label htmlFor="logo">Giá bán</label>
                      </td>
                      <td style={{ display: "flex", gap: "20px" }}>
                        <input
                          style={{ width: "150px" }}
                          type="text"
                          name=""
                          id=""
                        />
                        <label style={{ marginTop: "5px" }} htmlFor="logo">
                          Giá gốc
                        </label>
                        <input
                          style={{ width: "150px" }}
                          type="text"
                          name=""
                          id=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Số option cấu hình</label>
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                            padding: "20px",
                            border: "1px solid #A8A8A8",
                            borderRadius: "6px",
                          }}
                        >
                          <div>
                            <div>
                              <p>Cấu hình 1</p>
                              <input
                                style={{ width: "150px", height: "70px" }}
                                type="text"
                                name=""
                                id=""
                              />
                              <p>Giá bán</p>
                              <input
                                style={{ width: "150px" }}
                                type="text"
                                name=""
                                id=""
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <p>Cấu hình 1</p>
                              <input
                                style={{ width: "150px", height: "70px" }}
                                type="text"
                                name=""
                                id=""
                              />
                              <p>Giá bán</p>
                              <input
                                style={{ width: "150px" }}
                                type="text"
                                name=""
                                id=""
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <p>Cấu hình 1</p>
                              <input
                                style={{ width: "150px", height: "70px" }}
                                type="text"
                                name=""
                                id=""
                              />
                              <p>Giá bán</p>
                              <input
                                style={{ width: "150px" }}
                                type="text"
                                name=""
                                id=""
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              <p>Cấu hình 1</p>
                              <input
                                style={{ width: "150px", height: "70px" }}
                                type="text"
                                name=""
                                id=""
                              />
                              <p>Giá bán</p>
                              <input
                                style={{ width: "150px" }}
                                type="text"
                                name=""
                                id=""
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Thông số cấu hình</label>
                      </td>
                      <td>
                        <div class="info-container">
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="cpu">CPU</label>
                              <input type="text" id="cpu" name="cpu" />
                            </div>
                            <div class="info-detail-add">
                              <label for="wifi">Wifi + Bluetooth</label>
                              <input type="text" id="wifi" name="wifi" />
                            </div>
                          </div>
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="ram">Ram</label>
                              <input type="text" id="ram" name="ram" />
                            </div>
                            <div class="info-detail-add">
                              <label for="webcam">Webcam</label>
                              <input type="text" id="webcam" name="webcam" />
                            </div>
                          </div>
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="disk">Ổ cứng</label>
                              <input type="text" id="disk" name="disk" />
                            </div>
                            <div class="info-detail-add">
                              <label for="os">Hệ điều hành</label>
                              <input type="text" id="os" name="os" />
                            </div>
                          </div>
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="gpu">Card đồ họa</label>
                              <input type="text" id="gpu" name="gpu" />
                            </div>
                            <div class="info-detail-add">
                              <label for="battery">Pin</label>
                              <input type="text" id="battery" name="battery" />
                            </div>
                          </div>
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="screen">Màn hình</label>
                              <input type="text" id="screen" name="screen" />
                            </div>
                            <div class="info-detail-add">
                              <label for="weight">Trọng lượng</label>
                              <input type="text" id="weight" name="weight" />
                            </div>
                          </div>
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="connectivity">Cổng kết nối</label>
                              <input
                                type="text"
                                id="connectivity"
                                name="connectivity"
                              />
                            </div>
                            <div class="info-detail-add">
                              <label for="color">Màu sắc</label>
                              <input type="text" id="color" name="color" />
                            </div>
                          </div>
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="keyboard">Bàn phím</label>
                              <input
                                type="text"
                                id="keyboard"
                                name="keyboard"
                              />
                            </div>
                            <div class="info-detail-add">
                              <label for="size">Kích thước</label>
                              <input type="text" id="size" name="size" />
                            </div>
                          </div>
                          <div class="info-row">
                            <div class="info-detail-add">
                              <label for="audio">Audio</label>
                              <input type="text" id="audio" name="audio" />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Bài viết</label>
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
                        <label>Link Youtube</label>
                      </td>
                      <td>
                        <input type="text" placeholder="URL" />
                        <a
                          style={{
                            marginLeft: "5px",
                            textDecorationLine: "underline",
                          }}
                          href="#"
                        >
                          +Thêm{" "}
                        </a>
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
                  Thêm mới
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

export default AddProduct;
