import React from "react";

const Galary = ({ data, onClick, active }) => {
  return data.map((item) => (
    <div
      key={item}
      className={`item ${active === item ? "active" : ""}`}
      onClick={() => onClick(item)}
      role="button"
      tabIndex="0"
    >
      {item}
    </div>
  ));
};

export default Galary;
