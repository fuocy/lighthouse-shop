import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import Cart from "src/model/Cart";

type Data = {
  message: string;
  convertedcartFetched: {
    _id: any;
    items: Cart[];
    totalQuantity: number;
    totalAmount: number;
  };
};

export default async function ProductCategory(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://iydiwky9:zoro6533@cluster0.usy78.mongodb.net/lighthouse-ecommerce?retryWrites=true&w=majority"
    );

    const db = client.db();
    const cartClt = db.collection("cart");
    const cartFetched = await cartClt.findOne();
    const convertedcartFetched = JSON.parse(JSON.stringify(cartFetched)); // fix weired error

    client.close();

    res.status(201).json({
      message: "Send cart to database successfully",
      convertedcartFetched,
    });
  }
}
