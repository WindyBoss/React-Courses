import TodoFilter from './components/TodoFilter';

import { todoSelectors } from 'redux/todo';
import { useSelector } from 'react-redux';
import { showTheme } from 'redux/theme/themeSlice';
import { TotalTodoContainer } from './TodoTotal.styled';

export default function TodoTotal() {
  const todoNumber = useSelector(todoSelectors.getTodoCount);
  const completedTodosNumber = useSelector(todoSelectors.getCompleteNumber);
  const inCompletedTodosNumber = useSelector(todoSelectors.getIncompleteNumber);
  const { theme } = useSelector(showTheme);

  return (
    <TotalTodoContainer colors={theme.colors}>
      <TodoFilter />
      <p colors={theme.colors}>Total todo number {todoNumber}</p>
      <p colors={theme.colors}>Completed todo number {completedTodosNumber}</p>
      <p colors={theme.colors}>
        In completed todo number {inCompletedTodosNumber}
      </p>
    </TotalTodoContainer>
  );
}
