import React from "react";

const Navigation = ({ current, onNext, onPrev }) => {
  return (
    <>
      <button className="prev" onClick={onPrev}>
        &lt;
      </button>
      <button className="next" onClick={onNext}>
        &gt;
      </button>
    </>
  );
};

export default Navigation;
