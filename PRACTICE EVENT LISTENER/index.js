let button = document.querySelectorAll(".button");

// create a variable to hold the DOM for the h1
let h1 = document.querySelector("h1");

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function (){
        let buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "RED":
                h1.style.color = "red";
                document.querySelector(".red").style.color = "red";
                changeFont();
                break;

            case "BLUE":
                h1.style.color = "blue";
                changeFont();
                document.querySelector(".blue").style.color = "blue";
                break;

            case "YELLOW":
                h1.style.color = "yellow";
                document.querySelector(".yellow").style.color = "yellow";
                changeFont();
                break;

            case "PINK":
                h1.style.color = "pink";
                changeFont();
                document.querySelector(".pink").style.color = "pink";
                break;

            default:
                console.log("This is not acceptable ");
                break;
}
    });
}

// function that modifies the style for the button click
function changeFont(){
    h1.classList.add("height");
    // this gives delay to the actions 
    
     setTimeout(() => {
         h1.classList.remove("height");
             }, 1000);
}



