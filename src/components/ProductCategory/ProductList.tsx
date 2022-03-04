import ProductItem from "./ProductItem";
import Product from "src/model/Product";
// import { useAppSelector } from "src/store/hooks";

interface AppProps {
  productsList: Product[];
}

// 2 vấn đề
// Truy cập sort asc lần đầu ko được
// F5 lại ko giữ cái sort cũ

export default function ProductList({ productsList }: AppProps) {
  // let sortedProducts = useAppSelector((state) => state.sorted.sortedProduct);
  // console.log(sortedProducts);

  // const displayProducts =
  //   sortedProducts.length > 0 ? sortedProducts : productsList;

  return (
    <ul className="grid grid-cols-3 gap-x-5 gap-y-[26px]">
      {productsList.map((product) => (
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
