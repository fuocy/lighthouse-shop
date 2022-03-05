import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import Product from "src/model/Product";

type Data = {
  message: string;
  filteredProducts: Product[];
};

export default async function ProductFilter(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
    );

    const db = client.db();
    const productsClt = db.collection("products");
    const productsFetched = await productsClt.find({ type: "hat" }).toArray();
    const convertedProductsFetched = JSON.parse(
      JSON.stringify(productsFetched)
    ); // fix weired error

    client.close();

    res.status(201).json({
      message: "Send cart to database successfully",
      filteredProducts: convertedProductsFetched,
    });
  }
}
