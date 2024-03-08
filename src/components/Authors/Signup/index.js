import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = ({ setShowSignup }) => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Date, SetDate] = useState("");
  const [Phone, SetPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const CloseSignUp = () => {
    setShowSignup(false);
  };
  const ChangeEmail = (value) => {
    SetEmail(value);
  };
  const ChangePassword = (value) => {
    SetPassword(value);
  };
  const ChangeDate = (value) => {
    SetDate(value);
  };
  const ChangePhone = (value) => {
    if (value > 999999999) {
      SetPhone("");
    }
    SetPhone(value);
  };
  return (
    <div className="author_modal">
      <div className="login">
        <div className="login_view">
          <div className="close_logo">
            <div className="login_view_logo">
              <img className="logo_view" src="./logo-removebg-preview.png" />
            </div>
            <div className="login_view_close" onClick={CloseSignUp}>
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
                  type="password"
                  value={Password}
                  onChange={(e) => {
                    ChangePassword(e.target.value);
                  }}
                />
                <button
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="login_input">
              <div className="login_input_name">Tên Người Dùng</div>
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
              <div className="login_input_name">Số điện thoại</div>
              <div className="login_input_text">
                <input
                  className="login_value"
                  placeholder="Số điện thoại"
                  value={Phone}
                  type="text"
                  onChange={(e) => {
                    ChangePhone(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="login_input">
              <div className="login_input_name">Ngày Sinh</div>
              <div className="login_input_text">
                <input
                  className="login_value"
                  placeholder="Ngày Sinh"
                  type="date"
                  value={Date}
                  onChange={(e) => {
                    ChangeDate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="login_btn">
            <button className="btn_log_user">Đăng Kí</button>
          </div>
          <div className="or_login">Hoặc</div>
          <div className="login_btn">
            <button className="btn_log_gg">
              Đăng Kí với Google
              <FcGoogle className="btn_log_gg_logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
