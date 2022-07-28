interface Task {
  id: number;
  title: string;
  description: string;
  completionDate: string;
  IsCompleted: boolean;
}

const valueObject = {
  form: document.querySelector(".new-item-form") as HTMLFormElement,
  Title: document.querySelector("#title") as HTMLInputElement,
  Description: document.querySelector("#Description") as HTMLInputElement,
  editId: document.querySelector("#id_input") as HTMLInputElement,
  CompletionDate: document.querySelector(
    "#completion_date"
  ) as HTMLInputElement,
  editBtn: document.querySelector("#editbit") as HTMLButtonElement,
  addbit: document.querySelector("#editbit") as HTMLButtonElement,
  markbtn: document.querySelector("#mark") as HTMLButtonElement,
};

export { Task, valueObject };
