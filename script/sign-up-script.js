var emailInputUp = document.querySelector("#emailInputUp");

var passInputUp = document.querySelector("#passInputUp");
var passInputUpeye = document.querySelector(".passInputUpeye");


var rePassInputUp = document.querySelector("#rePassInputUp");
var rePassInputUpeye = document.querySelector(".rePassInputUpeye");


var signUpBtn = document.querySelector("#signUpBtn");
var isExist = document.querySelector("#isExist");
var isValid = document.querySelector("#isValid");
var isEmpty = document.querySelector("#isEmpty");
var passValid = document.querySelector("#passValid");
var rePass = document.querySelector("#rePass");
var eye = document.querySelector(".eye");

var usersList = [];


if (localStorage.getItem("usersList")) {
    usersList = JSON.parse(localStorage.getItem("usersList"))
}


// =================================================================

signUpBtn.addEventListener("click" , function () {
    if (existEmailValidation() && isValidEmail() && emptyEmailValidation() && PassValidation() && rePassValidation()) {
        addUser();
    }
})

function addUser() {

    var user = {
        email : emailInputUp.value ,
        password : passInputUp.value ,
    }
    usersList.push(user)
    saveToLocalStorage()
    window.open("/index.html" , "_self");
    
}

// =================================================================

emailInputUp.addEventListener("blur" , function () {
    existEmailValidation()
    isValidEmail()
    emptyEmailValidation()
})


function existEmailValidation() {
    var res = usersList.filter((a) => a.email === emailInputUp.value )
    if (res.length > 0 ) {
        isExist.classList.replace("d-none" , "d-flex")
        return false
    }else{
        isExist.classList.replace("d-flex" , "d-none")
        return true
    }
}

function isValidEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (regex.test(emailInputUp.value)) {
        isValid.classList.replace("d-flex" , "d-none")
    }else{
        isValid.classList.replace("d-none" , "d-flex")
    }

    return regex.test(emailInputUp.value);
}

function emptyEmailValidation() {
    if (emailInputUp.value == "") {
        isEmpty.classList.replace("d-none" , "d-flex")
        return false
    }else{
        isEmpty.classList.replace("d-flex" , "d-none")
        return true
    }
}

// =================================================================

passInputUp.addEventListener("blur" , function () {
    PassValidation()
})
rePassInputUp.addEventListener("blur" , function () {
    rePassValidation()
})

function PassValidation() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(passInputUp.value)) {
        passValid.classList.replace("d-flex" , "d-none")
    }else{
        passValid.classList.replace("d-none" , "d-flex")
    }

    return regex.test(passInputUp.value);
}

function rePassValidation() {
    if (rePassInputUp.value === passInputUp.value) {
        rePass.classList.replace("d-flex" , "d-none")
        return true
    }else{
        rePass.classList.replace("d-none" , "d-flex")
        return false
    }
}

// =================================================================

passInputUpeye.addEventListener("click" , function () {
    eyeShow()
})
function eyeShow() {
    if (passInputUp.getAttribute('type') === 'password') {
        passInputUp.setAttribute('type' , 'text');
        passInputUpeye.classList.replace("fa-eye" , "fa-eye-slash");
    }else{
        passInputUp.setAttribute('type' , 'password');
        passInputUpeye.classList.replace("fa-eye-slash" , "fa-eye");
    }
}

rePassInputUpeye.addEventListener("click" , function () {
    reEyeShow()
})
function reEyeShow() {
    if (rePassInputUp.getAttribute('type') === 'password') {
        rePassInputUp.setAttribute('type' , 'text');
        rePassInputUpeye.classList.replace("fa-eye" , "fa-eye-slash");
    }else{
        rePassInputUp.setAttribute('type' , 'password');
        rePassInputUpeye.classList.replace("fa-eye-slash" , "fa-eye");
    }
}

// =================================================================


function saveToLocalStorage() {
    localStorage.setItem("usersList" , JSON.stringify(usersList))
}
console.log(usersList);
