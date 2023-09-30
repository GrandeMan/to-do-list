import Todo from "./todo.js";
import Project from "./project.js";

function initApp() {
    const defaultProject = new Project('Tasks');
    const defaultTodo = new Todo ('Default Todo'); // Create a default Todo

    // Add the defaultTodo to the defaultProject
    defaultProject.addTodo(defaultTodo);

    function updateUI() {
        const projectList = document.getElementById('project-list');
        const projectName = document.createElement('input');
        projectName.classList.add('project-name');
        projectName.value = defaultProject.name;
        projectList.appendChild(projectName);

        const listContainer = document.getElementById('list-container');
        listContainer.innerHTML = '';

        // Display each todo in the project
        defaultProject.todos.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            todoItem.innerHTML = `
            <h3 class='todo-title'>${todo.title}</h3>
            <p class='due-date'>Due Date: ${todo.dueDate}</p>
            <button class="delete-todo" data-index="${index}">Delete</button>
            `;

            // Add event listener for deleting todos
            const deleteButton = todoItem.querySelector('.delete-todo');
            deleteButton.addEventListener('click', () => {
                defaultProject.removeTodo(index);
                updateUI();
            });

            listContainer.appendChild(todoItem);
        });
    }

    updateUI();

    // Function to handle changing the project name
    const projectNameInput = document.getElementById('project-name-input');
    projectNameInput.addEventListener('change', () => {
        defaultProject.name = projectNameInput.value;
        updateUI();
        projectNameInput.value = '';
    });

    // Function to handle adding todos
    const addTodoButton = document.getElementById('add-todo-button');
    const todoTitleInput = document.getElementById('todo-title-input');
    const todoDueDateInput = document.getElementById('todo-due-date-input');
    addTodoButton.addEventListener('click', () => {
        const title = todoTitleInput.value;
        const dueDate = todoDueDateInput.value;
        if (title && dueDate) {
            const newTodo = new Todo(title, '', dueDate, 'Low');
            defaultProject.addTodo(newTodo);
            updateUI();
            // Clear input fields
            todoTitleInput.value = '';
            todoDueDateInput.value = '';
        }
    });
}

// Call the initApp function on page load
window.addEventListener('load', initApp);
        
