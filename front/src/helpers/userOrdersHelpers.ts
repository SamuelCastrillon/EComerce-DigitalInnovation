import { IOrderResponce } from "@/interfaces/oerder.interface";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchUserOrders(token: string, setDataFunction: Function) {
  try {
    const dataFetch = await fetch(`${API_URL}/users/orders`, {
      headers: {
        authorization: token,
      },
    });
    const dataResponse: IOrderResponce[] = await dataFetch.json();
    setDataFunction(dataResponse);
  } catch (error: any) {
    throw error;
  }
}
