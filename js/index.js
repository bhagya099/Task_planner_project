//This is the Lisa2 version
const NewTask = new TaskManager();

const nameInput = document.querySelector("#name");
const assignedInput = document.querySelector("#assigned");
const dateInput = document.querySelector("#date");
const statusInput = document.querySelector("#status");
const description = document.querySelector("#description");
const submitButton = document.querySelector("#btnSub");
const displayTask = document.querySelector("#displayTask");

let err1 = false;
let err2 = false;
let err3 = false;
let err4 = false;
let err5 = false;

let inputsOkay = false;

//create errMessageFunction

checkFormInput = () => {
    let errMessageName = document.querySelector('#errMsgName');
    let errMessageAssign = document.querySelector('#errMsgAssign');
    let errMessageDate = document.querySelector('#errMsgDate');
    let errMessageDes = document.querySelector('#errMsgDes');


    // input valid name
    if (nameInput.value.length <= 5 && nameInput.value.length > 0) {
        errMessageName.innerHTML = '*Please enter a task name more than 5 characters';
        nameInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err1 = true;
    } else if (nameInput.value.length === 0) {
        nameInput.placeholder = '*Please enter a task name';
        // nameInput.placeholder.setAttribute('style', 'color: #EC3A0E !important;');
        nameInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err1 = true;
    } else {
        errMessageName.innerHTML = "";
        nameInput.setAttribute('style', 'border: none !important;');
        err1 = false;
    }
    // input valid assign
    if (assignedInput.value.length <= 5 && assignedInput.value.length > 0) {
        errMessageAssign.innerHTML = '*Please enter a name  more than 5 characters';
        assignedInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err2 = true;
    } else if (assignedInput.value.length === 0) {
        assignedInput.placeholder = '*Please assign a name';
        assignedInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err2 = true;
    } else {
        errMessageAssign.innerHTML = "";
        assignedInput.setAttribute('style', 'border: none !important;');
        err2 = false;
    }
    // input valid description
    if (description.value.length <= 5) {
        errMessageDes.innerHTML = '*Please add a description';
        description.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err3 = true;
    } else {
        errMessageDes.innerHTML = "";
        description.setAttribute('style', 'border: none !important;');
        err3 = false;
    }
    // select the date
    if (dateInput.value) {
        errMessageDate.innerHTML = "";
        dateInput.setAttribute('style', 'border: none !important;');
        err4 = false;
    } else {
        errMessageDate.innerHTML = '*Please select the date';
        dateInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
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
        }
        // use classes
    if (inputsOkay) {
        NewTask.addTask(nameInput.value, description.value, assignedInput.value, dateInput.value, statusInput.value);
        console.log(NewTask);
        NewTask.render();
        // const taskHtml = createTaskHtml(nameInput.value, description.value, assignedInput.value, dateInput.value, statusInput.value);

        // console.log(taskHtml);
        formReset();

    }

}

submitButton.addEventListener('click', checkFormInput);

