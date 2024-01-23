import useMyEffect from "./useMyEffect";

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  useMyEffect(() => {
    console.log("rendered:", c2);
    return () => {
      console.log("clean:");
    };
  }, [c3, c2]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {c2}
      <button onClick={() => setC2((c) => c + 1)}>Click Me</button>
    </div>
  );
}
