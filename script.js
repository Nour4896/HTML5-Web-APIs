const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const usernameField = document.getElementById("username");
var savedName = document.getElementById("display-name");
const greeting = document.getElementById("greeting")

saveButton.addEventListener("click", saveName);
clearButton.addEventListener("click", clearName);

function changeGreeting() {
    var date = new Date();
    hours = date.getHours();

    if (hours >= 3 && hours < 12) {
        greeting.innerHTML = "Good Morning, User!"
    } else if (hours >= 12 && hours < 18) {
        greeting.innerHTML = "Good Afternoon, User!"
    } else {
        greeting.innerHTML = "Good Evening, User!"
    }
}

changeGreeting();

function updateP() {
    if (localStorage.getItem("name")) {
        savedName.innerHTML = "Your Name is " + localStorage.getItem("name");
    }
}

updateP();

function saveName() {
    localStorage.setItem("name", usernameField.value)
    if (usernameField.value) {
        savedName.innerHTML = "Your Name is " + localStorage.getItem("name");
    }
}

function clearName() {
    localStorage.removeItem("name");

    savedName.innerHTML = "Please Enter a Name";
}