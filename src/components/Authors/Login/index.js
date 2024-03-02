import "~/components/Authors/Login/Login.scss";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = ({ setShowLogin }) => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const CloseLogin = () => {
    setShowLogin(false);
  };

  const ChangeEmail = (value) => {
    SetEmail(value);
  };
  const ChangePassword = (value) => {
    SetPassword(value);
  };
  return (
    <div className="author_modal">
      <div className="login">
        <div className="login_view">
          <div className="close_logo">
            <div className="login_view_logo">
              <img className="logo_view" src="./logo-removebg-preview.png" />
            </div>
            <div className="login_view_close" onClick={CloseLogin}>
              <IoClose className="close_click" />
            </div>
          </div>
          <div className="login_Welcome">Goat Interior xin chào</div>
          <div className="login_info">
            <div className="login_input">
              <div className="login_input_name">Email</div>
              <div className="login_input_text">
                <input
                  aria-invalid="false"
                  autoComplete="email"
                  spellCheck="false"
                  className="login_value"
                  placeholder="Email"
                  type="email"
                  value={Email}
                  onChange={(e) => {
                    ChangeEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="login_input">
              <div className="login_input_name">Mật Khẩu</div>
              <div className="login_input_text">
                <input
                  className="login_value"
                  placeholder="Mật Khẩu"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="forgot_pass">Quên mật khẩu?</div>
          </div>
          <div className="login_btn">
            <button className="btn_log_user">Đăng Nhập</button>
          </div>
          <div className="or_login">Hoặc</div>
          <div className="login_btn">
            <button className="btn_log_gg">
              Đăng nhập với Google
              <FcGoogle className="btn_log_gg_logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
