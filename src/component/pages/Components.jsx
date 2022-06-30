import React from "react";
import NavbarComponent from "./navbar";
import About from "./about";
import Support from "./support";
import Home from "./home";
import Products from "./shop/products/Products";
import Product from './shop/product/Product'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./todo/todocomp/Todo";

const Components = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/products" element={<Products />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/products/product/:id" element={<Product/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Components;
