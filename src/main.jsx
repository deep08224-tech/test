import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <WishlistProvider>
            <ProductProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </ProductProvider>
          </WishlistProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
