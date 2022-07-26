import {Task } from './interface/taskInterface.js'
import { UnCompletedTasks } from './classes/UnCompletedTask.js'
import { validationMethod, clearInputField } from './Helpers/validation.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const Title = document.querySelector('#title') as HTMLInputElement;
const Description = document.querySelector('#Description') as HTMLInputElement;
const CompletionDate = document.querySelector('#completion_date') as HTMLInputElement;

let task: Task[]=[];



form.addEventListener('submit',(e:Event) =>
{
    e.preventDefault();

    let formVAlues:Task = {

    id:Math.floor(Math.random()*100),   
    title:Title.value,
    description: Description.value,
    completionDate:CompletionDate.value,
    IsCompleted : false
    }
    validationMethod(formVAlues);
    const formData = new UnCompletedTasks(formVAlues.id,formVAlues.title,formVAlues.description,formVAlues.completionDate,formVAlues.IsCompleted);
    formData.storedDataToLocalStorage(formVAlues);
    
})



