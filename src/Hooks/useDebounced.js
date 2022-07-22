import { useSearchParams } from 'react-router-dom';

import { useDebounceCallback } from '@react-hook/debounce';

/*
The next hook is used in combination with hook useSearchParams and is used to debounced the search process which is connected with direct input onChange
*/

export const useDebounce = (wait, leading) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return [searchParams, useDebounceCallback(setSearchParams, wait, leading)];
};
