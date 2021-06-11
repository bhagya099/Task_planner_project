// create html
const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  const html = `
    <ul class="list-group">
        <li class="card mb-2" style="width: 100%">
            <div class="card-body">
               <h5 class="card-title">${name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                  <li class="list-group-item">${assignedTo}</li>
                  <li class="list-group-item">${dueDate}</li>
                  <li class="list-group-item">${status}</li>
                  <li class="list-group-item">${description}</li>
            </ul>
            <div class="card-body">
                <button type="button " class="btn $btn-border-width:0     btn-success btn-sm">
                 Done
                </button>
                <button type="button " class="btn btn-danger btn-sm">
                   Delete
                </button>
            </div>
        </li>
    </ul>`;
  return html;
};

class TaskManager {
  constructor(currentId = 0) {
    this.currentId = currentId;
    this.tasks = [];
  }
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push({ task });
  }

  render() {
    const tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const renderTask = this.tasks[i];

      const date = new Date(renderTask.task.dueDate);

            // change the date format
            const formattedDate =
                date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

            const taskHtml = createTaskHtml(renderTask.task.name, renderTask.task.description, renderTask.task.assignedTo, formattedDate, renderTask.task.status);
            tasksHtmlList.push(taskHtml);
        }
        const taskHtml = tasksHtmlList.join("\n");
        const taskList = document.querySelector("#displayTask");
        taskList.innerHTML = taskHtml;
    }
}

