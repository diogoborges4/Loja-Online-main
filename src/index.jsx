import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Men from "./pages/Products/Men.jsx";
import ProductItem from "./pages/ProductItem/ProductItem.jsx";
import Woman from "./pages/Products/Woman.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import Summer from "./pages/Summer/Summer.jsx";
import Winter from "./pages/Winter/Winter.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import CartProducts from "./pages/CartProcucts/CartProducts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/menProducts" element={<Men />} />
            <Route path="/product/:id" element={<ProductItem />} />
            <Route path="/womanProducts" element={<Woman />} />
            <Route path="/summer" element={<Summer />} />
            <Route path="/winter" element={<Winter />} />
            <Route path="/cart" element={<CartProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
