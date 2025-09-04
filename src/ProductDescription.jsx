import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { getProductData } from "./api";
import Loading from "./Loading";
import { FaArrowRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import NotFound from "./NotFound";

function ProductDescription({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  console.log("Product Detail running", id);

  useEffect(
    function () {
      setLoading(true);
      setCount(1);
      const p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);

        

      }).catch(function(error){
        console.log("api mein kuch",error);
        setLoading(false);

      })
      //square bracket mein id de di hai it means now useEffect won'nt run once it will run each time the id is changed
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  //agar product nhi aya to ye otherwise RETURN VALA PART normal vala ...
  /*if(!product){
    return <div className="text-blue-800">Loading...</div>;
  }*/

  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen my-10">
        <div className="flex flex-row w-340 h-160 border-0 bg-white ">
          <img
            className="px-8 py-8"
            src={product.thumbnail}
            alt="image did not load"
          />
          <div className="py-8 pl-4 pr-15">
            <div className="flex justify-between">
              <h1 className="text-5xl pb-8 text-gray-600">{product.title}</h1>
              <Link to="/">
                <div className="text-4xl text-pink-800 ">
                  <FaHome />
                </div>
              </Link>
            </div>
            <h1 className="text-4xl pb-6 text-gray-700 font-bold">
              ${product.price}
            </h1>
            <p className=" text-[20px] leading-relaxed text-gray-500 pb-7">
              {product.description}
            </p>
            <div>
              <input
                type="number"
                value={count}
                onChange={handleCountChange}
                className="border pl-3 pr-3 py-2 font-serif border-gray-300 mr-2 w-20 text-center"
              />
              <button
                onClick={handleButtonClick}
                className="bg-[#fc470f] py-2.5 px-15 text-1xl text-white font-bold rounded-sm"
              >
                ADD TO CART
              </button>
            </div>

            <div className="flex justify-between mt-auto pt-6">
              {id > 1 && (
                <Link to={"/products/" + (id - 1)}>
                  <div className="inline-flex flex-row text-white bg-gray-500 text-center gap-1 items-center pr-7 pl-3  py-2.5 rounded my-6 ">
                    <IoMdArrowRoundBack />
                    Previous
                  </div>
                </Link>
              )}
              <Link to={"/products/" + (id + 1)}>
                <div className="inline-flex flex-row text-white bg-gray-500 text-center gap-1 items-center pr-7 pl-3  py-2.5 rounded my-6 ">
                  Next
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
