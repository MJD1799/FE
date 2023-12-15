import "./styles.css";
import Progressbar from "./Progessbar";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => Math.min(prev + 4, 100));
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className="App">
      <Progressbar progress={progress} />
    </div>
  );
}
