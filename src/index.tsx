import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginScreen } from "./components/login/loginScreen";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { DesktopScreen } from "./components/desktop/desktopScreen";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginScreen />
    <DesktopScreen />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
