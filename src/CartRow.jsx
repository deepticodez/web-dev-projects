import React from "react";

function CartRow({ item, handleRemove, handleChange }) {
  return (
    <div className="flex flex-row border-1 border-gray-300 py-2">
      
      {/* Left section: Remove button, image, title */}
      <div className="flex flex-row w-3/4 items-center">
        <button
          className="text-xl px-1"
          onClick={handleRemove}
          data-productid={item.id}
        >
          ✖
        </button>
        <img
          className="h-20 w-20 object-cover"
          src={"https://images.unsplash.com/photo-1746899603348-ab9afd71e16d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2UlMjBvZiUyMHNoaXJ0JTIwYWVzdGhldGljfGVufDB8fDB8fHww"} // dynamic image
          alt={item.title}
        />
        <h2 className="pl-15">{item.title}</h2>
      </div>

      {/* Right section: Price, quantity input, subtotal */}
      <div className="flex flex-row w-full justify-evenly items-center">
        <h2 className="pl-3">${item.price.toFixed(2)}</h2>
        <input
          id={item.id}
          type="number"
          value={item.quantity}
          min={1}
          onChange={(e) => handleChange(e, item.id)}
          className="w-13 h-9 border px-2 py-1 text-center border-gray-300 text-gray-600"
        />
        <h2>${(item.price * item.quantity).toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default CartRow;
