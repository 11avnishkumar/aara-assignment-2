import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Products />} />
            <Route path="product_details/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
