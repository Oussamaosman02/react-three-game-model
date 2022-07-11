import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./cmpnts/Home";
import "./index.css";
import Main from "./main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/*Main paths */}
      <Route path="/" element={<Home/>} />
      <Route path="/models" element={<Main />} />
      <Route path="/scene" element={<App />} />
    </Routes>
  </BrowserRouter>
);
