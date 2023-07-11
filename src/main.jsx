import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
window.React = React;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
