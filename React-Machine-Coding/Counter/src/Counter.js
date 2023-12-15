import React from "react";

const Counter = ({ count }) => {
  return <h1>{`Count:${count || 0}`}</h1>;
};

export default Counter;
