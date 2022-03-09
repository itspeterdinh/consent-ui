import React from "react";
import "./Button.css";

interface Props {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="btn btn--primary btn--large"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
