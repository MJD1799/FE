import React from "react";

import useSearch from "../hooks/useSearch";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import { makeOptions } from "../helpers/select.general";

import styles from "./select.module.css";

const Select = ({ fetchOptions, value, handleChange }) => {
  const { isLoading, options } = useSearch({
    fetchAction: fetchOptions,
    searchText: value,
    optionMaker: makeOptions
  });
  const { updatedOptions, page = 1 } = useInfiniteScroll(options);
  console.log("page:", page);
  return (
    <div className={styles["select-container"]}>
      <input
        className={styles["select-input"]}
        onChange={handleChange}
        value={value || ""}
        placeholder="search"
      ></input>
      <div className={styles["select-menu"]}>
        {isLoading && "Loading...."}
        {!isLoading &&
          value &&
          !updatedOptions?.length &&
          "No options found..."}
        {!isLoading &&
          updatedOptions?.length &&
          updatedOptions.map(({ value, label, ref = null }) => (
            <option value={value} key={value} ref={ref}>
              {label}
            </option>
          ))}
      </div>
    </div>
  );
};

{
  /* // <select value={value} onChange={handleChange}>
//   <option value="A">Apple</option>
//   <option value="B">Banana</option>
//   <option value="C">Cranberry</option>
// </select> */
}

export default Select;
