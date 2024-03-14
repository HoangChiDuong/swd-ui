import { NavLink, Routes, Route } from "react-router-dom";
import Header from "~/components/Header";
import Deposited from "~/components/RequestStatus/Deposited";
import NewRequest from "~/components/RequestStatus/NewRequest";
import Quoted from "~/components/RequestStatus/Quoted";

import WaitSurvey from "~/components/RequestStatus/WaitSurvey";
import "~/layouts/customer/ViewQuote/ViewQuote.scss";
import AllRequest from "~/components/RequestStatus/AllRequest";

const ViewQuotes = () => {
  return (
    <div className="home">
      <div className="quote_page">
        <header className="quote_view">
          <Header />
          <div className="quote_status">
            {/* <NavLink
              to="/ProgressRequest/AllRequest"
              className="MyPurchase-cate"
              activeClassName="active"
            >
              <div className="NavLink-text">Tất Cả</div>
            </NavLink> */}
            <NavLink
              to="/ProgressRequest/NewRequest"
              className="MyPurchase-cate"
              activeClassName="active"
            >
              <div className="NavLink-text">Yêu Cầu Mới</div>
            </NavLink>
            <NavLink
              to="/ProgressRequest/WaitSurvey"
              className="MyPurchase-cate"
              activeClassName="active"
            >
              <div className="NavLink-text">Chờ Khảo Sát</div>
            </NavLink>

            <NavLink
              to="/ProgressRequest/Quoted"
              className="MyPurchase-cate"
              activeClassName="active"
            >
              <div className="NavLink-text">Đã Báo Giá</div>
            </NavLink>

            <NavLink
              to="/ProgressRequest/Deposited"
              className="MyPurchase-cate"
              activeClassName="active"
            >
              <div className="NavLink-text">Đã Đặt Cọc</div>
            </NavLink>
          </div>
          <div className="quote_view_page">
            <Routes>
              <Route path="/NewRequest" element={<NewRequest />} />
              <Route path="/WaitSurvey" element={<WaitSurvey />} />
              <Route path="/Quoted" element={<Quoted />} />
              <Route path="/Deposited" element={<Deposited />} />
              <Route path="/AllRequest" element={<AllRequest />} />
            </Routes>
          </div>
        </header>
      </div>
    </div>
  );
};
export default ViewQuotes;
