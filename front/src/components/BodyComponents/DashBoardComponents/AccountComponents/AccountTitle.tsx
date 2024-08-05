import React from "react";

interface IAccountTitle {
  userImage: string;
  userName: string;
  userType: string;
}

const AccountTitle = () => {
  return (
    <div className="w-full h-[150px] bg-lime-950 flex gap-5">
      <div className="w-10 h-10 bg-lime-300">Img</div>
      <strong>User Name</strong>
    </div>
  );
};

export default AccountTitle;
