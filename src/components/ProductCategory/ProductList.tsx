import ProductItem from "./ProductItem";
const productLists = [
  {
    id: 1,
    img: "https://i.ibb.co/tKt3jb5/shirt1.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: true,
      saleOff: false,
      limited: false,
    },
    availability: true,
  },
  {
    id: 2,
    img: "https://i.ibb.co/zR1wC9N/Untitled-1-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: true,
      limited: false,
    },
    availability: false,
  },
  {
    id: 3,
    img: "https://i.ibb.co/g7bMgvm/Untitled-2-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: false,
      limited: true,
    },
    availability: true,
  },
  {
    id: 4,
    img: "https://i.ibb.co/mckxdSm/Untitled-3-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: false,
      limited: true,
    },
    availability: true,
  },
  {
    id: 5,
    img: "https://i.ibb.co/Mgt3H7C/Untitled-4-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: false,
      limited: false,
    },
    availability: true,
  },
  {
    id: 6,
    img: "https://i.ibb.co/RHhBFw9/Untitled-5-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: false,
      limited: false,
    },
    availability: true,
  },
  {
    id: 7,
    img: "https://i.ibb.co/5jddWx8/Untitled-6-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: false,
      limited: true,
    },
    availability: true,
  },
  {
    id: 8,
    img: "https://i.ibb.co/rdTrKGL/Untitled-7-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: true,
      saleOff: true,
      limited: true,
    },
    availability: false,
  },
  {
    id: 9,
    img: "https://i.ibb.co/J2H2pJP/Untitled-8-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: false,
      limited: false,
    },
    availability: true,
  },
  {
    id: 10,
    img: "https://i.ibb.co/2dmqCwH/Untitled-9-removebg-preview.png",
    name: "Nike Men's shirt",
    price: 55,
    tag: {
      preBuy: false,
      saleOff: true,
      limited: false,
    },
    availability: true,
  },
];

export default function ProductList() {
  return (
    <ul className="grid grid-cols-3 gap-x-5 gap-y-[26px]">
      {productLists.map((product) => (
        <ProductItem
          key={product.id}
          availability={product.availability}
          img={product.img}
          name={product.name}
          price={product.price}
          tag={product.tag}
        />
      ))}
    </ul>
  );
}
