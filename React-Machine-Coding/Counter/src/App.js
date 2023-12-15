import "./styles.css";

import Button from "./Button";
import Counter from "./Counter";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [counterId, setCounterId] = useState();

  const handleStart = () => {
    if (!counterId) {
      const id = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
      setCounterId(id);
    }
  };

  const handleStop = () => {
    if (counterId) {
      clearInterval(counterId);
      setCounterId(null);
    }
  };
  return (
    <div className="App">
      <section>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
      </section>
      <Counter count={count} />
    </div>
  );
}
