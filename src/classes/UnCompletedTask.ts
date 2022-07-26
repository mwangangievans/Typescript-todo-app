import { Task } from '../interface/taskInterface';


export class UnCompletedTasks{
         todo:Task[] = []
       
    
        constructor(task :Task)
        {
            this.todo.push(task)
            this.todo=[...this.todo, task]

            console.log();
            
            
        }


}