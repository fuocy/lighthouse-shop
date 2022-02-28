import CartItem from "./CartItem";
import classes from "styles/scrollbar.module.css";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
const cartLists = [
  {
    id: 1,
    img: "https://i.ibb.co/tKt3jb5/shirt1.png",
    name: "Nike Men's Shirt",
    type: "Nike",
    quantity: 3,
    price: 69,
  },
  {
    id: 2,
    img: "https://i.ibb.co/rdTrKGL/Untitled-7-removebg-preview.png",
    name: "Nike Men's Shirt",
    type: "Nike",
    quantity: 3,
    price: 69,
  },
  {
    id: 3,
    img: "https://i.ibb.co/Mgt3H7C/Untitled-4-removebg-preview.png",
    name: "Nike Men's Shirt",
    type: "Nike",
    quantity: 3,
    price: 69,
  },
  // {
  //   id: 4,
  //   img: "https://i.ibb.co/RHhBFw9/Untitled-5-removebg-preview.png",
  //   name: "Nike Men's Shirt",
  //   type: "Nike",
  //   quantity: 3,
  //   price: 69,
  // },
];

export default function CartInfo() {
  return (
    <div
      className="bg-white 
      shadow-sm
      mt-5 px-5 pt-6"
    >
      <div
        className="flex items-center justify-between
        text-2xl font-semibold
        pb-12 mb-[40px]
        border-b-2 border-primary-color"
      >
        <h1>Shopping Cart</h1>
        <p className="text-xl text-black/75">3 items</p>
      </div>
      <div className="grid grid-cols-cart-item gap-10 justify-items-center mb-4">
        <div
          className="text-gray-700 text-sm 
    justify-self-start pl-5"
        >
          PRODUCTS DETAIL
        </div>
        <div className="text-gray-700 text-sm  ">QUANTITY</div>
        <div className="text-gray-700 text-sm ">PRICE</div>
        <div className="text-gray-700 text-sm  ">TOTAL</div>
      </div>
      <div>
        <ul
          className={`overflow-y-auto h-[500px] ${classes["custom-scrollbar"]}`}
        >
          {cartLists.map((cart) => (
            <CartItem
              key={cart.id}
              img={cart.img}
              name={cart.name}
              type={cart.type}
              quantity={cart.quantity}
              price={cart.price}
            />
          ))}
        </ul>
      </div>
      <Link href="/men" passHref>
        <a className="flex items-center gap-3 pb-8 cursor-pointer pl-5">
          <HiOutlineArrowNarrowLeft className="text-red-500 text-xl -translate-y-[1px]" />
          <p
            className="italic text-slate-500 
          pb-1 border-b-2 border-transparent hover:border-primary-color transition duration-500"
          >
            Continue Shopping
          </p>
        </a>
      </Link>
    </div>
  );
}
