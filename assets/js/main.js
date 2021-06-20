import "../css/style.css";
import { createActionContainer, createBtn, createTask } from './modules/createItems';

(function() {
    const form = document.querySelector('.task_form');
    const input = document.querySelector('#task_input');
    const list = document.querySelector('.tasks_list');

    const addTask = (task) => list.appendChild(task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( input.value.length === 0 ) return;
        const newTask = createTask(input.value);
        addTask(newTask);
    }

    const handleDelete = (element) => {
        const id = element.parentElement.parentElement.id;
        alert(id);
        element.parentElement.parentElement.remove();
    };

    const handleEdit = (element) => {
        const taskName = element.parentElement.previousSibling;
        taskName.readOnly = false;
        taskName.classList.add('input_style');
        taskName.addEventListener('focusout', function() {
            this.readOnly = true
            this.classList.remove('input_style');
        });
    };

    form.addEventListener('submit', (e) => handleSubmit(e));

    document.addEventListener('click', (e) => {
        const target = e.target;
        if( target.classList.contains('delete_task') ) handleDelete(target);
        if( target.classList.contains('edit_task') ) handleEdit(target);
    });

})();