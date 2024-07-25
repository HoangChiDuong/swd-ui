import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Product from "~/components/Product";
import "~/layouts/customer/ViewProductCate/ViewProductCate.scss";
const ViewProductCate = () => {
  const [Products, setProducts] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const des = location.state.id;
  useEffect(() => {
    axios
      .get(
        `https://localhost:7058/api/products/product-category?Idcategory=${des}`
      )
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
      window.scrollTo(0, 0);
  }, [des]);

  const handleProductClick = (productId) => {
    navigate("/ProductDetail", { state: { productId } });
  };
  return (
    <div className="home">
      <Header />
      <div className="view_cate_product">
        <div className="view_cate_show">
          <img
            src="../GOATINTERIOR.png"
            className="view_cate_show_img"
            alt="SlideShow"
          />
        </div>
        <div className="view_cate_product_log">
          <div className="view_cate_p_Text">Dự Án</div>
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
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default ViewProductCate;
