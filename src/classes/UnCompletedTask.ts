import { Task, valueObject } from "../interface/taskInterface.js";

export class UnCompletedTasks {
  a = [];
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
    const output = document.querySelector(".uncomplete") as HTMLUListElement;
    if (this.todo.filter((item) => item.IsCompleted == false).length == 0) {
      const heading = document.createElement("h1");
      heading.textContent = "No Uncompleted Todos!!";
      output.appendChild(heading);
    } else {
      output.innerHTML = this.todo
        .map((t) => {
          if (!t.IsCompleted) {
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
          }
        })

        .join("");
    }
  }
  // =================edit task =====================
  // edit = document.querySelector(".edit") as HTMLUListElement;

  editTask = (id: number) => {
    const item = this.getTaskId(id) as number | any | string;

    valueObject.Title.value = item.title;
    valueObject.Description.value = item.description;
    valueObject.CompletionDate.value = item.completionDate;
    valueObject.editId.value = item.id;
    valueObject.addbit.style.display = "none !important";
    valueObject.editBtn.style.display = "block";
  };

  updateTask(id: number, newData: any) {
    this.todo = this.todo.map((todo) => {
      if (todo.id === id) {
        return newData;
      }

      return todo;
    });
    valueObject.addbit.style.display = "block";
    valueObject.editBtn.style.display = "none";
    localStorage.setItem("tasks", JSON.stringify(this.todo));
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
    window.location.reload();
  }
  // console.log(_tasks:any)
}
