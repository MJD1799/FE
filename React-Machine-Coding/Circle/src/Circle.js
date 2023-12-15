import React, { useMemo } from "react";

import styles from "./styles/circle.module.css";

const Circle = ({ x, y, r }) => {
  const style = useMemo(
    () => ({
      left: `${x - r}px`,
      top: `${y - r}px`,
      bottom: `${y - r + 2 * r}px`,
      right: `${x - r + 2 * r}px`,
      height: `${2 * r}px`,
      width: `${2 * r}px`
    }),
    [x, y, r]
  );
  return <span className={styles["circle"]} style={style}></span>;
};

export default Circle;
