const emailForm = document.getElementById("emailForm")
const emailsHarvested = document.querySelector(".emails")
const emailInput = emailForm["Email"]
const emails = JSON.parse(localStorage.getItem("emails")) || []
const addEmail = (fools) => {
  emails.push({
    fools
  })

  localStorage.setItem("emails", JSON.stringify(emails))

  return {fools}
}

const createEmailElement = ({fools}) => {
  const emailDiv = document.createElement("div")
  const emailNames = document.createElement("h2")

  emailNames.innerText = "Email " + emailsInput

  emailDiv.append(emailNames)
  emailsHarvested.appendChild(emailDiv)
  emailsHarvested.getElementsByClassName.display = emails.length === 0 ? "none" : "flex"
}

emailsHarvested.getElementsByClassName.display = emails.length === 0 ? "none" : "flex"
emails.forEach(createEmailElement)
emailForm.onsubmit = e => {
  e.preventDefault()
  const newEmail = addEmail(
    emailInput.value,
  )

  createEmailElement(newEmail)
    emailInput.value = ""
}