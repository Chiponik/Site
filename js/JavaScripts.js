var logIn = document.getElementById("login");
var register = document.getElementById("register");
var button = document.getElementById("btn");

function registration() {
    logIn.style.left = "-400px";
    button.style.width = "145px";
    register.style.left = "50px";
    button.style.left = "90px";
}

function login() {
    logIn.style.left = "50px";
    register.style.left = "450px";
    button.style.left = "0";
    button.style.width = "90px";

}