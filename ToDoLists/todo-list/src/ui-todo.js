import flatpickr from "flatpickr";

const todoDetailsDisplay = document.querySelector(".todo-details");
const todoModal = document.querySelector(".todo-modal");

const userInterfaceTodo = (() => {
    const clearDetailsDisplay = () => todoDetailsDisplay.innerHTML = '';

    const toggleTodoModal = () => {
        todoModal.classList.toggle("show-todo-modal");
    }

    const renderTodoItemDetails = (todo) => {
        const html = `
            <div class="details-item clickable" id="close-todo-modal-btn"><i class="fas fa-times"></i></div>
            <div class="details-item todo-item" id="details-name" data-todoid="${todo.getTodoID()}">
                <div class="checkbox ${todo.isChecked() ? "checked" : ""} ${todo.getPriority()} clickable">
                </div>
                <div class="todo-item-name ${todo.isChecked() ? "checked" : ""}">
                    ${todo.getText()}
                </div>
            </div>
            <input class="details-item input-gray" id="details-date" type="text" value="${todo.getDueDate()}" readonly="readonly">
            <textarea class="details-item input-gray" id="details-note">${todo.getNote()}</textarea>
            <div class="details-item" id="details-button-container">
                <div class="details-button clickable"id="change-todo-button">Save</div>
                <div class="details-button delete-todo-button clickable">Delete</div>
            </div>
        `;
        
        todoDetailsDisplay.innerHTML = html;
        todoDetailsDisplay.setAttribute("data-todoid", todo.getTodoID());
        flatpickr("#details-date", {});
        toggleTodoModal();
    }

    return {
        renderTodoItemDetails,
        clearDetailsDisplay,
        toggleTodoModal
    };
})();

export default userInterfaceTodo;