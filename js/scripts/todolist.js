const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateElement = document.querySelector('.js-duedate');
    const name = inputElement.value.trim();
    const dueDate = dateElement.value;

    if (!name) {
        return;
    }

    todoList.push({ name, dueDate });
    inputElement.value = '';
    dateElement.value = '';
    renderTodoList();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

function renderTodoList() {
    const listElement = document.querySelector('.js-todo-list');
    listElement.innerHTML = todoList.map((todo, index) => `
        <div class="todo-row">
            <span>${todo.name}</span>
            <span>${todo.dueDate}</span>
            <button onclick="deleteTodo(${index})">Delete</button>
        </div>
    `).join('');
}