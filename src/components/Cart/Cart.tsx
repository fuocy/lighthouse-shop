import CurrentPath from "@/components/common/CurrentPath";
import CartItem from "./CartItem";
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
    id: 1,
    img: "https://i.ibb.co/rdTrKGL/Untitled-7-removebg-preview.png",
    name: "Nike Men's Shirt",
    type: "Nike",
    quantity: 3,
    price: 69,
  },
  {
    id: 1,
    img: "https://i.ibb.co/Mgt3H7C/Untitled-4-removebg-preview.png",
    name: "Nike Men's Shirt",
    type: "Nike",
    quantity: 3,
    price: 69,
  },
];

export default function Cart() {
  return (
    <div className="layout-container">
      <CurrentPath url1="Cart" />
      <div className="grid grid-cols-cart">
        <div
          className="bg-white 
        mt-5 px-5 pt-6"
        >
          <div
            className="flex items-center justify-between
          text-2xl font-semibold
          pb-12 mb-[40px]
          border-b-2 border-primary-color"
          >
            <h1>Shopping Cart</h1>
            <p>3 items</p>
          </div>
          <div className="grid grid-cols-cart-item gap-10 justify-items-center">
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
            <ul>
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
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
