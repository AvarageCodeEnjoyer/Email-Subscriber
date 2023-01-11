const emailForm = document.getElementById("emailForm")
const button = document.getElementById("btn")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const inputText = document.getElementById("email")
var emailMembers = JSON.parse(localStorage.getItem("emailMembers")) || [];
let emailInput = emailForm["email"]
var i = 0
const addEmail = (emailInput) => {
  emailMembers.push(emailInput)
  localStorage.setItem("emailMembers", JSON.stringify(emailMembers));
  return {emailInput}
}


/* -------------------------------------------------------------------------- */
/*                 main function to add items to local storage                */
/* -------------------------------------------------------------------------- */

emailForm.onsubmit = e => {
  //* Prevent submit from reloading the page and resetting 'i'
  e.preventDefault();

  // const addEmail = addEmail(emailInput.value)
  
  //* Makes "emailInput" mean the value of the email input
  
  const newEmail = addEmail(emailInput.value);

  //* Checks if email input is empty
  if(newEmail === " "){
    alert("Input box empty")
    return 
  
  }

  //* Checks if an email is valid
  if(emailVerification(newEmail) === false){
    alert("FOLLOW REGEX \n /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-] \n {0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/")
    return
  }

  //* Check if the value is already stored
  if(localStorageCheck(newEmail) === true){
    alert("Email already in list")
    return
  }

  //* Console log the number in local storage and increment 'i'
  console.log(i)
  i++

  //* Erase text in input box now that it doesn't reload the page
  inputText.value = ""
}

//* Makes "Table Wipe" button clear local storage
  clear.addEventListener('click', () =>{
  localStorage.clear()
  emailMembers = []
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

