import Accordions from "@/components/ProductCategory/MainContent/Filter/Accordions/AccordionsGeneral";
import React from "react";
import { HiCheck } from "react-icons/hi";
import Product from "src/model/Product";
import { filterBrandActions } from "src/store/redux-toolkit/filterBrand";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";

type AppProps = {
  productsList: Product[];
};

export default function Checkboxs({ productsList }: AppProps) {
  const dispatch = useAppDispatch();
  const selectedBrands = useAppSelector(
    (state) => state.filterBrand.selectedBrands
  );

  const handleSelectBrand = (position: number) => {
    const updatedSelectedBrands = selectedBrands.map((isSelected, index) => {
      if (index === position) {
        return !isSelected;
      } else {
        return isSelected;
      }
    });
    dispatch(filterBrandActions.setSelectedBrands(updatedSelectedBrands));
  };

  let numBalenciaga = 0;
  let numLV = 0;
  let numGucci = 0;
  productsList.forEach((product) => {
    if (product.brand === "balenciaga") numBalenciaga++;
    if (product.brand === "louis vuitton") numLV++;
    if (product.brand === "gucci") numGucci++;
  });

  const stylesOptions = [
    {
      id: 1,
      title: "Balenciaga",
      quantity: numBalenciaga,
    },
    {
      id: 2,
      title: "Louis Vuitton",
      quantity: numLV,
    },
    {
      id: 3,
      title: "Gucci",
      quantity: numGucci,
    },
  ];

  return (
    <Accordions heading="Brand">
      <div className="p-7">
        {stylesOptions.map((option, position) => (
          <div
            className="flex items-center gap-x-5 mb-[30px] relative
            lg:gap-x-3"
            key={option.id}
          >
            <div className="relative">
              <input
                type="checkbox"
                id={option.title.toLowerCase()}
                name="checkboxs"
                value={option.title.toLowerCase()}
                className="appearance-none h-[15px] w-[15px] bg-slate-200 rounded-md peer transition "
                onChange={handleSelectBrand.bind(null, position)}
              />
              {selectedBrands[position] && (
                <HiCheck
                  onClick={handleSelectBrand.bind(null, position)}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-lg text-black "
                />
              )}
            </div>
            <label
              htmlFor={option.title.toLowerCase()}
              className={`flex-1 flex items-center justify-between text-gray-600 transition relative 
              ${selectedBrands[position] && "text-black font-medium"}
              `}
            >
              <p className="">{option.title}</p>
              <p>{option.quantity}</p>
            </label>
          </div>
        ))}
      </div>
    </Accordions>
  );
}
