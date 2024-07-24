import { ICategory, IProduct } from "@/interfaces/products.interface";

class DataProductsClass {
  AllProducts: IProduct[];
  AllCategories: ICategory[];

  constructor() {
    this.AllProducts = [];
    this.AllCategories = [];
  }

  async fetchProducts() {
    const dataFetch = await fetch("http://localhost:3000/products", {
      cache: "no-cache",
    });
    const dataResponse: IProduct[] = await dataFetch.json();
    this.AllProducts = dataResponse;
  }

  async getAllProducts() {
    if (this.AllProducts.length < 1) await this.fetchProducts();
    return this.AllProducts;
  }

  getProductById(idProduct: number) {
    const product: IProduct | undefined = this.AllProducts.find((element) => {
      element.id === idProduct;
    });
    return product;
  }

  getProductsByCategorie(idCategorie: number) {
    const products = this.AllProducts.find((element) => {
      element.categoryId === idCategorie;
    });
    return products;
  }
}
