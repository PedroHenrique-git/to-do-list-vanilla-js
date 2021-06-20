import "../css/style.css";
import { handleDelete, handleEdit, handleSubmit } from './modules/handleFunctions';
import { renderTasksInLocalStorage } from "./modules/localStorageFunctions";

(function() {
    const form = document.querySelector('.task_form');
    const input = document.querySelector('#task_input');
    let tasks = [];

    if( localStorage.getItem('tasks') ) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        renderTasksInLocalStorage(tasks);
    }
    
    form.addEventListener('submit', (e) => handleSubmit(e, input));

    document.addEventListener('click', (e) => {
        const target = e.target;
        if( target.classList.contains('delete_task') ) handleDelete(target, tasks);
        if( target.classList.contains('edit_task') ) handleEdit(target, tasks);
    });
})();