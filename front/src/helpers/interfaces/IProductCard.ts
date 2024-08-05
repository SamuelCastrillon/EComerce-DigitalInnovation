export interface ICurrentCart {
  products: number[] | [];
  userId: number;
}

export interface IProductCard {
  id: number;
  name: string;
  price: number;
  image: string;
}
