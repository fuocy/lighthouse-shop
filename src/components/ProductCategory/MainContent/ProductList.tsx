// import ProductItem from "./ProductItem";
// import Product from "src/model/Product";
// import { useAppSelector } from "src/store/redux-toolkit/hooks";
// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";
// import ProductEmpty from "./ProductEmpty";
// interface AppProps {
//   productsList: Product[];
// }

// const PROS_PER_PAGE = 9;

// const getPageResult = (originalProducts: Product[], pageNum: number) => {
//   const start = (pageNum - 1) * 9;
//   const end = pageNum * 9;

//   return originalProducts.slice(start, end);
// };

// export default function ProductList({ productsList }: AppProps) {
//   // const filteredProducts = useAppSelector(
//   //   (state) => state.filterType.filteredProducts
//   // );
//   // let sortedProducts = useAppSelector((state) => state.sorted.sortedProduct);
//   // const displayProducts =
//   //   filteredProducts.length > 0 ? filteredProducts : productsList;

//   ////////////////////////////////////////////////////////////////////////////////////
//   // FILTER BY BRAND
//   const selectedBrands = useAppSelector(
//     (state) => state.filterBrand.selectedBrands
//   );

//   const [displayProduct, setDisplayProduct] = useState(productsList);

//   useEffect(() => {
//     const filterProducts = productsList.filter((product) => {
//       return (
//         (selectedBrands[0] && product.brand === "balenciaga") ||
//         (selectedBrands[1] && product.brand === "louis vuitton") ||
//         (selectedBrands[2] && product.brand === "gucci")
//       );
//     });
//     const isAnyBrandSelected = selectedBrands.some((brand) => brand === true);

//     const displayProduct123 = isAnyBrandSelected
//       ? filterProducts
//       : productsList;
//     setDisplayProduct(displayProduct123);
//   }, [selectedBrands, productsList]);

//   ///////////////////////////////////////////////////////////////////////////////////
//   // PAGINATION
//   const [productsRenderedPerPage, setProductsRenderedPerPage] = useState(
//     getPageResult(displayProduct, 1)
//   );

//   const handlePageClick = (data: { selected: number }) => {
//     setProductsRenderedPerPage(
//       getPageResult(displayProduct, data.selected + 1)
//     );
//   };

//   useEffect(() => {
//     setProductsRenderedPerPage(getPageResult(displayProduct, 1));
//   }, [displayProduct]);
//   ///////////////////////////////////////////////////////////////////////////////////
//   if (productsRenderedPerPage.length === 0) return <ProductEmpty />;
//   /////////////////////////////////////////////////////////////////////////////////////
//   return (
//     <div>
//       <ul className="grid grid-cols-3 gap-x-5 gap-y-[26px]">
//         {productsRenderedPerPage.map((product) => (
//           <ProductItem
//             key={product.id}
//             availability={product.availability}
//             img={product.image.img1}
//             name={product.name}
//             price={product.price}
//             discount={product.discount}
//             love={product.love}
//             brand={product.brand}
//             id={product.id}
//           />
//         ))}
//       </ul>
//       <div className="flex justify-center">
//         <ReactPaginate
//           previousLabel={"<"}
//           nextLabel={">"}
//           breakLabel={"..."}
//           pageCount={Math.ceil(displayProduct.length / PROS_PER_PAGE)}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={3}
//           onPageChange={handlePageClick}
//           containerClassName={"flex items-center gap-4 mt-10"}
//           pageClassName={"py-3  bg-white shadow-sm"}
//           pageLinkClassName={"py-3 px-5 shadow-sm select-none"}
//           previousClassName={"text-2xl mr-4"}
//           previousLinkClassName={"py-3 px-5 select-none"}
//           nextClassName={"text-2xl ml-4"}
//           nextLinkClassName={"py-3 px-5 select-none"}
//           breakClassName={"text-2xl"}
//           breakLinkClassName={"py-3 px-5"}
//           activeClassName={"bg-primary-color"}
//         />
//       </div>
//     </div>
//   );
// }
import ProductItem from "./ProductItem";
import Product from "src/model/Product";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
import React, { useEffect, useMemo, useState } from "react";
import ProductEmpty from "./ProductEmpty";
import paginationSlice, {
  PaginationActions,
} from "src/store/redux-toolkit/paginationSlice";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import useStore from "src/store/zustand/useStore";
interface AppProps {
  productsList: Product[];
}

const PROS_PER_PAGE = 9;

const getPageResult = (originalProducts: Product[], pageNum: number) => {
  const start = (pageNum - 1) * PROS_PER_PAGE;
  const end = pageNum * PROS_PER_PAGE;

  return originalProducts.slice(start, end);
};

export default function ProductList({ productsList }: AppProps) {
  const dispatch = useAppDispatch();

  ////////////////////////////////////////////////////////////////////////////////////
  // FILTER BY BRAND
  const [brandFilteredProducts, setbrandFilteredProducts] =
    useState(productsList);

  const selectedBrands = useAppSelector(
    (state) => state.filterBrand.selectedBrands
  );

  useEffect(() => {
    const filterProducts = productsList.filter((product) => {
      return (
        (selectedBrands[0] && product.brand === "balenciaga") ||
        (selectedBrands[1] && product.brand === "louis vuitton") ||
        (selectedBrands[2] && product.brand === "gucci")
      );
    });
    const isAnyBrandSelected = selectedBrands.some((brand) => brand === true);

    const brandFilteredProducts123 = isAnyBrandSelected
      ? filterProducts
      : productsList;
    setbrandFilteredProducts(brandFilteredProducts123);
  }, [selectedBrands, productsList]);
  ////////////////////////////////////////////////////////////////////////////////////
  // FILTER BY PRICE
  const minPrice = useAppSelector((state) => state.filterPrice.minPrice);
  const maxPrice = useAppSelector((state) => state.filterPrice.maxPrice);

  const [priceFilteredProducts, setPriceFilteredProducts] =
    useState(productsList);

  useEffect(() => {
    const filteredProducts = productsList.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    setPriceFilteredProducts(filteredProducts);
  }, [maxPrice, minPrice, productsList]);

  const setNumFilteredPrice = useStore((state) => state.setNumFilteredPrice);
  setNumFilteredPrice(priceFilteredProducts.length);
  /////////////////////////////////////////////////////////////////////////////////////
  // INTERSECTION BETWEEN FILTER MODE
  const brand_priceFilteredProducts = useMemo(
    () =>
      brandFilteredProducts.filter(
        (product) => priceFilteredProducts.indexOf(product) !== -1
      ),
    [brandFilteredProducts, priceFilteredProducts]
  );

  ///////////////////////////////////////////////////////////////////////////////////
  // PAGINATION
  /////- product lists:

  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const renderedProducts = getPageResult(
    brand_priceFilteredProducts,
    currentPage
  );

  useEffect(() => {
    // When switching between different category page and different filtered mode, reset to first page
    console.log(brand_priceFilteredProducts);
    dispatch(PaginationActions.resetFirstPage());
  }, [brand_priceFilteredProducts, dispatch]);

  if (renderedProducts.length === 0) return <ProductEmpty />;

  //////////////////////////////////////////////////////
  // PAGINATION
  /////- page number:

  const pageNumbers = [];
  const maxPage = Math.ceil(brand_priceFilteredProducts.length / PROS_PER_PAGE);
  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  const handleClickPagination = (number: number) => {
    dispatch(PaginationActions.handleClickPagination(number));
  };

  const previousPageHandler = () => {
    dispatch(PaginationActions.decrementPage());
  };

  const nextPageHandler = () => {
    dispatch(PaginationActions.incrementPage(maxPage));
  };

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <button
        className={`py-3 px-5 bg-white shadow-sm rounded-sm ${
          currentPage === number && "bg-primary-color"
        }`}
        onClick={handleClickPagination.bind(null, number)}
      >
        {number}
      </button>
    </li>
  ));

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <ul className="grid grid-cols-3 gap-x-5 gap-y-[26px] ">
        {renderedProducts.map((product) => (
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
        <button onClick={previousPageHandler}>
          <AiOutlineLeft className="mt-11 mr-4 text-2xl" />
        </button>
        <ul className="flex items-center gap-4 mt-10">{renderPageNumbers}</ul>
        <button onClick={nextPageHandler}>
          <AiOutlineRight className="mt-11 ml-4 text-2xl" />
        </button>
      </div>
    </div>
  );
}
