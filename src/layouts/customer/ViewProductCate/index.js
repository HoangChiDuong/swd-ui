import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "~/components/Header";
import Product from "~/components/Product";
import "~/layouts/customer/ViewProductCate/ViewProductCate.scss";
const ViewProductCate = () => {
  const [Products,setProducts] = useState() 
  const navigate = useNavigate();
  const location = useLocation();
  const des = location.state.id;
  useEffect(() => {
    if (des === "cate1" || des === "cate2") {
    } else if (des !== "cate1" && des !== "cate2") {
      axios.get(
        `https://localhost:7058/api/Poduct/GetProductCategory?Idcategory=${des}`
      ).then((response) => {
        console.log(response.data);
        setProducts(response.data)
      });
    }
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
            src="./SlideShow.png"
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
    </div>
  );
};
export default ViewProductCate;
