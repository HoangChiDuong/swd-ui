import React from "react";
import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./Admin/context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./Admin/constants/themeConstants";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MoonIcon from "./Admin/assets/icons/moon.svg";
import SunIcon from "./Admin/assets/icons/sun.svg";
import BaseLayout from "./Admin/layout/BaseLayout";
import { Dashboard, PageNotFound } from "./Admin/screens";
import HomePage from "./layouts/home";

import Customer from "./Admin/screens/customer/Customer";
import AppStaff from "./Staff/AppStaff";
import DashboardStaff from "./Staff/components/DashBoardStaff";
import ViewProduct from "./layouts/customer/ViewProduct";
import ViewProductCate from "./layouts/customer/ViewProductCate";
import ViewQuotes from "./layouts/customer/ViewQuote";
import Assignment from "./Staff/components/Assignment";
import MainProducts from "./Staff/components/MainProduct";
import CreateProduct from "./Staff/components/CreateProduct";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme)

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <div>
      <Router>
        <Routes>

          <Route>

            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/ProductDetail" element={<ViewProduct />} />
            <Route path="/ProductByCate" element={<ViewProductCate />} />
            <Route path="/ProgressRequest" element={<ViewQuotes />} />
          </Route>
          <Route element={<AppStaff />}>
            <Route path="/staff/dashboard" element={<DashboardStaff />}></Route>
            <Route path="/staff/assignment" element={<Assignment />}></Route>
            <Route path="/staff/product" element={<MainProducts />}></Route>
            <Route path="/staff/product/create" element={<CreateProduct />}></Route>

          </Route>
          <Route element={<BaseLayout />}>
            <Route path="//admin/dashboard" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>

    </div>
  );
}
export default App;
