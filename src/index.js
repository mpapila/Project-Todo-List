import './style.css';
import { toggleFormVisibility } from './sidebar.js';



const showFormButton = document.getElementById("addButton");
showFormButton.addEventListener('click', toggleFormVisibility);

