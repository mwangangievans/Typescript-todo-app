import { Task, valueObject } from "../interface/taskInterface.js";
// import { form } from "../app.js";
export class UnCompletedTasks {
  todo: Task[] = JSON.parse(localStorage.getItem("tasks")!);
  constructor() {}
  addTodo(task: Task) {
    if (!this.todo) {
      this.todo = [];
    }
    this.todo.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.todo));
  }

  rederTodos() {
    const output = document.getElementById("uncomplete") as HTMLUListElement;
    output.innerHTML = this.todo
      .map((t) => {
        return `<li id="items">
      <span>Title:  <b>${t.title}</b></span><br>
      <span>Description:   <b>${t.description}</b></span><br>
      <span>Completion Time:  <b>${t.completionDate}</b></span><br>
      <span> Status :<b>${
        t.IsCompleted ? "Completed" : "UnCompleted"
      } </b></span><br>
      <div class="actions">
      <span> <button  type="button" class="edit" data-id="${
        t.id
      }" onclick="editTask(${t.id})">Edit</button></span>


      <span> <button  type="button"  class="delete" data-id="${
        t.id
      }">Delete</button></span>
      <span> <button type="button" class="mark"  data-id="${
        t.id
      }">Mark Completed</button></span></div>


    </li> <hr>`;
      })
      .join("");
  }
  // =================edit task =====================
  // edit = document.querySelector(".edit") as HTMLUListElement;

  editTask = (id: number) => {
    console.log({ id });
    const item = this.getTaskId(id) as any;

    valueObject.Title.value = item.title;
    valueObject.Description.value = item.description;
    valueObject.CompletionDate.value = item.completionDate;
    valueObject.editId.value = item.id;
    valueObject.addbit.style.display = "none";
    valueObject.editBtn.style.display = "block";
  };

  updateTask(id: number, newData: any) {
    console.log(id, newData);
    this.todo = this.todo.map((todo) => {
      if (todo.id === id) {
        return newData;
      }

      return todo;
    });

    localStorage.setItem("tasks", JSON.stringify(this.todo));
    valueObject.addbit.style.display = "block";
    valueObject.editBtn.style.display = "none";
  }

  deleteTask(id: number) {
    let bigCities = this.todo.filter(function (e) {
      return e.id != id;
    });
    localStorage.setItem("tasks", JSON.stringify(bigCities));
    this.rederTodos();
    window.location.reload();
  }
  getTaskId(id: number) {
    return this.todo.find((item) => item.id === id);
  }

  done(id: number) {
    const result = this.todo.find((item) => item.id === id);

    console.log(result);
    if (result) Object.assign(result, { IsCompleted: !result.IsCompleted });

    localStorage.setItem("tasks", JSON.stringify(this.todo));
    this.rederTodos();
  }
}
