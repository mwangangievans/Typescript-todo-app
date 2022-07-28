import { Task, valueObject } from "./interface/taskInterface.js";
import { UnCompletedTasks } from "./classes/UnCompletedTask.js";
import { validationMethod, clearInputField } from "./Helpers/validation.js";

valueObject.form.addEventListener("submit", (e: Event) => {
  if (
    valueObject.Title.value == "" ||
    valueObject.Description.value == "" ||
    valueObject.CompletionDate.value == ""
  ) {
    alert("Fill all spaces");
    return false;
  } else {
    e.preventDefault();
    let formVAlues: Task = {
      id: Math.floor(Math.random() * 1000000000),
      title: valueObject.Title.value,
      description: valueObject.Description.value,
      completionDate: valueObject.CompletionDate.value,
      IsCompleted: false,
    };
    const task: Task[] = [];

    const todosData = new UnCompletedTasks();
    todosData.addTodo(formVAlues);
    window.location.reload();
  }
});

window.onload = () => {
  const todosData = new UnCompletedTasks();
  todosData.rederTodos();

  const editBtns = document.getElementsByClassName("edit");

  const deleteBtns = document.getElementsByClassName("delete");

  const markBtns = document.getElementsByClassName("mark");

  for (const mark of markBtns) {
    mark.addEventListener("click", (e) => {
      const id = mark.getAttribute("data-id");
      if (id) todosData.done(parseInt(id));
    });
  }

  for (const editBtn of editBtns) {
    editBtn.addEventListener("click", (e) => {
      const id = editBtn.getAttribute("data-id");
      if (id) todosData.editTask(parseInt(id));
    });
  }

  for (const deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", (e) => {
      const id = deleteBtn.getAttribute("data-id");
      console.log(id);
      if (id) todosData.deleteTask(parseInt(id));
    });
  }
};

valueObject.editBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // updateTask()
  const newData: any | string = {
    id: valueObject.editId.value,
    title: valueObject.Title.value,
    description: valueObject.Description.value,
    completionDate: valueObject.CompletionDate.value,
  };

  // console.log(valueObject.editId.value, newData);

  const todosData = new UnCompletedTasks();
  todosData.updateTask(parseInt(valueObject.editId.value), newData);
  todosData.rederTodos();
});
