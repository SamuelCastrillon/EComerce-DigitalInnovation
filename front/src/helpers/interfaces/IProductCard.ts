export interface ICurrentCart {
  userId: number;
  products: number[] | [];
}

export interface IProductCard {
  id: number;
  name: string;
  price: number;
  image: string;
}
