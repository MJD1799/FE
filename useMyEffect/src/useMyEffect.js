import { useRef } from "react";

const useMyEffect = (cb, dep) => {
  const isRendererd = useRef(false);
  const preDep = useRef([]);
  if (!isRendererd.current) {
    isRendererd.current = true;
    if (cb) {
      const cleanUp = cb();
    }
    return;
  }

  let isChanged = false;
  if (dep) {
    dep.forEach((d, index) => {
      if (!Object.is(d, preDep.current?.[index])) {
        isChanged = true;
      }
    });
  } else {
    isChanged = true;
  }

  if (isChanged) {
    preDep.current = dep;
    const cleanUp = cb();
    cleanUp();
  }
};

export default useMyEffect;
