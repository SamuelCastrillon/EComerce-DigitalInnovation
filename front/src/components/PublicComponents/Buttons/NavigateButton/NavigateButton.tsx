import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  onClick: Function;
}

export const NavigateButton: React.FC<ButtonProps> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};
