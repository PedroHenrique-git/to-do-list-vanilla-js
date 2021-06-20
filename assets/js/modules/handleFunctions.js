import { createTask } from './createItems';
import { addTaskInLocalStorage } from './localStorageFunctions';
import { addTask } from './addTask';

export function handleSubmit (e, input) {
    e.preventDefault();
    if( input.value.length === 0 ) return;
    const newTask = createTask(input.value);
    addTask(newTask);
}

export function handleDelete (element, arr) {
    const id = element.parentElement.parentElement.id;
    const index = arr.findIndex((task) => task.id === id);
    arr.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(arr));
    element.parentElement.parentElement.remove();
};

export function handleEdit (element, arr) {
    const id = element.parentElement.parentElement.id;
    const taskName = element.parentElement.previousSibling;
    const index = arr.findIndex((task) => task.id === id);
    taskName.readOnly = false;
    taskName.classList.add('input_style');
    taskName.addEventListener('focusout', function() {
        this.readOnly = true;
        this.classList.remove('input_style');
        arr[index].name = this.value;
        const newArr = JSON.stringify(arr);
        localStorage.setItem('tasks', newArr);
    });
};