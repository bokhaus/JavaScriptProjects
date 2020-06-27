import flatpickr from "flatpickr";
import dateFunctions from "./date-functions";

const userInterfaceContainer = (() => {
    const todoListDisplay = document.querySelector(".project-todo-list");
    const createTodoField = document.querySelector(".create-todo-field");

    const getTodoNodesByID = (ID, parentNode) => {
        return parentNode.querySelectorAll(`.todo-item[data-todoid=${ID}`);
    }

    const createTodoItemHtml = (todo) => {
        const html = `
        <li class="todo-item" data-todoid="${todo.getTodoID()}">
            <div class="checkbox clickable ${todo.isChecked() ? "checked" : ""} ${todo.getPriority()}">
            </div>
            <div class="todo-item-name ${todo.isChecked() ? "checked" : ""}">
                ${todo.getText()}
            </div>
            <div class="todo-details-button clickable">
                <i class="fas fa-info-circle"></i>
            </div>
            <div class="date-due ${dateFunctions.isDue(todo.getDueDate()) ? "due" : ""}">
                ${dateFunctions.formatDate(todo.getDueDate())}
            </div>
            <div class="delete-todo-button clickable">
                <i class="fas fa-trash-alt"></i>
            </div>
        </li>
        `
        return html;
    }

    const createTodoInputField = (container) => {
        // create input for name, dateDue, priority and note
        const html = `
            <div class="input-name-field todo-input">
                <span class="create-btn create-todo-btn clickable">+</span>
                <input id="todo-name" type="text" class="name-input todo-name-input input-gray" placeholder="New Todo" autocomplete="off">
            </div>

            <div class="todo-input date-priority-container">
                <input id="todo-due-date" class="input-gray" type="text" placeholder="Select Date" readonly="readonly">
                <div>
                    <select id="todo-priority" class="input-gray clickable">
                        <option value="" disabled selected>Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>

            <textarea id="todo-note" class="todo-input input-gray" placeholder="Write a note" type="text"></textarea>
        `;
        
        createTodoField.setAttribute("data-projectid", container.getProjectID());
        createTodoField.innerHTML = html;

        flatpickr("#todo-due-date", {defaultDate: new Date()});
    }

    const renderContainer = (container) => {
        const html = container.getTodos().map(todo => {
            return createTodoItemHtml(todo);
        }).join('');
        
        createTodoInputField(container);
        todoListDisplay.innerHTML = html;
    }

    const clearProjectDisplay = (container) => {
        todoListDisplay.innerHTML = "";
    }

    const removeTodoItem = (todoID) => {
        const todo = getTodoNodesByID(todoID, todoListDisplay)[0];
        todoListDisplay.removeChild(todo);
    }

    const checkTodo = (todoID) => {
        const todoNodes = getTodoNodesByID(todoID, document);
        todoNodes.forEach(todoNode => {
            todoNode.querySelector(".checkbox").classList.toggle("checked");
            todoNode.querySelector(".todo-item-name").classList.toggle("checked");
        });
    }

    return {
        renderContainer,
        removeTodoItem,
        checkTodo,
        clearProjectDisplay
    };
})();

export default userInterfaceContainer;