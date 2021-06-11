const NewTask = new TaskManager();

const nameInput = document.querySelector('#name');
const assignedInput = document.querySelector('#assigned');
const dateInput = document.querySelector('#date');
const statusInput = document.querySelector('#status');
const description = document.querySelector('#description');
const submitButton = document.querySelector('#btnSub');
const displayTask = document.querySelector("#displayTask");

let err1 = false;
let err2 = false;
let err3 = false;
let err4 = false;
let err5 = false;

let inputsOkay = false;

//create errMessageFunction
showError = () => {
    let errMessageName = document.querySelector('#errMsgName');
    let errMessageAssign = document.querySelector('#errMsgAssign');
    let errMessageDate = document.querySelector('#errMsgDate');
    let errMessageDes = document.querySelector('#errMsgDes');
    let errMessageStatus = document.querySelector('#errMsgSelect');


    // input valid name
    if (nameInput.value.length <= 5 && nameInput.value.length > 0) {
        errMessageName.innerHTML = '*Please enter a name more than 5 characters';
        nameInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err1 = true;
    } else if (nameInput.value.length === 0) {
        nameInput.placeholder = '*Please enter a valid name';
        // nameInput.placeholder.setAttribute('style', 'color: #EC3A0E !important;');
        nameInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err1 = true;
    } else {
        errMessageName.innerHTML = "";
        nameInput.setAttribute('style', 'border: none !important;');
        err1 = false;
    }
    // input valid assign
    if (assignedInput.value.length <= 5) {
        errMessageAssign.innerHTML = '*Please enter a task name  more than 5 characters';
        err2 = true;
    } else {
        errMessageAssign.innerHTML = "";
        err2 = false;
    }
    // input valid description
    if (description.value.length <= 5) {
        errMessageDes.innerHTML = '*Please add a description';
        err3 = true;
    } else {
        errMessageDes.innerHTML = "";
        err3 = false;
    }
    // select the date
    if (dateInput.value) {
        errMessageDate.innerHTML = "";
        err4 = false;
    } else {
        errMessageDate.innerHTML = '*Please select the date';
        err4 = true;
    }
    // status
    if (statusInput.value >= 1) {
        statusInput.setAttribute('style', 'border: none !important;');
        err5 = false;
    } else {
        statusInput.setAttribute('style', 'border: #EC3A0E solid 3px !important;');
        err5 = true;
    }
    if (err1 || err2 || err3 || err4 || err5) {
        inputsOkay = false;
    } else {
        inputsOkay = true;
    }
    //call new card function
    console.log(inputsOkay);


    // use classes
    // NewTask.addTask(nameInput.value, description.value, assignedInput.value, dateInput.value, statusInput.value);
    // console.log(NewTask);
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


    // use classes
    NewTask.addTask(nameInput.value, description.value, assignedInput.value, dateInput.value, statusInput.value);
    console.log(NewTask);

    for (i in NewTask.tasks) {

        displayTask.innerHTML =
            `<ul class="list-group">
            <li class="card mb-2" style="width: 100%">
                 <div class="card-body">
                    <h5 class="card-title">${NewTask.tasks[i].task.name}</h5>
                </div>
                   <ul class="list-group list-group-flush">
                     <li class="list-group-item">${NewTask.tasks[i].task.description}</li>
                    <li class="list-group-item">${NewTask.tasks[i].task.assignedTo}</li>
                      <li class="list-group-item">${NewTask.tasks[i].task.dueDate}</li>
                      <li class="list-group-item">${NewTask.tasks[i].task.status}</li>
                   </ul>
            <div class="card-body">
              <button type="button " class="btn $btn-border-width:0 btn-success btn-sm">
              Done
             </button>
            <button type="button " class="btn btn-danger btn-sm">
             Delete
           </button>
        </div>
       </li></ul>`

    }

}
submitButton.addEventListener('click', showError);