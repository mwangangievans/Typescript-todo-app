export class UnCompletedTasks {
    constructor(id, title, description, completionTime, IsCompleted) {
        this.storedDataToLocalStorage = (taskdata) => {
            localStorage.setItem("tasks", JSON.stringify(taskdata));
            if (!localStorage.getItem("todos")) {
                localStorage.setItem("todos", "[]");
            }
        };
        this.id = id;
        this.title = title;
        this.description = description;
        this.completionDate = completionTime;
        this.IsCompleted = IsCompleted;
    }
}
