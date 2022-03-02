import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { GetStaticPaths, GetStaticProps } from "next";
import { MongoClient, ObjectId } from "mongodb";
import Product from "src/model/Product";
import Head from "next/head";
interface AppProps {
  singleProduct: Product;
}

export default function ProductDetailPage({ singleProduct }: AppProps) {
  return (
    <>
      <Head>
        <title> {`${singleProduct.name} | LIGHTHOUSE`} </title>
        <link rel="icon" href="/favicon-sun.ico" />
        <meta name="description" content={singleProduct.description} />
      </Head>
      <ProductDetail singleProduct={singleProduct} />;
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
  );
  const db = client.db();
  const productClt = db.collection("products");
  const categoryAndIdObjs = await productClt
    .find({}, { projection: { category: 1 } })
    .toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: categoryAndIdObjs.map((categoryAndIdObj) => ({
      params: {
        productId: categoryAndIdObj._id.toString(),
        productCategory: categoryAndIdObj.category,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params!.productId as string; // TYPE ASSERTION. I'M SO SMART. WHY AM I SO GOOD AT CODING???
  const client = await MongoClient.connect(
    "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
  );
  const db = client.db();
  const productClt = db.collection("products");
  const singleProduct = await productClt.findOne({
    _id: new ObjectId(productId),
  });
  client.close();
  const convertedSingleProducts = JSON.parse(JSON.stringify(singleProduct)); // fix weired error

  return {
    props: {
      singleProduct: {
        ...convertedSingleProducts,
        id: convertedSingleProducts!._id.toString(),
      },
    },
  };
};
