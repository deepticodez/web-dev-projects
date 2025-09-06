import React from "react";
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

function Product({thumbnail,title,category,price,id}){
   
    return(
        <div className="flex flex-col pb-10">
            <img
              className="w-73 h-70 object-cover"
              src={thumbnail}
            />
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="text-[13px] text-gray-500">{category}</h3>
              <h3 className="text-[13px] font-semibold">{title}</h3>
              <div className="flex ">
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img 
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
              </div>
              <h3 className="text-[13px] text-gray-700 font-semibold">
                ${price}.00

              </h3>
              <Link className="text-sm text-red-700 font-semibold" to={"/products/" + id}>View Detail..</Link>
              
            </div>
            
          </div>

    );

}

export default Product;