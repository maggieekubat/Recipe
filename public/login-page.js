const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.href = "/"
        localStorage.setItem("loggedIn", true)
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    console.log(localStorage.getItem("loggedIn"))
})
