type Product = {
  _id: any;
  name: string;
  description: string;
  category: string;
  type: string;
  brand: string;
  price: number;
  discount: number;
  star: number;
  color: string[];
  size: string[];
  tag: string[];
  availability: boolean;
  love: number;
  status: { limited: boolean; prebuy: boolean };
  specification: string;
  image: {
    img1: string;
    img2: string;
    img3: string;
    img4?: string;
    img5?: string;
  };
  comment: string[];
  id: string;
};

export default Product;
