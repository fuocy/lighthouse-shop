import ComponentAccordion from "../Accordions";

const categoryOptions = [
  {
    id: 1,
    title: "Handbags",
    quantity: 198,
  },
  {
    id: 2,
    title: "Shoes",
    quantity: 231,
  },
  {
    id: 3,
    title: "Clothes",
    quantity: 92,
  },
  // {
  //   id: 4,
  //   title: "Accessories",
  //   quantity: 231,
  // },
  {
    id: 5,
    title: "All",
    quantity: 500,
  },
];

export default function AccordionCategory() {
  // checked
  return (
    <ComponentAccordion heading="Category">
      <div className="p-7">
        {categoryOptions.map((option) => (
          <div
            className="flex items-center gap-x-5 mb-[30px] relative "
            key={option.id}
          >
            <input
              type="radio"
              id={option.title.toLowerCase()}
              name="category"
              value={option.title.toLowerCase()}
              className="appearance-none h-[18px] w-[18px]  rounded-full border-2 border-gray-600  checked:border-[#ACADA8] peer transition"
            />

            <label
              htmlFor={option.title.toLowerCase()}
              className="flex-1 flex items-center justify-between text-gray-600  peer-checked:text-black peer-checked:font-medium transition relative 
              peer-checked:after:absolute 
              peer-checked:after:top-[2.19px] 
              peer-checked:after:left-[-35px]
              peer-checked:after:w-3
              peer-checked:after:h-3
              peer-checked:after:rounded-full
              peer-checked:after:bg-black/70
              
              "
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
