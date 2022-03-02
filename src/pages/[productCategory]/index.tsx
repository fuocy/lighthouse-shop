import ProductCategory from "@/components/ProductCategory/ProductCategory";
import { MongoClient } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import Product from "src/model/Product";
import Head from "next/head";
type AppProps = {
  products: Product[];
};

export default function ProductCategoryPage({ products }: AppProps) {
  return (
    <>
      <Head>
        <title>Lighthouse | Won&apos;t let you down </title>
        <link rel="icon" href="/favicon-sun.ico" />
        <meta name="description" content="Lighthouse were my everything." />
      </Head>
      <ProductCategory productsList={products} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
  );
  const db = client.db();
  const productClt = db.collection("products");
  const categories = await productClt
    .find({}, { projection: { category: 1, _id: 0 } })
    .toArray();
  const uniqueCategories = Array.from(
    new Set(categories.map((item) => item.category))
  );

  client.close();

  return {
    fallback: "blocking",
    paths: uniqueCategories.map((category) => ({
      params: { productCategory: category },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productCategory = context.params!.productCategory;

  const client = await MongoClient.connect(
    "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
  );
  const db = client.db();
  const productClt = db.collection("products");
  const correspondingProducts = await productClt
    .find({ category: productCategory })
    .toArray();
  client.close();
  const convertedProducts = JSON.parse(JSON.stringify(correspondingProducts)); // fix weired error

  return {
    props: {
      products: convertedProducts.map((product: Product) => ({
        ...product,
        id: product._id.toString(),
      })),
    },
  };
};
