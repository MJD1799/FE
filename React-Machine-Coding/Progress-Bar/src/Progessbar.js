import React from "react";

const Progressbar = ({ progress }) => {
  return (
    <div className="progress-outer" data-progress={`${progress}%`}>
      <div
        className="progress-inner"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      ></div>
    </div>
  );
};

export default Progressbar;
