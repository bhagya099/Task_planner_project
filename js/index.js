const NewTask = new TaskManager();

NewTask.load();

NewTask.render();

const nameInput = document.querySelector("#name");
const assignedInput = document.querySelector("#assigned");
const dateInput = document.querySelector("#date");
const statusInput = document.querySelector("#status");
const description = document.querySelector("#description");
const submitButton = document.querySelector("#btnSub");
// const deleteButton = document.querySelector(".delete-button");
const displayTask = document.querySelector("#displayTask");

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

  // input valid name
  let nameInputValue = nameInput.value.trim();

  if (nameInputValue.length <= 5 || nameInputValue == "") {
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
  if (assignedInputValue.length <= 5 || assignedInputValue.length == "") {
    errMessageAssign.innerHTML = "*Please enter a name  more than 5 characters";
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
  if (descriptionValue.length <= 5 || descriptionValue.length == "") {
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
  // use classes
  if (inputsOkay) {
    NewTask.addTask(
      nameInput.value,
      description.value,
      assignedInput.value,
      dateInput.value,
      statusInput.value
    );
    NewTask.render();
    NewTask.save();
    formReset();
  }
};
submitButton.addEventListener("click", checkFormInput);
//the event listener for clicking on 'done' button on a task
displayTask.addEventListener("click", (event) => {
    if (event.target.classList.contains("done-button")) {
        //find the main parent element of the 'done' button
        let parentTask = event.target.parentElement.parentElement.parentElement;
        let taskId = Number(parentTask.dataset.idNumber);
        const task = NewTask.getTaskById(taskId);
        task.task.status = "Done";
        NewTask.render();
    }
    //event listener for deleting task
    if (event.target.classList.contains("delete-button")) {
        let parentTask = event.target.parentElement.parentElement.parentElement;
        console.log(parentTask);
        let taskId = Number(parentTask.dataset.idNumber);
        NewTask.deleteTask(taskId);
        NewTask.save();
        NewTask.render(); 
        console.log("I am clicking");
    }
});

