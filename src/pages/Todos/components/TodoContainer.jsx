import React, { useContext, useState, useEffect } from 'react';

import { TodoListWrapper } from './TodoListWrapper';
import TodoFilter from './TodoFilter';
import TodoEditor from './TodoEditor';
import ModalWindow from 'components/ModalWindow';

import {
  HeaderTextContainer,
  Text,
  StyledList,
} from '../styles/TodoList.styled';

import { themeContext } from 'context/themeContext';

import { ButtonStyled } from 'components/CommonComponents';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';

import { useModal } from 'hooks';

export default function TodoContainer({
  todos,
  deleteTask,
  toggleCompleted,
  addTask,
}) {
  const { mainTheme } = useContext(themeContext);

  const [showModal, toggleModal] = useModal();

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const [filteredTodos, setFilteredTodos] = useState(todos);

  function filterTodos(e) {
    const normalizedFilter = e.target.value.toLowerCase();
    console.log(normalizedFilter);

    const filteredTodos = todos.filter(
      todo =>
        todo.name.toLowerCase().includes(normalizedFilter) ||
        todo.description.toLowerCase().includes(normalizedFilter)
    );

    setFilteredTodos(filteredTodos);
  }

  function findCompleteTaskNumber() {
    return todos.reduce((acc, task) => {
      if (task.completed) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }

  return (
    <StyledList>
      <>
        <HeaderTextContainer colors={mainTheme.colors}>
          <h2>Year Task List</h2>
          <Text>Completed: {findCompleteTaskNumber()}</Text>
          <Text>Total: {todos.length}</Text>
          <TodoFilter colors={mainTheme.colors} onChange={filterTodos} />
          <ButtonStyled
            colors={mainTheme.colors}
            onClick={toggleModal}
            aria-label="showModal"
            endIcon={<CreateTwoToneIcon />}
            addFeat={{ position: 'absolute', right: '10px', top: '10px' }}
          >
            Add Task
          </ButtonStyled>
        </HeaderTextContainer>

        <TodoListWrapper
          todoList={filteredTodos}
          onDelete={deleteTask}
          onToggle={toggleCompleted}
          themeColors={mainTheme.colors}
        />
        {showModal && (
          <ModalWindow
            todolist="todolist"
            onSubmit={addTask}
            onClick={toggleModal}
            mainTheme={mainTheme}
          >
            <TodoEditor
              colors={mainTheme.colors}
              onSubmit={addTask}
              onClick={toggleModal}
            />
          </ModalWindow>
        )}
      </>
    </StyledList>
  );
}
