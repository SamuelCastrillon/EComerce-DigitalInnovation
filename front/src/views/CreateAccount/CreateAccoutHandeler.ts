const URL_API = process.env.NEXT_PUBLIC_API_URL;

interface IUserData {
  name: string;
  email: string;
  password: string;
  address: string;
}

export interface IUserDataToForm extends IUserData {
  phone: number;
}

interface IUserToFecht extends IUserData {
  phone: string;
}

async function createNewUser(userData: IUserToFecht) {
  const createUserResponse = await fetch(`${URL_API}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(userData),
  });
  return await createUserResponse.json();
}

export async function parcerData(data: IUserDataToForm) {
  const { name, email, password, address, phone } = data;
  const dataToFecht: IUserToFecht = {
    name: name,
    email: email,
    password: password,
    address: address,
    phone: String(phone),
  };

  try {
    const response = await createNewUser(dataToFecht);

    return response;
  } catch (error) {
    console.error(error);
  }
}
