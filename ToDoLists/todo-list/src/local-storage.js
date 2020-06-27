import Todo from './todo';
import TodoContainer from './todo-container';
import organizer from './organizer';

const localStorageFunctions = (() => {
    const exportProjectListForLS = () => {
        const exportedProjectList = organizer.getProjectContainers().map(project => {
            return project.exportForLocalStorage();
        });
        return exportedProjectList;
    }

    const saveProjectListToLS = () => {
        localStorage.setItem('projectList', JSON.stringify(exportProjectListForLS()));
    }

    const restoreTodo = (todoLS) => {
        const restoredTodo = Todo(todoLS.text, todoLS.dueDate, todoLS.priority, todoLS.note);

        if(todoLS.checked) {
            restoredTodo.toggleChecked();
        }

        return restoredTodo;
    }

    const restoreProjectList = () => {
        let projectList = JSON.parse(localStorage.getItem('projectList'));
        projectList = projectList.map(project => {
            const restoredProject = TodoContainer(project.name);
            project.todos.forEach(todoLS => {
                const restoredTodo = restoreTodo(todoLS);

                restoredProject.addTodo(restoredTodo);
            });

            return restoredProject;
        });
        return projectList;
    }

    const restoreOrganizer = () => {
        const restoredProjects = restoreProjectList();
        restoredProjects.forEach(project => {
            organizer.storeProjectContainer(project);
        });
    }

    return {
        saveProjectListToLS,
        restoreProjectList,
        restoreOrganizer
    };
})();

export default localStorageFunctions;