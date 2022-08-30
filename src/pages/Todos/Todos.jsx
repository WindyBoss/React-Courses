import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import TodoList from './components/TodoList';
import Pending from 'components/Pending';
import FailedMessage from 'components/FailedMessage';

import {
  selectAllTodos,
  getTodoStatus,
  getTodoError,
} from 'redux/todo/todoReducer';

import { getTodos } from 'redux/todo/todoActions';

export default function Todos() {
  const dispatch = useDispatch();

  const todos = useSelector(selectAllTodos);
  const todoStatus = useSelector(getTodoStatus);
  const error = useSelector(getTodoError);

  console.log(todos);

  useEffect(() => {
    if (todoStatus === 'idle') {
      dispatch(getTodos());
    }
  }, [todoStatus, dispatch, todos]);

  // New React components syntax
  let context = '';

  if (todoStatus === 'idle') {
    context = <h2>Wait for Todos</h2>;
  } else if (todoStatus === 'loading') {
    context = <Pending />;
  } else if (todoStatus === 'succeeded' && todoStatus.length > 0) {
    context = <TodoList todos={todos} />;
  } else if (todoStatus === 'failed') {
    context = <FailedMessage error={error} />;
  }

  return <>{context}</>;
}
