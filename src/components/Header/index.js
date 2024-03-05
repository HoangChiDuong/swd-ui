import React, { useEffect, useState } from "react";
import "~/components/Header/header.scss";
import {
  IoSearch,
  IoChevronDown,
  IoNotifications,
  IoHeartSharp,
  IoLogOutOutline,
} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../Authors/Login";
import SignUp from "../Authors/Signup";
import { useSelector } from "react-redux";
import { logOut } from "~/redux/apiRequest";
import { useDispatch } from "react-redux";


function Header({ indexCart }) {
  const userAuth = useSelector((state) => state.auth.login.currentUser);




  const [hoveredItem, setHoveredItem] = useState("null");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [numCart, setnumCart] = useState(3);
  const [numConF, setnumConF] = useState(1);

  const handleLogOut = () => {
    logOut(dispatch, navigate);
  };
  const user = {
    userName: "Hoàng Chí Dương",
    date: "23/03/2002",
    email: "Goat@gmail.com",
    phone: "0785947818",
    img: "",
  };
  // useEffect(() => {

  // }, [indexCart]);
  const navItems = [
    {
      title: "Thiết Kế Nội Thất Nguyên Căn",
      subItems: [
        {
          subName: "Nhà Chung Cư",
          id: 1,
        },
        {
          subName: "Nhà Phố",
          id: 2,
        },
      ],
    },
    {
      title: "Thiết Kế Nội Thất Theo Phòng",
      subItems: [
        {
          subName: "Phòng Khách",
          id: 3,
        },
        {
          subName: "Phòng Ngủ",
          id: 4,
        },
        {
          subName: "Phòng Bếp",
          id: 5,
        },
      ],
    },
  ];
  const CartData = [
    {
      src: "https://noithatmanhhe.vn/media/18959/1-khong-gian-noi-that-phong-khach-chung-cu-noi-that-manh-he.jpg?width=700&height=484.16666666666663&rmode=boxpad",
      cartId: 1,
      productId: 1,
      nameProduct: "Mẫu phòng khách đẹp đẳng cấp với gỗ Sồi tự nhiên",
    },
    {
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
      cartId: 2,
      productId: 2,
      nameProduct: "Diamond Alnata - 96m2 - TYPE B1",
    },
    {
      src: "https://noithatmanhhe.vn/media/36557/thiet-ke-noi-that-phong-khach-lien-bep-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
      cartId: 3,
      productId: 3,
      nameProduct: "Emerald Bình Dương - 54m2 - 2PN",
    },
  ];
  const handleLogoClick = (title) => {
    switch (title) {
      case "Trang Chủ":
        navigate("/home");
        break;
      case "Thiết Kế Nội Thất Nguyên Căn":
        navigate("/SanPhamTheoDanhMuc", { state: { id: "cate1" } });
        break;
      case "Thiết Kế Nội Thất Theo Phòng":
        navigate("/SanPhamTheoDanhMuc", { state: { id: "cate2" } });
        break;
      case "Liên Hệ":
        window.location.href = "/desktop-screen";
        break;

      default:
        break;
    }
    setHoveredItem(title); // Thiết lập hoveredItem là title
  };
  const handleSubClick = (subItem) => {
    navigate("/SanPhamTheoDanhMuc", { state: { id: subItem.id } });
  };
  const hdcCartItem = (productId) => {
    navigate("/XemSanPham", { state: { productId } });
  };
  const GoAuthorsPage = (title) => {
    switch (title) {
      case "Login":
        setShowLogin(true);
        break;
      case "Signup":
        setShowSignup(true);
        break;
      default:
        break;
    }
  };
  const filterName = (name) => {
    if (name && name.length > 0) {
      // Trả về chữ cái đầu tiên của tên, chuyển đổi thành chữ cái in hoa
      return name[0].toUpperCase();
    } else {
      // Trường hợp name không tồn tại hoặc rỗng, trả về null hoặc giá trị mặc định khác
      return null;
    }
  };
  const goViewQuote = () => {
    navigate("/TienTrinhYeuCau");
  }
  return (
    <div className="header">
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showSignup && <SignUp setShowSignup={setShowSignup} />}
      <div className="header-view">
        <div
          className="logo-view"
          onClick={() => {
            handleLogoClick("Trang Chủ", 0);
          }}
        >
          <img src="./logo-removebg-preview.png" alt="logo" />
        </div>
        <div className="headContent-view">
          <div className="headSearch-view">
            <input
              className="headSearch-content"
              id="search_header"

              placeholder="Tìm Kiếm"
            />
            <button>
              <IoSearch className="icon-search" />
            </button>
          </div>
          <div className="headNavbar">
            {/* Hiển thị từng mục trong navbar */}
            <div
              className="nav-item"
              onMouseEnter={() => setHoveredItem("Trang Chủ")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                handleLogoClick("Trang Chủ", 0);
              }}
            >
              Trang Chủ
            </div>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="nav-item"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  handleLogoClick(item.title, item);
                }}
              >
                {item.title}
                <IoChevronDown className="nav_more" />
                {/* Hiển thị danh sách con nếu mục này đang được hover */}
                {hoveredItem !== "null" && (
                  <div className="sub-items">
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="sub-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubClick(subItem);
                        }}
                      >
                        {subItem.subName}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div
              className="nav-item"
              onMouseEnter={() => setHoveredItem("Liên Hệ")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                handleLogoClick("Liên Hệ");
              }}
            >
              Liên Hệ
            </div>
          </div>
          {userAuth.Id !== "" && (
            <div className="itemLog-cart">
              <div className="item_div">
                <IoHeartSharp
                  className="ImCart-icon"
                  onClick={() => {
                    handleLogoClick("Login");
                  }}
                />
                {numCart !== 0 && <div className="item_num">{numCart}</div>}

                <div className="item_cart">
                  <div className="item_cart_title">Danh Mục Yêu Thích Của Bạn</div>
                  {CartData.map((cart, index) => (
                    <div
                      key={index}
                      className="item_cart_show"
                      onClick={() => hdcCartItem()}
                    >
                      <img
                        className="item_cart_img"
                        src={cart.src}
                        alt="item_cart_show"
                      />
                      <div className="item_cart_name">{cart.nameProduct}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="item_div_conf">
                <IoNotifications className="IConf_icon" />
                {numConF !== 0 && (
                  <div className="item_num_conf">{numConF}</div>
                )}
              </div>
              <div className="item_div_login">
                <FaUserCircle
                  className="ImLogin-icon"
                  onClick={() => {
                    handleLogoClick("Login");
                  }}
                />
              </div>
              <div className="item_div_more">
                <IoChevronDown className="info_user_more" />
                <div className="item_more_show">
                  <div className="item_status">Đang Hoạt Động</div>
                  <div className="item_info">
                    <div className="img_user">
                      {user.img === "" && (
                        <div className="img_user_data">
                          {filterName(userAuth.UserName)}
                        </div>
                      )}
                      {user.img !== "" && (
                        <img
                          className="img_user_data"
                          src={user.img}
                          alt={userAuth.UserName}
                        />
                      )}
                    </div>
                    <div className="name_user">{userAuth.UserName}</div>
                  </div>
                  <div className="profile_staus">Tài khoản của bạn</div>
                  <div className="item_profile">
                    <div className="item_profile_user">
                      <div className="profile_user">Vai trò:</div>
                      <div className="profile_user">Người dùng</div>
                    </div>
                    <div className="item_profile_user">
                      <div className="profile_user">Email:</div>
                      <div className="profile_user">{userAuth.Email}</div>
                    </div>
                    <div className="item_profile_user">
                      <div className="profile_user">Số điện thoại:</div>
                      <div className="profile_user">{user.phone}</div>
                    </div>
                    <div className="item_profile_user">
                      <div className="profile_user">Ngày sinh:</div>
                      <div className="profile_user">{user.date}</div>
                    </div>
                  </div>
                  <div className="profile_staus">Tiến trình Đơn</div>
                  <div className="item_profile">
                    <div className="item_profile_user">
                      <div className="profile_quote" onClick={goViewQuote}>
                        Yêu cầu báo giá của bạn
                      </div>
                    </div>
                  </div>
                  <div className="profile_staus">Tùy chọn khác</div>
                  <div className="item_profile">
                    <div className="item_profile_user">
                      <div className="profile_quote" onClick={handleLogOut}>
                        <IoLogOutOutline className="profile_quote_icon" />
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {userAuth?.Id === "" && (
            <div className="itemLog-cart">
              <button
                className="btn_log_in"
                onClick={(e) => {
                  e.stopPropagation();
                  GoAuthorsPage("Login");
                }}
              >
                Đăng nhập
              </button>
              <button
                className="btn_sig_up"
                onClick={() => GoAuthorsPage("Signup")}
              >
                Đăng ký
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
