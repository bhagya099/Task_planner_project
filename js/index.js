// const NewTask = new TaskManager();

// Validate Task Name, Description, AssignedTo, DueDate, Status. Values need to be more than 5 characters.
//Declare Variables
const nameInput = document.querySelector("#name");
const assignedInput = document.querySelector("#assigned");
const dateInput = document.querySelector("#date");
const statusInput = document.querySelector("#status");
const description = document.querySelector("#description");
const submitButton = document.querySelector("#btnSub");

//create errMessageFunction
showError = () => {
  let errMessageName = document.querySelector("#errMsgName");
  let errMessageAssign = document.querySelector("#errMsgAssign");
  let errMessageDate = document.querySelector("#errMsgDate");
  let errMessageDes = document.querySelector("#errMsgDes");
  let errMessageStatus = document.querySelector("#errMsgSelect");
  // input valid name
  if (nameInput.value.length <= 5) {
    errMessageName.innerHTML =
      "Please enter a valid name more than 5 characters";
  } else {
    errMessageName.innerHTML = "";
  }
  // input valid assign
  if (assignedInput.value.length <= 5) {
    errMessageAssign.innerHTML =
      "Please enter a valid name more than 5 characters";
  } else {
    errMessageAssign.innerHTML = "";
  }
  // input valid date
  if (dateInput.value) {
    errMessageDate.innerHTML = "";
  } else {
    errMessageDate.innerHTML = "Please Select the date";
  }
  // input valid description
  if (description.value.length <= 5) {
    errMessageDes.innerHTML =
      "Please enter a valid name more than 5 characters";
  } else {
    errMessageDes.innerHTML = "";
  }
  // status
  if (statusInput.value) {
    errMessageStatus = "";
  } else {
    errMessageStatus.innerHTML = "Please select a status";
  }
};
submitButton.addEventListener("click", showError);

// Check if the Task Name input value is more than 5 characters.

// Check if the Task Description input value is more than 5 characters.
// Check if the Assigned To value is more than 5 characters.
// Check if the Task Due Date input value is not empty.
// Check if the Task Status input value is not empty.
// Step 3: Showing errors to users
