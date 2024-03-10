import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "~/components/QuoteDetail/QuoteDetail.scss";
const QuoteDetail = ({ quoteData, setShowDetailQuote }) => {
  const navigation = useNavigate();
  const GoProduct = (product) => {
    navigation("/ProductDetail", { state: { product } });
  };

  return (
    <div className="confirmation-modal">
      <div className="quote_detail">
        <div className="close_quote_detail">
          <div className="quote_view_logo">
            <img className="logo_view" src="./logo-removebg-preview.png" />
          </div>
          <div
            className="quote_view_close"
            onClick={() => {
              setShowDetailQuote(false);
            }}
          >
            <IoClose className="close_click" />
          </div>
        </div>
        <div className="quote_detail_item">
          <div className="quote_detail_0">
            <div className="quote_detail_cate">
              Dự Án {quoteData.productCate}
              <div className="quote_detail_status">
                - {quoteData.quoteStatus}
              </div>
            </div>
            <div className="quote_detail_dateCreate">
              Ngày tạo : {quoteData.dateCreate}
            </div>
          </div>
          <div className="quote_detail_1">
            <div className="detail_meeting_status">Thông tin lịch hẹn</div>
            <div className="detail_meeting_data">
              <div className="detail_colum_info">
                <div className="detail_info_text">Ngày hẹn :</div>
                <div className="detail_info_text">Địa chỉ căn hộ :</div>
              </div>
              <div className="detail_colum_value">
                <div className="detail_info_text">{quoteData.dateSurvey}</div>
                <div className="detail_info_text">
                  {quoteData.addressSurvey}
                </div>
              </div>
            </div>
            <div className="detail_meeting_update">
              <button className="button_Submit">Chỉnh Sửa</button>
            </div>
          </div>
          <div className="quote_detail_2">
            <div className="detail_user_status">Thông tin liên hệ</div>
            <div className="quote_detail_info">
              <div className="quote_detail_user">
                <div className="detail_user_text">Thông tin của bạn</div>
                <div className="detail_user_data">
                  <div className="detail_colum_info">
                    <div className="detail_info_text">Tên :</div>
                    <div className="detail_info_text">Email :</div>
                    <div className="detail_info_text">Số điện thoại :</div>
                  </div>
                  <div className="detail_colum_value">
                    <div className="detail_info_text">{quoteData.userName}</div>
                    <div className="detail_info_text">
                      {quoteData.userEmail}
                    </div>
                    <div className="detail_info_text">
                      {quoteData.userPhone}
                    </div>
                  </div>
                </div>
              </div>
              <div className="quote_detail_staff">
                <div className="detail_user_text">Thông tin nhân viên</div>
                {quoteData.staffQuote.staffName === "" && (
                  <div className="detail_user_data">Đang chờ phân công</div>
                )}
                {quoteData.staffQuote.staffName !== "" && (
                  <div className="detail_user_data">
                    <div className="detail_colum_info">
                      <div className="detail_info_text">Tên :</div>
                      <div className="detail_info_text">Email :</div>
                      <div className="detail_info_text">Số điện thoại :</div>
                    </div>
                    <div className="detail_colum_value">
                      <div className="detail_info_text">
                        {quoteData.staffQuote.staffName}
                      </div>
                      <div className="detail_info_text">
                        {quoteData.staffQuote.staffEmail}
                      </div>
                      <div className="detail_info_text">
                        {quoteData.staffQuote.staffPhone}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="quote_detail_3">
            <div className="quote_detail_proText">Gói đã chọn</div>
            <div className="quote_detail_product">
              <img
                className="quote_item_productImg"
                src={quoteData.productThumbnail}
                alt="Ảnh"
              />
              <div
                className="quote_item_productName"
                onClick={(e) => {
                  e.stopPropagation();
                  GoProduct(quoteData.productId);
                }}
              >
                {quoteData.productName}
              </div>
            </div>
          </div>
          <div className="quote_detail_4">
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuoteDetail;
