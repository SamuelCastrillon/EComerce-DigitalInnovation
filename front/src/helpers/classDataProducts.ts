import { IProduct } from "@/helpers/interfaces/products.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class DataProductsClass {
  AllProducts: IProduct[];

  constructor() {
    this.AllProducts = [];
  }

  async fetchProducts() {
    try {
      const dataFetch = await fetch(`${API_URL}/products`, {
        cache: "no-cache",
      });
      const dataResponse: IProduct[] = await dataFetch.json();
      this.AllProducts = dataResponse;
    } catch (error: any) {
      throw new Error(error);
    }
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
