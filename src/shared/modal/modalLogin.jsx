import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log(1);
      navigate("/");
      localStorage.setItem("currentUser", JSON.stringify(user));
      onLogin(user);
    } else {
      alert("Invalid username or password.");
    }
  };
  return (
    <>
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
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group" id="input-password">
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <button className="login-btn" onClick={handleLogin} data-dismiss="modal">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
