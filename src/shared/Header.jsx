const Header = () => {
  return (
    <>
      <div>
        {/* Button trigger modal */}
        {/* Modal */}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex={-1}
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="form-auth" id="form-login">
                <h2>Đăng nhập</h2>
                <div className="input-group">
                  <input type="text" placeholder="Nhập số điện thoại" />
                </div>
                <div className="input-group" id="input-password">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    id="password"
                  />
                  <i className="fas fa-eye toggle-password" />
                </div>
                <div className="options">
                  <a
                    href="#"
                    id="link-forgot-password"
                    data-toggle="modal"
                    data-target="#forgotPasswordModal"
                  >
                    Quên mật khẩu
                  </a>
                  <span>|</span>
                  <a
                    href="#"
                    id="link-register"
                    data-toggle="modal"
                    data-target="#registerModal"
                  >
                    Không có tài khoản
                  </a>
                </div>
                <div className="social-login">
                  hoặc
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M5.76215 15.7121L4.85712 19.0907L1.54929 19.1607C0.560727 17.3271 0 15.2293 0 13C0 10.8443 0.524266 8.81142 1.45356 7.02144L4.39918 7.56134L5.68923 10.4886C5.41922 11.2757 5.27206 12.1207 5.27206 13C5.27216 13.9543 5.44502 14.8686 5.76215 15.7121Z"
                        fill="#FBBB00"
                      />
                      <path
                        d="M25.7729 10.5714C25.9222 11.3578 26 12.1699 26 13C26 13.9307 25.9021 14.8385 25.7157 15.7143C25.0829 18.6943 23.4293 21.2964 21.1386 23.1378L21.1379 23.1371L17.4286 22.9479L16.9037 19.6707C18.4236 18.7793 19.6115 17.3843 20.2372 15.7143H13.2858V10.5714H25.7729Z"
                        fill="#518EF8"
                      />
                      <path
                        d="M21.1379 23.1371L21.1386 23.1378C18.9108 24.9285 16.0807 26 13 26C8.04929 26 3.74502 23.2328 1.54929 19.1607L5.76215 15.7121C6.85999 18.6421 9.68643 20.7279 13 20.7279C14.4243 20.7279 15.7587 20.3428 16.9037 19.6707L21.1379 23.1371Z"
                        fill="#28B446"
                      />
                      <path
                        d="M21.2979 2.99284L17.0864 6.44069C15.9014 5.69999 14.5007 5.27211 13 5.27211C9.61143 5.27211 6.73207 7.45353 5.68923 10.4886L1.45356 7.02144C3.61715 2.85001 7.97571 0 13 0C16.1543 0 19.0464 1.12359 21.2979 2.99284Z"
                        fill="#F14336"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M26 13C26 19.4888 21.2459 24.8671 15.0312 25.8421V16.7578H18.0604L18.6367 13H15.0312V10.5615C15.0312 9.53316 15.535 8.53125 17.1498 8.53125H18.7891V5.33203C18.7891 5.33203 17.3012 5.07812 15.8788 5.07812C12.9096 5.07812 10.9688 6.87781 10.9688 10.1359V13H7.66797V16.7578H10.9688V25.8421C4.75414 24.8671 0 19.4888 0 13C0 5.82055 5.82055 0 13 0C20.1795 0 26 5.82055 26 13Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M18.0604 16.7578L18.6367 13H15.0312V10.5615C15.0312 9.53316 15.535 8.53125 17.1498 8.53125H18.7891V5.33203C18.7891 5.33203 17.3012 5.07812 15.8788 5.07812C12.9096 5.07812 10.9688 6.87781 10.9688 10.1359V13H7.66797V16.7578H10.9688V25.8421C11.6306 25.9459 12.309 26 13 26C13.691 26 14.3694 25.9459 15.0312 25.8421V16.7578H18.0604Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <button className="login-btn">Đăng nhập</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Register */}
        <div
          className="modal fade"
          id="registerModal"
          tabIndex={-1}
          aria-labelledby="registerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="form-auth" id="form-register">
                <h2>Đăng ký</h2>
                <div className="input-group">
                  <input type="text" placeholder="Nhập số điện thoại" />
                </div>
                <div className="input-group" id="input-password">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    id="password"
                  />
                  <i className="fas fa-eye toggle-password" />
                </div>
                <div className="input-group" id="input-password">
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    id="re-password"
                  />
                  <i className="fas fa-eye toggle-password" />
                </div>
                <button className="register-btn">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
        {/*End Modal Register */}
        {/* Modal Forgot Password */}
        <div
          className="modal fade"
          id="forgotPasswordModal"
          tabIndex={-1}
          aria-labelledby="forgotPasswordModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="form-auth" id="form-forgotPassword">
                <h2>Quên mật khẩu</h2>
                <div className="input-group">
                  <input type="text" placeholder="Nhập số điện thoại" />
                </div>
                <a href="#">Gửi mã xác nhận</a>
                <div className="input-group">
                  <input type="text" placeholder="Nhập mã xác nhận" />
                </div>
                <button className="register-btn">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
        {/*End Modal Forgot Password */}
        {/* Modal compare */}
        <div
          className="modal fade"
          id="compareModal"
          tabIndex={-1}
          aria-labelledby="compareModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content" id="modal-content-compare">
              <div className="header-search">
                <form className="search-form">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button className="btn" type="submit">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.1901 15.4782L23.6458 21.934C23.8727 22.1611 24.0001 22.469 24 22.79C23.9999 23.111 23.8723 23.4189 23.6452 23.6458C23.4181 23.8727 23.1102 24.0001 22.7892 24C22.4682 23.9999 22.1604 23.8723 21.9335 23.6452L15.4778 17.1893C13.5479 18.6841 11.1211 19.3875 8.69104 19.1565C6.26097 18.9255 4.01018 17.7773 2.39656 15.9457C0.782936 14.114 -0.0723147 11.7364 0.00479537 9.29655C0.0819054 6.85668 1.08558 4.53783 2.81165 2.81172C4.53771 1.08561 6.85651 0.0819075 9.29632 0.00479549C11.7361 -0.0723165 14.1137 0.782955 15.9453 2.39662C17.7769 4.01028 18.925 6.26113 19.156 8.69126C19.387 11.1214 18.6836 13.5483 17.1889 15.4782M9.60045 16.7993C11.5099 16.7993 13.3412 16.0408 14.6914 14.6905C16.0416 13.3403 16.8001 11.509 16.8001 9.59949C16.8001 7.68997 16.0416 5.85866 14.6914 4.50843C13.3412 3.15819 11.5099 2.39964 9.60045 2.39964C7.69098 2.39964 5.85971 3.15819 4.50951 4.50843C3.15932 5.85866 2.40078 7.68997 2.40078 9.59949C2.40078 11.509 3.15932 13.3403 4.50951 14.6905C5.85971 16.0408 7.69098 16.7993 9.60045 16.7993Z"
                            fill="#E82F35"
                          />
                        </svg>
                      </button>
                    </div>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Nhập tên laptop để tìm..."
                      aria-label="Search"
                    />
                  </div>
                </form>
              </div>
              <h2>Kết quả tìm kiếm</h2>
              <div className>
                <div className="frame-217">
                  <div className="laptop-item-compare">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-compare">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-compare">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-item-compare">
                    <a href="./detail-product.html">
                      <img
                        className="image-laptop"
                        src="./images/image 3.png"
                        alt
                      />
                    </a>
                    <div className="info-laptop">
                      <p className="name-laptop">
                        Laptop Lenovo Gaming LOQ 15IAX9
                      </p>
                    </div>
                    <div className="price-item">
                      <div className="price">
                        <span className="price-original">24.990.000đ</span>
                        <p className="price-reduced">21.690.000đ</p>
                      </div>
                      <div className="item-action">
                        <button
                          className="btn-compare"
                          data-toggle="modal"
                          data-target="#compareModal"
                        >
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 7.33057H12.5H1.5ZM7 12.8306V1.83057V12.8306Z"
                              fill="#E82F35"
                            />
                            <path
                              d="M1.5 7.33057H12.5M7 12.8306V1.83057"
                              stroke="#E82F35"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          So sánh
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Modal compare */}
        {/*	Header	*/}
        <h4 id="header-top">Uy tín - Tận tâm - Chất lượng</h4>
        <div id="header">
          <div className="container">
            <div className="header-container">
              <div className="header-logo-search">
                <div className="header-logo row">
                  <a href="/">
                    <svg
                      width={149}
                      height={44}
                      viewBox="0 0 149 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.7503 22H56.4903L69.8443 0H48.1043L34.7503 22Z"
                        fill="#E82F35"
                      />
                      <path
                        d="M35.094 22H13.354L0 0H21.74L35.094 22Z"
                        fill="#E82F35"
                      />
                      <path
                        d="M48.4855 44H26.7454L13.3915 22H35.1315L48.4855 44Z"
                        fill="#A91619"
                      />
                      <path
                        d="M93.3778 38.4668L87.2726 43.8419H72.0752L80.7237 29.405H88.3286L82.9358 38.4289L93.3715 38.4605L93.3778 38.4668ZM92.7529 22.0379L89.4909 27.3245H81.9297L85.0354 22.1012L92.7529 22.0379Z"
                        fill="#131111"
                      />
                      <path
                        d="M116.105 43.8482H108.256L108.888 35.2417H104.445L95.4149 43.8482H86.254L102.076 29.3797H117.686L116.111 43.8482H116.105ZM117.886 27.3561H104.37L110.575 22.0379H118.455L117.886 27.3561Z"
                        fill="#131111"
                      />
                      <path
                        d="M147.162 29.4113C146.912 29.9362 146.519 30.5496 145.975 31.2515C143.913 33.8505 140.557 35.1469 135.914 35.1469H128.722L123.523 43.8482H116.361L124.879 29.4429L147.156 29.4113H147.162ZM148.393 27.3245H124.341L129.253 22.0379H146.925C147.406 22.0379 147.843 22.2024 148.237 22.5375C148.631 22.8727 148.868 23.2711 148.943 23.7327C149.106 24.4725 148.918 25.6677 148.393 27.3182V27.3245Z"
                        fill="#131111"
                      />
                      <path
                        d="M68.2571 38.7134L64.9889 44H57.4277L60.5396 38.7767L68.2571 38.7134Z"
                        fill="#A91619"
                      />
                    </svg>
                  </a>
                </div>
                <div className="header-search">
                  <form className="search-form">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button className="btn" type="button">
                          <svg
                            width={24}
                            height={20}
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 1.30435C0 0.958413 0.114935 0.626647 0.31952 0.382034C0.524105 0.137422 0.801582 0 1.09091 0H22.9091C23.1984 0 23.4759 0.137422 23.6805 0.382034C23.8851 0.626647 24 0.958413 24 1.30435C24 1.65028 23.8851 1.98205 23.6805 2.22666C23.4759 2.47127 23.1984 2.6087 22.9091 2.6087H1.09091C0.801582 2.6087 0.524105 2.47127 0.31952 2.22666C0.114935 1.98205 0 1.65028 0 1.30435ZM3.63636 10C3.63636 9.65407 3.7513 9.3223 3.95588 9.07769C4.16047 8.83307 4.43795 8.69565 4.72727 8.69565H19.2727C19.5621 8.69565 19.8395 8.83307 20.0441 9.07769C20.2487 9.3223 20.3636 9.65407 20.3636 10C20.3636 10.3459 20.2487 10.6777 20.0441 10.9223C19.8395 11.1669 19.5621 11.3043 19.2727 11.3043H4.72727C4.43795 11.3043 4.16047 11.1669 3.95588 10.9223C3.7513 10.6777 3.63636 10.3459 3.63636 10ZM8 18.6957C8 18.3497 8.11494 18.018 8.31952 17.7733C8.52411 17.5287 8.80158 17.3913 9.09091 17.3913H14.9091C15.1984 17.3913 15.4759 17.5287 15.6805 17.7733C15.8851 18.018 16 18.3497 16 18.6957C16 19.0416 15.8851 19.3734 15.6805 19.618C15.4759 19.8626 15.1984 20 14.9091 20H9.09091C8.80158 20 8.52411 19.8626 8.31952 19.618C8.11494 19.3734 8 19.0416 8 18.6957Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </button>
                      </div>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Tìm kiếm..."
                        aria-label="Search"
                      />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.1901 15.4782L23.6458 21.934C23.8727 22.1611 24.0001 22.469 24 22.79C23.9999 23.111 23.8723 23.4189 23.6452 23.6458C23.4181 23.8727 23.1102 24.0001 22.7892 24C22.4682 23.9999 22.1604 23.8723 21.9335 23.6452L15.4778 17.1893C13.5479 18.6841 11.1211 19.3875 8.69104 19.1565C6.26097 18.9255 4.01018 17.7773 2.39656 15.9457C0.782936 14.114 -0.0723147 11.7364 0.00479537 9.29655C0.0819054 6.85668 1.08558 4.53783 2.81165 2.81172C4.53771 1.08561 6.85651 0.0819075 9.29632 0.00479549C11.7361 -0.0723165 14.1137 0.782955 15.9453 2.39662C17.7769 4.01028 18.925 6.26113 19.156 8.69126C19.387 11.1214 18.6836 13.5483 17.1889 15.4782M9.60045 16.7993C11.5099 16.7993 13.3412 16.0408 14.6914 14.6905C16.0416 13.3403 16.8001 11.509 16.8001 9.59949C16.8001 7.68997 16.0416 5.85866 14.6914 4.50843C13.3412 3.15819 11.5099 2.39964 9.60045 2.39964C7.69098 2.39964 5.85971 3.15819 4.50951 4.50843C3.15932 5.85866 2.40078 7.68997 2.40078 9.59949C2.40078 11.509 3.15932 13.3403 4.50951 14.6905C5.85971 16.0408 7.69098 16.7993 9.60045 16.7993Z"
                              fill="#E82F35"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="header-actions">
                <button
                  id="button-login"
                  data-toggle="modal"
                  data-target="#loginModal"
                  className="header-action"
                >
                  <svg
                    width={23}
                    height={24}
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3684 0C10.1193 0 8.89818 0.370414 7.85956 1.0644C6.82093 1.75839 6.01142 2.74478 5.53339 3.89884C5.05537 5.0529 4.93029 6.3228 5.17399 7.54794C5.41768 8.77308 6.0192 9.89845 6.90248 10.7817C7.78576 11.665 8.91113 12.2665 10.1363 12.5102C11.3614 12.7539 12.6313 12.6288 13.7854 12.1508C14.9394 11.6728 15.9258 10.8633 16.6198 9.82465C17.3138 8.78603 17.6842 7.56493 17.6842 6.31579C17.6842 4.64074 17.0188 3.03429 15.8344 1.84985C14.6499 0.665412 13.0435 0 11.3684 0ZM11.3684 10.1053C10.6189 10.1053 9.88628 9.88301 9.2631 9.46662C8.63993 9.05023 8.15422 8.45839 7.8674 7.76596C7.58059 7.07352 7.50554 6.31159 7.65176 5.5765C7.79798 4.84141 8.15889 4.16619 8.68886 3.63623C9.21883 3.10626 9.89404 2.74535 10.6291 2.59913C11.3642 2.45291 12.1262 2.52796 12.8186 2.81477C13.511 3.10159 14.1029 3.58729 14.5193 4.21047C14.9356 4.83365 15.1579 5.5663 15.1579 6.31579C15.1579 7.32082 14.7586 8.28469 14.048 8.99535C13.3373 9.70602 12.3735 10.1053 11.3684 10.1053ZM22.7368 24V22.7368C22.7368 20.3918 21.8053 18.1427 20.147 16.4845C18.4888 14.8263 16.2398 13.8947 13.8947 13.8947H8.8421C6.49703 13.8947 4.24801 14.8263 2.58979 16.4845C0.931576 18.1427 0 20.3918 0 22.7368V24H2.52632V22.7368C2.52632 21.0618 3.19173 19.4553 4.37617 18.2709C5.56061 17.0865 7.16705 16.4211 8.8421 16.4211H13.8947C15.5698 16.4211 17.1762 17.0865 18.3607 18.2709C19.5451 19.4553 20.2105 21.0618 20.2105 22.7368V24H22.7368Z"
                      fill="#E82F35"
                    />
                  </svg>
                  Đăng nhập
                </button>
                <a href="/cart" className="header-action">
                  <svg
                    width={30}
                    height={24}
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93681 6.86724e-05C1.27681 6.86724e-05 0.736816 0.540067 0.736816 1.20007C0.736816 1.86006 1.27681 2.40006 1.93681 2.40006H4.59961L7.7496 15C8.016 16.068 8.97359 16.8 10.074 16.8H23.8368C24.9191 16.8 25.8383 16.0824 26.1239 15.0372L29.2367 3.60006H9.13679L9.73679 6.00005H26.1239L23.8368 14.4H10.074L6.924 1.80006C6.79479 1.28292 6.49545 0.824253 6.07409 0.497785C5.65273 0.171316 5.13383 -0.00398252 4.60081 6.86724e-05H1.93681ZM22.3368 16.8C20.3628 16.8 18.7368 18.426 18.7368 20.4C18.7368 22.374 20.3628 24 22.3368 24C24.3107 24 25.9367 22.374 25.9367 20.4C25.9367 18.426 24.3107 16.8 22.3368 16.8ZM11.5368 16.8C9.56279 16.8 7.9368 18.426 7.9368 20.4C7.9368 22.374 9.56279 24 11.5368 24C13.5108 24 15.1368 22.374 15.1368 20.4C15.1368 18.426 13.5108 16.8 11.5368 16.8ZM11.5368 19.2C12.2124 19.2 12.7368 19.7256 12.7368 20.4C12.7368 21.0744 12.2112 21.6 11.5368 21.6C10.8624 21.6 10.3368 21.0744 10.3368 20.4C10.3368 19.7256 10.8624 19.2 11.5368 19.2ZM22.3368 19.2C23.0124 19.2 23.5368 19.7256 23.5368 20.4C23.5368 21.0744 23.0112 21.6 22.3368 21.6C21.6624 21.6 21.1368 21.0744 21.1368 20.4C21.1368 19.7256 21.6624 19.2 22.3368 19.2Z"
                      fill="#E82F35"
                    />
                  </svg>
                  Giỏ hàng
                </a>
                <a href="https://maps.app.goo.gl/Fe8jzp8QCuJn1dPQ9" className="header-action">
                  <svg
                    width={25}
                    height={30}
                    viewBox="0 0 25 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2368 0C5.63682 0 0.236816 5.4 0.236816 12C0.236816 20.1 10.7368 29.25 11.1868 29.7C11.4868 29.85 11.9368 30 12.2368 30C12.5368 30 12.9868 29.85 13.2868 29.7C13.7368 29.25 24.2368 20.1 24.2368 12C24.2368 5.4 18.8368 0 12.2368 0ZM12.2368 26.55C9.08682 23.55 3.23682 17.1 3.23682 12C3.23682 7.05 7.28682 3 12.2368 3C17.1868 3 21.2368 7.05 21.2368 12C21.2368 16.95 15.3868 23.55 12.2368 26.55ZM12.2368 6C8.93682 6 6.23682 8.7 6.23682 12C6.23682 15.3 8.93682 18 12.2368 18C15.5368 18 18.2368 15.3 18.2368 12C18.2368 8.7 15.5368 6 12.2368 6ZM12.2368 15C10.5868 15 9.23682 13.65 9.23682 12C9.23682 10.35 10.5868 9 12.2368 9C13.8868 9 15.2368 10.35 15.2368 12C15.2368 13.65 13.8868 15 12.2368 15Z"
                      fill="#E82F35"
                    />
                  </svg>
                  64 Vương Thừa Vũ, Khương ...
                  <svg
                    width={11}
                    height={18}
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.23682 1L9.23682 9L1.23682 17"
                      stroke="#ACACAC"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav id="nav-menu">
                  <div id="menu">
                    <ul>
                      <li className="menu-item">
                        <a href="/list-product">
                          <svg
                            className="icon-laptop"
                            width={29}
                            height={24}
                            viewBox="0 0 29 24"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.4336 22.6308L26.5028 15.8298V1.02128C26.5028 0.456383 26.0464 0 25.4815 0H3.0134C2.44851 0 1.99212 0.456383 1.99212 1.02128V15.8298L0.0612723 22.6308C-0.178089 23.2979 0.3134 24 1.02191 24H27.473C28.1815 24 28.673 23.2979 28.4336 22.6308ZM4.29 2.29787H24.2049V14.9043H4.29V2.29787ZM11.5762 21.7021L11.8347 20.5213H16.6315L16.89 21.7021H11.5762ZM18.7251 21.7021L18.1155 18.9351C18.09 18.817 17.9847 18.734 17.8666 18.734H10.6028C10.4815 18.734 10.3794 18.817 10.3538 18.9351L9.74425 21.7021H2.7134L4.0634 16.9468H24.4315L25.7815 21.7021H18.7251Z"
                              fill="#131111"
                            />
                          </svg>
                          Laptop văn phòng
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/list-product">
                          <svg
                            className="icon-laptop"
                            width={29}
                            height={24}
                            viewBox="0 0 29 24"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.9285 22.6308L26.9976 15.8298V1.02128C26.9976 0.456383 26.5413 0 25.9764 0H3.50827C2.94338 0 2.487 0.456383 2.487 1.02128V15.8298L0.556145 22.6308C0.316784 23.2979 0.808273 24 1.51678 24H27.9678C28.6764 24 29.1678 23.2979 28.9285 22.6308ZM4.78487 2.29787H24.6998V14.9043H4.78487V2.29787ZM12.071 21.7021L12.3295 20.5213H17.1264L17.3849 21.7021H12.071ZM19.22 21.7021L18.6104 18.9351C18.5849 18.817 18.4795 18.734 18.3615 18.734H11.0976C10.9764 18.734 10.8742 18.817 10.8487 18.9351L10.2391 21.7021H3.20827L4.55827 16.9468H24.9264L26.2764 21.7021H19.22Z"
                              fill="#131111"
                            />
                          </svg>
                          Laptop đồ họa
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/list-product">
                          <svg
                            className="icon-laptop"
                            width={30}
                            height={24}
                            viewBox="0 0 30 24"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M29.4234 22.6308L27.4925 15.8298V1.02128C27.4925 0.456383 27.0361 0 26.4712 0H4.00315C3.43825 0 2.98187 0.456383 2.98187 1.02128V15.8298L1.05102 22.6308C0.811657 23.2979 1.30315 24 2.01166 24H28.4627C29.1712 24 29.6627 23.2979 29.4234 22.6308ZM5.27974 2.29787H25.1946V14.9043H5.27974V2.29787ZM12.5659 21.7021L12.8244 20.5213H17.6212L17.8797 21.7021H12.5659ZM19.7148 21.7021L19.1053 18.9351C19.0797 18.817 18.9744 18.734 18.8563 18.734H11.5925C11.4712 18.734 11.3691 18.817 11.3436 18.9351L10.734 21.7021H3.70315L5.05315 16.9468H25.4212L26.7712 21.7021H19.7148Z"
                              fill="#131111"
                            />
                          </svg>
                          Laptop gaming
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="infomation">
                    <ul>
                      <li className="info-item">
                        <a href="/contact">Liên hệ</a>
                      </li>
                      <li className="info-item">
                        <a href="/introduce">Giới thiệu</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        {/*	End Header	*/}
      </div>
    </>
  );
};
export default Header;