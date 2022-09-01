import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import TodoList from './components/TodoList';
import Pending from 'components/Pending';
import FailedMessage from 'components/FailedMessage';
import TodoTotal from './components/TodoTotal';

import { todoSelectors, todoOperations } from 'redux/todo';

export default function Todos() {
  const dispatch = useDispatch();

  const todos = useSelector(todoSelectors.getVisibleTodos);
  const todoStatus = useSelector(todoSelectors.getTodoStatus);
  const error = useSelector(todoSelectors.getTodoError);

  useEffect(() => {
    if (todoStatus === 'idle') {
      // Here is used the asyncThunk function with useDispatch hook
      dispatch(todoOperations.fetchTodos());
    }
  }, [todoStatus, dispatch, todos]);

  // New React components syntax
  let context = '';

  if (todoStatus === 'idle') {
    context = <h2>Wait for Todos</h2>;
  } else if (todoStatus === 'loading') {
    context = <Pending />;
  } else if (todoStatus === 'succeeded' && todoStatus.length > 0) {
    context = (
      <>
        <TodoTotal />
        <TodoList todos={todos} />
      </>
    );
  } else if (todoStatus === 'failed') {
    context = <FailedMessage error={error} />;
  }

  return <>{context}</>;
}
