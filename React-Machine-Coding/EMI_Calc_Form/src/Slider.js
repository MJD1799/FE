import React from "react";

import "./styles.css";

const Slider = ({ id, label, value, onChange, ...rest }) => {
  return (
    <div>
      <input
        className="slider"
        id={id}
        type="range"
        value={value}
        onChange={onChange}
        // min="0"
        // max="10"
        {...rest}
      />
    </div>
  );
};

export default Slider;
