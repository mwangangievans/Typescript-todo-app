export class UnCompletedTasks {
    constructor(id, title, description, completionTime, IsCompleted) {
        this.storedDataToLocalStorage = (taskdata) => {
            console.log(taskdata);
            localStorage.setItem("tasks", JSON.stringify(taskdata));
        };
        this.id = id;
        this.title = title;
        this.description = description;
        this.completionDate = completionTime;
        this.IsCompleted = IsCompleted;
    }
}
