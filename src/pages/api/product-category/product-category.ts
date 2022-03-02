// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export default async function ProductCategory(
  req: NextApiRequest,
  res: NextApiResponse,
  category: string
) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
    );

    const db = client.db();
    const productClt = db.collection("products");
    const correspondingProducts = await productClt
      .find({ category: category })
      .toArray();

    client.close();

    return correspondingProducts;
  }
}
