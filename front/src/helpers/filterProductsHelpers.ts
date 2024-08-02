import { IProduct } from "@/interfaces/products.interface";
import { categoriesList } from "./categoriesList";

export function filterProductsByCategory(products: IProduct[], categorieParam: string) {
  const Products: IProduct[] = products;
  const Categorie = categoriesList.find((categorie) => {
    return categorie.name.toLowerCase() === categorieParam;
  });
  if (Categorie) {
    const productsFulterer = Products.filter(
      (product: IProduct) => product.categoryId === Categorie.id
    );

    return productsFulterer;
  }
}
