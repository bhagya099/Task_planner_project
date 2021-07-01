//Making an instance of the class
const NewTask = new TaskManager();

//Loading the task from local storage
NewTask.load();
NewTask.render();

//The variables
const nameInput = document.querySelector("#name");
const assignedInput = document.querySelector("#assigned");
const dateInput = document.querySelector("#date");
const statusInput = document.querySelector("#status");
const description = document.querySelector("#description");
const submitButton = document.querySelector("#btnSub");
const displayTask = document.querySelector("#displayTask");

//Error message variables
let err1 = false;
let err2 = false;
let err3 = false;
let err4 = false;

let inputsOkay = false;

//create errMessageFunction
checkFormInput = (event) => {
    let errMessageName = document.querySelector("#errMsgName");
    let errMessageAssign = document.querySelector("#errMsgAssign");
    let errMessageDate = document.querySelector("#errMsgDate");
    let errMessageDes = document.querySelector("#errMsgDes");

    event.preventDefault();

    // input valid task name
    let nameInputValue = nameInput.value.trim();

    if (nameInputValue.length < 5 || nameInputValue == "") {
        errMessageName.innerHTML =
            "*Please enter a task name more than 5 characters";
        nameInput.setAttribute("style", "border: #EC3A0E solid 3px !important;");
        err1 = true;
    } else if (nameInputValue.length === 0) {
        nameInput.placeholder = "*Please enter a task name";
        nameInput.setAttribute("style", "border: #EC3A0E solid 3px !important;");
        err1 = true;
    } else {
        errMessageName.innerHTML = "";
        nameInput.setAttribute("style", "border: none !important;");
        err1 = false;
    }

    // input valid assign
    let assignedInputValue = assignedInput.value.trim();
    if (assignedInputValue.length < 3 || assignedInputValue.length == "") {
        errMessageAssign.innerHTML = "*Please enter a name  more than 3 characters";
        assignedInput.setAttribute(
            "style",
            "border: #EC3A0E solid 3px !important;"
        );
        err2 = true;
    } else if (assignedInputValue.length === 0) {
        assignedInput.placeholder = "*Please assign a name";
        assignedInput.setAttribute(
            "style",
            "border: #EC3A0E solid 3px !important;"
        );
        err2 = true;
    } else {
        errMessageAssign.innerHTML = "";
        assignedInput.setAttribute("style", "border: none !important;");
        err2 = false;
    }

    // input valid description
    let descriptionValue = description.value.trim();
    if (descriptionValue.length < 5 || descriptionValue.length == "") {
        errMessageDes.innerHTML =
            "*Please add a description more than 5 characters";
        description.setAttribute("style", "border: #EC3A0E solid 3px !important;");
        err3 = true;
    } else if (descriptionValue.length == 0) {
        description.placeholder =
            "*Please add a description more than 5 characters";
        description.setAttribute("style", "border: #EC3A0E solid 3px !important;");
        err3 = true;
    } else {
        errMessageDes.innerHTML = "";
        description.setAttribute("style", "border: none !important;");
        err3 = false;
    }

    // select the date
    if (dateInput.value) {
        errMessageDate.innerHTML = "";
        dateInput.setAttribute("style", "border: none !important;");
        err4 = false;
    } else {
        errMessageDate.innerHTML = "*Please select the date";
        dateInput.setAttribute("style", "border: #EC3A0E solid 3px !important;");
        err4 = true;
    }

    //ensuring all inputs are error free
    if (err1 || err2 || err3 || err4) {
        inputsOkay = false;
       
    } else {
        inputsOkay = true;
       
    }

    // For clear the field
    const formReset = () => {
        nameInput.value = "";
        description.value = "";
        assignedInput.value = "";
        dateInput.value = "";
        statusInput.value = "To Do";
    };
    
    //calling the addTask method
    if (inputsOkay) {
        NewTask.addTask(
            nameInput.value,
            description.value,
            assignedInput.value,
            dateInput.value,
            statusInput.value
        );

        //Calling render, save and form reset
        NewTask.render();
        NewTask.save();
        formReset();
    }
};

function toggle() {
    const form = document.getElementById("collapseform");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }

//Submit Form Event Listener
submitButton.addEventListener("click", checkFormInput);

//the event listener for clicking on 'done' and 'delete' button on a task
displayTask.addEventListener("click", (event) => {
    if (event.target.classList.contains("done-button")) {
        //find the main parent element of the 'done' button
        let parentTask = event.target.parentElement.parentElement.parentElement;
        let taskId = Number(parentTask.dataset.idNumber);
        const task = NewTask.getTaskById(taskId);
        task.status = "Done";
        NewTask.save();
        NewTask.render();
    }
    //deleting task
    if (event.target.classList.contains("delete-button")) {
        let parentTask = event.target.parentElement.parentElement.parentElement;
        let taskId = Number(parentTask.dataset.idNumber);
        NewTask.deleteTask(taskId);
        NewTask.save();
        NewTask.render();
    }
});