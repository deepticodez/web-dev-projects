import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import ProductListPage from "./ProductListPage";
import CartPage from "./CartPage";
import NotFound from "./NotFound";

import ProductDescription from "./ProductDescription";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import CartRow from "./CartRow";
import CartList from "./CartList";

/*
const cart={
     3:2,
     5:4,
     7:1
}

*/
/*const a='{"title" : "iphone","price" : 25,"category" : "phone",}';
const b={title : "iphone",price : 25,category : "phone",};
const c=JSON.parse(a); //object jaisi string ko actual object mein covert.
const d=JSON.stringyfy(b); //object ko string mein convert
 
console.log("price is ",b["price"],typeof a,typeof b);*/

function App() {
  /*const mycart = { 32: 3, 7: 98, 5: 2 };
    const promises = Object.keys(mycart).map(function (productId) {
      return getProductList(productId);
    });
    const badiPromise = Promise.all(promises);
    badiPromise.then(function (products) {
      console.log("promises ka data", products);
    });*/

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    //cart[productId] =oldCount + count; //object mutation
    updateCart(newCart);
  }


  function updateCart(newCart){
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

  const path = window.location.pathname;
  console.log("path is", path);

  return (
    <div className="max-w-full bg-gray-200 min-h-screen">
      <Header productCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route
            path="/products/:id"
            element={<ProductDescription onAddToCart={handleAddToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<CartPage cart={cart} updateCart={updateCart} />}
          ></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

/*<div className="flex">
  <div className="w-32 h-screen bg-gray-500 p-2 flex flex-col space-y-2">
    <a href="/assignments">Assignemnts</a>
    <a href="/lectures">Lecture</a>
  </div>
  {path == "/assignments" && <AssignmentPage />}
  {path == "/lectures" && <LecturePage />}
</div>;*/
