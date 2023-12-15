import { useCallback, useEffect, useRef, useState } from "react";
import useInfiniteScroll from "./useInfiniteScroll";

function useSearch({ fetchAction, searchText, optionMaker }) {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const abortControllerRef = useRef(null);
  const { updatedOptions, page = 1 } = useInfiniteScroll(options);

  console.log("option:", options);
  const handleFetch = useCallback(
    async (search, page) => {
      if (search) {
        setIsLoading(true);
        try {
          if (abortControllerRef.current) abortControllerRef.current.abort();
          abortControllerRef.current = new AbortController();
          const response = await fetchAction({
            searchText: search,
            networkOptions: { signal: abortControllerRef.current.signal },
            pageInfo: { limit: 10, skip: 10 * (page - 1) }
          });
          console.log("res:", response);
          setOptions(optionMaker(response));
        } catch (error) {
        } finally {
          setIsLoading(false);
        }
      }
    },
    [fetchAction, optionMaker]
  );

  useEffect(() => {
    if (!searchText) return;
    handleFetch(searchText, page);
  }, [handleFetch, searchText, page]);

  return {
    isLoading,
    options: updatedOptions,
    page
  };
}

export default useSearch;
