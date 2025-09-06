import React, { useEffect, useState } from "react";

import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";

function ProductListPage() {




  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  //initially we want the loading to show so its true but as the data will be loaded from the api key it will turn false

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    getProductList().then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    return item.description.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

  if (sort == "priceInc") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.description < y.description ? -1 : 1;
    });
  } else if (sort == "priceDec") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-full bg-gray-200 min-h-screen">
      <div className="">
        <div className=" bg-white flex flex-col my-14 max-w-screen mx-40 px-30">
         
          <div className="flex flex-col md:flex-row mt-17 mb-8 justify-between">
            <input
              className=" text-gray-600 text-[13px] border border-gray-200 bg-gray-50 py-1.5 pl-4 pr-34 self-start "
              placeholder="🔍  Search"
              value={query}
              onChange={handleQueryChange}
            />
            <select
              onChange={handleSortChange}
              className="text-gray-600 text-[12px] border border-gray-200 py-2 pl-1 pr-17 bg-gray-50 block "
              value={sort}
            >
              <option value="default">Default Sort</option>
              <option value="name">Sort by title</option>
              <option value="priceInc">Sort by price: low to high</option>
              <option value="priceDec">Sort by price: high to low</option>
            </select>
          </div>
          {data.length > 0 && <ProductList products={data} />}
          {data.length == 0 && (
            <NoMatching>oops.. no matching results found</NoMatching>
          )}
          {data.length <= 1 && (
            <NoMatching>try some other words to see more results</NoMatching>
          )}

          <div className="flex flex-row gap-1 pb-30">
            <button className="bg-red-500 px-4 py-1 text-lg text-white">
              1
            </button>
            <button className="border border-red-500 text-red-500 py-1 px-4">
              2
            </button>
            <button className="border border-red-500 text-red-500 py-1 px-4">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
