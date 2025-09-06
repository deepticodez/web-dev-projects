import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function Header({ productCount }) {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 w-full z-50 h-20 bg-white pt-2 flex items-center justify-between px-10">
      {/* Logo on the left */}
      <img
        className="h-12"
        src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
        alt="Logo"
      />

      {/* Buttons + Cart grouped together */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-red-700 border border-red-600 px-3 py-1 rounded hover:bg-teal-50"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/login")}
          className="text-sm text-red-700 border border-red-600 px-3 py-1 rounded hover:bg-teal-50"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="text-sm text-red-700 border border-red-600 px-3 py-1 rounded hover:bg-teal-50"
        >
          Signup
        </button>

        {/* Cart icon */}
        <Link to="/cart" className="relative">
          <HiOutlineShoppingCart className="size-10 text-black" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {productCount}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
