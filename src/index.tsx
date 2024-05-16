import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginScreen } from "./components/login";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { DesktopScreen } from "./components/desktop";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Provider } from "react-redux";
import { store } from "./state/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <LoginScreen />
      <DesktopScreen />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
