import React from 'react';

import { useGetTodosQuery } from 'service/apiService';

import TodoContainer from './components/TodoContainer';


function Todos() {
  /*
   * useDispatch - connect actions with active UI elements
   * useSelector - returns state elements
   */

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  return (
    <>
      {isSuccess && <TodoContainer todos={todos} />}
      {isError && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
    </>
  );
}

export default Todos;
