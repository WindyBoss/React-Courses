import { useState, useEffect } from 'react';

export const useFetch = ({
  fetchFunc,
  apiState,
  firstRenderCheck = false,
  addProp,
  initialValue = null,
  stopFirstRender = false,
}) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    if (stopFirstRender) {
      return;
    }

    const abortController = new AbortController();
    const fetch = async () => {
      apiState.pending();
      try {
        const data = await fetchFunc(addProp);
        setState(data);
        apiState.success();
      } catch (error) {
        apiState.error();
      }
    };

    if (firstRenderCheck) {
      if (addProp) {
        fetch();
      }
    } else {
      fetch();
    }

    return () => {
      abortController.abort();
    };
  }, [
    apiState,
    addProp,
    setState,
    fetchFunc,
    firstRenderCheck,
    stopFirstRender,
  ]);

  return { state, setState };
};
