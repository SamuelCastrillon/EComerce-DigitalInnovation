import { IProduct } from "@/interfaces/products.interface";
import { arrayProducts } from "./dataProducts";

export default function getProductById(id: number): IProduct | undefined {
  const idProduct: number = id;
  const product: IProduct | undefined = arrayProducts.find((element) => element.id === idProduct);
  return product;
}
