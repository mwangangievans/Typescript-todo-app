import { UnCompletedTasks } from './classes/UnCompletedTask.js';
import { validationMethod } from './Helpers/validation.js';
const form = document.querySelector('.new-item-form');
const Title = document.querySelector('#title');
const Description = document.querySelector('#Description');
const CompletionDate = document.querySelector('#completion_date');
let task;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formVAlues = {
        id: Math.floor(Math.random() * 100),
        title: Title.value,
        description: Description.value,
        completionDate: CompletionDate.value,
        IsCompleted: false
    };
    validationMethod(formVAlues);
    task.push(formVAlues);
    const formData = new UnCompletedTasks(task);
    // clearInputField(formVAlues);
    console.log(task);
    localStorage.setItem("tasks", JSON.stringify(task));
    const items = window.localStorage.getItem('tasks');
    console.log(items);
});
