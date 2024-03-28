import './style.css';

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



export { toggleFormVisibility };