import React, { useEffect, useState } from "react";
import Header from "~/components/Header";
import { useLocation } from "react-router-dom";
import "~/layouts/customer/ViewProduct/ViewProduct.scss";
import numeral from "numeral";
import Login from "~/components/Authors/Login";
import { IoHeartSharp } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "~/redux/Actions/CardActions";
import Footer from "~/components/Footer";
import CreateQuote from "~/components/CreateQuote";
import Loading from "~/Loading/Loading";
import PopupConfirm from "~/components/PopupConfirm";

const ViewProduct = () => {
  const userAuth = useSelector((state) => state.auth.login.currentUser);
  const accessToken = localStorage.getItem("jwtToken");
  const location = useLocation();
  const dispatch = useDispatch();
  const Idproduct = location.state.productId;
  const [load, setLoad] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddNewAddress, setShowAddNewAddress] = useState(false);
  const [firstImage, setFirstImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(false);
  useEffect(() => {
    console.log(accessToken);
    axios
      .get(
        `https://localhost:7058/api/Poduct/GetProduct?Idproduct=${Idproduct}`
      )
      .then((response) => {
        console.log(response.data);
        setProductDetails(response.data);
        setFirstImage(response.data.images[0].imagePath);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [Idproduct]);
  const [productDetails, setProductDetails] = useState();
  const ClickChildImg = (img, index) => {
    setFirstImage(img);
    setSelectedImage(index);
  };
  const handleAddNewAddress = () => {
    setShowAddNewAddress(true);
  }; 
  const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
const disres = true;
  const addToCart = () => {
    if (userAuth.Id == "") {
      setShowLogin(true);
    } else {
     
      axios
        .post(
          `https://localhost:7058/api/Cart/AddToCart?userId=${userAuth.Id}&productId=${Idproduct}`,
          config
        )
        .then((response) => {
          if (response.data !== "") {
            
            dispatch(addCart(userAuth.Id));
            setContent(response.data)
            setIsLoading(true);
          }
        });
    }
  };

  return (
    <div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {isLoading && (
        <PopupConfirm setIsLoading={setIsLoading} content={content} />
      )}
      <div className="home">
        <Header indexCart={load} />
        <div className="product_view">
          <div className="product_view_body">
            <div className="view_image_p">
              <img src={firstImage} alt="" className="big_image" />
              <div className="view_image">
                {productDetails?.images.map((image, index) => (
                  <div
                    key={index}
                    className={`child_image ${
                      index === selectedImage ? "selected" : ""
                    }`}
                  >
                    <img
                      src={image.imagePath}
                      alt=""
                      key={index}
                      onClick={() => {
                        ClickChildImg(image.imagePath, index);
                      }}
                      className="child_image_item"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="view_info_p">
              <div className="view_info_Name">
                {productDetails?.productName}
              </div>
              <div className="view_info_cate">
                <div className="info_cate">Dự án:</div>
                {productDetails?.cateName}
              </div>
              <div className="view_info_table">
                <div className="info_table">Thông tin:</div>
                <table className="option_table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Số lượng</th>
                      {/* <th>Giá</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {productDetails?.options.map((option, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{option.optionName}</td>
                        <td>{option.quantity}</td>
                        {/* <td>{numeral(option.price).format("0,0")} VNĐ</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="price_viewer">
                <div className="info_cate"> Giá Chỉ Từ :</div>
                <div className="price_viewer_data">
                  {numeral(productDetails?.price).format("0,0")}
                  <div className="price_type">vnđ</div>
                </div>
              </div>

              <div className="order">
                <button
                  className="addButton"
                  onClick={() => addToCart(productDetails?.productId)}
                >
                  <IoHeartSharp className="iconAdd" />
                  Thêm Vào Mục Yêu Thích
                </button>

                <button className="orderButton" onClick={handleAddNewAddress}>
                  Tạo Yêu Cầu Báo Giá
                </button>
              </div>
            </div>
          </div>

          <div className="product_introduce">
            <div className="title_des">
              Thiết Kế Nội Thất {productDetails?.cateName}
            </div>
            <div className="description_product">
              {productDetails?.description}
            </div>
            <div className="intro_image">
              {productDetails?.images.map((image, index) => (
                <div key={index} className="child_intro">
                  <img
                    src={image.imagePath}
                    alt=""
                    onClick={() => {
                      ClickChildImg(image.imagePath);
                    }}
                    className="child_intro_image"
                  />
                  <div className="child_intro_text">{image.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {showAddNewAddress && (
        <CreateQuote
          productId={Idproduct}
          setShowAddNewAddress={setShowAddNewAddress}
          setIsLoading={setIsLoading}
          setContent={setContent}
        />
      )}
    </div>
  );
};
export default ViewProduct;
