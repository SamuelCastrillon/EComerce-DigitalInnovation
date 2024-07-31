import { ICreateOrderReq } from "@/interfaces/oerder.interface";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(params: ICreateOrderReq, userToken: string) {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        authorization: userToken,
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(params),
    });
    return await response.json();
  } catch (error) {
    throw console.error(error);
  }
}
