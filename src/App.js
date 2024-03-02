import React from "react";
import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./Admin/context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./Admin/constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./Admin/assets/icons/moon.svg";
import SunIcon from "./Admin/assets/icons/sun.svg";
import BaseLayout from "./Admin/layout/BaseLayout";
import { Dashboard, PageNotFound } from "./Admin/screens";
import HomePage from "./layouts/home";
import Customer from "./Admin/screens/customer/Customer";
import AppStaff from "./Staff/AppStaff";
import DashboardStaff from "./Staff/components/DashBoardStaff";


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
            <Route path="/" element={<HomePage />}></Route>
          </Route>
          <Route element={<AppStaff />}>
            <Route path="/staff/dashboard" element={<DashboardStaff />}></Route>
            <Route path=" /staff/assignment" element={<DashboardStaff />}></Route>

          </Route>
          <Route element={<BaseLayout />}>
            <Route path="/admin" element={<Dashboard />} />
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
