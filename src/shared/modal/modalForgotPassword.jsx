import React, { useState } from "react";

const ForgotPassword = ({ onLogin }) => {
  return (
    <>
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
    </>
  );
};
export default ForgotPassword;
