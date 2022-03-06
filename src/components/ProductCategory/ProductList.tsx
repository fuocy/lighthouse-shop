import ProductItem from "./ProductItem";
import Product from "src/model/Product";
import { useAppSelector } from "src/store/hooks";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

interface AppProps {
  productsList: Product[];
}

const PROS_PER_PAGE = 9;

const getPageResult = (originalProducts: Product[], pageNum: number) => {
  const start = (pageNum - 1) * 9;
  const end = pageNum * 9;

  return originalProducts.slice(start, end);
};

export default function ProductList({ productsList }: AppProps) {
  const filteredProducts = useAppSelector(
    (state) => state.filterType.filteredProducts
  );
  // let sortedProducts = useAppSelector((state) => state.sorted.sortedProduct);
  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : productsList;

  const [productsRenderedPerPage, setProductsRenderedPerPage] = useState(
    getPageResult(displayProducts, 1)
  );

  const handlePageClick = (data: { selected: number }) => {
    setProductsRenderedPerPage(
      getPageResult(displayProducts, data.selected + 1)
    );
  };

  useEffect(() => {
    setProductsRenderedPerPage(getPageResult(displayProducts, 1));
  }, [displayProducts]);

  return (
    <div>
      <ul className="grid grid-cols-3 gap-x-5 gap-y-[26px]">
        {productsRenderedPerPage.map((product) => (
          <ProductItem
            key={product.id}
            availability={product.availability}
            img={product.image.img1}
            name={product.name}
            price={product.price}
            discount={product.discount}
            love={product.love}
            brand={product.brand}
            id={product.id}
          />
        ))}
      </ul>
      <div className="flex justify-center">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(displayProducts.length / PROS_PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center gap-4 mt-10"}
          pageClassName={"py-3  bg-white shadow-sm"}
          pageLinkClassName={"py-3 px-5 shadow-sm select-none"}
          previousClassName={"text-2xl mr-4"}
          previousLinkClassName={"py-3 px-5 select-none"}
          nextClassName={"text-2xl ml-4"}
          nextLinkClassName={"py-3 px-5 select-none"}
          breakClassName={"text-2xl"}
          breakLinkClassName={"py-3 px-5"}
          activeClassName={"bg-primary-color"}
        />
      </div>
    </div>
  );
}
