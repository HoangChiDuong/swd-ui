import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "~/App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "~/components/GlobalStyles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "./Admin/context/ThemeContext";
import { SidebarProvider } from "./Admin/context/SidebarContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="397155122268-l2692g77c1s2hh0k5tpnhsloilskfh7h.apps.googleusercontent.com">
      <GlobalStyles>
        <Provider store={store}>
          <ThemeProvider>
            <SidebarProvider>
              <App />
            </SidebarProvider>
          </ThemeProvider>
        </Provider>
      </GlobalStyles>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
