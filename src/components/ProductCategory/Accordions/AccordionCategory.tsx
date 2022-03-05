import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "src/model/Product";
import { filterTypeActions } from "src/store/filterTypeSlice";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import ComponentAccordion from "../Accordions";

export default function AccordionCategory() {
  const [selectedCate, setSelectedCate] = useState("no filter");
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const dispatch = useAppDispatch();

  const selectCateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCate(e.target.value);
  };

  useEffect(() => {
    if (selectedCate === "no filter") {
      dispatch(filterTypeActions.replaceByFilteredProduct([]));
      return;
    }

    const fetchFilteredProducts = async () => {
      const { data } = await axios.get(
        `/api/filter-type/filter-type-${selectedCate}`
      );

      dispatch(
        filterTypeActions.replaceByFilteredProduct(data.filteredProducts)
      );
    };

    fetchFilteredProducts().catch((error) => {
      console.log(`${error.message} 😥😥😣`);
    });
  }, [selectedCate, dispatch]);

  let numHandbag = 0;
  let numShoes = 0;
  let numClothes = 0;
  let numAll = 0;
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const { data } = await axios.get(`/api/filter-type/filter-type-all`);

      setAllProducts(data.filteredProducts);
    };

    fetchFilteredProducts().catch((error) => {
      console.log(`${error.message} 😥😥😣`);
    });
  }, []);

  allProducts.forEach((product: Product) => {
    if (product.type === "handbag") {
      numHandbag++;
    } else if (product.type === "clothes") {
      numClothes++;
    } else if (product.type === "shoes") {
      numShoes++;
    }
    numAll++;
  });

  const categoryOptions = [
    {
      id: 1,
      title: "Handbag",
      quantity: numHandbag,
    },
    {
      id: 2,
      title: "Shoes",
      quantity: numShoes,
    },
    {
      id: 3,
      title: "Clothes",
      quantity: numClothes,
    },
    {
      id: 4,
      title: "All",
      quantity: numAll,
    },
    {
      id: 5,
      title: "No filter",
      quantity: "",
    },
  ];

  // checked
  return (
    <ComponentAccordion heading="Category">
      <div className="p-7">
        {categoryOptions.map((option) => (
          <div
            className="flex items-center gap-x-5 mb-[30px] relative "
            key={option.id}
          >
            {/* checked:border-primary-color */}
            <input
              onChange={selectCateHandler}
              type="radio"
              id={option.title.toLowerCase()}
              name="category"
              value={option.title.toLowerCase()}
              // peer
              className={`appearance-none h-[18px] w-[18px]  rounded-full border-2 transition 
            ${
              selectedCate === option.title.toLowerCase()
                ? "border-primary-color"
                : "border-gray-600"
            }`}
            />
            {/* peer-checked:text-black peer-checked:font-medium  
              peer-checked:after:absolute 
              peer-checked:after:top-[2.19px] 
              peer-checked:after:left-[-35px]
              peer-checked:after:w-3
              peer-checked:after:h-3
              peer-checked:after:rounded-full
              peer-checked:after:bg-primary-color */}
            <label
              htmlFor={option.title.toLowerCase()}
              className={`flex-1 flex items-center justify-between text-gray-600 transition relative 
              ${
                selectedCate === option.title.toLowerCase() &&
                "after:absolute after:top-[2.19px] after:left-[-35px] after:w-3 after:h-3 after:rounded-full after:bg-primary-color text-black font-medium"
              }
              `}
            >
              <p className="">{option.title}</p>
              <p>{option.quantity}</p>
            </label>
            {/* <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-primary-color"></div> */}
          </div>
        ))}
      </div>
    </ComponentAccordion>
  );
}
