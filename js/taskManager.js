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

}