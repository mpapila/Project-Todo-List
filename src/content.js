import './style.css';


const projectList = [
    // {
    //     title: "Home"
    // },
    // {
    //     title: "Work"
    // },
    // {
    //     title: "School"
    // }
]// [{"title_Project":"Home"},{"title_Project":"Work"},{"title_Project":"Gym"},{"title_Project":"Car"}]
// [{"title":"Dishes","description":"Washing the Dishes","duedate":"2024-04-03T00:00:00.000Z","priority":"High","project_Todo":"Home"},{"title":"Job Applications","description":"Apply applications","duedate":"2024-06-01T00:00:00.000Z","priority":"Medium","project_Todo":"Work"},{"title":"Title","description":"Renew the title","duedate":"2024-06-03T00:00:00.000Z","priority":"High","project_Todo":"Car"},{"title":"Gym","description":"Go gym everyday","duedate":"2024-04-03T00:00:00.000Z","priority":"High","project_Todo":"Gym"}]
const todoList = [
    // {
    //     title: "Dishes",
    //     description: "Washing the Dishes",
    //     duedate: new Date(2023, 2, 14), // March 14, 2023
    //     project: "Home",
    //     priority: "Low"
    // },
    // {
    //     title: "Laundry",
    //     description: "Doing the Laundry",
    //     duedate: new Date(2023, 2, 15),
    //     project: "Home",
    //     priority: "High"
    // },
    // {
    //     title: "Grocery Shopping",
    //     description: "Buy groceries for the week",
    //     duedate: new Date(2023, 2, 16),
    //     project: "Home",
    //     priority: "Medium"
    // },
    // {
    //     title: "Exercise",
    //     description: "Go for a run or visit the gym",
    //     duedate: new Date(2023, 2, 17),
    //     project: "Home",
    //     priority: "Low"
    // }
]



function showTodosInDiv() {
    const container = document.querySelector(".todo");
    container.innerHTML = "";
    container.classList.add("todo-container")
    todoList.forEach((todo , index) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const buttonDone = document.createElement("button")
        buttonDone.classList.add("btnDone");
        buttonDone.setAttribute("data-id", index);

        const upperDiv = document.createElement("div");
        upperDiv.classList.add("upper");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = todo.title;

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.textContent = todo.duedate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });        

        upperDiv.appendChild(titleDiv);
        upperDiv.appendChild(dateDiv);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        descriptionDiv.textContent = todo.description;

        const lowerDiv = document.createElement("div");
        lowerDiv.classList.add("lower");

        const priorityDiv = document.createElement("div");
        priorityDiv.classList.add("priority");
        if (todo.priority == "High") {
            priorityDiv.textContent = todo.priority;
            priorityDiv.style.backgroundColor = "#F25F91"
        } else if (todo.priority == "Medium") {
            priorityDiv.textContent = todo.priority;
            priorityDiv.style.backgroundColor = "#3CA3F8"
        } else if (todo.priority == "Low") {
            priorityDiv.textContent = todo.priority;
            priorityDiv.style.backgroundColor = "#42C3B6"
        }


        const projectDiv = document.createElement("div");
        projectDiv.classList.add("projectName");
        projectDiv.textContent = todo.project_Todo;

        const deleteTodoButton = document.createElement("button")
        deleteTodoButton.classList.add("deleteTodoButton")
        const img = document.createElement("img")
        img.src = "./trash-solid.svg";


        deleteTodoButton.append(img)
        lowerDiv.appendChild(priorityDiv);
        lowerDiv.appendChild(projectDiv);
        buttonDone.appendChild(upperDiv);
        buttonDone.appendChild(descriptionDiv);
        buttonDone.appendChild(lowerDiv);
        projectCard.append(buttonDone)

        container.appendChild(deleteTodoButton);
        container.appendChild(projectCard);
        
        
    });
}



export { showTodosInDiv, projectList, todoList };