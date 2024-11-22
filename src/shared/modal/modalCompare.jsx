import React, { useState } from "react";

const Compare = ({ onLogin }) => {
  return (
    <>
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
                      <a href="/compare-product">
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
                      </a>
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
                      <a href="/compare-product">
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
                      </a>
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
                      <a href="/compare-product">
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
                      </a>
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
                      <a href="/compare-product">
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
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Modal compare */}
    </>
  );
};
export default Compare;
