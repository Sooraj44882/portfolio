let input=document.getElementById("cmdInput");
let terminalScreen=document.querySelector(".screen");

input.addEventListener("keypress", function(event){

    if (event.key === "Enter") {
        let command = input.value.toLowerCase();

        terminalScreen.innerHTML = terminalScreen.innerHTML + "<p>visitor:~$ " + command + "</p>";

        if (command === "help") {
            terminalScreen.innerHTML += "<p>> Commands you can use: help, whoami, skills, clear</p>";
        } 
        else if (command === "whoami") {
            terminalScreen.innerHTML += "<p>> I am Nika. Exploring linux and cybersecurity.</p>";
        } 
        else if (command === "skills") {
            terminalScreen.innerHTML += "<p>> HTML, CSS, JS, C++, Linux</p>";
        } 
        else if (command === "clear") {
            terminalScreen.innerHTML = ""; 
        }
        else if(command == ""){
            
        }
        else {
            terminalScreen.innerHTML += "<p>> bash: " + command + ": command not found</p>";
        }

        terminalScreen.scrollTop = terminalScreen.scrollHeight;

        input.value = "";
    }
});