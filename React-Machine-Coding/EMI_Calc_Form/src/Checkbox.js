import React from "react";

const Checkbox = ({ id, label, value, onChange }) => {
  return (
    <div>
      <input id={id} type="checkbox" value={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
