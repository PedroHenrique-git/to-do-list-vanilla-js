import randomId from "./randomId";
import { addTaskInLocalStorage } from "./localStorageFunctions";

export function createBtn (classBtn) {
    const btn = document.createElement('button');
    btn.classList.add(classBtn);

    return btn;
};

export function createActionContainer () {
    const div = document.createElement('div');
    const btnEdit = createBtn('edit_task');
    const btnDelete = createBtn('delete_task');
    div.classList.add('action_container');
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    return div;
};

export function createTask (taskName) {
    const li = document.createElement('li');
    const inputText = document.createElement('input');

    inputText.value = taskName; 
    inputText.readOnly = true;
    inputText.classList.add('task_name');

    li.setAttribute('id', `${randomId(0, 1000)}`);
    li.appendChild(inputText);
    li.appendChild(createActionContainer());
    addTaskInLocalStorage(li.id, taskName);

    return li;
};