import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import CartRow from "./CartRow";
import CartList from "./CartList";
import { getProductData } from "./api";
import { ImCross } from "react-icons/im";
import Loading from "./Loading";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [localCart, setLocalCart] = useState(cart);
  const productIds = Object.keys(cart);

  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  )


  useEffect(
    function () {
      setLoading(true);
      const myPromises = productIds.map((id) => getProductData(id));

      //const myproductpromises=productIds.map(function(id){
      // return getProductData(id);
      //}
      Promise.all(myPromises).then(function (products) {
        setProducts(products);
        setLoading(false);
      });
    },
    [cart]
  )

  function handleRemove(event) {
    const productId = event.currentTarget.getAttribute("data-productid");
    console.log("product to be removed", productId);
    const newCart = { ...cart };
    console.log("before cart", cart);
    delete newCart[productId];
    updateCart(newCart);
    
  }

  function updateMyCart() {
    updateCart(localCart);
  }
  function handleChange(event,productId) {
    const newValue = +event.target.value;
    
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }

  if (loading) {
    return <Loading />;
  }

  let subtotal = 0;
  for (let item of products) {
    const quantity = localCart[item.id] || 1;
    subtotal += item.price * quantity;
  }
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 bg-white rounded">
      <div className="border border-gray-200 rounded">
        <CartList
          items={products}
          handleRemove={handleRemove}
          handleChange={handleChange}
          localCart={localCart}
          updateMyCart={updateMyCart}
        />

        <div className="flex justify-end mt-6">
          <div className="border border-gray-300 p-4 rounded w-full sm:w-2/3 md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Cart totals</h2>
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-sm">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-red-500 text-white mt-4 px-4 py-2 rounded">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
