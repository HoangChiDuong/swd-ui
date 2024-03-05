import "~/components/Authors/Login/Login.scss";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "~/redux/apiRequest";
import axios from "axios";
const Login = ({ setShowLogin }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const CloseLogin = () => {
    setShowLogin(false);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const ChangeEmail = (value) => {
    setEmail(value);
  };
  const ChangePassword = (value) => {
    setPassword(value);
  };
  const data = {
    email: Email,
    password: Password,
  };
  const LoginBTN = () => {
    axios
      .post("https://localhost:7058/api/User/login", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error:", error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: Email,
      password: password,
    };

    loginUser(newUser, dispatch, navigate)

  }


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
                  value={Password}
                  onChange={(e) => ChangePassword(e.target.value)}
                />
                <button
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="forgot_pass">Quên mật khẩu?</div>
          </div>

          <div className="login_btn">
            <button className="btn_log_user" onClick={handleSubmit}>Đăng Nhập</button>

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
