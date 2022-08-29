// Prepared addTodo function
const prepareAddTodo = (initialTodo, nanoid) => {
    const { name, description, deadline, priority } = initialTodo;
    const newTodo = {
        id: nanoid(),
        name,
        deadline,
        description,
        priority,
        completed: false,
    };

    return newTodo;
};

export default prepareAddTodo;
