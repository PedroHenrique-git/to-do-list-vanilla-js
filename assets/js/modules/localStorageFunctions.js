import { addTask } from './addTask';
import { createTask } from './createItems';

const arr = [];

export function addTaskInLocalStorage (id, name) {
    arr.push({ id: id, name: name });
    localStorage.setItem('tasks', JSON.stringify(arr));    
}

export function renderTasksInLocalStorage (tasks) {
    tasks.forEach((task) => {
        const newTask = createTask(task.name, task.id);
        addTask(newTask);
    });
}