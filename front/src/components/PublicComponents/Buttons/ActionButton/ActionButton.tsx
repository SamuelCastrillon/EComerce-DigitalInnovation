import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: Function;
}

const ActionButton: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ActionButton;
