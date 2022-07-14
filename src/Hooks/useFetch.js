import { useState, useEffect, useCallback } from 'react';

// This is custom hook which also response for state machine changes, and return state
export const useFetch = (apiState, makeFetch, params) => {
    const [state, setState] = useState(null);
  
    const fetchData = useCallback(async () => {
      apiState.pending();
      try {
        setState(await makeFetch(params));
        apiState.success();
      } catch (error) {
        apiState.error();
      }
    }, [apiState, makeFetch, params]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    return state;
  }