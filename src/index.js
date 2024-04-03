import './style.css';
import { toggleFormVisibility, modalClose, toggleModalVisibility, onProjectSubmitForm, showProjectsInDiv, onToDoSubmitButton } from './sidebar.js';
import { showTodosInDiv, projectList, todoList } from './content.js';



const showFormButton = document.getElementById("addButton");
showFormButton.addEventListener('click', toggleFormVisibility);

const showModalButton = document.getElementById("add-project");
showModalButton.addEventListener('click', toggleModalVisibility)

const modalCloseButton = document.getElementById("modal_close_button");
modalCloseButton.addEventListener('click', modalClose)


let projectKey = `Project List` // from localstorage to project list with DOM 
let newLocalStorage = localStorage.getItem(projectKey)
if (newLocalStorage) {
    let newLocalStorage2 = JSON.parse(newLocalStorage)
    projectList.push(...newLocalStorage2)
}

const selectElement = document.getElementById("project") // Project List data list in the Todo Form as options 
projectList.forEach(project => {
    const option = document.createElement("option")
    option.textContent = project.title_Project;
    selectElement.appendChild(option)
})

const addProjectForm = document.getElementById("add-project-list")
addProjectForm.addEventListener('submit', onProjectSubmitForm)

const addTodoForm = document.getElementById("todo-form");
addTodoForm.addEventListener('submit', onToDoSubmitButton);

let todoKey = 'Todo List' // from localstorage to todo list with DOM 
let todoLocalStorage = localStorage.getItem(todoKey)
if (todoLocalStorage) {
    let tempTodoLocalStorage = JSON.parse(todoLocalStorage)
    tempTodoLocalStorage.forEach(todo => {
        todo.duedate = new Date(todo.duedate);
    });

    todoList.push(...tempTodoLocalStorage)
}


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".todo");

    container.addEventListener('click', (event) => { // When the button is clicked, the text is linethrough.
        const buttonDone = event.target.closest('.btnDone');
        if (buttonDone) {
            const index = buttonDone.getAttribute('data-id');
            let selected = localStorage.getItem(`selected_${index}`) === 'true';
            selected = !selected;
            updateTextDecoration(buttonDone, selected);
            localStorage.setItem(`selected_${index}`, selected.toString());// The selected items are saved to local storage.
        }
    });
    for (let i = 0; i < todoList.length; i++) {
        const isSelected = localStorage.getItem(`selected_${i}`) === 'true';
        const buttonDone = container.querySelector(`[data-id="${i}"]`);
        if (isSelected) {
            updateTextDecoration(buttonDone, true);
        }
    }
    function updateTextDecoration(buttonDone, selected) {
        const projectCard = buttonDone.closest('.project-card');
        if (selected) {
            projectCard.style.textDecoration = 'line-through';
        } else {
            projectCard.style.textDecoration = 'none';
        }
    }

});
function deleteToDo() {
    const deleteToDos = document.querySelectorAll(".deleteTodoButton"); 
    deleteToDos.forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.currentTarget.getAttribute("data-id")  
            todoList.splice(index, 1)
            localStorage.setItem('Todo List', JSON.stringify(todoList));
            
            showTodosInDiv();
            console.log(todoList)
        })
    })
}

document.addEventListener('DOMContentLoaded', deleteToDo);
console.log(todoList)






showTodosInDiv();
showProjectsInDiv();
