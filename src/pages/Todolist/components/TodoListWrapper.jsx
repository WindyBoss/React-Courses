import { ListEl, TodoListContainer } from '../styles/TodoList.styled';
import TodoEl from './TodoEl';
import PropTypes from 'prop-types';

export function TodoListWrapper({
  todoList,
  onDelete,
  onToggle,
  themeColors,
}) {
  return (
    <TodoListContainer>
      {todoList.map(({ id, name, deadline, description, completed, priority }) => (
        <ListEl key={id} colors={themeColors}>
          <TodoEl
            id={id}
            name={name}
            deadline={deadline}
            description={description}
            completed={completed}
            priority={priority}
            deleteTask={onDelete}
            toggleCompleted={onToggle}
            colors={themeColors}
          />
        </ListEl>
      ))}
    </TodoListContainer>
  );
};


TodoListWrapper.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    deadline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  themeColors: PropTypes.objectOf(PropTypes.string).isRequired,
};