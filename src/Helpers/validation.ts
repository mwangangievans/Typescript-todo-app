import { Task } from '../interface/taskInterface';

const validationMethod = (item :  Task) =>{
    if(!item.title)
    {
     alert("title is missing")
    }

}

 const clearInputField  = ( item : Task) =>{
    item.completionDate = "";
    item.description = "";
    item.title = "";
}


export {
    clearInputField,
    validationMethod
}