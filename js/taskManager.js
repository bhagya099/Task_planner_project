class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this._tasks = [];

  }
  addTask(name, description, assignedTo, dueDate, status) {
    this.currentId++;
    this.name = name;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
    this._tasks.push(this.addTask)
  }
}





// if noErr = true submit form
// if noErr = false submit.preventDefault()