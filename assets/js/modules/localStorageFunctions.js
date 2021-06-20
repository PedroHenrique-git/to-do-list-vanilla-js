let tasks = [];

if( localStorage.getItem('tasks') ) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

export function addTaskInLocalStorage (id, name) {
    tasks.push({ id: id, name: name });
    localStorage.setItem('tasks', JSON.stringify(tasks));    
}

export function renderTasksInLocalStorage (tasks) {
    tasks.forEach((task) => {
        const newTask = createTask(task.name);
        addTask(newTask);
    });
}