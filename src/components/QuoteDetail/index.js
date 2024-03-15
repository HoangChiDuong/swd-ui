import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa6";
import { PDFDocument, rgb } from "pdf-lib";
import { FaSignature } from "react-icons/fa";
import numeral from "numeral";
import "~/components/QuoteDetail/QuoteDetail.scss";
import SignatureComponent from "../Signature";
import LoadingFive from "../Loading";
const QuoteDetail = ({ quoteData, setShowDetailQuote }) => {
  const navigation = useNavigate();
  const [contractFileapi, setContractFileapi] = useState();
  const [gopay, setGopay] = useState(false);
  const [signedPdfUrl, setSignedPdfUrl] = useState(null);
  const [showLoad, setShowLoad] = useState(false);
  const GoProduct = (product) => {
    navigation("/ProductDetail", { state: { productId: product } });
  };
  const paydata = {
    contractId: quoteData.contracData.contractId,
    method: "VnPay",
    userId: quoteData.userData.userId,
    ContractFile: contractFileapi,
  };

  const Pay_Vnpay = async () => {
    setShowLoad(true);
    try {
      const formData = new FormData();
      formData.append("ContractId", quoteData.contracData.contractId);
      formData.append("Method", "VnPay");
      formData.append("userId", quoteData.userData.userId);
      formData.append("ContractFile", contractFileapi);

      const response = await axios.post(
        "https://localhost:7058/api/Payment/Pay",
        formData
      );
      if (response !== null) {
        setShowLoad(false);
        window.location.href = response.data.paymentUrl;
      }
    } catch (error) {
      console.error("Error while making payment:", error);
    }
  };

  useEffect(() => {
    if (signedPdfUrl != null) {
      const lastElement = document.querySelector(
        ".quote_detail_item .view_contract"
      );
      if (lastElement) {
        lastElement.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }
  }, [signedPdfUrl]);
  const toggleFileWindow = () => {
    setSignedPdfUrl(quoteData.contracData.contracFile);
  };
  const [signature, setSignature] = useState(null);
  const addSignatureToPDF = async (signature) => {
    try {
      const existingPdfBytes = await fetch(
        quoteData.contracData.contracFile
      ).then((res) => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const page = pdfDoc.getPage(2); // Hoặc trang bạn muốn ký

      const signatureImageBytes = Uint8Array.from(
        atob(signature.split("base64,")[1]),
        (c) => c.charCodeAt(0)
      );
      // Tải ảnh chữ ký vào PDF
      const signatureImage = await pdfDoc.embedPng(signatureImageBytes);

      page.drawImage(signatureImage, {
        x: 140,
        y: 80,
        width: 130,
        height: 30,
        color: rgb(0, 0, 0),
      });

      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const data = await bufferToBase64(new Uint8Array(pdfBytes));
      setContractFileapi(data);
      console.log(data);
      setSignedPdfUrl(pdfUrl);
      setGopay(true);
    } catch (error) {
      console.error("Error adding signature to PDF:", error);
    }
  };
  async function bufferToBase64(buffer) {
    const base64url = await new Promise((r) => {
      const reader = new FileReader();
      reader.onload = () => r(reader.result);
      reader.readAsDataURL(new Blob([buffer]));
    });
    return base64url.slice(base64url.indexOf(",") + 1);
  }

  const priceProduct = parseInt(quoteData.contracData.priceProduct);
  const priceConstruc = parseInt(quoteData.contracData.priceConstruc);
  const totalPrice = priceProduct + priceConstruc;

  const pricePay = totalPrice * 0.3;
  return (
    <div className="confirmation-modal">
      {showLoad === true && <LoadingFive />}
      <div className="quote_detail">
        <div className="close_quote_detail">
          <div className="quote_view_logo">
            <img className="logo_view" src="../../logo-removebg-preview.png" />
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
              Mã Dự Án {quoteData.prodcuctData.productCate}
              <div className="quote_detail_status">
                Goat#0{quoteData.requestId} /
              </div>
              <div className="quote_detail_status">
                Trạng Thái - {quoteData.status}
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
                <div className="detail_info_text">{quoteData.address}</div>
              </div>
            </div>
            <div className="detail_meeting_update">
              {quoteData.status === "Đang Xử Lí" && (
                <button className="button_Submit">Chỉnh Sửa</button>
              )}
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
                    <div className="detail_info_text">
                      {quoteData.userData.userName}
                    </div>
                    <div className="detail_info_text">
                      {quoteData.userData.userEmail}
                    </div>
                    <div className="detail_info_text">
                      {quoteData.userData.userPhone}
                    </div>
                  </div>
                </div>
              </div>
              <div className="quote_detail_staff">
                <div className="detail_user_text">Thông tin nhân viên</div>
                {quoteData.staffData.staffName === null && (
                  <div className="detail_user_data">Đang chờ phân công</div>
                )}
                {quoteData.staffData.staffName !== null && (
                  <div className="detail_user_data">
                    <div className="detail_colum_info">
                      <div className="detail_info_text">Tên :</div>
                      <div className="detail_info_text">Email :</div>
                      <div className="detail_info_text">Số điện thoại :</div>
                    </div>
                    <div className="detail_colum_value">
                      <div className="detail_info_text">
                        {quoteData.staffData.staffName}
                      </div>
                      <div className="detail_info_text">
                        {quoteData.staffData.staffEmail}
                      </div>
                      <div className="detail_info_text">
                        {quoteData.staffData.staffPhone}
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
                src={quoteData.prodcuctData.productThumbnail}
                alt="Ảnh"
              />
              <div
                className="quote_item_productName"
                onClick={(e) => {
                  e.stopPropagation();
                  GoProduct(quoteData.prodcuctData.productId);
                }}
              >
                {quoteData.prodcuctData.productName}
              </div>
            </div>
          </div>
          {(quoteData.contracData.status === "2" ||
            quoteData.contracData.status === "3") && (
            <div className="quote_detail_4">
              <div className="quote_detail_proText">Kết Quả Báo Giá</div>
              <div className="quote_detail_price">
                <div className="price_viewer">
                  <div className="info_cate"> Giá vật tư:</div>
                  <div className="price_viewer_data">
                    {numeral(quoteData.contracData.priceProduct).format("0,0")}
                    <div className="price_type">vnđ</div>
                  </div>
                </div>
                <div className="price_viewer">
                  <div className="info_cate"> Giá thi công:</div>
                  <div className="price_viewer_data">
                    {numeral(quoteData.contracData.priceConstruc).format("0,0")}
                    <div className="price_type">vnđ</div>
                  </div>
                </div>
              </div>

              {quoteData.contracData.status === "2" && (
                <div>
                  <div className="quote_detail_price">
                    <div className="price_viewer">
                      <div className="info_cate2">
                        Thanh toán trước 30% khi ký hợp đồng:
                      </div>
                      <div className="price_viewer_data1">
                        {numeral(pricePay).format("0,0")}
                        <div className="price_type">vnđ</div>
                      </div>
                    </div>
                  </div>
                  <div className="quote_detail_contract">
                    <SignatureComponent
                      setSignature={setSignature}
                      setSignedPdfUrl={setSignedPdfUrl}
                      setGopay={setGopay}
                    />
                    <div className="quote_detail_"></div>
                    <div className="quote_detail_btn">
                      {signature !== null && (
                        <button
                          className="button_file"
                          onClick={() => {
                            addSignatureToPDF(signature);
                          }}
                        >
                          <FaSignature className="button_view_file" /> Ký Hợp
                          Đồng
                        </button>
                      )}
                      {signature === null && (
                        <button
                          className="button_file_view"
                          onClick={toggleFileWindow}
                        >
                          <FaFilePdf className="button_view_file" /> Xem Hợp
                          Đồng
                        </button>
                      )}

                      {gopay && (
                        <button className="button_PayMent" onClick={Pay_Vnpay}>
                          <img
                            className="button_PayMent_img"
                            src={"../../IconVNPAY.png"}
                          />
                          Đặt Cọc
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {quoteData.contracData.status === "3" && (
            <div className="quote_detail_price">
              <div className="price_viewer">
                <div className="info_cate2">
                  Đã thanh toán trước 30% hợp đồng:
                </div>
                <div className="price_viewer_data1">
                  {numeral(pricePay).format("0,0")}
                  <div className="price_type">vnđ</div>
                </div>
              </div>
            </div>
          )}
          {signature === null && (
            <button className="button_file_view" onClick={toggleFileWindow}>
              <FaFilePdf className="button_view_file" /> Xem Hợp Đồng
            </button>
          )}
          {signedPdfUrl !== null && (
            <div
              className="view_contract"
              style={{ width: "100%", height: "500px" }}
            >
              <embed
                src={signedPdfUrl}
                type="application/pdf"
                width="100%"
                height="500px"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuoteDetail;
