'use strict'


let btn = document.getElementById("get-button");
let Btns = document.getElementById("start-button");
let Email = document.getElementById("email");
let EMAIL = document.getElementById("Email");
let Mail = document.querySelector(".check-mail");
let invalid = document.querySelector(".invalid");
let validRegrex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function getValidation(event) {
    event.preventDefault();

    if (!Email.value.match(validRegrex)){
        document.getElementById("email").style.borderColor = "red";
        Mail.classList.remove("mail");
        return false
    } else {
        document.getElementById("email").style.borderColor = "hsl(246, 25%, 77%)";
        Mail.classList.add("mail");
        return true
    }

}


btn.addEventListener('click', getValidation)


function getValidate(events) {
    events.preventDefault();
    let validRegrexs = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!EMAIL.value.match(validRegrexs)) {
        document.getElementById("Email").style.borderColor = "red";
        invalid.classList.remove("hidden")
        
    } else {
        document.getElementById("Email").style.borderColor = "hsl(246, 25%, 77%)";
        invalid.classList.add("hidden")
    }

}

Btns.addEventListener("click", getValidate); 

