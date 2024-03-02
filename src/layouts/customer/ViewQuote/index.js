import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "~/components/Header";
import QuoteDetail from "~/components/QuoteDetail";
import "~/layouts/customer/ViewQuote/ViewQuote.scss";

const ViewQuotes = () => {
  const navigation = useNavigate();
  const [showDetailQuote, setShowDetailQuote] = useState(false);
  const [quoteDetailData, setQuoteDetailData] = useState({});

  const quote = [
    {
      quoteId: 5,
      quoteStatus: "Đang xử lí",
      dateCreate: "23/02/2024",
      dateSurvey: "27/02/2024",
      priceQuote: {
        priceProduct: "",
        priceConstruc: "",
      },
      staffQuote: {
        staffName: "",
        staffPhone: "",
        staffEmail: "",
      },

      addressSurvey:
        "44,cầu vòng, Phường Long Thạnh Mỹ, Quận 9, Thành Phố Hồ Chí Minh",
      userId: 3,
      userName: "Lê Đình Thành",
      userEmail: "Goat@gmail.com",
      userPhone: "0386886868",
      productId: 3,
      productName: "Mẫu phòng khách đẹp đẳng cấp với gỗ Sồi tự nhiên",
      productCate: "Phòng Khách",
      productThumbnail:
        "https://noithatmanhhe.vn/media/18959/1-khong-gian-noi-that-phong-khach-chung-cu-noi-that-manh-he.jpg?width=700&height=484.16666666666663&rmode=boxpad",
    },
    {
      quoteId: 4,
      quoteStatus: "Tạo Lịch Hẹn Thành Công",
      dateCreate: "24/02/2024",
      dateSurvey: "30/02/2024",
      priceQuote: {
        priceProduct: "",
        priceConstruc: "",
      },
      staffQuote: {
        staffName: "Nguyễn Võ Tùng Lâm",
        staffPhone: "0333641338",
        staffEmail: "tunglam@gmail.com",
      },
      addressSurvey:
        "44,cầu vòng, Phường Long Thạnh Mỹ, Quận 9, Thành Phố Hồ Chí Minh",
      userId: 3,
      userName: "Lê Đình Thành",
      userEmail: "Goat@gmail.com",
      userPhone: "0386886868",
      productId: 5,
      productName: "Hoàn thiện nội thất nhà phố Anh Hùng - Bình Dương - 3PN",
      productCate: "Nhà Phố",
      productThumbnail:
        "https://noithatmanhhe.vn/media/32664/thi-cong-noi-that-phong-bep-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      quoteId: 3,
      quoteStatus: "Khách Hàng Chỉnh Sửa Lịch Hẹn",
      dateCreate: "17/02/2024",
      dateSurvey: "21/02/2024",
      priceQuote: {
        priceProduct: "",
        priceConstruc: "",
      },
      staffQuote: {
        staffName: "",
        staffPhone: "",
        staffEmail: "",
      },
      addressSurvey:
        "44,cầu vòng, Phường Long Thạnh Mỹ, Quận 9, Thành Phố Hồ Chí Minh",
      userId: 3,
      userName: "Lê Đình Thành",
      userEmail: "Goat@gmail.com",
      userPhone: "0386886868",
      productId: 2,
      productName: "Nội thất phòng khách liền bếp chung cư đẹp hiện đại",
      productCate: "Phòng Khách",
      productThumbnail:
        "https://noithatmanhhe.vn/media/37333/thiet-ke-noi-that-phong-khach-1.jpg?rmode=max&width=500",
    },
    {
      quoteId: 2,
      quoteStatus: "Đã Báo Giá",
      priceQuote: {
        priceProduct: "30000000",
        priceConstruc: "10000000",
      },
      staffQuote: {
        staffName: "Nguyễn Võ Tùng Lâm",
        staffPhone: "0333641338",
        staffEmail: "tunglam@gmail.com",
      },
      dateCreate: "02/01/2024",
      dateSurvey: "01/02/2024",
      addressSurvey:
        "44,cầu vòng, Phường Long Thạnh Mỹ, Quận 9, Thành Phố Hồ Chí Minh",
      userId: 3,
      userName: "Lê Đình Thành",
      userEmail: "Goat@gmail.com",
      userPhone: "0386886868",
      productId: 3,
      productName: "Mẫu phòng khách đẹp gam màu xi măng chưa bao giờ hết HOT",
      productCate: "Phòng Khách",
      productThumbnail:
        "https://noithatmanhhe.vn/media/19932/khong-gian-noi-that-phong-khach-noi-that-manh-he.jpg?width=700&height=399.765625&rmode=boxpad",
    },
    {
      quoteId: 1,
      quoteStatus: "Ký Hợp Đồng Thành Công",
      dateCreate: "23/02/2024",
      dateSurvey: "27/02/2024",
      priceQuote: {
        priceProduct: "30000000",
        priceConstruc: "10000000",
      },
      staffQuote: {
        staffName: "Nguyễn Võ Tùng Lâm",
        staffPhone: "0333641338",
        staffEmail: "tunglam@gmail.com",
      },
      addressSurvey:
        "44,cầu vòng, Phường Long Thạnh Mỹ, Quận 9, Thành Phố Hồ Chí Minh",
      userId: 3,
      userName: "Lê Đình Thành",
      userEmail: "Goat@gmail.com",
      userPhone: "0386886868",
      productId: 3,
      productName: "Thiết kế nội thất phòng khách có quầy bar sang trọng",
      productCate: "Phòng Khách",
      productThumbnail:
        "https://noithatmanhhe.vn/media/34072/thiet-ke-noi-that-phong-khach-lien-bep-1.jpg?rmode=max&width=500",
    },
  ];
  const GoProduct = (product) => {
    navigation("/XemSanPham", { state: { product } });
  };
  
  const ShowDetailQuote = (quotes) => {
    setShowDetailQuote(true);
    setQuoteDetailData(quotes);
  };
  return (
    <div className="home">
      <Header />
      {showDetailQuote && (
        <QuoteDetail
          setShowDetailQuote={setShowDetailQuote}
          quoteData={quoteDetailData}
        />
      )}
      <div className="quote_page">
        <div className="quote_view">
          <div className="quote_status">Dự án bạn đã gửi yêu cầu báo giá</div>
          <div className="quote_item_view">
            {quote.map((IsQuote, index) => (
              <div
                key={index}
                className="quote_item"
                onClick={() => {
                  ShowDetailQuote(IsQuote);
                }}
              >
                <div className="quote_item_1">
                  <div className="quote_item_cate">
                    Dự Án {IsQuote.productCate}
                    <div className="quote_item_status">
                      - {IsQuote.quoteStatus}
                    </div>
                  </div>
                  <div className="quote_item_dateCreate">
                    Ngày tạo : {IsQuote.dateCreate}
                  </div>
                </div>
                <div className="quote_item_2">
                  <img
                    className="quote_item_productImg"
                    src={IsQuote.productThumbnail}
                    alt="Ảnh"
                  />
                  <div
                    className="quote_item_productName"
                    onClick={(e) => {
                      e.stopPropagation();
                      GoProduct(IsQuote.productId);
                    }}
                  >
                    {IsQuote.productName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="quote_view_more product"></div>
      </div>
    </div>
  );
};
export default ViewQuotes;
