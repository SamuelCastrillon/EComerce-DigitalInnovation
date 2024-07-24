import { IProduct } from "@/interfaces/products.interface";

class DataProductsClass {
  AllProducts: IProduct[];

  constructor() {
    this.AllProducts = [];
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

  async getProductById(idProduct: number) {
    if (this.AllProducts.length < 1) await this.fetchProducts();
    const product: IProduct | undefined = this.AllProducts.find(
      (element) => element.id === idProduct
    );
    return product;
  }

  // getProductsByCategorie(idCategorie: number) {
  //   const products = this.AllProducts.find((element) => {
  //     element.categoryId === idCategorie;
  //   });
  //   return products;
  // }
}

export const DataToBack = new DataProductsClass();
