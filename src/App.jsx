import React, { useState, useCallback, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import ProductList from "./ProductList";
import CartPage from "./CartPage";
import NotFound from "./NotFound";

import ProductDescription from "./ProductDescription";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import CartRow from "./CartRow";
import CartList from "./CartList";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
import Alert from "./Alert";
import UserProvider from "./UserProvider";
import AlertProvider from "./AlertProvider";
import CartProvider from "./CartProvider";

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

  return (
    <UserProvider>
      <CartProvider>
        <AlertProvider>
          <div className="max-w-full bg-gray-200 min-h-screen">
            <Header />
            <Alert />
            <main className="grow">
              <Routes>
                <Route
                  index
                  element={
                    <UserRoute>
                      <ProductList/>
                    </UserRoute>
                  }
                />
                <Route
                  path="/products/:id"
                  element={
                    <UserRoute>
                      <ProductDescription />
                    </UserRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <UserRoute>
                      <CartPage />
                    </UserRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <AuthRoute>
                      <LoginPage />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <AuthRoute>
                      <SignUp />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/forgot-password"
                  element={<ForgotPassword />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AlertProvider>
      </CartProvider>
    </UserProvider>
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
