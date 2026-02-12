let button = document.querySelectorAll(".button")

for (let i = 0; i < button.length, i++;){
    button[i].addEventListener("click", clickHere);
}

function clickHere(){
    alert("I have clicked ");
}