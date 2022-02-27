import Accordions from "@/components/ProductCategory/Accordions";
import { HiCheck } from "react-icons/hi";
const stylesOptions = [
  {
    id: 1,
    title: "Modern",
    quantity: 178,
  },
  {
    id: 2,
    title: "Sport",
    quantity: 231,
  },
  {
    id: 3,
    title: "Formal",
    quantity: 91,
  },
];

export default function Checkboxs() {
  return (
    <Accordions heading="Product style">
      <div className="p-7">
        {stylesOptions.map((option) => (
          <div
            className="flex items-center gap-x-5 mb-[30px] relative"
            key={option.id}
          >
            <input
              type="checkbox"
              id={option.title.toLowerCase()}
              name="checkboxs"
              value={option.title.toLowerCase()}
              className="appearance-none h-[15px] w-[15px] bg-primary-color rounded-md peer transition "
            />

            <label
              htmlFor={option.title.toLowerCase()}
              className={`flex-1 flex items-center justify-between text-gray-600 transition relative 
              peer-checked:text-black
              peer-checked:font-medium  
              peer-checked:after:absolute 
              peer-checked:after:top-[8.19px] 
              peer-checked:after:bg-white
              peer-checked:after:left-[-32px]
              peer-checked:after:w-[10px]
              peer-checked:after:h-[2px]
              peer-checked:after:rotate-[128deg]
              peer-checked:before:absolute 
              peer-checked:before:top-[8.19px] 
              peer-checked:before:bg-white
              peer-checked:before:left-[-34px]
              peer-checked:before:w-[5px]
              peer-checked:before:h-[2px]
              peer-checked:before:rotate-[-133deg]
    
              
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
