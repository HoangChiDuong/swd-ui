import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "~/App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "~/components/GlobalStyles";
import { ThemeProvider } from "./Admin/context/ThemeContext";
import { SidebarProvider } from "./Admin/context/SidebarContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </GlobalStyles>
  </React.StrictMode>
);

reportWebVitals();
