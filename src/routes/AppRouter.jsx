import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Header from "../components/Header";
import { ProductProvider } from "../context/ProductContext";
import AddProduct from "../pages/AddProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
