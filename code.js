const form = document.getElementById("form")
const email = document.getElementById("email-iput")
const submitButton = document.getElementById("submit-btn")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const password = document.getElementById("password")


form.addEventListener("submit", event => {
    event.preventDefault();
    validateEmail(email.value)
    checkEmptyInput(firstName)
    checkEmptyInput(lastName)
    checkEmptyInput(password)
})


function validateEmail(mail) {
    if(mail.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById("error-msg-mail").innerHTML = ""
        document.getElementById("error-icon-mail").style.display = "none"
        email.style.border = "1px solid hsl(249, 10%, 90%)"
        return true
    }
    else {
        document.getElementById("error-msg-mail").style.display = "block"
        document.getElementById("error-msg-mail").innerHTML = "Look likes this is not an email"
        document.getElementById("error-icon-mail").style.display = "block"
        email.addEventListener("keydown", () => {
            email.style.color = "hsl(249, 10%, 26%)"
        })
        email.style.border = "1px solid hsl(0, 100%, 74%)"
        email.style.color = "hsl(0, 100%, 74%)"
        return false
    }
}

function checkEmptyInput(inputfield) {
    const input = inputfield.id
    if(inputfield.value === "" || null) {
        document.getElementById(`error-msg-${input}`).style.display = "block"
        document.getElementById(`${input}`).style.border = "1px solid hsl(0, 100%, 74%)"
        document.getElementById(`error-icon-${input}`).style.display = "block"
        return false
    }
    else {
        document.getElementById(`error-msg-${input}`).innerHTML = ""
        document.getElementById(`${input}`).style.border = "1px solid hsl(249, 10%, 90%)"
        document.getElementById(`error-icon-${input}`).style.display = "none"
        return true
    }
}