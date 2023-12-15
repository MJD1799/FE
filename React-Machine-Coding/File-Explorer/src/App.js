import "./styles.css";

import FolderRenderer from "./FolderRenderer";
import FileRenderer from "./FileRenderer";
import Directory from "./Directory";

import { useCallback, useState } from "react";
import { insertNode } from "./helpers";

const data = [
  {
    id: "1",
    type: "FOLDER",
    name: "F1",
    children: [
      {
        id: "1_1",
        type: "FOLDER",
        name: "F1_1",
        children: [
          {
            id: "1_1_1",
            type: "File",
            name: "F1-file"
          }
        ]
      },
      {
        id: "1_2",
        type: "FOLDER",
        name: "F1_2",
        children: [
          {
            id: "1_2_1",
            type: "File",
            name: "F1_2-file"
          }
        ]
      }
    ]
  }
];

export default function App() {
  const [tree, setTree] = useState(data);
  const [type, setType] = useState("");
  const handleFolderAdd = useCallback(() => {}, []);

  const handleFileAdd = useCallback(() => {}, []);
  const handleAdd = useCallback((eventType) => {
    setType(eventType);
  }, []);

  const handleUpdate = useCallback(
    (node) => {
      console.log("arg:", node);
      const updatedTree = insertNode(tree[0], tree[0].id, node);
      console.log("up:", updatedTree);
      setTree([updatedTree]);
    },
    [tree]
  );

  return (
    <div className="App">
      {/* <FolderRenderer name="folder-1" />
      <FileRenderer name="file-1" /> */}
      <Directory
        data={tree}
        handleFolderAdd={handleFolderAdd}
        handleFileAdd={handleFileAdd}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
