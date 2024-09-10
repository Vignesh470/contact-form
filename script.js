var form = document.getElementById("form");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var genQuery = document.getElementById("generalQuery");
var spReq = document.getElementById("supportReq");
var queryErr = document.querySelector(".query-type");
var message = document.getElementById("message");
var consent = document.getElementById("consent");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var validFirstName = validateFirstName();
    var validLastName = validateLastName();
    var validEmail = validateEmail();
    var queryTypeChecked = isQueryChecked();
    var messageFilled = isMessageFilled();
    var consentChecked = isConsentChecked();
    var inputsValidated = validFirstName && validLastName && validEmail && queryTypeChecked && messageFilled && consentChecked;
    
    if (inputsValidated) {
        submit();
        form.reset();
        setTimeout(function() {
            document.getElementById("submit-note").style.display = "none";
        }, 8000);
    }
})

function error(input, errMessage) {
    // input.parentElement.classList.add("err-msg");
    input.parentElement.querySelector(".error").innerText = errMessage;
}   

function success(input, scsMessage) {
    // input.parentElement.classList.add("err-msg");
    input.parentElement.querySelector(".error").innerText = scsMessage;
}

function validateFirstName() {
    if(firstName.value.trim() === "") {
        error(firstName, "This field is required");
    } else {
        success(firstName, "");
        return true;
    }
}

function validateLastName() {
    if(lastName.value.trim() === "") {
        error(lastName, "This field is required");
    } else {
        success(lastName, "");
        return true;
    }
}

function isEmailValid() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email.value.trim());
    return isValid;
}

function validateEmail() {
    if (email.value.trim() === "") {
        error(email, "This field is required");
    } else if (!isEmailValid()) {
        error(email, "Please enter a valid email address");
    } else {
        success(email, "");
        return true;
    }
}

function isQueryChecked() {
    if (genQuery.checked || spReq.checked) {
        document.querySelector(".queryError").innerText = "";
        return true;
    } else {
        // error(spReq, "Please select a query type");
        document.querySelector(".queryError").innerText = "Please select a query type";
    }
}

function isMessageFilled() {
    if (message.value.trim() === "") {
        error(message, "This field is required");
    } else {
        success(message, "");
        return true;
    }
}

function isConsentChecked() {
    if (consent.checked) {
        success(consent, "");
        return true;
    } else {
        error(consent, "To submit this form, please consent to being contacted");
    }
}

function submit() {
    document.getElementById("submit-note").style.display = "block";
    document.getElementById("submit-note").classList.add("submitted");
}