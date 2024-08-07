import { IProduct } from "@/helpers/interfaces/products.interface";

export function shearchProductsCartById(
  productsCart: number[],
  allProducts: IProduct[]
): IProduct[] {
  const carProducts: IProduct[] = [];

  productsCart.forEach((productId: number) => {
    const productResult = allProducts.find((product) => {
      return product.id === productId;
    });
    productResult && carProducts.push(productResult);
  });
  return carProducts;
}

export function dataToOrderSumary(productsCart: number[], allProducts: IProduct[]) {
  const productToProcess = shearchProductsCartById(productsCart, allProducts);
  const objetToReturn = {
    totalPrice: 0,
    productsNumber: productToProcess.length,
  };
  productToProcess.forEach((product) => {
    objetToReturn.totalPrice += product.price;
  });
  return objetToReturn;
}
