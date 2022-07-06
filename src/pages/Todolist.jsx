import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { TodoListWrapper } from '../components/TodoList/TodoListWrapper';
import TodoFilter from '../components/TodoList/TodoFilter';
import TodoEditor from '../components/TodoList/TodoEditor';
import { ModalWindow } from '../components/TodoList/ModalWindow';

import { StyledList, HeaderTextContainer, Text } from '../components/TodoList/Styles/TodoList.styled';

import { themeContext } from "context/authContext";

import { ButtonStyled } from '../components/globalStyles'; 
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';


const useModal = (isOpen = false) => {
  const [showModal, setShowModal] = useState(isOpen);
  const toggleModal = () => setShowModal(!showModal);

  return [showModal, toggleModal];
}

function TodoListHooks ({todos}) {
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

export default function TodoList({todos}) {
  return (
    <>
      {/* <TodoListClass todos={todos}/> */}
      <TodoListHooks todos={todos}/>
    </>
  )
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
  return (
    <themeContext.Consumer>
    {({mainTheme}) => (
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
      )}
    </themeContext.Consumer>        
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


class TodoListClass extends Component {
  state = {
    localStorageKey: 'todos',
    diffKey: 'diffKey',
    todos: [],
    filter: '',
    showModal: false,
    diff: [],
  };

  constructor(props) {
    super(props);
    this.listRef = React.createRef(); 
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const receivedNextProps = nextProps.todos??[];
    const prevStateTodos = prevState.todos??[];
    if(JSON.stringify(receivedNextProps) === JSON.stringify(prevStateTodos)) { // for more optimized code performance it is better to use JSON format
      return { diff: [] };
    } else {
      return { todos: prevStateTodos, diff: TodoListClass.getDifference(prevStateTodos, receivedNextProps) }; // different function is used here
    };
  };

  static getDifference(arr1, arr2) {
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

  componentDidMount() {
    const { diffKey, localStorageKey } = this.state;
    const todos = localStorage.getItem(localStorageKey);
    const diff = localStorage.getItem(diffKey);
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos && parsedTodos.length > 0) {
      this.setState({ todos: parsedTodos, diff: diff });
    } else {
      this.setState({ todos: this.props.todos });
    };
  };

  componentDidUpdate(_, prevState, snapshot) {
    const prevTodos = prevState.todos;
    const nextTodos = this.state.todos;
    const { localStorageKey, diff, diffKey } = this.state;

    if (prevTodos !== nextTodos) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextTodos));
      localStorage.setItem(diffKey, JSON.stringify(diff.length));
    };

    if(nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
      this.setState({diff: diff.length});
    };

    /*
      * it is good for scrolling, but here does not work
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTo = snapshot;
    };

  };
      */
  /*
  * it is good for scrolling, but here does not work
  getSnapshotBeforeUpdate(_, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      return 0;
    }
    return null;
    */
  };

  filterTasks = e => {
    const keyword = e.target.value;
    this.setState({ filter: keyword });
  };

  deleteTask = taskId => {
    this.setState(prevState => ({todos: prevState.todos.filter(todos => todos.id !== taskId)}));
  };

  toggleCompleted = taskId => {
    this.setState(({ todos }) => ({todos: todos.map(todo => todo.id === taskId ? { ...todo, completed: !todo.completed } : todo)}));
  };

  getTodos() {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.name.toLowerCase().includes(normalizedFilter) ||
      todo.description.toLowerCase().includes(normalizedFilter)
    );
  };

  addTask = ({ name, description, deadline, priority }) => {
    const task = {
      name: name,
      deadline: deadline,
      description: description,
      id: nanoid(), 
      completed: false,
      priority: priority
    };
    this.setState(({ todos }) => ({ todos: [task, ...todos] }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  };

  render() {
    const todos = this.getTodos();
    const { showModal, diff } = this.state;
    const completedTasksNumber = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <TodoContainer
      listRef={this.listRef}  
        diffLength={diff.length} 
        completedTasksNumber={completedTasksNumber} 
        todos={todos}
        filterTasks={this.filterTasks}
        toggleModal={this.toggleModal}
        deleteTask={this.deleteTask}
        toggleCompleted={this.toggleCompleted}
        addTask={this.addTask}
        showModal={showModal}
      />     
    );
  };
};