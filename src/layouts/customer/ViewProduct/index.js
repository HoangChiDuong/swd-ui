import React, { useEffect, useState } from "react";
import Header from "~/components/Header";
import { useLocation } from "react-router-dom";
import NewAddress from "~/components/CreateQuote";
import "~/layouts/customer/ViewProduct/ViewProduct.scss";
import numeral from "numeral";
import Login from "~/components/Authors/Login";
import { IoHeartSharp } from "react-icons/io5";
const ViewProduct = () => {
  const [load, setLoad] = useState(null);
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  var productId = location.state?.productId || 0;
  const [selectedImage, setSelectedImage] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  // useEffect(() => {
  //   const firstImageURL = ;
  //   setFirstImage(firstImageURL);
  // }, [productDetails]);
  const productDetails = {
    image: [
      {
        src: "https://noithatmanhhe.vn/media/18959/1-khong-gian-noi-that-phong-khach-chung-cu-noi-that-manh-he.jpg?width=700&height=484.16666666666663&rmode=boxpad",
        description:
          "Chất liệu gỗ Sồi tự nhiên cho căn hộ sang trọng và đẳng cấp",
      },
      {
        src: "https://noithatmanhhe.vn/media/18960/1-phong-khach-bep-trang-nha-go-tu-nhien-noi-that-manh-he.jpg?width=700&height=525&rmode=boxpad",
        description:
          "Không gian phòng khách bếp thư giãn tuyệt đối nhờ cách thiết kế thoáng đãng, tận dụng ánh sáng tự nhiên",
      },
      {
        src: "https://noithatmanhhe.vn/media/18974/1-he-tu-lon-noi-lien-ban-tho-nho-phong-khach-chung-cu-noi-that-manh-he.jpg?width=700&height=560&rmode=boxpad",
        description:
          "Kệ tivi sát sàn, liên tiếp bàn thờ và kệ trang trí tạo thành hệ tủ có kích thước vừa khít với không gian phòng khách",
      },
    ],

    nameProduct: "Mẫu phòng khách đẹp đẳng cấp với gỗ Sồi tự nhiên",
    cateName: "Phòng Khách",
    priceProduct: "30000000",
    description:
      "Phòng khách trở nên thoáng mát, rộng rãi và tràn đầy sức sống khi sử dụng lối thiết kế không gian mở như hệ thống cửa kính kết hợp rèm cửa điều chỉnh ánh sáng một cách linh hoạt.",
    options: [
      {
        optionid: 1,
        optionName: "Ghế Sofa",
        price: 2000000,
        quantity: 2,
      },
      {
        optionid: 2,
        optionName: "Tủ Tivi",
        price: 2000000,
        quantity: 1,
      },
      {
        optionid: 3,
        optionName: "Đèn Trần",
        price: 2000000,
        quantity: 1,
      },
      {
        optionid: 4,
        optionName: "Thảm Sàn",
        price: 2000000,
        quantity: 1,
      },
      {
        optionid: 5,
        optionName: "Tranh Treo Tường",
        price: 2000000,
        quantity: 3,
      },
    ],
  };
  const [showAddNewAddress, setShowAddNewAddress] = useState(false);
  const [firstImage, setFirstImage] = useState(productDetails.image[0].src);

  const ClickChildImg = (img, index) => {
    setFirstImage(img);
    setSelectedImage(index);
  };
  const handleAddNewAddress = () => {
    setShowAddNewAddress(true);
  };
  const addToCart = () => {
    if (accessToken == null) {
      setShowLogin(true);
    }
    setLoad("123");
  };
  return (
    <div>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div className="home">
        <Header indexCart={load} />
        <div className="product_view">
          <div className="product_view_body">
            <div className="view_image_p">
              <img src={firstImage} alt="" className="big_image" />
              <div className="view_image">
                {productDetails.image.map((image, index) => (
                  <div
                    key={index}
                    className={`child_image ${
                      index === selectedImage ? "selected" : ""
                    }`}
                  >
                    <img
                      src={image.src}
                      alt=""
                      key={index}
                      onClick={() => {
                        ClickChildImg(image.src, index);
                      }}
                      className="child_image_item"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="view_info_p">
              <div className="view_info_Name">{productDetails.nameProduct}</div>
              <div className="view_info_cate">
                <div className="info_cate">Dự án:</div>
                {productDetails.cateName}
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
                    {productDetails.options.map((option, index) => (
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
                  {numeral(productDetails.priceProduct).format("0,0")}
                  <div className="price_type">vnđ</div>
                </div>
              </div>

              <div className="order">
                <button className="addButton" onClick={() => addToCart()}>
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
              Thiết Kế Nội Thất {productDetails.cateName}
            </div>
            <div className="description_product">
              {productDetails.description}
            </div>
            <div className="intro_image">
              {productDetails.image.map((image, index) => (
                <div key={index} className="child_intro">
                  <img
                    src={image.src}
                    alt=""
                    onClick={() => {
                      ClickChildImg(image.src);
                    }}
                    className="child_intro_image"
                  />
                  <div className="child_intro_text">{image.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showAddNewAddress && (
        <NewAddress
          //setShowNotification={setShowNotification}
          setShowAddNewAddress={setShowAddNewAddress}
          // accessToken={accessToken}
        />
      )}
    </div>
  );
};
export default ViewProduct;
