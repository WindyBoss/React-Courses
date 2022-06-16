import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { TodoListWrapper } from './TodoListWrapper';
import TodoFilter from './TodoFilter';
import IconBtn from './IconBtn';
import { ModalWindow } from './ModalWindow';

import { StyledList, HeaderTextContainer, Text } from './Styles/TodoList.styled';

import { AiFillDelete as DeleteIcon } from 'react-icons/ai';
import { MdDone as CompleteIcon } from 'react-icons/md';
import { BsXLg as UnMarkIcon } from 'react-icons/bs';
import { GoPencil as AddIcon } from 'react-icons/go';
import { GoAlert as AlertIcon } from 'react-icons/go';
import { IoCheckmarkSharp as DoneIcon } from 'react-icons/io5';

export default class TodoList extends Component {
  state = {
    /*
    * Создаем ключи для localStorage, которые будут содержать данные о задачах и их изменениях, чтобы избежать перезаписи данных при изменении задачи,
    * например, при добавлении новой задачи, или при изменении задачи после ее удаления.
    */
    localStorageKey: 'todos',
    diffKey: 'diffKey',
    todos: [],
    filter: '',
    showModal: false,
    diff: [],
  };

  constructor(props) {
    super(props);
    this.listRef = React.createRef(); //-> this code is used for connection between unserved by React component and DOM element to React (for ex. div)
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // It is static - no excess to this
    // remake received props

    const receivedNextProps = nextProps.todos??[];
    const prevStateTodos = prevState.todos??[];

    if(JSON.stringify(receivedNextProps) === JSON.stringify(prevStateTodos)) { // for more optimized code performance it is better to use JSON format
      return { diff: [] };
    } else {
      return { todos: prevStateTodos, diff: TodoList.getDifference(prevStateTodos, receivedNextProps) }; // different function is used here
    };
  };

  static getDifference(arr1, arr2) {
    // this function is used to get difference between two arrays and to return the difference (objects), which are not similar with first props
    // It is static - no excess to this

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
    /*
    * При загрузке компонента проверяем наличие данных в localStorage, если есть, то записываем их в state, если нет, то записываем пустой массив,
    * после чего проверяем наличие данных в localStorage по ключу diffKey, если есть, то записываем в state значение из localStorage, если нет, то записываем 0
    */
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

    /*
    * Создаем ключи для localStorage, которые будут содержать данные о задачах и их изменениях, чтобы избежать перезаписи данных при изменении задачи,
    */
    const prevTodos = prevState.todos;
    const nextTodos = this.state.todos;
    const { localStorageKey, diff, diffKey } = this.state;

    /*
    * Делаем проверку в componentDidUpdate, чтобы не зациклить рендер елемента
    */
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
    */
  };

  /*
  * it is good for scrolling, but here does not work
  getSnapshotBeforeUpdate(_, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      return 0;
    }
    return null;
  };
  */

  filterTasks = e => {
    /*
    * Filter tasks that match the value of the input field
    */
    const keyword = e.target.value;
    this.setState({ filter: keyword });
  };

  deleteTask = taskId => {
    /*
    * Delete task from the list, update localStorage, save difference number
    */
    this.setState(prevState => ({todos: prevState.todos.filter(todos => todos.id !== taskId)}));
  };

  toggleCompleted = taskId => {
    /*
    * Toggle completed status of the task, update localStorage
   */
    this.setState(({ todos }) => ({todos: todos.map(todo => todo.id === taskId ? { ...todo, completed: !todo.completed } : todo)}));
  };

  getTodos() {
    /*
    * filter tasks by using filter in state
    */
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.name.toLowerCase().includes(normalizedFilter) ||
      todo.description.toLowerCase().includes(normalizedFilter)
    );
  };

  addTask = ({ name, description, deadline, priority }) => {
    /*
    * Add tasks using form from modal window
    */
    const task = {
      name: name,
      deadline: deadline,
      description: description,
      id: nanoid(), // -> id is obligatory for React list elements
      completed: false,
      priority: priority
    };

    this.setState(({ todos }) => ({ todos: [task, ...todos] }));
  };

  toggleModal = () => {
    /*
    * Toggle modal state
    */
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  };

  render() {
    const todos = this.getTodos();
    const { theme } = this.props;
    const { showModal, diff } = this.state;
    const completedTasksNumber = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
        <StyledList ref={this.listRef}>  {/* For connection element with React servicing add this.listRef from constructor to element */}

        <HeaderTextContainer colors={theme.colors}>
          <h2>Year Task List</h2>
          <Text>Number of changes: {diff.length}</Text>
          <Text>Completed: {completedTasksNumber}</Text>
          <Text>Total: {todos.length}</Text>
          <TodoFilter colors={theme.colors} onChange={this.filterTasks} />
          <IconBtn colors={theme.colors} onClick={this.toggleModal} aria-label="showModal">
            <AddIcon width={20} height={20} fill={theme.colors.btnTextColor}/>
            Add Task
          </IconBtn>
        </HeaderTextContainer>

        <TodoListWrapper
          todoList={todos}
          onDelete={this.deleteTask}
          onToggle={this.toggleCompleted}
          themeColors={theme.colors}
          DeleteIcon={DeleteIcon}
          CompleteIcon={CompleteIcon}
          UnMarkIcon={UnMarkIcon}
          AlertIcon={AlertIcon}
          DoneIcon={DoneIcon}
        />
        {showModal &&
          <ModalWindow onSubmit={this.addTask} onClick={this.toggleModal} colors={theme.colors} />
        }
      </StyledList>
    );
  };
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
  theme: PropTypes.shape({
    colors: PropTypes.objectOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired
  })
};

