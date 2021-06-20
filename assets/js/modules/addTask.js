const list = document.querySelector('.tasks_list');

export function addTask (task) {
    list.appendChild(task); 
}