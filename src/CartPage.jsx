import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import CartRow from "./CartRow";
import CartList from "./CartList";

const cartdata = [
  {
    id: 1,
    photo:
      "https://plus.unsplash.com/premium_photo-1719017276454-99ae8306c200?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVnfGVufDB8fDB8fHww",

    description: "White plain classy Mug",
    price: 15,
    quantity: 2,
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11Z3xlbnwwfHwwfHx8MA%3D%3D",

    description: "White gold handle Mug",
    price: 25,
    quantity: 3,
  },
];
function CartPage() {
    let subtotal = 0;
  for (let item of cartdata) {
    subtotal += item.price * item.quantity;
  }
  return (
    <>
      <div className=" bg-white flex flex-col my-13  max-w-screen mx-13 px-28 py-23 ">
        <div>
          <div className="flex flex-row text-1xl font-semibold text-gray-600 py-3 border-1 border-gray-300 bg-gray-100">
            <h2 className="w-3/4 text-center pl-20">Product</h2>
            <div className="flex flex-row w-full justify-evenly ">
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Subtotal</h2>
            </div>
          </div>
          <CartList items={cartdata} />
          <div className="flex justify-between items-center flex-wrap gap-4  py-4">
            <div className="flex gap-3">
              <input
                placeholder="Coupon code"
                className="border px-3 py-2 rounded text-sm w-40"
              />
              <button className=" bg-red-600 text-white text-sm px-8 py-2 rounded">
                APPLY COUPON
              </button>
            </div>

            <div>
              <button className="bg-red-300 text-gray-500 text-sm px-8 py-2 rounded">
                UPDATE CART
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
        <div className="border border-gray-300 rounded w-full md:w-1/3">
          <h2 className="text-1xl text-gray-600 font-semibold border  
          border-gray-100 px-4 py-2 bg-gray-100 ">Cart totals</h2>
          <div className="flex justify-between border border-gray-100 px-3 py-2">
            <span>Subtotal</span>
            <span className="pr-4">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold border border-gray-100 px-3 py-2">
            <span>Total</span>
            <span className="pr-4">${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default CartPage;
