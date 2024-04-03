import './style.css';
import { projectList, todoList, showTodosInDiv } from './content.js'

let formVisible = false;
function toggleFormVisibility() {

    const form = document.getElementById("todo-form");
    if (!formVisible) {
        form.style.display = "block";
        formVisible = true;
    } else {
        formVisible = false;
        form.style.display = "none";
    }
}

let modalVisible = false;
const modal = document.querySelector(".model-container")
function toggleModalVisibility() {
    if (!modalVisible) {
        modal.style.display = "block"
        modalVisible = true;
    }
}

function modalClose() {
    if (modalVisible) {
        modal.style.display = "none";
        modalVisible = false;
    }
}
const projectForm = document.getElementById("add-project-list")
function onProjectSubmitForm(event) {
    event.preventDefault();
    const fd = new FormData(projectForm);
    const obj = Object.fromEntries(fd)

    const newProject = {
        title_Project: obj.project_list
    };


    let projectKey = `Project List`
    // console.log("Project Key:", projectKey)
    projectList.push(newProject)
    const newLocalStorage = JSON.stringify(projectList)
    localStorage.setItem(projectKey, newLocalStorage)
    showProjectsInDiv()
    location.reload();
}

function showProjectsInDiv() {
    const projectUl = document.createElement('ul')
    const project_container = document.getElementById("projects_content");
    project_container.innerHTML = '';
    projectList.forEach(project => {
        const projectLi = document.createElement("li")
        projectLi.textContent = project.title_Project
        projectUl.append(projectLi)
        project_container.append(projectUl)
    })
}
const todoForm = document.getElementById("todo-form");
function onToDoSubmitButton(event) {
    event.preventDefault()

    let titleTodo = document.getElementById("title").value
    let descTodo = document.getElementById("description").value
    let duedateTodo = new Date(document.getElementById("dueDate").value)
    let priorityTodo = document.getElementById("priority").value
    let projectTodo = document.getElementById("project").value
    
    const tempTodoForm = {
        title: titleTodo,
        description: descTodo,
        duedate: duedateTodo,
        priority: priorityTodo,
        project_Todo: projectTodo
    }
    let todoKey = 'Todo List'
    todoList.push(tempTodoForm)
    const todoLocalStorage = JSON.stringify(todoList)
    localStorage.setItem(todoKey, todoLocalStorage)
    showTodosInDiv();
    location.reload();
    console.log(todoList)
}

export { toggleFormVisibility, toggleModalVisibility, modalClose, onProjectSubmitForm, showProjectsInDiv, onToDoSubmitButton };