import { ICategory, IProduct } from "@/interfaces/products.interface";

class DataProductsClass {
  AllProducts: IProduct[];
  AllCategories: ICategory[];

  constructor() {
    this.AllProducts = [];
    this.AllCategories = [];
  }

  fetchProducts() {}

  getAllProducts() {}

  getProductById() {}

  getProductsByCategorie() {}
}
