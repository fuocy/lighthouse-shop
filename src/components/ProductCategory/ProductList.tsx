import ProductItem from "./ProductItem";
import Product from "src/model/Product";
import { useAppSelector } from "src/store/hooks";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

interface AppProps {
  productsList: Product[];
}

export default function ProductList({ productsList }: AppProps) {
  const filteredProducts = useAppSelector(
    (state) => state.filterType.filteredProducts
  );
  // let sortedProducts = useAppSelector((state) => state.sorted.sortedProduct);
  // console.log(sortedProducts);

  // const displayProducts =
  //   sortedProducts.length > 0 ? sortedProducts : productsList;

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : productsList;

  return (
    <ul className="grid grid-cols-3 gap-x-5 gap-y-[26px]">
      {displayProducts.map((product) => (
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
  );
}
