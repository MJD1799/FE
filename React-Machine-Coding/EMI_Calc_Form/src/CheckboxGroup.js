import React from "react";
import Checkbox from "./Checkbox";

import "./styles.css";

const CheckboxGroup = ({ options, onChange }) => {
  return (
    <div className="checkbox-group">
      {options.map(({ label, id, value }) => {
        return (
          <Checkbox
            key={id}
            label={label}
            id={id}
            value={value}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default CheckboxGroup;
