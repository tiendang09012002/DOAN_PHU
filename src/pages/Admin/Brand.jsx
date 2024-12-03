import Menu from "../../shared/Menu";

const Brand = () => {
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
              <h4>Danh mục hãng</h4>
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
                        <th>Ảnh thu nhỏ</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                      <tr>
                        <td>
                          <p>1</p>
                        </td>
                        <td>
                          <p style={{ marginLeft: "25px" }}>Dell</p>
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
                              marginLeft: "50px",
                              marginTop: "10px",
                              display: "block",
                              background: "#f0f0f0",
                              padding: "23px 33px",
                            }}
                            src="../../../public/images/image 6 (1).png"
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
                          <p style={{ marginLeft: "25px" }}>HP</p>
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
                              marginLeft: "50px",
                              marginTop: "10px",
                              display: "block",
                              background: "#f0f0f0",
                              padding: "23px 33px",
                            }}
                            src="../../../public/images/image 5 (1).png"
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
                          <p style={{ marginLeft: "25px" }}>Asus</p>
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
                              marginLeft: "50px",
                              marginTop: "10px",
                              display: "block",
                              background: "#f0f0f0",
                              padding: "23px 33px",
                            }}
                            src="../../../public/images/image 7 (1).png"
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
                          <p>4</p>
                        </td>
                        <td>
                          <p style={{ marginLeft: "25px" }}>Lenovo</p>
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
                              marginLeft: "50px",
                              marginTop: "10px",
                              display: "block",
                              background: "#f0f0f0",
                              padding: "23px 33px",
                            }}
                            src="../../../public/images/image 8 (1).png"
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
                          <p>5</p>
                        </td>
                        <td>
                          <p style={{ marginLeft: "25px" }}>Acer</p>
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
                              marginLeft: "50px",
                              marginTop: "10px",
                              display: "block",
                              background: "#f0f0f0",
                              padding: "23px 33px",
                            }}
                            src="../../../public/images/image 9 (1).png"
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

export default Brand;
