import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import { HashRouter } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="642450306998-56a53nddo1rqtopl2330q4qetf2j1tlu.apps.googleusercontent.com">
    <HashRouter>
      <App />
    </HashRouter>
  </GoogleOAuthProvider>
);
