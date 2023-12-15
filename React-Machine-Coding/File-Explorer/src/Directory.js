import React, { useCallback, useState } from "react";
import FolderRenderer from "./FolderRenderer";
import FileRenderer from "./FileRenderer";
import Input from "./Input";

const Directory = ({ id, data, handleUpdate, filetype, show }) => {
  console.log("d:", data);
  const [inputType, setInputType] = useState(filetype);
  const [visible, setVisible] = useState(show);
  if (!data || !data.length) return null;
  return (
    <div>
      {data.map((item, index) => {
        const id = item?.id;
        const type = item?.type;
        const name = item?.name;
        const children = item?.children;
        console.log("ii:", item, children);
        if (type === "FOLDER") {
          return (
            <div key={id} style={{ marginTop: "1rem" }}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setVisible((v) => !v);
                }}
              >
                <FolderRenderer
                  key={id}
                  name={name}
                  id={id}
                  handleUpdate={handleUpdate}
                />
              </div>
              {visible && (
                <div style={{ paddingLeft: "1rem" }}>
                  {/* {inputType && (
                  <Input handleAdd={handleAdd} handleBlur={handleBlur} />
                )} */}
                  <Directory
                    show={visible}
                    id={id}
                    key={id}
                    data={children}
                    handleUpdate={handleUpdate}
                  />
                </div>
              )}
            </div>
          );
        } else {
          return (
            <div style={{ marginTop: "1rem" }}>
              <FileRenderer key={id} name={name} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Directory;
