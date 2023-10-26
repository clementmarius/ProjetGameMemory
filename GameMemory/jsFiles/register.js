let inputPw = document.getElementById("password");
inputPw.addEventListener("input", passwordValidation);

let pwEasy = document.getElementById("pw_easy");
let pwMedium = document.getElementById("pw_medium");
let pwStrong = document.getElementById("pw_strong");
let textPwEasy = document.getElementById("text_pw_easy");
let textPwMedium = document.getElementById("text_pw_medium");
let textPwStrong = document.getElementById("text_pw_strong");


function passwordValidation() {
    const hasbiggerAndLowerCaseLetter = /[A-Za-z]/.test(inputPw.value);
    const hasSymbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(inputPw.value);
    const hasNumbers = /[0-9]/.test(inputPw.value);
    const hasSixCaracter = inputPw.value.length >= 6;
    let passwordError = document.getElementById("password-error");
    let check = document.querySelector("#errorPassword");


    if (hasbiggerAndLowerCaseLetter && hasSymbols && hasNumbers && hasSixCaracter) {
        check.src = "img/check.svg";
        passwordError.style.color = "green";
    } else {
        check.src = "img/error.svg";
        passwordError.style.color = "red";
    }

    if (inputPw.value.length >= 3) {
        document.querySelector(".weak").classList.remove("hidden");


    } else {
        document.querySelector(".weak").classList.add("hidden");

    }

    if (inputPw.value.length >= 6 && (hasSymbols || hasNumbers )) {
        document.querySelector(".medium").classList.remove("hidden");
    } else {
        document.querySelector(".medium").classList.add("hidden");

    }

    if (inputPw.value.length >= 9 && hasbiggerAndLowerCaseLetter && hasSymbols && hasNumbers) {
        document.querySelector(".strong").classList.remove("hidden");
    } else {
        document.querySelector(".strong").classList.add("hidden");

    }

}

let passwordInput = document.getElementById("password");
let passwordConfirmationInput = document.getElementById("password2");
let textError = document.getElementById("text-error");


function passwordConfirmation() {
    let passwordHasToBeConfirmed = passwordInput.value == passwordConfirmationInput.value;
    let check = document.querySelector("#errorConfirmPassword");

    if (passwordHasToBeConfirmed) {
        textError.innerText = "";
        check.src = "img/check.svg";
    } else {
        textError.innerText = " Passwords doesn't match.";
        check.src = "img/error.svg";
    }
}

passwordConfirmationInput.addEventListener("input", passwordConfirmation);


let userNameError = document.getElementById("user-name-error");
let inputName = document.getElementById("username");
inputName.addEventListener("input", userNameCreation);

function userNameCreation() {
    const hasthreeCaracter = inputName.value.length >= 3;
    let check = document.querySelector("#errorName");

    if (hasthreeCaracter) {
        userNameError.innerText = "";
        check.src = "img/check.svg";
    } else {
        userNameError.innerText = "User name must have 3 characters";
        check.src = "img/error.svg";
    }
}


let emailError = document.getElementById("email-error")
let inputEmail = document.getElementById("email");
inputEmail.addEventListener("input", emailValidation);

function emailValidation() {
    const hasEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputEmail.value);
    let check = document.querySelector("#errorEmail");

    if (hasEmailValid) {
        emailError.innerText = "";
        check.src = "img/check.svg";
    } else {
        emailError.innerText = "Email is not valid";
        check.src = "img/error.svg";
    }

}




