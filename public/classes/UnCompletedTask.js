export class UnCompletedTasks {
  constructor (task) {
    this.todo = [];
    this.todo.push (task);
    this.todo = [...this.todo, task];
    console.log ();
  }
}
