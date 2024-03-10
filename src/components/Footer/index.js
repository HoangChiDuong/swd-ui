import "~/components/Footer/Footer.scss";
function Footer({}) {
  return (
    <div className="footer">
      <div className="footer_item">
        <div className="footer_log2">
          <div className="footer_img">
            <img src="./LogoSWD.png" alt="" className="footer_img_item" />
          </div>
        </div>
        <div className="footer_log1">
          Thông Tin Liên Hệ
          <div className="name_cpn">CÔNG TY CỔ PHẦN NỘI THẤT GOAT INTERIOR</div>
          <div className="info_icon">
            <img src="./icon-facebook.svg" alt="" className="footer_img_info" />
            <img src="./icon-zalo.svg" alt="" className="footer_img_info" />
            <img
              src="./icon-instagram.svg"
              alt=""
              className="footer_img_info"
            />
          </div>
          <div className="info_cpn">
            Tuvan@noithatmanhhe.vn <br />
            Hotline: 0397 337 051 - Tel: 0869.048.791 <br />
            Thời gian làm việc 8:00 - 17:00 (Th2 - Th7)  <br />
            Giấy ĐKKD Số: ****** cấp ngày 31/02/2024 tại Hồ Chí Minh  <br />
            Mã số thuế: ******* Ngày cấp: 31/02/2024 <br />
          </div>
        </div>
        <div className="footer_log1">Chăm Sóc Khách Hàng
        <div className="name_cpn">Quy trình làm việc</div>
        <div className="name_cpn">Chăm sóc khách hàng sau hợp đồng</div>
        <div className="name_cpn">GOAT INTERIOR</div>
        <div className="name_cpn">GOAT INTERIOR</div>

        </div>
      </div>
    </div>
  );
}
export default Footer;
