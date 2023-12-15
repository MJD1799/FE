import { useCallback, useRef, useState } from "react";

function useInfiniteScroll(options, limit = 5) {
  const page = useRef(1);
  const interSectionObserverRef = useRef(null);
  const handleScroll = useCallback((node) => {
    if (interSectionObserverRef.current) {
      interSectionObserverRef.current.disconnect();
    }

    interSectionObserverRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log("node:", node);
        page.current += 1;
        //setPage((page) => page + 1);
      }
    });
    if (node) interSectionObserverRef.current.observe(node);
  }, []);
  const updatedOptions = options.map((item, index) => {
    if (index + limit === options.length) {
      return { ...item, ref: handleScroll };
    } else {
      return item;
    }
  });
  return {
    updatedOptions,
    page: page.current
  };
}
export default useInfiniteScroll;
