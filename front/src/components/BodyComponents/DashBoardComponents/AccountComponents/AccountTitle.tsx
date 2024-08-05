import React from "react";

interface IAccountTitle {
  userImage: string;
  userName: string;
  userType: string;
}

const AccountTitle: React.FC<IAccountTitle> = ({ userImage, userName, userType }) => {
  return (
    <>
      <div className="w-[100px] h-[100px] bg-lime-300 rounded-[50%] text-center">Img</div>
      <h2 className="text-2xl font-bold text-lime-950">{userName}</h2>
      <div className="absolute flex gap-1 font-bold text-white top-2 right-2 w-fit">
        <label className="text-lime-950">Role:</label>
        <span className="px-1 text-center text-gray-300 align-middle rounded-md bg-lime-950">
          {userType}
        </span>
      </div>
    </>
  );
};

export default AccountTitle;
