import userInterface from './user-interface';
import organizer from './organizer';
import TodoContainer from './todo-container';
import Todo from './todo';
import localStorageFunctions from './local-storage';

const helperFunctions = (() => {
    const extractNewTodoInputs = (createTodoContainer) => {
        const todo = {};
        
        todo.todoName = createTodoContainer.querySelector("#todo-name").value;
        todo.todoDueDate = createTodoContainer.querySelector("#todo-due-date").value;
        todo.todoPriority = createTodoContainer.querySelector("#todo-priority").value;
        todo.todoNote = createTodoContainer.querySelector("#todo-note").value;

        return todo;
    }

    const saveTodo = (todo, currentProjectID) => {
        const currentProject = organizer.getProjectContainer(currentProjectID);
        currentProject.addTodo(todo);
    }

    const checkForEmptyValues = (valuesObj) => {
        return Object.keys(valuesObj).some(key => {
            if(!valuesObj[key]) {
                alert("Please choose a valid " + key);
                return true;
            }
        });
    }

    const extractTodoChanges = (todoDetailsContainer) => {
        const newValues = {};
        newValues.dueDate = todoDetailsContainer.querySelector("#details-date").value;
        newValues.note = todoDetailsContainer.querySelector("#details-note").value;
        return newValues;
    }

    const saveTodoChanges = (todo, newValues) => {
        Object.keys(newValues).forEach(key => {
            if(newValues[key]) {
                todo[`set${key.charAt(0).toUpperCase() + key.slice(1)}`](newValues[key]);
            }
        });
    }

    const refreshCurrentProject = () => {
        const projectID = document.querySelector(".create-todo-field").getAttribute('data-projectid');
        const container = organizer.getProjectContainer(projectID);
        userInterface.renderContainer(container);
    }

    return {
        extractNewTodoInputs,
        saveTodo,
        checkForEmptyValues,
        extractTodoChanges,
        saveTodoChanges,
        refreshCurrentProject,
        
    };
})();

const displayController = (() => {
    function displayContainer(event) {
        let container = event.target.closest(".project-list-item");
        container = organizer.getProjectContainer(container.id);
        userInterface.renderContainer(container);
        userInterface.highlightProjectItem(container.getProjectID());
    }

    function createNewProject(event) {
        if(event.target.classList.contains("create-project-btn") || event.code == 'Enter') {
            const projectNameInput = document.querySelector(".project-name-input");
            const projectName = projectNameInput.value;
            if(helperFunctions.checkForEmptyValues({projectName})) {
                return;
            }
            const project = TodoContainer(projectName);
            organizer.storeProjectContainer(project);
            userInterface.renderProjectList(organizer.getProjectContainers());
            userInterface.highlightProjectItem(project.getProjectID());
            userInterface.renderContainer(project);
            localStorageFunctions.saveProjectListToLS();
            this.value = "";
        }
    }

    function deleteProject(event) {
        if(event.target.closest(".delete-project-btn")) {
            if (confirm('Are you sure you want to delete this project?')) {
                const projectID = event.target.closest(".project-list-item").id;
                organizer.deleteProjectContainer(projectID);
                const projects = organizer.getProjectContainers();
                if(projects.length > 0) {
                    userInterface.renderProjectList(projects);
                    userInterface.highlightProjectItem(projects[0].getProjectID());
                    userInterface.renderContainer(projects[0]);
                } else {
                    userInterface.renderProjectList(projects);
                    userInterface.clearProjectDisplay();
                }
                localStorageFunctions.saveProjectListToLS();
            }
        }
    }

    function createNewTodo(event) {
        if(event.target.classList.contains("create-todo-btn") || event.code == 'Enter') {
            // get inputs from DOM and create new todo
            let todo = helperFunctions.extractNewTodoInputs(this);
            if(helperFunctions.checkForEmptyValues(todo)) {
                return;
            }
            todo = Todo(...Object.values(todo));
            // store it into the currently open project
            const currentProjectID = this.getAttribute("data-projectid");
            helperFunctions.saveTodo(todo, currentProjectID);
            // add it to the list display
            userInterface.renderContainer(organizer.getProjectContainer(currentProjectID));
            localStorageFunctions.saveProjectListToLS();
        }
    }

    function displayTodoDetails(event) {
        const target = event.target;
        if(target.closest(".todo-details-button")) {
            let todoID;
            todoID = target.closest(".todo-item").getAttribute("data-todoid");
            const todo = organizer.getTodoByID(todoID);
            userInterface.renderTodoItemDetails(todo);
        }
    }

    function deleteTodo(event) {
        if(event.target.classList.contains("delete-todo-button") || event.target.closest(".delete-todo-button")) {
            const todoID = this.getAttribute("data-todoid") || event.target.closest(".todo-item").getAttribute("data-todoid");
            organizer.deleteTodoByID(todoID);
            userInterface.removeTodoItem(todoID);
            if(!this.classList.contains("project-todo-list")) {
                userInterface.toggleTodoModal();
            }
            localStorageFunctions.saveProjectListToLS();
        }
    }

    function applyTodoChanges(event) {
        if(event.target.id === "change-todo-button") {
            const todoID = this.getAttribute("data-todoid");
            const todo = organizer.getTodoByID(todoID);
            const newValues = helperFunctions.extractTodoChanges(this);
            helperFunctions.saveTodoChanges(todo, newValues);
            helperFunctions.refreshCurrentProject();
            userInterface.toggleTodoModal();
            localStorageFunctions.saveProjectListToLS();
        }
    }
    
    function closeTodoModal(event) {
        if(event.target.classList.contains("todo-modal") || event.target.closest("#close-todo-modal-btn")) {
            userInterface.toggleTodoModal();
        }
    }

    function checkTodo(event) {
        const checkbox = event.target;
        if(checkbox.classList.contains("checkbox")) {
            const todoID = checkbox.parentNode.getAttribute("data-todoid")
            userInterface.checkTodo(todoID);
            organizer.getTodoByID(todoID).toggleChecked();
            localStorageFunctions.saveProjectListToLS();
        }
        
    }

    function showTodoInputs(event) {
        if(event.target.id == "todo-name") {
            // add border and background to name input field
            // remove display none class from date, priority and note inputs
            this.querySelectorAll(".todo-input").forEach(input => input.classList.add("active"));
        }
    }

    function hideTodoInputs(event) {
        this.querySelectorAll(".todo-input").forEach(input => input.classList.remove("active"));
    }

    return{
        displayContainer,
        createNewProject,
        createNewTodo,
        displayTodoDetails,
        deleteTodo,
        applyTodoChanges,
        closeTodoModal,
        checkTodo,
        showTodoInputs,
        hideTodoInputs,
        deleteProject
    };
})();

export default displayController;