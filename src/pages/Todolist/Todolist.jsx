import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { TodoListWrapper } from './components/TodoListWrapper';
import TodoFilter from './components/TodoFilter';
import TodoEditor from './components/TodoEditor';
import ModalWindow from '../../components/ModalWindow';

import { StyledList, HeaderTextContainer, Text } from './styles/TodoList.styled';

import { themeContext } from "context/authContext";

import { ButtonStyled } from '../../components/CommonComponents'; 
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';

import { useModal } from 'hooks';

export function TodoList ({todos}) {
  const localStorageKey = 'todos';
  const diffKey = 'diff';
  const [allTodos, setAllTodos] = useState([]);
  const [filter, setFilter] = useState('');
  const [showModal, toggleModal] = useModal(false);
  const [diff, setDiff] = useState([]);
  const listRef = React.createRef();

  function getDifference(arr1, arr2) {
    if (arr1.length > 0 && arr2.length > 0) {
      return arr1.filter(obj1 => {
        return !arr2.some(obj2 => {
          return obj1.id === obj2.id;
        });
      });
    } else {
      return [];
    };
  };

  useEffect(() => {
    const takenTodos = localStorage.getItem(localStorageKey);
    const diff = localStorage.getItem(diffKey);
    const parsedTodos = JSON.parse(takenTodos);
    if (parsedTodos && parsedTodos.length > 0) {
      setAllTodos(parsedTodos);
      setDiff(diff);
    } 
    else {
      setAllTodos(todos);
    };
  }, [todos])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(allTodos));
    if(JSON.stringify(allTodos) !== JSON.stringify(todos)) {
      setDiff(getDifference(allTodos, todos));
    }
  },[allTodos, todos]);

  const filterTasks = e => {
    setFilter(e.target.value)
  };

  const deleteTask = taskId => {
    setAllTodos(prevTodos => (prevTodos.filter(todos => todos.id !== taskId)));
  };

  const toggleCompleted = taskId => {
    setAllTodos(prevTodos => (prevTodos.map(todo => todo.id === taskId ? { ...todo, completed: !todo.completed } : todo)));
  };

  function getTodos() {
    const normalizedFilter = filter.toLowerCase();
    return allTodos.filter(todo =>
      todo.name.toLowerCase().includes(normalizedFilter) ||
      todo.description.toLowerCase().includes(normalizedFilter)
    );
  };

  const addTask = ({ name, description, deadline, priority }) => {
    const task = {
      name: name,
      deadline: deadline,
      description: description,
      id: nanoid(), 
      completed: false,
      priority: priority
    };
    setAllTodos(prevTodos => ([task, ...prevTodos] ));
  };

    const completedTasksNumber = allTodos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    const filteredTodos = getTodos();
    return (
      <TodoContainer
      listRef={listRef}  
        diffLength={diff.length} 
        completedTasksNumber={completedTasksNumber} 
        todos={filteredTodos}
        filterTasks={filterTasks}
        toggleModal={toggleModal}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
        addTask={addTask}
        showModal={showModal}
      />     
  );
};

function TodoContainer ({ 
  listRef,  
  diffLength, 
  completedTasksNumber, 
  todos, 
  filterTasks, 
  toggleModal, 
  deleteTask, 
  toggleCompleted,
  addTask,
  showModal 
}) {
  const { mainTheme } = useContext(themeContext);

  return (
    <StyledList ref={listRef}>
    <HeaderTextContainer colors={mainTheme.colors}>
      <h2>Year Task List</h2>
      <Text>Number of changes: {diffLength}</Text>
      <Text>Completed: {completedTasksNumber}</Text>
      <Text>Total: {todos.length}</Text>
      <TodoFilter colors={mainTheme.colors} onChange={filterTasks} />
      <ButtonStyled 
      colors={mainTheme.colors} 
      onClick={toggleModal}
      aria-label="showModal"
      endIcon={<CreateTwoToneIcon/>}
      addFeat={{position: 'absolute', right: '10px', top: '10px'}}
      >Add Task</ButtonStyled>
    </HeaderTextContainer>

    <TodoListWrapper
      todoList={todos}
      onDelete={deleteTask}
      onToggle={toggleCompleted}
      themeColors={mainTheme.colors}
    />
      { showModal && <ModalWindow todolist='todolist' onSubmit={addTask} onClick={toggleModal} mainTheme={mainTheme}>
      <TodoEditor colors={mainTheme.colors} onSubmit={addTask} onClick={toggleModal}/>
      </ModalWindow> }
      </StyledList>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    deadline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  })).isRequired,
};