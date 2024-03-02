import { useLocation, useNavigate } from "react-router-dom";
import Header from "~/components/Header";
import Product from "~/components/Product";
import "~/layouts/customer/ViewProductCate/ViewProductCate.scss";
const ViewProductCate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const des = location.state.id;
  console.log(des);
  const Products = [
    {
      id: 1,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 2,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 3,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 4,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 5,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 6,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
  ];
  const handleProductClick = (productId) => {
    navigate("/XemSanPham", { state: { productId } });
  };
  return (
    <div className="home">
      <Header />
      <div className="view_cate_product">
        <div className="view_cate_show">
          <img src="./SlideShow.png" className="view_cate_show_img" alt="SlideShow"/>
        </div>
        <div className="view_cate_product">
          <div className="view_cate_p_Text">Dự Án</div>
          <div className="home_product_cate">
            {Products.map((product, index) => (
              <div
                key={index}
                className="product_index"
                onClick={() => handleProductClick(product.id)}
              >
                <Product id={product.id} imageUrl={product.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewProductCate;
