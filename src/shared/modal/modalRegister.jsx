import React, { useState } from "react";

const Register = ({ onLogin }) => {
  return (
    <>
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
    </>
  );
};

export default Register;
