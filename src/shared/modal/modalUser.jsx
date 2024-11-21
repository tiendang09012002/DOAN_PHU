import React, { useState } from "react";

const User = ({ b }) => {
  return (
    <>
      {/* Modal user */}
      <div
        class="modal"
        tabindex="-1"
        className="modal fade"
        id="userModal"
        tabIndex={-1}
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" id="modal-content-user">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body-user">
              <div id="ellipse1">
                <div id="ellipse2">
                  <img src="../../../images/logo user.png" alt="" />
                </div>
              </div>
              <p className="user-name">Lê Trọng Phú</p>
              <div className="phone">
                <label htmlFor="phone-number" className="label-modal-user">
                  Số điện thoại
                </label>
                <p className="phone-number">0943 361 366</p>
              </div>
              <div id="address">
                <label htmlFor="address" className="label-modal-user">
                  Địa chỉ
                </label>
                <p className="address">
                  64 P. Vương Thừa Vũ, Khương Trung, Thanh Xuân, Hà Nội
                </p>
              </div>
              <button id="btn-logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M8.125 13C8.125 12.7845 8.2106 12.5778 8.36298 12.4255C8.51535 12.2731 8.72201 12.1875 8.9375 12.1875H16.25V6.90625C16.25 5.28125 14.5341 4.0625 13 4.0625H5.28125C4.52729 4.06331 3.80444 4.36317 3.27131 4.89631C2.73817 5.42944 2.43831 6.15229 2.4375 6.90625V19.0938C2.43831 19.8477 2.73817 20.5706 3.27131 21.1037C3.80444 21.6368 4.52729 21.9367 5.28125 21.9375H13.4063C14.1602 21.9367 14.8831 21.6368 15.4162 21.1037C15.9493 20.5706 16.2492 19.8477 16.25 19.0938V13.8125H8.9375C8.72201 13.8125 8.51535 13.7269 8.36298 13.5745C8.2106 13.4222 8.125 13.2155 8.125 13ZM23.3243 12.4257L19.2618 8.36316C19.1082 8.21722 18.9037 8.13706 18.6918 8.13978C18.4799 8.14249 18.2775 8.22786 18.1277 8.37769C17.9779 8.52751 17.8925 8.72994 17.8898 8.94181C17.8871 9.15368 17.9672 9.35822 18.1132 9.51184L20.7883 12.1875H16.25V13.8125H20.7883L18.1132 16.4882C18.0345 16.5629 17.9717 16.6525 17.9282 16.7519C17.8848 16.8513 17.8617 16.9584 17.8604 17.0668C17.859 17.1752 17.8793 17.2829 17.9202 17.3833C17.961 17.4838 18.0216 17.575 18.0983 17.6517C18.175 17.7284 18.2662 17.789 18.3667 17.8298C18.4671 17.8707 18.5748 17.891 18.6832 17.8896C18.7916 17.8883 18.8987 17.8652 18.9981 17.8218C19.0975 17.7783 19.1871 17.7155 19.2618 17.6368L23.3243 13.5743C23.4766 13.422 23.5621 13.2154 23.5621 13C23.5621 12.7846 23.4766 12.578 23.3243 12.4257Z"
                    fill="#727272"
                  />
                </svg>
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*End Modal user */}
    </>
  );
};

export default User;
