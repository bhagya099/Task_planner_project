// create html
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    const html = `
   <ul class="card-wrapping d-flex list-group col" data-id-number="${id}">
        <li class="card mb-2" style="width: 100%">
            <div class="card-body">
               <h5 class="card-title">${name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                  <li class="list-group-item">${assignedTo}</li>
                  <li class="list-group-item">${dueDate}</li>
                  <li class="list-group-item
                    ${status == 'Done' ? 'done' : ''}
                    ${status == 'To Do' ? 'to-do' : ''}
                    ${status == 'In Progress' ? 'in-progress' : ''}
                    ${status == 'Review' ? 'review' : ''}
                    ">${status}</li>
                  <li class="list-group-item">${description}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn $btn-border-width:0 btn-success btn-sm done-button ${status.toLowerCase() == 'done' ? 'd-none' : ''}">
                 Done
                </button>
                <button type="button" class="btn btn-danger btn-sm delete-button">Delete</button>
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
        this.tasks.push(task);
    }

    //the method to render 
    render() {
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const renderTask = this.tasks[i];
            const date = new Date(renderTask.dueDate);

            // change the date format
            const formattedDate =
                date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

            const taskHtml = createTaskHtml(
                renderTask.id,
                renderTask.name,
                renderTask.description,
                renderTask.assignedTo,
                formattedDate,
                renderTask.status
            );
            tasksHtmlList.unshift(taskHtml);
        }

        const taskHtml = tasksHtmlList.join("\n");
        const taskList = document.querySelector("#displayTask");
        taskList.innerHTML = taskHtml;
    }

    //this method finds the id
    getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            let getTask = this.tasks[i];
            if (getTask.id === taskId) {
                foundTask = getTask;
            }
        }
        return foundTask;
    }

    //delete method
    deleteTask(taskId) {
            const newTasks = [];
            for (let i = 0; i < this.tasks.length; i++) {
                const task = this.tasks[i];
                if (task.id !== taskId) {
                    newTasks.push(task);
                }
            }
            this.tasks = newTasks;
        }

        //   For local storage
    save() {
            // create a json stringfy 
            const taskJson = JSON.stringify(this.tasks);
            // store json in local Storage
            localStorage.setItem('task', taskJson);
            // convert id into string
            const currentId = String(this.currentId);
            // store Id in localstorage
            localStorage.setItem('currentId', currentId);
        }

        //This method loads the saved data
    load() {
        if (localStorage.getItem('task')) {
            //to get the task from local storage
            const taskJson = localStorage.getItem('task');
            this.tasks = JSON.parse(taskJson);

        }
        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');
            this.currentId = Number(currentId);
        }
    }
}