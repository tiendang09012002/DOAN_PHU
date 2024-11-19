
const DetailOrder = () => {
  return (
    <>
      <div className="container">
        <div id="navigation-bar" style={{ marginBottom: 30 }}>
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.88889 14H1L14 1L27 14H24.1111M3.88889 14V24.1111C3.88889 24.8773 4.19325 25.6121 4.73502 26.1539C5.2768 26.6956 6.0116 27 6.77778 27H21.2222C21.9884 27 22.7232 26.6956 23.265 26.1539C23.8067 25.6121 24.1111 24.8773 24.1111 24.1111V14"
              stroke="#E82F35"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.66675 27V18.3333C9.66675 17.5672 9.97111 16.8324 10.5129 16.2906C11.0547 15.7488 11.7895 15.4444 12.5556 15.4444H15.4445C16.2107 15.4444 16.9455 15.7488 17.4873 16.2906C18.0291 16.8324 18.3334 17.5672 18.3334 18.3333V27"
              stroke="#E82F35"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4>Trang chủ \ Chi tiết đơn hàng</h4>
        </div>
        <div id="body-details-order">
          <div id="main-details">
            <h2>TRẠNG THÁI ĐƠN HÀNG</h2>
            <div className="status-container">
              <div className="status active">
                <div className="circle">✓</div>
                <span>Chờ xác nhận đơn hàng</span>
              </div>
              <div className="status">
                <div className="circle" />
                <span>Đang lấy hàng</span>
              </div>
              <div className="status">
                <div className="circle" />
                <span>Đang giao hàng</span>
              </div>
              <div className="status">
                <div className="circle" />
                <span>Kiểm tra đơn hàng</span>
              </div>
            </div>
            <div className="details">
              <p>
                <span>04/11/2024 12:45</span> - Chờ shop xác nhận đơn hàng
              </p>
              <p>
                <span>04/11/2024 15:23</span> - Xác nhận đơn hàng hợp lệ
              </p>
              <p>
                <span>05/11/2024 08:05</span> - Đơn vị vận chuyển đang lấy hàng
              </p>
            </div>
            <h2>THÔNG TIN ĐƠN HÀNG</h2>
            <div className="home-cart">
              <div className="item-cart">
                <div className="delete-item">
                  <a href="./detail-product.html">
                    <img
                      className="image-laptop"
                      src="./images/image 3.png"
                      alt
                    />
                  </a>
                </div>
                <div className="info-laptop">
                  <p className="name-laptop">Laptop Lenovo Gaming LOQ 15IAX9</p>
                  <div className="config-laptop">
                    <div className="config-laptop-1">
                      <span className="cpu-laptop info-detail">i5 12450HX</span>
                      <span className="card-laptop info-detail">
                        RTX 3050 6GB
                      </span>
                    </div>
                    <div className="config-laptop-2">
                      <span className="ram-laptop info-detail">Ram 16GB</span>
                      <span className="disk-laptop info-detail">SSD 512GB</span>
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
                      <label htmlFor="quantity">Số lượng</label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        <button
                          className="quantity-button"
                          style={{ width: 30 }}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          className="quantity-input"
                          defaultValue={1}
                        />
                        <button
                          className="quantity-button"
                          style={{ width: 30 }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-cart">
                <div className="delete-item">
                  <a href="./detail-product.html">
                    <img
                      className="image-laptop"
                      src="./images/image 3.png"
                      alt
                    />
                  </a>
                </div>
                <div className="info-laptop">
                  <p className="name-laptop">Laptop Lenovo Gaming LOQ 15IAX9</p>
                  <div className="config-laptop">
                    <div className="config-laptop-1">
                      <span className="cpu-laptop info-detail">i5 12450HX</span>
                      <span className="card-laptop info-detail">
                        RTX 3050 6GB
                      </span>
                    </div>
                    <div className="config-laptop-2">
                      <span className="ram-laptop info-detail">Ram 16GB</span>
                      <span className="disk-laptop info-detail">SSD 512GB</span>
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
                      <label htmlFor="quantity">Số lượng</label>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        <button
                          className="quantity-button"
                          style={{ width: 30 }}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          className="quantity-input"
                          defaultValue={1}
                        />
                        <button
                          className="quantity-button"
                          style={{ width: 30 }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="action-cancel">
                  <button className="button-cancel">
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 0C5.81912 0 0 5.82075 0 13C0 20.1793 5.81912 26 13 26C20.1809 26 26 20.1793 26 13C26 5.82075 20.1809 0 13 0ZM19.0239 16.7261C19.3286 17.0308 19.4998 17.4441 19.4998 17.875C19.4998 18.3059 19.3286 18.7192 19.0239 19.0239C18.7192 19.3286 18.3059 19.4998 17.875 19.4998C17.4441 19.4998 17.0308 19.3286 16.7261 19.0239L13 15.2977L9.27387 19.0239C9.12331 19.1753 8.9443 19.2955 8.74714 19.3775C8.54997 19.4595 8.33854 19.5017 8.125 19.5017C7.91146 19.5017 7.70003 19.4595 7.50286 19.3775C7.3057 19.2955 7.12669 19.1753 6.97613 19.0239C6.67148 18.7191 6.50035 18.3059 6.50035 17.875C6.50035 17.4441 6.67148 17.0309 6.97613 16.7261L10.7023 13L6.97613 9.27387C6.67142 8.96917 6.50025 8.55591 6.50025 8.125C6.50025 7.69409 6.67142 7.28083 6.97613 6.97613C7.28083 6.67142 7.69409 6.50025 8.125 6.50025C8.55591 6.50025 8.96917 6.67142 9.27387 6.97613L13 10.7023L16.7261 6.97613C17.0308 6.67142 17.4441 6.50025 17.875 6.50025C18.3059 6.50025 18.7192 6.67142 19.0239 6.97613C19.3286 7.28083 19.4998 7.69409 19.4998 8.125C19.4998 8.55591 19.3286 8.96917 19.0239 9.27387L15.2977 13L19.0239 16.7261Z"
                        fill="#E82F35"
                      />
                    </svg>
                    Hủy đơn hàng
                  </button>
                </div>
                <div className="total-price">
                  <p>
                    Tổng tiền: <span>38.980.000₫</span>
                  </p>
                  <p>
                    Tổng tiền đã thanh toán: <span>38.980.000₫</span>
                  </p>
                  <p>
                    Tổng : <span>0₫</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
