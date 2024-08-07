import { IUserLoginRes } from "@/helpers/interfaces/user.interface";
import Swal from "sweetalert2";

const URL_API = process.env.NEXT_PUBLIC_API_URL;

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface ISignInResponseOk {
  login: boolean;
  user: object;
  token: string;
}

async function userSignIn(userData: IUserSignIn) {
  const signInUserResponse = await fetch(`${URL_API}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(userData),
  });
  return await signInUserResponse.json();
}

export async function postSubmitSignIn(data: IUserSignIn) {
  try {
    const response = await userSignIn(data);
    if (response.login) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User SignIn is Ok",
        showConfirmButton: false,
        timer: 1200,
      });
      return response;
    }
    if (response.statusCode === 400) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "User SignIn Error",
        showConfirmButton: false,
        timer: 1200,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
