import { Component } from 'react';

// import of styles
import { 
    StyledList, 
    HeaderTextContainer, 
    ListEl,
    Text,
} from './Styles/TodoList.styled';
import TodoEl from './TodoEl';
import TodoFilter from './TodoFilter';
import TodoEditor from './TodoEditor';

/* 
* nanoid => library, which generate random id
* npm i nanoid
*/
import { nanoid } from 'nanoid';

/*
* It is good to use class for rendering instead of function, because it allow to use "State", which help to save state of object and reuse it
*/


/* 
* Типы внутренних данных компонента-класса
* static data - статические свойства и методы к которым необходимо получать доступ без экземпляра.
* this.state.data - динамические данные изменяющиеся методами компонента, состояние.
* this.data - данные которые будут разные для каждого экземпляра.
* const DATA - константы, данные которые не изменяются и одинаковы для всех экземпляров.
*/

class TodoList extends Component {

    // PropType & defaultProps
    static defaultProps = {
        step: 1,
        initialValue: 0,
    };
    static propTypes = {};
    /*
    constructor (props) {
    super(props);
    this.state = {value: this.props.initialValue}; => props must be added brackets inside constructor, for working here
    this.toggleCompleted = this.toggleCompleted.bind(this) ==> can resolve the problem of being unconnected to object
    this.fileInput = React.createRef() ==> this is the way how React serve file input 
    }
    */

    // It is possible to change 'state' by using this.setState()
    state = {
        todos: this.props.todos,
        savedTasks: this.props.todos,
        filter: '',
    };

    // event can be used in the the class
    // this.setState() is async function, so it is better to save in the variable
    filterTasks = e => {
        const keyword = e.target.value;
        // console.log(e); -> this works
        // console.log(this.props) -> this does not work
        this.setState({ filter: keyword });
    };
 
    // if is necessary to change state based on previous state it is better to use next syntax with 'prevState' 
    deleteTask = taskId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todos => todos.id !== taskId),
        }));
    };

    // if is not necessary to change based on previous state it can be used without 'prevState'
    toggleCompleted = taskId => {
        this.setState(({ todos }) => ({
            todos: todos.map(todo => todo.id === taskId ? { ...todo, completed: !todo.completed } : todo,
            ),
        }));
    };

    getTodos() {
        const { todos, filter } = this.state;

        // it is better to use toLowerCase() like this, because if to use it directly in function it will be called more times unnecessarily
        const normalizedFilter = filter.toLowerCase();

        // the next code helps to filter tasks list by 2 criterias
        return todos.filter(todo =>
            todo.name.toLowerCase().includes(normalizedFilter) ||
            todo.description.toLowerCase().includes(normalizedFilter)
        );        
    };


    // for using function inside render it is good to add it as callback 
    addTask = ({ name, description, deadline, priority }) => {  
        const task = { 
            id: nanoid(), 
            name: name, 
            description: description, 
            completed: false, 
            deadline: deadline, 
            priority: priority
        };
        this.setState(({ todos }) => ({ todos: [task, ...todos] }));
    };

    /*
    * function render is obligatory, which must include return with HTML
    * do not use setState inside, because it will lock the infinite cycle
    */
    render() {
        const todoList = this.getTodos();

        // For this calculation it is better to use reduce, because it will cycle and measure the length only once
        const completedTasksNumber = todoList.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

        // It is good practice to use destructurization
        // the next code is use to theme and is added as props to style file 
        const { colors } = this.props.theme;

        return (

            /*
            <input type="file" ref={this.fileInput} />
            */
            <StyledList>
                <h2>Year Task List</h2>
                <HeaderTextContainer colors={colors}>
                    <Text>Completed: {completedTasksNumber}</Text>
                    <Text>Total: {todoList.length}</Text>                  
                    <TodoFilter colors={colors} onChange={ this.filterTasks }/>
                </HeaderTextContainer>
                <TodoEditor colors={colors} onSubmit={ this.addTask }/>              
                {todoList.map(({ id, name, deadline, description, completed, priority }) => (
                    <ListEl key={id} colors={colors}>
                        <TodoEl
                            id={id}
                            name={name}
                            deadline={deadline}
                            description={description}
                            completed={completed}
                            priority={priority}
                            deleteTask={ this.deleteTask }
                            toggleCompleted={this.toggleCompleted} // -> callback does not work with this, so callback will show undefined for this.props
                            // so it is better to make the next code this.toggleCompleted.bind(this) => because function must know, to which object must to connected => 
                            // use bind in constructor, because it will optimize speed of webpage, by decreasing times of callbacks re-rendering
                            colors={colors}
                        />
                    </ListEl>
                ))}
            </StyledList>
        );
    };
};


export default TodoList;

