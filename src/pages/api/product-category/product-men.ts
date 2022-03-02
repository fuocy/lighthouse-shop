import type { NextApiRequest, NextApiResponse } from "next";
import ProductCategory from "./product-category";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const correspondingProducts = await ProductCategory(req, res, "men");
    res.status(200).json({ message: "success" });

    return correspondingProducts;
  }
}
