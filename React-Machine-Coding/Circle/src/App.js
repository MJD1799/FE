import { useEffect, useRef, useState } from "react";

import Circle from "./Circle";

import "./styles.css";

// const radius =

export default function App() {
  const [state, setState] = useState(undefined);
  const [current, setCurrent] = useState();
  const axisRef = useRef();
  const handleClick = (event) => {
    console.log("e:", event);
    const axis = {
      id: `${state?.length || 1}_${event.clientX}`,
      x: event.clientX,
      y: event.clientY,
      r: event.r || 25
    };
    setCurrent(axis);
    setState((prev) => [...(prev || []), axis]);
  };

  const handleSelect = (event) => {
    console.log("select:", event);
    if (event.type === "mousedown") {
      axisRef.current = { x: event.clientX, y: event.clientY };
    } else {
      const startX = axisRef.current.x;
      const startY = axisRef.current.y;
      console.log("st:", startX, startY);
      const endX = event.clientX;
      const endY = event.clientY;
      const r =
        (endX - startX) * (endX - startX) + (endY - startY) * (endY - startY);
      handleClick({
        clientX: startX,
        clientY: startY,
        r: Math.sqrt(r)
      });
      axisRef.current = null;
    }
  };

  // useEffect(() => {
  //   if (!appRef.current) {
  //     appRef.current = document.querySelector(".App");
  //     appRef.current.addEventListener("mousedown", handleSelect);
  //   }
  // }, []);

  return (
    <div className="App" onMouseDown={handleSelect} onMouseUp={handleSelect}>
      {state &&
        state.map((item) => (
          <Circle key={item.id} x={item.x} y={item.y} r={item.r} />
        ))}
    </div>
  );
}
