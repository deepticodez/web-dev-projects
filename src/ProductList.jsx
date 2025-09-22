import React, { useEffect, useState, useCallback } from "react";
import Product from "./Product";
import NoMatching from "./NoMatching";
import { getProductList } from "./api";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
import NoOfPages from "./NoOfPages";

function ProductList() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  let [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let { query, sortType, page } = params;
  query = query || "";
  sortType = sortType || "default";
  page = +page || 1;

  useEffect(() => {
    setLoading(true);

    // map frontend sortType to backend params
    let sortBy;
    let backendSortType;

    if (sortType === "name") {
      sortBy = "title";
      backendSortType = "asc";
    } else if (sortType === "lowToHigh") {
      sortBy = "price";
      backendSortType = "asc";
    } else if (sortType === "highToLow") {
      sortBy = "price";
      backendSortType = "desc";
    }

    getProductList({ sortBy, sortType: backendSortType, query, page })
      .then((body) => {
        setProductData(body); // backend returns { data: [...], totalPages, etc. }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [sortType, query, page]);

  const handleSearch = useCallback(
    (e) => {
      setSearchParams({ ...params, query: e.target.value, page: 1 }, { replace: false });
    },
    [params, setSearchParams]
  );

  const handleSort = useCallback(
    (e) => {
      setSearchParams({ ...params, sortType: e.target.value }, { replace: false });
    },
    [params, setSearchParams]
  );

  if (loading) return <Loading />;

  return (
    <div className="max-w-full bg-gray-200 min-h-screen">
      <div className="bg-white flex flex-col my-14 max-w-screen mx-40 px-30">
        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row mt-17 mb-8 justify-between">
          <input
            className="text-gray-600 text-[13px] border border-gray-200 bg-gray-50 py-1.5 pl-4 pr-34 self-start"
            placeholder="🔍  Search"
            value={query}
            onChange={handleSearch}
          />
          <select
            onChange={handleSort}
            className="text-gray-600 text-[12px] border border-gray-200 py-2 pl-1 pr-17 bg-gray-50 block"
            value={sortType}
          >
            <option value="default">Default Sort</option>
            <option value="name">Sort by title</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Products */}
        {productData.data && productData.data.length > 0 ? (
          <div className="flex gap-4 flex-wrap justify-between pb-5">
            {productData.data.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <>
            <NoMatching>oops.. no matching results found</NoMatching>
            <NoMatching>try some other words to see more results</NoMatching>
          </>
        )}

        {/* Pagination */}
        <div className="flex flex-row gap-1 pb-30">
          <NoOfPages productData={productData} page={page} params={params} />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
