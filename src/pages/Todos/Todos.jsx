import React, { useContext, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompleteRequest,
  toggleCompleteSuccess,
  toggleCompleteError,
} from 'redux/todos/todoActions';

import { getTodos, useGetTodosQuery } from 'service/apiService';

import { TodoListWrapper } from './components/TodoListWrapper';
import TodoFilter from './components/TodoFilter';
import TodoEditor from './components/TodoEditor';
import ModalWindow from 'components/ModalWindow';

import {
  StyledList,
  HeaderTextContainer,
  Text,
} from './styles/TodoList.styled';

import { themeContext } from 'context/themeContext';

import { ButtonStyled } from 'components/CommonComponents';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';

import { useModal } from 'hooks';

function Todos() {
  const [showModal, toggleModal] = useModal(false);
  const listRef = React.createRef();

  const { data: posts, isLoading, isSuccess, isError, error } = useGetTodosQuery();

  /*
   * useDispatch - connect actions with active UI elements
   * useSelector - returns state elements
   */

  const dispatch = useDispatch();
  const storeTodos = useSelector(state => state.todoList.todos);
  const filter = useSelector(state => state.todoList.filter);

  const completedTasksNumber = storeTodos
    ? storeTodos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)
    : 0;

  // const filterTasks = e => {
  //   dispatch(setFilter(e.target.value));
  // };

  useEffect(() => {
    async function getAllTodos() {
      dispatch(fetchTodoRequest());

      try {
        const response = await getTodos();
        console.log(response);
        dispatch(fetchTodoSuccess(response));
      } catch (error) {
        dispatch(fetchTodoError());
      }
    }

    getAllTodos();
  }, [dispatch]);

  console.log(getTodos());

  // const deleteTask = taskId => {
  //   dispatch(deleteTodo(taskId));
  // };

  // const toggleCompleted = taskId => {
  //   dispatch(toggleTodo(taskId));
  // };

  const filterTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return storeTodos.filter(
      todo =>
        todo.name.includes(normalizedFilter) ||
        todo.description.includes(normalizedFilter)
    );
  };

  // const addTask = ({ name, description, deadline, priority }) => {
  //   /*
  //    * action must be called inside useDispatch, which transport action to reducer factory
  //    */
  //   dispatch(
  //     addTodo({
  //       name: name,
  //       deadline: deadline,
  //       description: description,
  //       priority: priority,
  //     })
  //   );
  // };

  return (
    <>
      {isLoading && <>Loading...</>}
      {isSuccess && <>isSuccess...</>}
      {isError && <>isError...</>}
    </>
  //   <TodoContainer
  //     listRef={listRef}
  //     completedTasksNumber={completedTasksNumber}
  //     todos={filterTodos()}
  //     // filterTasks={filterTasks}
  //     toggleModal={toggleModal}
  //     // deleteTask={deleteTask}
  //     // toggleCompleted={toggleCompleted}
  //     // addTask={addTask}
  //     showModal={showModal}
  //   />
  // ) : (
    // <></>


  );
}

function TodoContainer({
  listRef,
  completedTasksNumber,
  todos,
  filterTasks,
  toggleModal,
  deleteTask,
  toggleCompleted,
  addTask,
  showModal,
}) {
  const { mainTheme } = useContext(themeContext);

  return (
    <StyledList ref={listRef}>
      <HeaderTextContainer colors={mainTheme.colors}>
        <h2>Year Task List</h2>
        <Text>Completed: {completedTasksNumber}</Text>
        <Text>Total: {todos.length}</Text>
        <TodoFilter colors={mainTheme.colors} onChange={filterTasks} />
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
        todoList={todos}
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
    </StyledList>
  );
}

export default Todos;

// import React, { useContext, useState, useEffect } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import {
//   addTodo,
//   deleteTodo,
//   toggleTodo,
//   setFilter,
// } from 'redux/todos/todoSlice';

// import { getTodos } from 'service/apiService';

// import { TodoListWrapper } from './components/TodoListWrapper';
// import TodoFilter from './components/TodoFilter';
// import TodoEditor from './components/TodoEditor';
// import ModalWindow from 'components/ModalWindow';

// import {
//   StyledList,
//   HeaderTextContainer,
//   Text,
// } from './styles/TodoList.styled';

// import { themeContext } from 'context/themeContext';

// import { ButtonStyled } from 'components/CommonComponents';
// import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';

// import { useModal } from 'hooks';

// function Todos() {
//   const [showModal, toggleModal] = useModal(false);
//   const listRef = React.createRef();

//   /*
//    * useDispatch - connect actions with active UI elements
//    * useSelector - returns state elements
//    */

//   const dispatch = useDispatch();
//   const storeTodos = useSelector(state => state.todoList.todos);
//   const filter = useSelector(state => state.todoList.filter);

//   const completedTasksNumber = storeTodos
//     ? storeTodos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)
//     : 0;

//   const filterTasks = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   console.log(getTodos());

//   const deleteTask = taskId => {
//     dispatch(deleteTodo(taskId));
//   };

//   const toggleCompleted = taskId => {
//     dispatch(toggleTodo(taskId));
//   };

//   const filterTodos = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return storeTodos.filter(
//       todo =>
//         todo.name.includes(normalizedFilter) ||
//         todo.description.includes(normalizedFilter)
//     );
//   };

//   const addTask = ({ name, description, deadline, priority }) => {
//     /*
//      * action must be called inside useDispatch, which transport action to reducer factory
//      */
//     dispatch(
//       addTodo({
//         name: name,
//         deadline: deadline,
//         description: description,
//         priority: priority,
//       })
//     );
//   };

//   return storeTodos ? (
//     <TodoContainer
//       listRef={listRef}
//       completedTasksNumber={completedTasksNumber}
//       todos={filterTodos()}
//       filterTasks={filterTasks}
//       toggleModal={toggleModal}
//       deleteTask={deleteTask}
//       toggleCompleted={toggleCompleted}
//       addTask={addTask}
//       showModal={showModal}
//     />
//   ) : (
//     <></>
//   );
// }

// function TodoContainer({
//   listRef,
//   completedTasksNumber,
//   todos,
//   filterTasks,
//   toggleModal,
//   deleteTask,
//   toggleCompleted,
//   addTask,
//   showModal,
// }) {
//   const { mainTheme } = useContext(themeContext);

//   return (
//     <StyledList ref={listRef}>
//       <HeaderTextContainer colors={mainTheme.colors}>
//         <h2>Year Task List</h2>
//         <Text>Completed: {completedTasksNumber}</Text>
//         <Text>Total: {todos.length}</Text>
//         <TodoFilter colors={mainTheme.colors} onChange={filterTasks} />
//         <ButtonStyled
//           colors={mainTheme.colors}
//           onClick={toggleModal}
//           aria-label="showModal"
//           endIcon={<CreateTwoToneIcon />}
//           addFeat={{ position: 'absolute', right: '10px', top: '10px' }}
//         >
//           Add Task
//         </ButtonStyled>
//       </HeaderTextContainer>

//       <TodoListWrapper
//         todoList={todos}
//         onDelete={deleteTask}
//         onToggle={toggleCompleted}
//         themeColors={mainTheme.colors}
//       />
//       {showModal && (
//         <ModalWindow
//           todolist="todolist"
//           onSubmit={addTask}
//           onClick={toggleModal}
//           mainTheme={mainTheme}
//         >
//           <TodoEditor
//             colors={mainTheme.colors}
//             onSubmit={addTask}
//             onClick={toggleModal}
//           />
//         </ModalWindow>
//       )}
//     </StyledList>
//   );
// }

// export default Todos;
