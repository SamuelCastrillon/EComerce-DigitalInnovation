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
      alert("User SignIn is Ok");
      return response;
    }
    if (response.statusCode === 400) alert(`User SignIn Error - ${response.message}`);
  } catch (error) {
    console.error(error);
  }
}
