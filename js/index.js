const NewTask = new TaskManager();

// Validate Task Name, Description, AssignedTo, DueDate, Status. Values need to be more than 5 characters.
//Declare Variables
const nameInput = document.querySelector("#name");
const assignedInput = document.querySelector("#assigned");
const dateInput = document.querySelector("#date");
const statusInput = document.querySelector("#status");
const description = document.querySelector("#description");
const submitButton = document.querySelector("#btnSub");
const displayTask = document.querySelector("#displayTask");

//create errMessageFunction
showError = () => {
    let errMessageName = document.querySelector("#errMsgName");
    let errMessageAssign = document.querySelector("#errMsgAssign");
    let errMessageDate = document.querySelector("#errMsgDate");
    let errMessageDes = document.querySelector("#errMsgDes");
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



    // use classes
    NewTask.addTask(nameInput.value, description.value, assignedInput.value, dateInput.value, statusInput.value);
    console.log(NewTask);
    // displayTask.innerHTML = `<ul class="list-group">
    //                           <li class="card mb-2" style="width: 100%">
    //                            <div class="card-body">
    //                           <h5 class="card-title">${nameInput.value}</h5>
    // </div>
    // <ul class="list-group list-group-flush">
    //     <li class="list-group-item">${assignedInput.value}</li>
    //     <li class="list-group-item">${dateInput.value}</li>
    //     <li class="list-group-item">${statusInput.value}</li>
    // </ul>
    // <div class="card-body">
    //     <button type="button " class="btn $btn-border-width:0 btn-success btn-sm">
    //      Done
    //      </button>
    //     <button type="button " class="btn btn-danger btn-sm">
    //      Delete
    //    </button>
    // </div>
    //  </li>`

};
submitButton.addEventListener('click', showError);

// Check if the Task Name input value is more than 5 characters.

// Check if the Task Description input value is more than 5 characters.
// Check if the Assigned To value is more than 5 characters.
// Check if the Task Due Date input value is not empty.
// Check if the Task Status input value is not empty.
// Step 3: Showing errors to users