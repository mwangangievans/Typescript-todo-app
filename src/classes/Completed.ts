import { Task, valueObject } from "../interface/taskInterface.js";
import { UnCompletedTasks } from "./UnCompletedTask.js";

export class CompletedTasks extends UnCompletedTasks {
  todo: Task[] = JSON.parse(localStorage.getItem("tasks")!);
  constructor() {
    super();
  }

  rederCompledTodos() {
    const outputComplete = document.querySelector(
      ".complete"
    ) as HTMLUListElement;
    if (this.todo.filter((item) => item.IsCompleted == true).length == 0) {
      const heading = document.createElement("h1");
      heading.style.color = "Green";
      heading.textContent = "No Completed Todos!!";
      outputComplete.appendChild(heading);
    } else {
      outputComplete.innerHTML = this.todo
        .map((t) => {
          if (t.IsCompleted) {
            const d1: any = new Date(); //"now"
            const d2: any = new Date(t.completionDate); // expected Completion date
            var diff = Math.abs(d1 - d2);
            const days = this.convertMS(diff);
            console.log(d1);
            if (d1 > d2) {
              const late = `completed late by ${this.convertMS(diff)}`;
              return `<li id="items">
              <span>Title:  <b>${t.title}</b></span><br>
              <span>Description:   <b>${t.description}</b></span><br>
              <span>Completion Time:  <b>${t.completionDate}</b></span><br>
              <span> Status :<b>${
                t.IsCompleted ? "Completed" : "UnCompleted"
              } </b></span><br>
              <div class="actions">
              
              <span> <button type="button" class="mark"  data-id="${t.id}">${
                t.IsCompleted ? "Mark UnCompleted" : "Mark Completed"
              } </button></span></div>
            <p style="color:red"><span>${late}</span></p>
            
            </li> <hr>`;
            } else {
              const late = `completed early by ${this.convertMS(diff)}`;
              return `<li id="items">
              <span>Title:  <b>${t.title}</b></span><br>
              <span>Description:   <b>${t.description}</b></span><br>
              <span>Completion Time:  <b>${t.completionDate}</b></span><br>
              <span> Status :<b>${
                t.IsCompleted ? "Completed" : "UnCompleted"
              } </b></span><br>
              <div class="actions">
              
              <span> <button type="button" class="mark"  data-id="${t.id}">${
                t.IsCompleted ? "Mark UnCompleted" : "Mark Completed"
              } </button></span></div>

            <p style="color:green"><span>${late}</span></p>
            
            </li> <hr>`;
            }
          }
        })
        .join("");
    }
  }
  convertMS(ms: number) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    var pad = function (n: number) {
      return n < 10 ? "0" + n : n;
    };

    var result = +d + "   " + "Days";
    console.log(result);

    return result;
  }
}
