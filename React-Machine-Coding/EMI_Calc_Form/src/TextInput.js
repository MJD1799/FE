import React from "react";

const TextInput = ({ id, label, value, onChange, ...rest }) => {
  return (
    <div className="textInputWrapper">
      <label>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder="type..."
        {...rest}
      />
    </div>
  );
};

export default TextInput;
