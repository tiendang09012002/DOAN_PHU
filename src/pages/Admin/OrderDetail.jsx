import Menu from "../../shared/Menu";

const OrderDetail = () => {
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
              <p
                className="col-lg-8 col-md-8 col-sm-12"
                style={{ marginTop: "10px" }}
              >
                Danh sách đơn đặt hàng / <b style={{ color: "red" }}>Stt 07</b>
              </p>
              <h4>Thông tin đơn hàng</h4>
              <div class="table-order-detail col-lg-12 col-md-12 col-sm-12">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="">Đơn hàng:</label>
                      </td>
                      <td className="content-info">
                        <p>20241103MSFAIQEFASFJ3KVNX</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Ngày đặt hàng:</label>
                      </td>
                      <td className="content-info">
                        <p>03/11/2024</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Họ tên khách hàng:</label>
                      </td>
                      <td className="content-info">
                        <p>Anh \ Đặng Xuân Tiến</p>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label htmlFor="">Số điện thoại:</label>
                      </td>
                      <td className="content-info">
                        <p>0912 345 678</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Địa chỉ giao hàng:</label>
                      </td>
                      <td className="content-info">
                        <p>96 Định Công, Phương Liệt, Thanh Xuân, Hà Nội</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Hình thức giao hàng:</label>
                      </td>
                      <td className="content-info">
                        <p>Giao tận nơi</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="">Ghi chú giao hàng:</label>
                      </td>
                      <td className="content-info">
                        <p>
                          Giao vào giờ hành chính cho mình, nếu không mình không
                          nhận được vào ngoài giờ hành chính tại địa chỉ này
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="order-detail">
                <div className="item-cart">
                  <div className="delete-item">
                    <a href="./detail-product">
                      <img
                        className="image-laptop"
                        src="../../../public/images/image (15).png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="info-laptop">
                    <p className="name-laptop">
                      Laptop Lenovo Gaming LOQ 15IAX9
                    </p>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className="config-laptop"
                    >
                      <div
                        style={{ display: "flex", width: "230px" }}
                        className="config-laptop-1"
                      >
                        <span className="cpu-laptop info-detail">
                          i5 12450HX
                        </span>
                        <span className="card-laptop info-detail">
                          RTX 3050 6GB
                        </span>
                      </div>
                      <div
                        style={{ display: "flex", width: "200px" }}
                        className="config-laptop-2"
                      >
                        <span className="ram-laptop info-detail">Ram 16GB</span>
                        <span className="disk-laptop info-detail">
                          SSD 512GB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="price-item">
                    <div className="price">
                      <p className="price-reduced">21.690.000đ</p>
                      <div
                        id="quantity"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <label htmlFor="quantity">Số lượng: 2</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-cart">
                  <div className="delete-item">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="../../../public/images/image (16).png"
                        alt
                      />
                    </a>
                  </div>
                  <div className="info-laptop">
                    <p className="name-laptop">
                      Laptop Lenovo Gaming LOQ 15IAX9
                    </p>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className="config-laptop"
                    >
                      <div
                        style={{ display: "flex", width: "230px" }}
                        className="config-laptop-1"
                      >
                        <span className="cpu-laptop info-detail">
                          i5 12450HX
                        </span>
                        <span className="card-laptop info-detail">
                          RTX 3050 6GB
                        </span>
                      </div>
                      <div
                        style={{ display: "flex", width: "200px" }}
                        className="config-laptop-2"
                      >
                        <span className="ram-laptop info-detail">Ram 16GB</span>
                        <span className="disk-laptop info-detail">
                          SSD 512GB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="price-item">
                    <div className="price">
                      <p className="price-reduced">21.690.000đ</p>
                      <div
                        id="quantity"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <label htmlFor="quantity">Số lượng: 1</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="total-price">
                    <p>
                      Tổng tiền: <span>38.980.000₫</span>
                    </p>
                    <div
                      style={{ display: "flex", float: "right", gap: "5px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 26 24"
                        fill="none"
                      >
                        <path
                          d="M20.8 5.26753H5.2V0H20.8V5.26753ZM20.8 12.5104C21.1683 12.5104 21.4773 12.384 21.7269 12.1311C21.9765 11.8783 22.1009 11.5657 22.1 11.1935C22.0991 10.8213 21.9743 10.5087 21.7256 10.2559C21.4769 10.003 21.1683 9.87662 20.8 9.87662C20.4317 9.87662 20.1231 10.003 19.8744 10.2559C19.6257 10.5087 19.5009 10.8213 19.5 11.1935C19.4991 11.5657 19.6239 11.8787 19.8744 12.1324C20.1249 12.3862 20.4334 12.5121 20.8 12.5104ZM18.2 21.0701V15.8026H7.8V21.0701H18.2ZM20.8 23.7039H5.2V18.4364H0V10.5351C0 9.41571 0.379167 8.47765 1.1375 7.72088C1.89583 6.96412 2.81667 6.58529 3.9 6.58441H22.1C23.205 6.58441 24.1315 6.96324 24.8794 7.72088C25.6273 8.47853 26.0009 9.41659 26 10.5351V18.4364H20.8V23.7039Z"
                          fill="#E82F35"
                        />
                      </svg>
                      <p>In hóa đơn</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-order">
                <button
                  style={{
                    border: "none",
                    borderRadius: "6px",
                    background: "#E82F35",
                    width: "395px",
                    padding: "2px 12px",
                  }}
                >
                  <p style={{ color: "#FFF", fontSize: "24px" }}>
                    Xác nhận đơn hàng
                  </p>
                  <p
                    style={{
                      color: "#FFF",
                      marginTop: "-13px",
                      marginBottom: "0px",
                    }}
                  >
                    {" "}
                    Liên hệ xác nhận trước đơn hàng với khách hàng
                  </p>
                </button>
                <button
                  style={{
                    border: "1px solid #E82F35",
                    borderRadius: "6px",
                    background: "#FFF",
                    width: "395px",
                    padding: "2px 12px",
                    height:"50px",
                    fontSize:"24px",
                    color: "#E82F35",
            
                  }}
                >
                  
                    Hủy đơn hàng
                  
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

export default OrderDetail;
