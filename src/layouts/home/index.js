import React, { useEffect, useState } from "react";
import Header from "~/components/Header";
import "~/layouts/home/Home.scss";
import Product from "~/components/Product";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import App from "~/App";
import Footer from "~/components/Footer";
const HomePage = () => {
  const [Idcategory, setIdcategory] = useState(1);
  const [Products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const imageCate = [
    {
      src: "./Cchungcu.png",
      Text: "Nhà Chung Cư",
      id: 1,
    },
    {
      src: "./Cnha.png",
      Text: "Nhà Phố",
      id: 2,
    },
    {
      src: "./cBed.png",
      Text: "Phòng Ngủ",
      id: 3,
    },
    {
      src: "./Croom.png",
      Text: "Phòng Khách",
      id: 4,
    },
    {
      src: "./Ckitchen.png",
      Text: "Phòng Bếp",
      id: 5,
    },
  ];
  useEffect(() => {
    axios
      .get(
        `https://localhost:7058/api/Poduct/GetProductCategory?Idcategory=${Idcategory}`
      )
      .then((response) => {
        console.log(response.data);
        const firstSixProducts = response.data.slice(0, 6);
        setProducts(firstSixProducts);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [Idcategory]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate("/ProductDetail", { state: { productId } });
  };
  const handleCate = (Id, index) => {
    setIdcategory(Id);
    setSelectedCategory(index);
  };
  return (
    <>
      <div className="home">
        <Header />
        <div className="home-view">
          <div className="home-showVideo">
            <img src="./Chungcu.png" alt="Chungcu" />
            {/* <video controls="f">
              
            </video> */}
          </div>
          <div className="home-Cate">
            <div className="home_cate_text">
              DỰ AN THIẾT KẾ - THI CÔNG NỘI THẤT
            </div>
            <div className="home_cate_icon">
              {imageCate.map((item, index) => (
                <div
                  key={index}
                  className={`cate_icon_index ${
                    index === selectedCategory ? "selected" : ""
                  }`}
                  onClick={() => handleCate(item.id, index)}
                >
                  <img src={item.src} alt="cateimgae" />
                  <div className="cate_icon_text">{item.Text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="home_product_cate">
            {Products?.map((product, index) => (
              <div
                key={index}
                className="product_index"
                onClick={() => handleProductClick(product.productId)}
              >
                <Product id={product.id} imageUrl={product.imagePath} />
              </div>
            ))}
          </div>
          <div className="home_intro">
            <div className="intro_text">
              <div className="intro_1">
                Khác biệt <br />
                của chúng tôi!
              </div>
              <div className="intro_2">
                Lý do làm nội thất trọn gói nên chọn GOAT INTERIOR
              </div>
              <div className="intro_3">
                <li>Đội KTS chuyên nghiệp - bản vẽ đạt chuẩn</li>
                <li>Có nhà xưởng sản xuất trực tiếp - giảm 30% chi phí</li>
                <li>Miễn phí thiết kế thi công nội thất trọn gói</li>
                <li>Cam kết thực hiện đúng 100% hợp đồng</li>
                <li>Bảo hành 2 năm - có mặt sau 48h tiếp nhận thông tin</li>
              </div>
            </div>
            <img src="./GOATINTERIOR.PNG" alt="image" className="image_intro" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
