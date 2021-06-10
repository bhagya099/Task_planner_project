// Validate Task Name, Description, AssignedTo, DueDate, Status. Values need to be more than 5 characters. 
//Declare Variables
const nameInput = document.querySelector('#name');
const assignedInput = document.querySelector('#assigned');
const dateInput = document.querySelector('#date');
const statusInput = document.querySelector('#status');
const submitButton = document.querySelector('#btnSub');
let errMessage = document.querySelector('#errMsgName');

//assign input to 
assignValues = (data) => {

//create errMessageFunction
showError = () => {
    console.log(nameInput.value.length);
    if (nameInput.value.length <= 5) {
        // console.log('Please enter a valid name more than 5 characters');
        errMessage.innerHTML = 'Please enter a valid name more than 5 characters';

    }

}

//create errMessageFunction

submitButton.addEventListener('click', assignValues);


// Check if the Task Name input value is more than 5 characters.

// Check if the Task Description input value is more than 5 characters.
// Check if the Assigned To value is more than 5 characters.
// Check if the Task Due Date input value is not empty.
// Check if the Task Status input value is not empty.
// Step 3: Showing errors to users