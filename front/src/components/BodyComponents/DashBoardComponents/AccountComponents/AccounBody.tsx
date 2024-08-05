import React from "react";

interface IAccountBody {
  dataBody: {
    userEmail: string;
    userPhone: string;
    userAdress: string;
    userOrdersCuantity: number;
  };
}

interface IUserDataComponent {
  title: string;
  data: string | number;
}

const AccounBody: React.FC<IAccountBody> = ({ dataBody }) => {
  const { userEmail, userPhone, userAdress, userOrdersCuantity } = dataBody;
  const userDataArray = [
    {
      title: "User Email",
      data: userEmail,
    },
    {
      title: "Mobile phone",
      data: userPhone,
    },
    {
      title: "Shipping address",
      data: userAdress,
    },
    {
      title: "Orders processed",
      data: `Amount: ${userOrdersCuantity}`,
    },
  ];
  return (
    <div className="w-full ">
      <h3 className="text-lg font-bold text-lime-950">Contact information</h3>
      <div className="flex flex-wrap mt-2">
        {userDataArray.map((dataComponent, i) => {
          return (
            <UserDataComponent key={i} title={dataComponent.title} data={dataComponent.data} />
          );
        })}
      </div>
    </div>
  );
};

export default AccounBody;

const UserDataComponent: React.FC<IUserDataComponent> = ({ title, data }) => {
  return (
    <div className="w-full mt-2 text-gray-800 md:w-1/2">
      <strong>{title}</strong>
      <p>{data}</p>
    </div>
  );
};
