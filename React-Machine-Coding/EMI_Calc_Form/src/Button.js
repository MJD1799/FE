import React from "react";

const Button = ({ label, onClick, className, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
