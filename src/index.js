import './style.css';

var formVisible = false;

const showFormButton = document.getElementById("addButton");
showFormButton.addEventListener('click', () => {
    let form = document.getElementById("todo-form");
    if (!formVisible) {
        form.style.display = "block";
        formVisible = true;
    } else {
        formVisible = false;
        form.style.display = "none";
    }
})

