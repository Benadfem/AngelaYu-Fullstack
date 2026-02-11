// document.querySelector(".set").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I just got clicked!");
// }

// using the concept of loop and anonimous function for the challenge 
// let's create a function using while loop
let i = 0;

let numberOfDrum = document.querySelectorAll(".drum").length;

// putting the while condition 
while (i < numberOfDrum){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        let drumSound = this.innerHTML;
        switch (drumSound) {
            case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();                
                break;
            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();                
                break;
            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
        
            default:
                console.log(this.innerHTML)
        }
    });
    i++;
}


// let audio = new Audio("./sounds/tom-1.mp3");
//         audio.play();
