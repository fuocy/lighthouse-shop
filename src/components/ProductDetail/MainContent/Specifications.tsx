import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}

export default function Specifications({ singleProduct }: AppProps) {
  return (
    <div>
      <h3 className="text-gray-600 font-semibold text-3xl mb-7">
        Specifications
      </h3>
      <p className="text-zinc-500 leading-loose">
        {singleProduct.specification}
      </p>
    </div>
  );
}
