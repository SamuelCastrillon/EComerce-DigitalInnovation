const URL_API = process.env.NEXT_PUBLIC_API_URL;

interface IUserSignIn {
  email: string;
  password: string;
}

async function createNewUser(userData: IUserSignIn) {
  const signInUserResponse = await fetch(`${URL_API}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(userData),
  });
  return await signInUserResponse.json();
}

export async function handelerSubmitSignIn(data: IUserSignIn) {
  try {
    const response = await createNewUser(data);
    if (response.login) alert("User SignIn is Ok");
    if (response.statusCode === 400) alert("User SignIn Error" + response.statusCode);
  } catch (error) {
    console.error(error);
  }
}
