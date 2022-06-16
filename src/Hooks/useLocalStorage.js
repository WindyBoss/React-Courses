import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) || initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

/*
* Sometimes we need to store some data in the local storage, and is necessary to use the customer stringifier and parser
*/
export const useLocalStorageModif = (key, initialValue, serialize = JSON.stringify, deserialize = JSON.parse) => {
  const [storedValue, setStoredValue] = useState(() => {
    return deserialize(window.localStorage.getItem(key)) || initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, serialize(storedValue));
  }, [key, storedValue, serialize]);

  return [storedValue, setStoredValue];
};
