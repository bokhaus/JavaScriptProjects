let projectIndex = localStorage.projectIndex || 0;

const TodoContainer = (name) => {
    let projectID = `project-${localStorage.projectIndex = ++projectIndex}`;
    const todos = [];

    const getProjectID = () => {
        return projectID;
    }

    // used for restoring from local storage
    /* const setProjectID = (ID) => {
        projectID = ID;
    } */

    const getName = () => {
        return name;
    };

    const getTodos = () => {
        return todos;
    };

    const addTodo = (todo) => {
        todos.push(todo);
    };

    const removeTodo = (todoID) => {
        const index = todos.findIndex(todo => {
            return todo.getTodoID() === todoID;
        })

        todos.splice(index, 1);
    }

    const exportForLocalStorage = () => {
        const todosForExport = todos.map(todo => todo.exportForLocalStorage());

        return {
            name,
            todos: todosForExport
        };
    }

    return {
        getProjectID,
        getTodos,
        addTodo,
        getName,
        removeTodo,
        exportForLocalStorage
    };
};

export default TodoContainer;