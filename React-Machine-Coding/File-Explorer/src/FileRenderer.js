import React from "react";

import styles from "./styles/file.module.css";

const FileRenderer = ({ name, icon, className }) => {
  return (
    <div className={styles.file}>
      {/* <span>File-Icon</span> */}
      <span>{name}</span>
    </div>
  );
};

export default FileRenderer;
