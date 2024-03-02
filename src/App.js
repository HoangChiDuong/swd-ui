import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./layouts/home";
import ViewProduct from "./layouts/customer/ViewProduct";
import ViewProductCate from "./layouts/customer/ViewProductCate";
import ViewQuotes from "./layouts/customer/ViewQuote";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/XemSanPham" element={<ViewProduct/>}/>
          <Route path="/SanPhamTheoDanhMuc" element={<ViewProductCate/>}/>
          <Route path="/TienTrinhYeuCau" element={<ViewQuotes/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
