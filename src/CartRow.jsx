import React from "react";
import { RxCrossCircled } from "react-icons/rx";


function CartRow({item}) {
  return (
    <div className="flex flex-row border-1 border-gray-300 py-2">
      <div className="flex flex-row w-3/4 items-center">
        <RxCrossCircled className="size-12 align-middle pl-6 text-gray-500" />
        <img
          className="h-20 w-30 object-cover pl-8 "
          src={item.photo}
        />
        <h2 className="pl-15  ">{item.description}</h2>
      </div>
      <div className="flex flex-row w-full justify-evenly items-center">
        <h2 className="pl-3">${item.price}.00</h2>
        <input
          type="number"
          defaultValue={item.quantity}
          min={1}
          className="w-13 h-9 border px-2 py-1 text-center border-gray-300  text-gray-600"
        />
        <h2>${(item.price * item.quantity).toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default CartRow;
