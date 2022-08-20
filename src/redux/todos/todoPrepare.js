import { nanoid } from 'nanoid';

export function addTodoPrepare(data) {
    console.log(data);
    if (!data) {
        return {
            payload: {},
        };
    }

    const { name, description, deadline, priority } = data;
    return {
        payload: {
            name: name,
            deadline: deadline,
            description: description,
            id: nanoid(),
            completed: false,
            priority: priority,
        },
    };
}
