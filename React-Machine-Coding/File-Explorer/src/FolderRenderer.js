import React, { useState, useCallback } from "react";

import Input from "./Input";
import styles from "./styles/folder.module.css";

const FolderRenderer = ({ name, handleUpdate, id }) => {
  const [inputType, setInputType] = useState(undefined);
  const handleAddNewItem = useCallback(
    (type) => (e) => {
      e.stopPropagation();
      setInputType(type);
    },
    [id]
  );
  const handleAdd = (name) => {
    handleUpdate({ name, type: inputType, id });
    setInputType(undefined);
  };
  const handleBlur = () => {
    setInputType(undefined);
  };
  return (
    <>
      <div className={styles.folder}>
        <div>{name}</div>
        <div>
          <button onClick={handleAddNewItem("FOLDER")}>+Folder</button>
          <button onClick={handleAddNewItem("FILE")}>+File</button>
        </div>
      </div>
      {inputType && (
        <Input
          style={{ paddingLeft: "1rem" }}
          handleAdd={handleAdd}
          handleBlur={handleBlur}
        />
      )}
    </>
  );
};

export default FolderRenderer;
