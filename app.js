const emailForm = document.getElementById("emailForm")
const button = document.getElementById("btn")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const inputText = document.getElementById("email")
var emails = []
var emailInput
var i = 0

/* function saveData() {
  //* Get the data from the table
  var tableData = document.getElementById("myTable").innerHTML;

  //* Save the data to local storage
  localStorage.setItem("tableData", tableData);
} */


/* -------------------------------------------------------------------------- */
/*                 main function to add items to local storage                */
/* -------------------------------------------------------------------------- */

submit.addEventListener('click', function(event){
  //* Prevent submit from reloading the page and resetting 'i'
  event.preventDefault();

  //* Makes "emailValue" mean the value of the email input
  let emailInput = emailForm["Email"]
  let emailValue = emailInput.value;

  //* Checks if email input is empty
  if(emailValue === ""){
    console.log("failed")
    return
  }

  //* Checks if an email is valid
  if(emailVerification(emailValue) === false){
    return
  }

  //* Check if the value is already stored
  if(localStorageCheck(emailValue) === true){
    return
  }
  
  //* Add emailValue to the emails array  
  emails.push(emailValue);

  //* If it passes localStorageCheck then add value to local storage 
  localStorage.setItem("email " + i, emailValue);

  //* Console log the number in local storage and increment
  console.log(i)
  i++

  //* Erase text in input box now that it doesn't reload the page
  inputText.value = ""
});

//* Makes "Table Wipe" button clear local storage
clear.addEventListener('click', () =>{
  localStorage.clear()
})

/* -------------------------------------------------------------------------- */
/*                         functions for verification                         */
/* -------------------------------------------------------------------------- */

function localStorageCheck(value) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === value) {
      return true;
    }
  }
  return false;
}

function emailVerification(email){
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return regex.test(email)
}

/* -------------------------------------------------------------------------- */

