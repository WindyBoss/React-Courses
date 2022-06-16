import { ListEl, TodoListContainer } from './Styles/TodoList.styled';
import PropTypes from 'prop-types';

import TodoEl from './TodoEl';


export function TodoListWrapper({
  todoList,
  onDelete,
  onToggle,
  themeColors,
  DeleteIcon,
  CompleteIcon,
  UnMarkIcon,
  AlertIcon,
  DoneIcon
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
            DeleteIcon={DeleteIcon}
            CompleteIcon={CompleteIcon}
            UnMarkIcon={UnMarkIcon}
            AlertIcon={AlertIcon}
            DoneIcon={DoneIcon}
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
  DeleteIcon: PropTypes.func.isRequired,
  CompleteIcon: PropTypes.func.isRequired,
  UnMarkIcon: PropTypes.func.isRequired,
  AlertIcon: PropTypes.func.isRequired,
  DoneIcon: PropTypes.func.isRequired,
};
