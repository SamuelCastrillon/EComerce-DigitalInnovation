import { ICurrentCart } from "./interfaces/IProductCard";
import { IUserLoginRes } from "./interfaces/user.interface";

const userKeyDefiny = "dataCurrentUser";
const cartKeyDefiny = "productOrderUserID:";

//* Functions managment user LocalStorage

export function saveCurrentUser(newCurrentUser: IUserLoginRes): void {
  const dataToSreing = JSON.stringify(newCurrentUser);
  localStorage.setItem(userKeyDefiny, dataToSreing);
}

export function getCurrentUser(): IUserLoginRes | null {
  const getData = localStorage.getItem(userKeyDefiny);
  if (getData) return JSON.parse(getData);
  else {
    console.error("Undefine Key");
    return null;
  }
}

export function deletCurrentUser(): void {
  localStorage.removeItem(userKeyDefiny);
}

//* Functions managment cart LocalStorage
export function saveCurrentCart(userId: number, userOrder: ICurrentCart): void {
  const dataToSreing = JSON.stringify(userOrder);
  localStorage.setItem(cartKeyDefiny + userId, dataToSreing);
}

export function getCurrentCart(userId: number): ICurrentCart {
  const getData = localStorage.getItem(cartKeyDefiny + userId);
  if (getData) return JSON.parse(getData);
  else {
    console.error("Undefine Key");
    return { products: [], userId: userId };
  }
}

export function deletCurrentCart(userId: number): void {
  localStorage.removeItem(cartKeyDefiny + userId);
}
