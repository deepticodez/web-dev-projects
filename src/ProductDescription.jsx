import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { withCart } from "./withProvider";

function ProductDescription({ handleAddToCart }) {
  const { id } = useParams();
  const productId = +id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    setCount(1);

    getProductData(productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  function handleCountChange(e) {
    setCount(+e.target.value);
  }

  function handleButtonClick() {
    handleAddToCart(productId, count);  // ✅ now correctly calls cart update
  }

  if (loading) return <Loading />;
  if (!product) return <NotFound />;

  return (
    <div className="flex justify-center my-10 mt-20">
      <div className="flex flex-col md:flex-row bg-white max-w-7xl w-full border-0 shadow-md ">
        {/* Left side - Image */}
        <div className="flex-1 p-8 flex justify-center items-center">
          <img
            src={"https://images.unsplash.com/photo-1746899603348-ab9afd71e16d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2UlMjBvZiUyMHNoaXJ0JTIwYWVzdGhldGljfGVufDB8fDB8fHww"}
            alt={product.title}
            className="object-contain max-h-[500px]"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex flex-col p-8">
          <div className="flex justify-between items-start">
            <h1 className="text-5xl text-gray-600 pb-4">{product.title}</h1>
            <Link to="/">
              <FaHome className="text-4xl text-pink-800" />
            </Link>
          </div>

          <h2 className="text-4xl font-bold text-gray-700 pb-6">
            ${product.price}
          </h2>

          <p className="text-[20px] leading-relaxed text-gray-500 pb-6">
            {product.description}
          </p>

          {/* Cart input */}
          <div className="flex items-center mb-6">
            <input
              type="number"
              value={count}
              min={1}
              onChange={handleCountChange}
              className="w-20 text-center border border-gray-300 py-2 px-3 mr-4 rounded"
            />
            <button
              onClick={handleButtonClick}
              className="bg-[#fc470f] text-white font-bold py-2.5 px-10 rounded"
            >
              ADD TO CART
            </button>
          </div>

          {/* Prev / Next */}
          <div className="flex justify-between mt-auto pt-6">
            {productId > 1 && (
              <Link to={`/products/${productId - 1}`}>
                <div className="inline-flex items-center gap-2 bg-gray-500 text-white py-2.5 px-6 rounded">
                  <IoMdArrowRoundBack />
                  Previous
                </div>
              </Link>
            )}
            <Link to={`/products/${productId + 1}`}>
              <div className="inline-flex items-center gap-2 bg-gray-500 text-white py-2.5 px-6 rounded">
                Next
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withCart(ProductDescription);
