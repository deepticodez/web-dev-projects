import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="flex gap-4 flex-wrap justify-between pb-5">
      {products.map(function (item) {


        //product ki array ko jo app.jsx se ayi thi usko jsx array mein covert kr diya aur is jsx ko curly braces ke help se insert kr diya

        return (
          <Product
            key={item.description}
            {...item}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
