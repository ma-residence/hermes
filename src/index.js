import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ToastProvider } from "react-toast-notifications";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider placement="bottom-center">
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
