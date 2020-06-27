import Todo from './todo';
import TodoContainer from './todo-container';
import organizer from './organizer';
import userInterface from './user-interface';
import displayController from './display-controller';
import dateFunctions from './date-functions';
import localStorageFunctions from './local-storage';

import 'flatpickr/dist/themes/dark.css';
import '@fortawesome/fontawesome-free/js/all';

const projectListDisplay = document.querySelector(".project-list");
const createProjectBtn = document.querySelector(".create-project-btn");
const projectNameInput = document.querySelector(".project-name-input");
const createTodoField = document.querySelector(".create-todo-field");
const projectTodoList = document.querySelector(".project-todo-list");
const todoDetails = document.querySelector(".todo-details");
const todoModal = document.querySelector(".todo-modal");

projectListDisplay.addEventListener('click', displayController.displayContainer);
projectListDisplay.addEventListener('click', displayController.deleteProject);
createProjectBtn.addEventListener('click', displayController.createNewProject);
projectNameInput.addEventListener('keydown', displayController.createNewProject);
createTodoField.addEventListener('click', displayController.createNewTodo);
createTodoField.addEventListener('keydown', displayController.createNewTodo);
createTodoField.addEventListener('click', displayController.showTodoInputs);
projectTodoList.addEventListener('click', displayController.displayTodoDetails);
projectTodoList.addEventListener('click', displayController.checkTodo);
projectTodoList.addEventListener('click', displayController.deleteTodo);
todoDetails.addEventListener('click', displayController.deleteTodo);
todoDetails.addEventListener('click', displayController.checkTodo);
todoDetails.addEventListener('click', displayController.applyTodoChanges);
todoModal.addEventListener('click', displayController.closeTodoModal);

const initializeOrganizer = (() => {
    if(localStorage.projectList) {
        localStorageFunctions.restoreOrganizer();
        if(organizer.getProjectContainers().length > 0) {
            userInterface.renderContainer(organizer.getProjectContainers()[0]);
            userInterface.renderProjectList(organizer.getProjectContainers());
            userInterface.highlightProjectItem(organizer.getProjectContainers()[0].getProjectID());
        }
    } else {
        const defaultContainer = TodoContainer("Get started");
        organizer.storeProjectContainer(defaultContainer)
        
        const todo = Todo(`Decide to get stuff done`, dateFunctions.daysFromToday(0), "high", "This is a note.");
        todo.toggleChecked();
        defaultContainer.addTodo(todo);
        defaultContainer.addTodo(Todo(`Click on the <i class="fas fa-info-circle"></i> icon to expand details`, dateFunctions.daysFromToday(0), "medium", "You can change details here. Press the save button to save any changes."));
        defaultContainer.addTodo(Todo(`Check off items by clicking on the colored squares`, dateFunctions.daysFromToday(0), "low", "Checkboxes have different colors depending on the pirority of the todo."));
        defaultContainer.addTodo(Todo(`Delete items by clicking on the <i class="fas fa-trash-alt"></i> icon`, dateFunctions.daysFromToday(0), "high", "Press the delete button to delete the todo."));
        defaultContainer.addTodo(Todo(`Become a master of productivity`, dateFunctions.daysFromToday(30), "high", "Get into the habit of using this app every day and become a master of productivity!"));
        
        userInterface.renderContainer(defaultContainer);
        userInterface.renderProjectList([defaultContainer]);
        userInterface.highlightProjectItem(defaultContainer.getProjectID());
    }
})();