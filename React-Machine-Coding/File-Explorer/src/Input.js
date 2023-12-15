import React, { useState } from "react";

import styles from "./styles/input.module.css";

const Input = ({ handleAdd, handleBlur }) => {
  // const [value, setValue] = useState("");
  const handleEnter = (event) => {
    console.log("event:", event);
    if (event?.key === "Enter") {
      handleAdd(event?.target?.value);
    }
  };
  return (
    <input
      style={{ paddingLeft: "1rem" }}
      autoFocus
      type="text"
      // value={value}
      // onChange={(event) => {
      //   setValue(event?.target?.value);
      // }}
      placeholder="Enter name"
      onKeyDown={handleEnter}
      className={styles.container}
      onBlur={handleBlur}
    />
  );
};

export default Input;
