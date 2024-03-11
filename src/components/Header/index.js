import React, { useEffect, useState } from "react";
import "~/components/Header/header.scss";
import {
  IoSearch,
  IoChevronDown,
  IoNotifications,
  IoHeartSharp,
  IoLogOutOutline,
} from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../Authors/Login";
import SignUp from "../Authors/Signup";
import { useSelector } from "react-redux";
import { logOut } from "~/redux/apiRequest";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteCart, getCard } from "~/redux/Actions/CardActions";
import Loading from "~/Loading/Loading";
import Message from "~/Loading/Error";

function Header({ indexCart }) {
  const userAuth = useSelector((state) => state.auth.login.currentUser);
  const [hoveredItem, setHoveredItem] = useState("null");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [numCart, setnumCart] = useState(0);

  const [numConF, setnumConF] = useState(1);
  const [CartData, setCartData] = useState();

  const handleLogOut = () => {
    logOut(dispatch, navigate);
  };
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`https://localhost:7058/api/User/UserInfo?userId=${userAuth.Id}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [userAuth.Id]);

  const cardDetail = useSelector((state) => state.getCardDetail) || {};
  const { loading, error, card } = cardDetail;

  const addCard = useSelector((state) => state.addCard) || {};
  const { error: errorAddCard, success: successAddCard } = addCard;

  const deleteCard = useSelector((state) => state.deleteCard) || {};
  const { error: errorDelete, success: successDelete } = deleteCard;

  useEffect(() => {
    if (userAuth.Id !== "") {
      dispatch(getCard(userAuth.Id));
    }
  }, [dispatch, successAddCard, successDelete]);

  useEffect(() => {
    setnumCart(card?.length || 0);
  }, [card?.length]);

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
          id: 4,
        },
        {
          subName: "Phòng Ngủ",
          id: 3,
        },
        {
          subName: "Phòng Bếp",
          id: 5,
        },
      ],
    },
  ];
  const handleLogoClick = (title) => {
    switch (title) {
      case "Trang Chủ":
        navigate("/home");
        break;
      case "Thiết Kế Nội Thất Nguyên Căn":
        navigate("/ProductByCate", { state: { id: "cate1" } });
        break;
      case "Thiết Kế Nội Thất Theo Phòng":
        navigate("/ProductByCate", { state: { id: "cate2" } });
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
    navigate("/ProductByCate", { state: { id: subItem.id } });
  };
  const hdcCartItem = (productId) => {
    navigate("/ProductDetail", { state: { productId } });
  };
  const handleDeleteCart = (id) => {
    console.log(id);
    dispatch(deleteCart(id));
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
  const truncateProductName = (productName) => {
    if (productName.length > 21) {
      return productName.substring(0, 21) + "...";
    } else {
      return productName;
    }
  };
  const filterName = (name) => {
    if (name && name.length > 0) {
      return name[0].toUpperCase();
    } else {
      return null;
    }
  };
  const goViewQuote = () => {
    navigate("/ProgressRequest");
  };
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
                <IoHeartSharp className="ImCart-icon" />

                {numCart !== 0 && <div className="item_num">{numCart}</div>}
                {numCart === 0 && (
                  <div className="item_cart">
                    <div className="item_cart_log">
                      <SiReaddotcv className="icon_cart_null" />
                    </div>
                    Bạn chưa có dự án Yêu thích nào
                  </div>
                )}
                {numCart !== 0 && (
                  <div className="item_cart">
                    <div className="item_cart_title">
                      Danh Mục Yêu Thích Của Bạn
                    </div>
                    {errorDelete && (
                      <Message variant="alert-danger">{errorDelete}</Message>
                    )}
                    {errorAddCard && (
                      <Message variant="alert-danger">{errorAddCard}</Message>
                    )}
                    {loading ? (
                      <Loading />
                    ) : error ? (
                      <Message variant="alert-danger">{error}</Message>
                    ) : (
                      card?.map((cart, index) => (
                        <div
                          key={index}
                          className="item_cart_show"
                          onClick={() => hdcCartItem(cart.productId)}
                        >
                          <img
                            className="item_cart_img"
                            src={cart.productThumbnail}
                            alt="item_cart_show"
                          />
                          <div className="item_cart_name">
                            {truncateProductName(cart.productName)}
                          </div>
                          <div className="item_cart_dele1">
                            <div
                              className="item_cart_dele2"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCart(cart.cartDetailId);
                              }}
                            >
                              <MdDelete className="icon_dele_cart" />
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
              <div className="item_div_conf">
                <IoNotifications className="IConf_icon" />
                {numConF !== 0 && (
                  <div className="item_num_conf">{numConF}</div>
                )}
              </div>
              {/* <div className="item_div_login">
                <FaUserCircle
                  className="ImLogin-icon"
                  onClick={() => {
                    handleLogoClick("Login");
                  }}
                />
              </div> */}
              <div className="item_div_more">
                <FaUserCircle className="info_user_more1" />
                <IoChevronDown className="info_user_more" />
                <div className="item_more_show">
                  <div className="item_status">Đang Hoạt Động</div>
                  <div className="item_info">
                    <div className="img_user">
                      {user?.images === null && (
                        <div className="img_user_data">
                          {filterName(user?.userName)}
                        </div>
                      )}
                      {!user && (
                        <img
                          className="img_user_data"
                          src={""}
                          alt={user?.userName}
                        />
                      )}
                    </div>
                    <div className="name_user">{user?.userName}</div>
                  </div>
                  <div className="profile_staus">Tài khoản của bạn</div>
                  <div className="item_profile">
                    <div className="item_profile_user">
                      <div className="profile_user">Vai trò:</div>
                      <div className="profile_user">{user?.position}</div>
                    </div>
                    <div className="item_profile_user">
                      <div className="profile_user">Email:</div>
                      <div className="profile_user">{user?.email}</div>
                    </div>
                    <div className="item_profile_user">
                      <div className="profile_user">Số điện thoại:</div>
                      <div className="profile_user">{user?.phone}</div>
                    </div>
                    <div className="item_profile_user">
                      <div className="profile_user">Ngày sinh:</div>
                      <div className="profile_user">{user?.date}</div>
                    </div>
                  </div>
                  <div className="profile_staus">Tiến trình Đơn</div>
                  <div className="item_profile">
                    <div className="item_profile_user">
                      <div className="profile_quote" onClick={goViewQuote}>
                        <VscGitPullRequestGoToChanges className="profile_quote_icon" />
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
