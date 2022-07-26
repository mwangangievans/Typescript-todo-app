import { Task } from '../interface/taskInterface';


export class UnCompletedTasks{
        id:number;
        title:string;
        description:string;
        completionDate:string;
        IsCompleted:boolean
    
        constructor(id:number ,title:string,description:string,completionTime:string,IsCompleted:boolean)
        {
            this.id = id;
            this.title = title;
            this.description = description;
            this.completionDate = completionTime;
            this.IsCompleted = IsCompleted;
        }

        storedDataToLocalStorage = (taskdata:Task) =>{

            console.log(taskdata)

            localStorage.setItem("tasks" ,JSON.stringify(taskdata));
           
        }

}