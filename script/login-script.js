
var emailInputIn = document.querySelector("#emailInputIn");
var passInputIn = document.querySelector("#passInputIn");
var passInputIneye = document.querySelector(".passInputIn");
var loginBtn = document.querySelector("#loginBtn");
var incorrect = document.querySelector("#incorrect");



loginBtn.addEventListener("click" , function () {
    userCheck(emailInputIn)
})

function userCheck(emailInputIn) {

    var emailRes = JSON.parse(localStorage.getItem("usersList")).filter((a) => a.email === emailInputIn.value && a.password === passInputIn.value);
    
    if (emailRes[0] !== undefined) {
        incorrect.classList.replace("d-flex" , "d-none");
        window.open("/pages/welcome.html" , "_self");
    }else{
        incorrect.classList.replace("d-none" , "d-flex");
    }

}

// =================================================================

passInputIneye.addEventListener("click" , function () {
    eyeShow()
})
function eyeShow() {
    if (passInputIn.getAttribute('type') === 'password') {
        passInputIn.setAttribute('type' , 'text');
        passInputIneye.classList.replace("fa-eye" , "fa-eye-slash");
    }else{
        passInputIn.setAttribute('type' , 'password');
        passInputIneye.classList.replace("fa-eye-slash" , "fa-eye");
    }
}

