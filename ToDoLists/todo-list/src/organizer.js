const organizer = (() => {
    const projectContainers = [];

    const getProjectContainer = (projectID) => projectContainers.find(project => project.getProjectID() === projectID);

    const storeProjectContainer = (project) => {
        projectContainers.push(project);
    };

    const deleteProjectContainer = (projectID) => {
        const project = getProjectContainer(projectID);
        const projectIndex = projectContainers.indexOf(project);
        projectContainers.splice(projectIndex, 1);
    };

    const getProjectContainers = () => projectContainers;

    const findProjectContainingTodoID = (ID) => {
        // look at all todos from all containers and return the container that includes the given todo ID
        const project = projectContainers.find(project => {
            return project.getTodos().some(todo => {
                return todo.getTodoID() === ID;
            });
        });
        return project;
    };

    const getTodoByID = (ID) => {
        return findProjectContainingTodoID(ID).getTodos().find(todo => todo.getTodoID() === ID);
    };

    const deleteTodoByID = (ID) => {
        findProjectContainingTodoID(ID).removeTodo(ID);
    };

    return {
        getProjectContainer,
        storeProjectContainer,
        getProjectContainers,
        getTodoByID,
        deleteTodoByID,
        deleteProjectContainer
    }
})();

export default organizer;